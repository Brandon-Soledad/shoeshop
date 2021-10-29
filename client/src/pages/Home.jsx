import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import PageSlider from '../components/PageSlider';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Featured from '../components/Featured';

export default function Home() {
    return (
        <div className="container">
            <Navbar/>
            <Announcement/>
            <PageSlider/>
            <Categories/>
            <Featured/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
