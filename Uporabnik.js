// Libraries
import React from 'react'

// CSS
import '../components.css'

// Components
import Paragraph from '../components/Paragraph'

const Home = () => {
  return (
      <div className='body'>
        <h1>Uporabnik</h1>
        <Paragraph>Uporabnik pogled.</Paragraph>
        <img src={require('../media/logo.png')} alt='logo'/>
      </div>
  )
}

export default Home