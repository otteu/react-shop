import React from 'react'
import styles from './CartItem.module.scss'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../../hooks/redux'
import { deleteFromCart, incrementProduct, decrementProduct } from '../../../../store/cart/cart.slice'
import { AiOutlineDelete } from 'react-icons/ai'

const CartItem = ({ item }) => {

  console.log("CartItem : " + item)
  const dispatch = useAppDispatch()

  // 장바구니 아이템 삭제
  const deleteProduct = () => {
    dispatch(deleteFromCart(item.id))
  }

  // 갯수 증가 
  const incrementCount = () => {
    dispatch(incrementProduct(item.id))
  }
  // 감소 
  const decrementCount = () => {
    dispatch(decrementProduct(item.id))
  }

  return (
    <div className={styles.cart_item}>
      <Link to={`/card/${item.id}`}>
        <img src={item.image} alt="product card" />
      </Link>
      <div className={styles.cart_description}>
        <h3>{item.category}</h3>
        <h2>{item.title}</h2>
        <span>
            {item.price} x {item.quantity} = $ {item.total.toFixed(2)}
        </span>
      </div>

      <div className={styles.cart_count}>
        <div>
          <button 
            disabled={item.quentity === 1}
            onClick={decrementCount}            
          >
            -
          </button>
          <button 
            disabled={item.quentity === 10}
            onClick={incrementCount}            
          >
            +
          </button>
        </div>
      </div>
      <button
        className={styles.cart_delete}
        onClick={deleteProduct}        
      >
        <AiOutlineDelete />
      </button>
    </div>    
  )
}

export default CartItem