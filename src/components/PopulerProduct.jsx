import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import Slider from "react-slick";

const PopulerProduct = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };
    return (
        <div className='mt-5 bg-orange-50 border border-orange-100 rounded h-[370px] px-5 my-9'>
            <h2 className='mt-5 font-semibold'>Öne Çıkanlar</h2>

            {/* <div className="grid grid-cols-5 gap-4">
                <div className="relative flex flex-col text-center items-center h-[290px]  mt-2 bg-white rounded-xl border border-orange-100">
                    <img width={90} src="https://cdn.dsmcdn.com/ty660/product/media/images/20221224/11/245881541/431450534/1/1_org.jpg" 
                    alt=""
                    className='mt-5' />
                    <div className="flex flex-col">
                        <p className='text-sm p-2' ><span className='font-bold'>Xiaomi</span> Mi TV Stick 4K Ultra HD Dolby Chromecast Android TV Media Player</p>
                        <p className='font-bold text-orange-500'>1.029 TL</p>
                    </div>
                    <span className='absolute top-2 right-2 cursor-pointer mt-1 hover:text-orange-600'>
                        <AiOutlineHeart size={25} />
                    </span>
                    <span className='absolute top-2 left-2 cursor-pointer mt-1 hover:text-orange-600'>
                        <img width={35} src="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="" />
                    </span>
                </div>
            </div> */}


            <Slider {...settings}>
                    <div className="relative flex flex-col text-center items-center h-[290px] px-3 gap-4 bg-white rounded-xl border border-orange-100">
                        <img width={90} src="https://cdn.dsmcdn.com/ty660/product/media/images/20221224/11/245881541/431450534/1/1_org.jpg"
                            alt=""
                            className='mt-5' />
                        <div className="flex flex-col">
                            <p className='text-sm p-2' ><span className='font-bold'>Xiaomi</span> Mi TV Stick 4K Ultra HD Dolby Chromecast Android TV Media Player</p>
                            <p className='font-bold text-orange-500'>1.029 TL</p>
                        </div>
                        <span className='absolute top-3 right-3 cursor-pointer mt-1 hover:text-orange-600'>
                            <AiOutlineHeart size={25} />
                        </span>
                        <span className='absolute top-3 left-3 cursor-pointer mt-1 hover:text-orange-600'>
                            <img width={35} src="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="" />
                        </span>
                    </div>
                    <div className="relative flex flex-col text-center items-center h-[290px] px-3 gap-4 bg-white rounded-xl border border-orange-100">
                        <img width={90} src="https://cdn.dsmcdn.com/ty660/product/media/images/20221224/11/245881541/431450534/1/1_org.jpg"
                            alt=""
                            className='mt-5' />
                        <div className="flex flex-col">
                            <p className='text-sm p-2' ><span className='font-bold'>Xiaomi</span> Mi TV Stick 4K Ultra HD Dolby Chromecast Android TV Media Player</p>
                            <p className='font-bold text-orange-500'>1.029 TL</p>
                        </div>
                        <span className='absolute top-2 right-2 cursor-pointer mt-1 hover:text-orange-600'>
                            <AiOutlineHeart size={25} />
                        </span>
                        <span className='absolute top-2 left-2 cursor-pointer mt-1 hover:text-orange-600'>
                            <img width={35} src="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="" />
                        </span>
                    </div>
                    <div className="relative flex flex-col text-center items-center h-[290px] px-3 gap-4 bg-white rounded-xl border border-orange-100">
                        <img width={90} src="https://cdn.dsmcdn.com/ty660/product/media/images/20221224/11/245881541/431450534/1/1_org.jpg"
                            alt=""
                            className='mt-5' />
                        <div className="flex flex-col">
                            <p className='text-sm p-2' ><span className='font-bold'>Xiaomi</span> Mi TV Stick 4K Ultra HD Dolby Chromecast Android TV Media Player</p>
                            <p className='font-bold text-orange-500'>1.029 TL</p>
                        </div>
                        <span className='absolute top-2 right-2 cursor-pointer mt-1 hover:text-orange-600'>
                            <AiOutlineHeart size={25} />
                        </span>
                        <span className='absolute top-2 left-2 cursor-pointer mt-1 hover:text-orange-600'>
                            <img width={35} src="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="" />
                        </span>
                    </div>
                    <div className="relative flex flex-col text-center items-center h-[290px] px-3 gap-4 bg-white rounded-xl border border-orange-100">
                        <img width={90} src="https://cdn.dsmcdn.com/ty660/product/media/images/20221224/11/245881541/431450534/1/1_org.jpg"
                            alt=""
                            className='mt-5' />
                        <div className="flex flex-col">
                            <p className='text-sm p-2' ><span className='font-bold'>Xiaomi</span> Mi TV Stick 4K Ultra HD Dolby Chromecast Android TV Media Player</p>
                            <p className='font-bold text-orange-500'>1.029 TL</p>
                        </div>
                        <span className='absolute top-2 right-2 cursor-pointer mt-1 hover:text-orange-600'>
                            <AiOutlineHeart size={25} />
                        </span>
                        <span className='absolute top-2 left-2 cursor-pointer mt-1 hover:text-orange-600'>
                            <img width={35} src="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="" />
                        </span>
                    </div>
                    <div className="relative flex flex-col text-center items-center h-[290px] px-3 gap-4 bg-white rounded-xl border border-orange-100">
                        <img width={90} src="https://cdn.dsmcdn.com/ty660/product/media/images/20221224/11/245881541/431450534/1/1_org.jpg"
                            alt=""
                            className='mt-5' />
                        <div className="flex flex-col">
                            <p className='text-sm p-2' ><span className='font-bold'>Xiaomi</span> Mi TV Stick 4K Ultra HD Dolby Chromecast Android TV Media Player</p>
                            <p className='font-bold text-orange-500'>1.029 TL</p>
                        </div>
                        <span className='absolute top-2 right-2 cursor-pointer mt-1 hover:text-orange-600'>
                            <AiOutlineHeart size={25} />
                        </span>
                        <span className='absolute top-2 left-2 cursor-pointer mt-1 hover:text-orange-600'>
                            <img width={35} src="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="" />
                        </span>
                    </div>
                    <div className="relative flex flex-col text-center items-center h-[290px] px-3 gap-4 bg-white rounded-xl border border-orange-100">
                        <img width={90} src="https://cdn.dsmcdn.com/ty660/product/media/images/20221224/11/245881541/431450534/1/1_org.jpg"
                            alt=""
                            className='mt-5' />
                        <div className="flex flex-col">
                            <p className='text-sm p-2' ><span className='font-bold'>Xiaomi</span> Mi TV Stick 4K Ultra HD Dolby Chromecast Android TV Media Player</p>
                            <p className='font-bold text-orange-500'>1.029 TL</p>
                        </div>
                        <span className='absolute top-2 right-2 cursor-pointer mt-1 hover:text-orange-600'>
                            <AiOutlineHeart size={25} />
                        </span>
                        <span className='absolute top-2 left-2 cursor-pointer mt-1 hover:text-orange-600'>
                            <img width={35} src="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="" />
                        </span>
                    </div>
            </Slider>





        </div>
    )
}

export default PopulerProduct
