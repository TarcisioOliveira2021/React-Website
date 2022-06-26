import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

import {
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'

import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>

                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> About us </FooterLinkTitle>
                                <FooterLink to="/signin">How it works </FooterLink >
                                <FooterLink to="/signin">Testimonials </FooterLink >
                                <FooterLink to="/signin">Investors </FooterLink >
                                <FooterLink to="/signin">Terms of Service </FooterLink >
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle> Videos </FooterLinkTitle>
                                <FooterLink to="/signin">Submit a video</FooterLink >
                                <FooterLink to="/signin">Ambassadors </FooterLink >
                                <FooterLink to="/signin">Agency </FooterLink >
                                <FooterLink to="/signin">Influencer </FooterLink >
                            </FooterLinkItems>
                        </FooterLinksWrapper>

                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> Contact us </FooterLinkTitle>
                                <FooterLink to="/signin">Contact </FooterLink >
                                <FooterLink to="/signin">Support </FooterLink >
                                <FooterLink to="/signin">Destinations </FooterLink >
                                <FooterLink to="/signin">Sponsorships </FooterLink >
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle> Social Media </FooterLinkTitle>
                                <FooterLink to="/signin">Instagram </FooterLink >
                                <FooterLink to="/signin">Facebook </FooterLink >
                                <FooterLink to="/signin">YouTube </FooterLink >
                                <FooterLink to="/signin">Twitter </FooterLink >
                            </FooterLinkItems>

                        </FooterLinksWrapper>
                    </FooterLinksContainer>

                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={toggleHome}>
                                dolla
                            </SocialLogo>
                            <WebsiteRights> dolla &#169; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank"
                                    aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank"
                                    aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank"
                                    aria-label="YouTube">
                                    <FaYoutube />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank"
                                    aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank"
                                    aria-label="LinkedIn">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>

                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer