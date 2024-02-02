import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProduct } from '../../store/products/product.slice';
import styles from './DetailPage.module.scss'
import Loader from '../../components/loader/Loader';
import { addToCart } from '../../store/cart/cart.slice';

const DetailPage = () => {
  // https://fakestoreapi.com/products/${id}
  // @PathValue(name = id)
  const { id } = useParams();
  // String 형변환 
  const productId = Number(id);
  // 저장소 함수 가져다 오는 애  
  const dispatch = useAppDispatch()
  // 대이터 가져오기 
  const { prodcut, isLoading } = useAppSelector((state) => state.productSlice);
  console.log(`product detail id: ${id} :  ${prodcut}`)
  const { products } = useAppSelector((state) => state.cartSlice);
  // 장바구니에 존재 하는가 여부 확인 
  const productMatching = products.some((cartProduct) =>
    cartProduct.id === prodcut.id
  ) 

  const addItemToCart = () => {
    console.log(`prodcut add : ${prodcut}, ${productMatching}`)
    dispatch(addToCart(prodcut));
  }

  useEffect(() => {
    dispatch(fetchProduct(productId));
    console.log(`prodcut add : ${prodcut}, ${productMatching}`)
  },[productId])

  return (
    <div className='page'>
      {isLoading ? (
        <Loader />
      ):
        <div>
          <div className={styles.card_wrapper}>
            <img src={prodcut.image} alt='product card'/>
          </div>
          <div className={styles.card_description}>
            <h3>{prodcut.category}</h3>
            <h1>{prodcut.title}</h1>

            <h4>$ {prodcut.price}</h4>
            <p>{prodcut.description}</p>
            <div>
              <button
                disabled={productMatching}
                onClick={() => !productMatching && addItemToCart()}
              >
                {productMatching 
                  ? "장바구니에 감긴 제품"
                  : "장바구니에 담기"
                }            
              </button>
              <Link to="/cart">장바구니로 이동</Link>
            </div>
          </div>
        </div>
      }      
    </div>
  )
}

export default DetailPage;