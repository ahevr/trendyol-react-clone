import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer  from './Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Menu />
            <div className='container mx-auto'>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
