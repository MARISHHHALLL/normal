import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { RiSearch2Line } from 'react-icons/ri'

const HeaderLeft = () => {
  return (
    <>
      <img
        className='header__logo'
        src='https://image.flaticon.com/icons/png/512/174/174857.png'
        alt=''
      />
      <span className='input__group'>
        <RiSearch2Line
          style={{
            marginRight: '10px',
            marginLeft: '10px',
            fontSize: 20,
            color: 'gray',
          }}
        />
        <input id='input' type='text' name='' placeholder='search' />
      </span>
    </>
  )
}

export default HeaderLeft
