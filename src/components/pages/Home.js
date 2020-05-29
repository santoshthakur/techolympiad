import React from 'react'
import Banner from '../common/Banner'
import NavigationTop from '../common/NavigationTop';
import TechnologySecHome from '../common/TechnologySecHome'
import AdvisorsSection from '../common/AdvisorsSection';
import EmailerSection from '../common/EmailerSection';
import ContactHome from '../common/ContactHome';
import FooterSection from '../common/FooterSection';

function Home() {
    return (
        <div>
            <NavigationTop />
            <Banner />
            <div className="container pt-5 pb-5 text-center">
                <h2>About Us</h2>
                <p>Traditionally, new technologies have taken years – sometimes decades – to become mainstream. However, the times we live in today are different. While pure scientific research is still a time-taking endeavor, its application and advancement into world-changing technologies works at much shorter timescales. And this pace is bound to increase. It is no longer enough to teach our kids about the techniques, methods, and systems that programmers and designers used, even just a decade back. It is time to unleash on to the new realms of technical understanding.</p>
                <p>Tech Olympiad aims to orient students towards technologies like Artificial Intelligence, Augmented and Virtual Reality, Blockchain, and Quantum Computing.These are the technologies that</p>
                <button className="btn btn-primary about-btn">Read More <i className="fa fa-long-arrow-right"></i></button>
            </div>
            <TechnologySecHome />
            <AdvisorsSection />
            <EmailerSection />
            <ContactHome />
            <FooterSection />
        </div>
    )
}

export default Home;
