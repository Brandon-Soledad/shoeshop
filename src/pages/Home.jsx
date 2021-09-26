import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import PageSlider from '../components/PageSlider'

export default function Home() {
    return (
        <div className="container">
            <Navbar/>
            <Announcement/>
            <PageSlider/>
        </div>
    )
}
