

import Navbar from '../geekfood/navbar.js';
import Hero from '../geekfood/hero.js'
import Footer from '../geekfood/footer.js'
import Banner from '../geekfood/card.js'
import Feedback from '../geekfood/feedback.js';

function geekApp(){
    return(
        <div id="root-main">
            <Navbar/>
            <Hero/>
            <Banner/>
            <Feedback/>
            <Footer/>
            
        </div>
    );
}

export default geekApp;