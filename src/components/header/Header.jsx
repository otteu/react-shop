import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import Nav from './nav/Nav'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.header_wrapper}>

          {/* Logo 클릭시 HomePage 이동 */}
          <div className={styles.header_logo}>            
            <Link to={"/"}>
              <h2>Shop</h2>
            </Link>
          </div>
          {/* 네이게이션 바 LoginPage 이동 */}
          <Nav />
          
        </div>
      </div>
    </div>
  )
}

export default Header