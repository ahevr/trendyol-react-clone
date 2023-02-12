import React from 'react'

const Banner = () => {
    return (
        <div className='container mx-auto flex gap-5'>
            <button className='h-16 w-full rounded-lg bg-gradient-to-r text-white text-bold from-green-600 to-yellow-400'>Sepete En Çok Eklenenler</button>
            <button className='h-16 w-full rounded-lg bg-gradient-to-r text-white text-bold from-purple-600 to-blue-600'>En Çok Öne Çıkanlar</button>
            <button className='h-16 w-full rounded-lg bg-gradient-to-r text-white text-bold from-orange-600 to-red-400'>Flaş İndirimler</button>
        </div>
    )
}

export default Banner
