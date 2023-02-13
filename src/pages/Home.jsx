import React from 'react';
import Layout from 'components/Layout'
import TopHeader from 'components/TopHeader'
import Header from 'components/Header'
import Menu from 'components/Menu'
import Story from 'components/Story'
import Banner from 'components/Banner';
import PopulerProduct from 'components/PopulerProduct';
import CardTwo from 'components/CardTwo';
import BestPrice from 'components/BestPrice';
import BigCampain from 'components/BigCampain';
import Footer from 'components/Footer';



const Home = () => {
    return (
        <Layout>
            <div>
                <hr className='h-1 mt-5 ' />
                <Story />
                <Banner />
                <PopulerProduct />
                <CardTwo />
                <BestPrice />
                <BigCampain />
            </div>
        </Layout>
    )
}

export default Home