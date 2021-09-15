import React from 'react'
import CenterContent from './CenterContent'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
import './main.css'

const MainContent = () => {
  return (
    <div className='centring__all'>
      <div className='mainContent'>
        <LeftContent />
        <CenterContent />
        <RightContent />
      </div>
    </div>
  )
}

export default MainContent
