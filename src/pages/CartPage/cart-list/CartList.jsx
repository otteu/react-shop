import React from 'react'
import styles from './CartList.module.scss'
import { useAppSelector } from '../../../hooks/redux'
import CartItem from './cart-item/CartItem'

const CartList = () => {

  const { products } = useAppSelector((state) => state.cartSlice);
  console.log(`CartList: ${products}`)

  return (
    <div className={styles.cart_list}>
      {
        products.map((product) => (
          <CartItem 
            key={product.id}
            item={product}
          />
          )
        )
      }
    </div>
  )
}

export default CartList