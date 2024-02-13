import React from 'react';
import Header from '../components/header/Header';
import Aboutme from '../components/Aboutme';
import Paintings from '../components/Paintings';
import Services from '../components/Services';

const Home = () => {
  return (
    <div>
      <Header/>
      <Aboutme title={"A Few Words About Me"} content={"My name is Samantha Morgan, and I have been a fine artist since my youth. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you."}/>
      <Paintings/>
      <Services title={"Services"} subTitle={"If you are looking for custom paintings, which will decorate your home or office, consider booking one or several of my services listed below. They will add more colors and emotions to your daily life."}/>
    </div>
  )
}

export default Home
