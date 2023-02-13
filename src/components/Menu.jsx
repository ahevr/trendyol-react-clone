import React from 'react'
import {Routes,Route,Link,NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className='menu'>
            <div className='flex uppercase text-sm gap-6 text-center items-center justify-center mt-3'>
                <a href="." className='text-black hover:text-orange-500 duration-300 font-openSans'>kadın</a>
                <a href="." className='text-black hover:text-orange-500 duration-300 font-openSans'>erkek</a>
                <a href="." className='text-black hover:text-orange-500 duration-300 font-openSans'>anne & çocuk</a>
                <a href="." className='text-black hover:text-orange-500 duration-300 font-openSans'>ev & mobilya</a>
                <a href="." className='text-black hover:text-orange-500 duration-300 font-openSans'>süpermarket</a>
                <a href="." className='text-black hover:text-orange-500 duration-300 font-openSans'>ayakkabı & çanta</a>
                <a href="." className='text-black hover:text-orange-500 duration-300 font-openSans'>elektronik</a>
                <a href="." className='text-black hover:text-orange-500 duration-300 font-openSans'>spor & outdoor</a>
                <a href="." className='text-black hover:text-orange-500 duration-300 font-openSans'>çok satanlar <span className='bg-red-500 text-white text-xs p-1 rounded'>yeni</span></a>
                <a href="." className='text-black hover:text-orange-500 duration-300 font-openSans'>flaş indirimler <span className='bg-red-500 text-white text-xs p-1 rounded'>yeni</span></a>
            </div>
        </div>
    )
}

export default Menu
