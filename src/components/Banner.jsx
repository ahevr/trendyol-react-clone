import React from 'react'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='flex gap-5'>
                <button className='h-16 w-full rounded-lg bg-gradient-to-r text-white text-bold from-green-600 to-yellow-400'>Sepete En Çok Eklenenler</button>
                <button className='h-16 w-full rounded-lg bg-gradient-to-r text-white text-bold from-purple-600 to-blue-600'>En Çok Öne Çıkanlar</button>
                <button className='h-16 w-full rounded-lg bg-gradient-to-r text-white text-bold from-orange-600 to-red-400'>Flaş İndirimler</button>
            </div>

            <div className="flex justify-between mt-5">
                <a href="." className='group'>
                    <img className='rounded-lg group-hover:scale-105 duration-500' width={420} src="https://cdn.dsmcdn.com/ty718/pimWidgetApi/mobile_20230206085146_SBCoksatanlar.jpg" alt="" />
                </a>
                <a href="." className='group'>
                    <img className='rounded-lg group-hover:scale-105 duration-500' width={420} src="https://cdn.dsmcdn.com/ty722/pimWidgetApi/mobile_20230207123955_inditexbanner0601231.jpg" alt="" />
                </a>
                <a href="." className='group'>
                    <img className='rounded-lg group-hover:scale-105 duration-500' width={420} src="https://cdn.dsmcdn.com/ty712/pimWidgetApi/mobile_20230203054539_2299805KadinMobile202301201401.jpg" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Banner
