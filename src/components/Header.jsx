import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { SlBasket } from 'react-icons/sl';



const Header = () => {
    return (
        <div className='header'>
            <div className="flex justify-between mt-4 items-center">
                <img src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" width={150} alt="" />
                <div className='relative'>
                    <form action="">
                        <input 
                        type="text" 
                        name='' 
                        placeholder='Aradığınız ürün,kategori veya markayı yazınız' 
                        className='px-3 py-2 text-sm placeholder-gray-500 text-black rounded-lg bg-gray-200
                        w-[700px] h-10 border border-gray-100 focus:border-orange-500 focus:outline-none focus:shadow-lg'/>
                        <span className='absolute top-3 right-5'> <AiOutlineSearch size={20}  className="text-orange-500 text-bold cursor-pointer" /> </span>
                    </form>
                </div>
                <div className='flex gap-6'>
                    <a href="." className='text-xs flex gap-1 items-center text-black text-bold hover:text-orange-500'> <CiUser size={20} />  Hesabım</a>
                    <a href="." className='text-xs flex gap-1 items-center text-black text-bold hover:text-orange-500'> <MdOutlineFavoriteBorder size={20} />  Favoriler</a>
                    <a href="." className='text-xs flex gap-1 items-center text-black text-bold hover:text-orange-500'> <SlBasket size={20} />  Sepetim</a>
                </div>
            </div>

        </div>
    )
}

export default Header
