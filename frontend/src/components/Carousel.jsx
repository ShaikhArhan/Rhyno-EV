// Carousel.js
import React, { useState, useEffect } from 'react';
import '../Carousel.css';

const uspData = [
  {
    title: 'LFP Battery',
    content: `Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
      renowned for their safety features—eliminating the risk of fire associated with other
      Lithium batteries. These batteries boast a broader temperature range, ideal for the
      diverse Indian climate. Our technology enhances Rhyno's longevity, complemented
      by an Active Balancing Smart Battery Management System (BMS) for extended life
      and reduced maintenance. Each battery undergoes rigorous waterproofing tests
      according to IP76 standards. But it doesn't stop there—our technology goes the extra
      mile in ensuring the battery's lasting durability. Connect with us to discover the
      thoughtful engineering behind our batteries!`
  },
  {
    title: 'Wider Tyres',
    content: `Now, say goodbye to skidding and embrace the leaning turns!
      Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
      beast that ensures stability on different terrains such as wet roads, mud, and sand.`
  },
  {
    title: 'Range Prediction',
    content: `Many budget-friendly electric scooters overlook this crucial
      feature, causing riders to experience range anxiety. With Rhyno, you can ride with
      peace of mind, thanks to the scooter providing precise information about the
      remaining battery.`
  },
  {
    title: 'Extraordinary Experience',
    content: `Rhyno is more than just a mode of transportation. It is
      an experience of sheer comfort and style! A seamless fusion of minimalism,
      sophistication, and a touch of masculinity!`
  },
  {
    title: 'Rugged and Simple Design',
    content: `We’ve had enough of the EVs looking and feeling like
      fragile plastic toys. Often fading out and shamelessly breaking in minor accidents,
      ending up spending weeks and months at service stations for complex repairs. We
      took a bold step of making something raw, rugged, and practical. We kept it so
      simple that even your trusted local mechanic can understand and repair most of it. If
      you have reached this far, why not to take a test ride? Click here to locate your
      nearest dealership or book a test ride at your home`
  }
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % uspData.length);
        setFade(true);
      }, 500); // Match this duration with the fade-out animation duration
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className={`slide ${fade ? 'fade-in' : 'fade-out'}`}>
        <h1>{uspData[currentIndex].title}</h1>
        <p>{uspData[currentIndex].content}</p>
      </div>
      <div className="controls">
        {uspData.map((_, index) => (
          <button
            key={index}
            className={`control-button ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setFade(false);
              setTimeout(() => {
                setCurrentIndex(index);
                setFade(true);
              }, 500); // Match this duration with the fade-out animation duration
            }}
          />
        ))}
      </div>
    </div>
  );
};
