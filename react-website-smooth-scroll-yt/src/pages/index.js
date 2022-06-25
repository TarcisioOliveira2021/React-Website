import React, { useState } from 'react'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data';

export const Home = () => {
    //Setando variável e função que vai controlar a abertura do menu.
    const [isOpen, setIsOpen] = useState(false)

    //Function
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
        </>
    )
};

export default Home