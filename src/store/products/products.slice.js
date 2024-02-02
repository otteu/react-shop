import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 외부 Network 요청에 대해서는 createAsyncThunk를 사용 
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category ,thunkAPI) => {
    console.log(thunkAPI);
    try {
      let response;
      if(category) {
        response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
      } else {
        response = await axios.get("https://fakestoreapi.com/products")  
      }
      console.log("response data : ", response)
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Error loading products")
    }
  }
)

const initialState = {
  products: [],
  isLoading: false,
  error: "",
}

export const productsSlice = createSlice({  
  name: 'products',
  initialState,
  reducers: {},
  // 외부 요청으로 들오으는 상태 값을 통해 상태를 변경 하고자 할때
  extraReducers: (builder) => {
    builder
    // 가져오는 중
    .addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    })
    // 정상적으로 가져 왔을 때 
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
  }

})
// reducer 내부 action은 쓰기 편하게 export 시켜주자 
export default productsSlice.reducer;