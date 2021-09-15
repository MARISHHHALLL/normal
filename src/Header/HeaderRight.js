import { Avatar } from '@material-ui/core'
import React from 'react'
const HeaderRight = (props) => {
  return (
    <>
      {props.list.map((person) => {
        const { id, Icon, name, active } = person
        return (
          <div
            key={id}
            className={
              active === true ? 'header__option active' : 'header__option'
            }
          >
            {<Icon className='Home__Icon' />}

            <h3>{name}</h3>
          </div>
        )
      })}
      <span className='header__avatar'>
        <Avatar
          className='avatar'
          src='https://randomuser.me/api/portraits/women/47.jpg'
        />
        <p>me</p>
      </span>
    </>
  )
}

export default HeaderRight
