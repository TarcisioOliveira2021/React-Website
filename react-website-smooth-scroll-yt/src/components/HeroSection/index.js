import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'

import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

const HeroSection = () => {

    //Função responsável pela troca da arrow no botão de signup.
    const [hover, setHover] = useState(false)
    //Function
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <HeroContainer >
                <HeroBg>
                    < VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>

                <HeroContent>
                    <HeroH1>Virtual Banking Made Easy</HeroH1>
                    <HeroP>
                        Sign up for a new account today and receive $250 in credit towards your next payment.
                    </HeroP>

                    <HeroBtnWrapper>
                        {/* Animação de troca de seta no botão signup. */}
                        <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>

                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection