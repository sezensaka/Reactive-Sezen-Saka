// App.jsx
import React, { useEffect, useState } from 'react';
import Header from './Header';
import GroupPractice from './GroupPractice';
import CardSection from './CardSection';
import Classes from './Classes';
import BMICalculator from './BMICalculator';
import Trainers from './Trainers';
import PurchaseFromUs from './PurchaseFromUs';
import ReviewClient from './ReviewClient';
import Contact from './Contact';
import Footer from './Footer';
import buttonClasses from './ButtonClasses';

import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/aos/aos.css';
import '../vendor/glightbox/css/glightbox.min.css';
import '../vendor/swiper/swiper-bundle.min.css';
import '../css/main.css';

const App = () => {
  const [activeButtonId, setActiveButtonId] = useState('custom-button');

  const changeButtonClass = (buttonId) => {
    setActiveButtonId(buttonId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      const scrollPosition = window.scrollY;

      if (scrollPosition > 80) {
        header.style.backgroundColor = '#355592';
        header.style.width = '100%';
      } else {
        header.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <GroupPractice />
      <CardSection />
      <Classes buttonClasses={buttonClasses} activeButtonId={activeButtonId} changeButtonClass={changeButtonClass} />
      <BMICalculator />
      <Trainers />
      <PurchaseFromUs />
      <ReviewClient />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
