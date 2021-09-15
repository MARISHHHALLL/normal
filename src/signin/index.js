import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import './sign.css'
import { Button } from '@mui/material'
import { RiLoginCircleLine } from 'react-icons/ri'
import firebase from 'firebase'
import { db } from './../config/firebase.js'
const Index = () => {
  const [nameIn, setNameIn] = useState('')
  const [lastIn, setLastIn] = useState('')
  const [userIn, setUserIn] = useState('')
  const [emailIn, setEmailIn] = useState('')
  const [passIn, setPassIn] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (emailIn) {
      db.collection('information').add({
        id: new Date().getTime().toString(),
        FirstName: nameIn,
        LastName: lastIn,
        UserName: userIn,
        Email: emailIn,
        Password: passIn,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      setNameIn('')
      setLastIn('')
      setUserIn('')
      setEmailIn('')
      setPassIn('')
    } else {
      alert('complete your information')
    }
  }
  return (
    <div className='sign__container'>
      <header className='sign__header'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png'
          alt='img'
          style={{ objectFit: 'contain', height: 50 }}
        />
      </header>
      <form className='sign__form'>
        <div className='two__inputs'>
          <TextField
            sx={{ width: '12rem' }}
            id='demo-helper-text-misaligned'
            label='First Name'
            size='medium'
            value={nameIn}
            onChange={(e) => setNameIn(e.target.value)}
          />
          <TextField
            sx={{ width: '12rem' }}
            id='demo-helper-text-misaligned'
            label='Last Name'
            size='medium'
            value={lastIn}
            onChange={(e) => setLastIn(e.target.value)}
          />
        </div>
        <div className='middle__inputs'>
          <TextField
            sx={{ width: '24.7rem' }}
            id='demo-helper-text-misaligned'
            label='Username'
            size='medium'
            value={userIn}
            onChange={(e) => setUserIn(e.target.value)}
          />
          <TextField
            sx={{ width: '24.7rem' }}
            id='demo-helper-text-misaligned'
            label='Email Address'
            size='medium'
            value={emailIn}
            onChange={(e) => setEmailIn(e.target.value)}
          />
          <TextField
            sx={{ width: '24.7rem' }}
            label='password'
            size='medium'
            type='password'
            value={passIn}
            onChange={(e) => setPassIn(e.target.value)}
          />
        </div>
        <span className='btn__sign'>
          <Button
            type='submit'
            onClick={handleSubmit}
            variant='outlined'
            endIcon={<RiLoginCircleLine />}
            sx={{ height: '3rem' }}
          >
            Sign in
          </Button>
        </span>
      </form>
    </div>
  )
}

export default Index
