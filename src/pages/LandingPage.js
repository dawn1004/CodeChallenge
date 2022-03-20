import React from 'react'
import LandingSection from '../components/LandingSection';
import '../assets/styles/landing-page.scss'
import NavBar from '../components/NavBar';
import BenefitsSections from '../components/BenefitsSections';
import LearnMoreSection from '../components/LearnMoreSection';

const LandingPage = () => {
    return (
        <div>
            <NavBar />
            <div id="hero-banner-wave">
                <LandingSection />
            </div>
            <BenefitsSections />
            <LearnMoreSection />
        </div>
    )
}

export default LandingPage