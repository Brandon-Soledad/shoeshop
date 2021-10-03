import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import PageSlider from '../components/PageSlider';
import Products from '../components/Products';

export default function Home() {
    return (
        <div className="container">
            <Navbar/>
            <Announcement/>
            <PageSlider/>
            <Categories/>
            <Products/>
        </div>
    )
}
