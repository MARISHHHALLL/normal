import React, { useState } from 'react'
import HeaderLeft from './headerLeft'
import HeaderRight from './HeaderRight'
import Data from './data'
import './header.css'
const Header = () => {
  const [data, setData] = useState(Data)
  return (
    <div className='header__content'>
      <div className='header__left'>
        <HeaderLeft />
      </div>
      <div className='header__right'>
        <HeaderRight list={data} />
      </div>
    </div>
  )
}
export default Header
