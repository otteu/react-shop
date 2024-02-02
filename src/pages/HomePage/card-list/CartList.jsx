import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { fetchProducts } from '../../../store/products/products.slice'
import styles from './CardList.module.scss'
import CartItem from './cart-item/CartItem'
import CardSkeleton from './card-skeleton/CardSkeleton'

const CartList = () => {

  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector(state => state.productsSlice);
  const category = useAppSelector(state => state.categoriesSlice);

  useEffect(() => {
    dispatch(fetchProducts(category?.toLowerCase()));
  }, [category])

  if(isLoading) return <CardSkeleton />

  return (
    <ul className={styles.card_list}>
      {products.map(product => <CartItem 
            key={product.id}
            item={product}
          />
        )} 
    </ul>
  )
}

export default CartList