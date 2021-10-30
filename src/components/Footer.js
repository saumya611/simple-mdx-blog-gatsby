import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
    FooterWrapper,
    FooterSocialIcons,
    FooterSocialWrapper,
} from '../elements/FooterElements';

function Footer() {

    const data = useStaticQuery(graphql`
        query{
            facebook: file(relativePath: {eq: "facebook-logo.png"}){
                publicURL
            }
            linkedin: file(relativePath: {eq: "facebook-logo.png"}){
                publicURL
            }
            instagram: file(relativePath: {eq: "facebook-logo.png"}){
                publicURL
            }
            twitter: file(relativePath: {eq: "facebook-logo.png"}){
                publicURL
            }
        }
    `)

    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={data.facebook.publicURL} alt="Facebook" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={data.linkedin.publicURL} alt="linkedin" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={data.instagram.publicURL} alt="instagram" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={data.twitter.publicURL} alt="twitter" />
                    </a>
                </FooterSocialIcons>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}

export default Footer;
