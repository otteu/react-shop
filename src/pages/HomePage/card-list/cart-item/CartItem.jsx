import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CardItem.module.scss'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { addToCart } from '../../../../store/cart/cart.slice'

const CartItem = ({ item }) => {

  const { products } =  useAppSelector(state => state.cartSlice)
  const productsMatching = products.some((product) => product.id === item.id);
  const dispatch = useAppDispatch();  

  const addItemToCart = () => {
    dispatch(addToCart(item));
  }

  return (
    <li className={styles.card_item}>
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          width={"80%"}
          height={"200px"}
          alt='product card'
        />
      </Link>

      <h5>{item.title.substring(0,15)}...</h5>

      <div>
        <button          
          disabled={productsMatching}
          onClick={() => 
            // console.log("장바구니 클릭")
            !productsMatching && addItemToCart()
          }
        >
          {productsMatching ? "장바구니에 담긴 제품": "장바구니에 담기"}
        </button>
        <p>${item.price}</p>
      </div>

    </li>
  )
}

export default CartItem