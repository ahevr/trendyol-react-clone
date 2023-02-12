import Header from 'components/Header'
import Menu from 'components/Menu'
import Story from 'components/Story'
import TopHeader from 'components/TopHeader'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react'

const App = () => {
  return (
    <div>
      <TopHeader/>
      <Header/>
      <Menu/>
      <hr className='h-1 mt-5 ' />
      <Story />
    </div>
  )
}

export default App
