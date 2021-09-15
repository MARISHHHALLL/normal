import { Avatar } from '@material-ui/core'
import React from 'react'

const LeftContent = () => {
  const recentItem = (topicId) => {
    return (
      <div className='bottomContent__Item'>
        <span className='Item__hash'>#</span>
        <p>{topicId}</p>
      </div>
    )
  }
  return (
    <div className='left__global'>
      <div className='left__topContent'>
        <img
          src='https://p4.wallpaperbetter.com/wallpaper/414/160/33/mac-os-x-os-x-big-sur-hd-wallpaper-preview.jpg'
          alt=''
        />
        <Avatar
          className='left__logo'
          src='https://randomuser.me/api/portraits/women/47.jpg'
        />
        <h3>Katy Dimples</h3>
        <p>example@gmail.com</p>
      </div>
      <div className='left__topStats'>
        <span className='stat'>
          <p>who viewed you</p>
          <span>{Math.floor(1 + Math.random() * (1, 10000))}</span>
        </span>
        <span className='stat'>
          <p>viewes on post</p>
          <span>{Math.floor(1 + Math.random() * (1, 10000))}</span>
        </span>
      </div>
      <div className='left__bottomContent'>
        <p>recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  )
}

export default LeftContent
