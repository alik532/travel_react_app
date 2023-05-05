import './App.css';
import Container from './components/Container';
import heroBanner from './assets/heroBanner.png'
import Navbar from './components/Navbar'
import instaLogo from './assets/insta.svg'
import facebookLogo from './assets/facebook.svg'
import twitterLogo from './assets/twitter.svg'
import heroStripes from './assets/heroDecor.svg'
import AboutUs from './components/AboutUs';
import Explore from './components/Explore';
import { locations } from './data';
import Hslider from './components/Hslider';
import WithUs from './components/WithUs';
import Gallery from './components/Gallery';
import LocationCard from './components/LocationCard'
import Guides from './components/Guides';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
  <div className='base'>
      <img src={heroBanner} alt='' className='heroBanner'/>
      <div className="App">
        <Container>
          <Navbar/>
          <div className='hero'>
            <div className='heroTexts'>
              <h2 className='heroTitle'>
                Explore<br/>Cappadocia 
              </h2>
              <h4 className='heroDescrip'>
                Our world is incredibly beautiful, with a rich diversity of <br/>landscapes, cultures, and wildlife. Follow us to enjoy these<br/> moments.
              </h4>
            </div>
            <div className='heroDecorContainer'>
              <img src={heroStripes} alt='' className='heroStripes'/>
              <div className='socials'>
                <a href='/'>
                  <img src={twitterLogo} alt='' className='social'/>
                </a>
                <a href='/'>              
                  <img src={instaLogo} alt='' className='social'/>
                </a>
                <a href='/'>
                  <img src={facebookLogo} alt='' className='social'/>
                </a>
              </div>
            </div>
          </div>
          <AboutUs/>
          <Explore/>
        </Container>
        <Hslider>
          {locations.map((card, i) => 
              <LocationCard data={card} key={i}/>
          )}
        </Hslider>
        <Container>
          <WithUs/>
        </Container>
        <Gallery/>
        <Container>
          <div className='guidesHeader'>
            <h2 >Out professional<br/> guides</h2>
            <p className='guideInfo'>
                With years of experience, our guide is adept at providing insightful commentary and making your journey interesting and engaging. From the history and culture of the destinations you visit to the local customs and traditions, our guide will provide you with a wealth of information to enrich your travels.
            </p>
          </div>
        </Container>
        <Guides/>
        <Container>
          <Form/>
        </Container>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
