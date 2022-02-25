import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Emergency  Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "" , link: "/tooth-extract"},
    ]
    const ourAddress = [
        {name: "Bangladesh - Daffodil SmartCity" , link: "//google.com/map"},
        {name: "Abdullah" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Emergency skin Care" , link: "/emergency"},
        {name: "Skin Disease" , link: "/tooth-extract"},
        {name: "Heart Disease" , link: "/checkup"},
        {name: "Perkinson's Disease" , link: "/checkup"},
        
    ]
    const services = [
        {name: "Emergency Contact" , link: "/emergency"},
        {name: "Appointment" , link: "/checkup"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-warning">+01761926292</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright 2022 All Rights Reserved by © Abdullah </p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;