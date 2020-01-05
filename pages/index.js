import React from 'react'
import Link from 'next/link'

const Home = () => {
  

  return (
    <div>
      <p><Link ><a href="/scenes/startingSoon">Starting soon</a></Link></p>
      <p><Link ><a href="/scenes/beRightBack">Be Right Back</a></Link></p>
      <p><Link ><a href="/scenes/streamEnded">Stream Ended</a></Link></p>
      <p><Link ><a href="/scenes/justChat">Just Chat</a></Link></p>
    </div>
  )
}

export default Home
