import React from 'react'
import QuoraBox from './QuoraBox'
import './css/Feed.css'
import Post from './Post'
// import Widget from './Widget'

function Feed() {
  return (
    <div className='feed'>
      <QuoraBox/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feed