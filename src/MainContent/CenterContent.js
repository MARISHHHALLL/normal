import React, { useEffect, useState } from 'react'
import CenterData from './CenterData'
import { db } from './../config/firebase.js'
import { Avatar } from '@material-ui/core'
import firebase from 'firebase'
import { RiEditFill } from 'react-icons/ri'
import { RiThumbUpLine } from 'react-icons/ri'
import { RiChat1Line } from 'react-icons/ri'
import { RiShareLine } from 'react-icons/ri'
import { RiSendPlane2Line } from 'react-icons/ri'
const CenterContent = () => {
  const [postInput, setPostInput] = useState('')
  const [posts, setPosts] = useState([])
  const [socials, setSocials] = useState(CenterData)
  const [media, setMedia] = useState(false)
  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        return setPosts(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            }
          })
        )
      })
  }, [])
  const sendPost = (e) => {
    e.preventDefault()
    db.collection('posts').add({
      id: new Date().getTime().toString(),
      name: 'MARISHHHALLL',
      descreption: 'this is a test',
      message: postInput,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setPostInput('')
  }

  return (
    <div className='center__global'>
      <div className='center__post'>
        <div className='input__posts'>
          <RiEditFill style={{ margin: '5px', fontSize: 20 }} />
          <form>
            <input
              type='text'
              placeholder="what's on your mind ?"
              value={postInput}
              onChange={(e) => setPostInput(e.target.value)}
            />
            <button onClick={sendPost} type='submit'>
              send
            </button>
          </form>
        </div>
        <div className='socials__posts'>
          {socials.map((social) => {
            const { id, title, color, Icon, lien } = social
            return (
              <a href={lien} key={id} className='socials'>
                <Icon style={{ color: color }} />
                <h3>{title}</h3>
              </a>
            )
          })}
        </div>
      </div>
      <div className='feed__section'>
        {posts.map((post) => {
          const { id, name, descreption, message } = post.data
          return (
            <div key={id} className='feed'>
              <div className='feed__header'>
                <Avatar />
                <span className='feed__info'>
                  <span>{name}</span>
                  <p>{descreption}</p>
                </span>
              </div>
              <h3>{message}</h3>
              <div className='feed__buttons'>
                <span className='btns'>
                  <RiThumbUpLine style={{ fontSize: 20 }} />
                  <h4>Like</h4>
                </span>
                <span className='btns'>
                  <RiChat1Line style={{ fontSize: 20 }} />
                  <h4>Comment</h4>
                </span>
                <span className='btns'>
                  <RiShareLine style={{ fontSize: 20 }} />
                  <h4>Share</h4>
                </span>
                <span className='btns'>
                  <RiSendPlane2Line style={{ fontSize: 20 }} />
                  <h4>Send</h4>
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CenterContent
