import React from 'react';
import { FaMapMarkerAlt, FaQuoteLeft, FaInstagram } from 'react-icons/fa';
import './Travel.css';

const Travel = () => {
  const trips = [
    {
      id: 1,
      place: "Vietnam",
      text: "Vietnam is as picturesque as it can get. The coffee is definitely stronger than my backend code.",
      image: "/images/Vietnam.jpg"
    },
    { 
      id: 2, 
      place: "Spiti Valley", 
      text: "12,500ft. Survived a fatal 35 reading on an oxymeter (Around 90 was considered as normal :O). Yeah, Spiti was indeed magical :)", 
      image: "/images/Spiti.jpg"
    },
    { 
      id: 3, 
      place: "Meghalaya", 
      text: "The prettiest nature I've ever got to see. Meghalaya is just soooooo beautiful, one needs to experience it to know it!!", 
      image: "/images/Meghalaya.jpg"
    },
    { 
      id: 4, 
      place: "Tosh", 
      text: "Snow-capped peaks and absolute silence in Parvati Valley. Snow, snow and just snow for 2 days straight!", 
      image: "/images/Tosh.jpg"
    },
    { 
      id: 5, 
      place: "Mumbai", 
      text: "Home base. Where the code gets written and the vada pavs get eaten.", 
      image: "/images/Mumbai.jpg"
    },
    {
      id: 6,
      place: "Goa",
      text: "Pfft, the plan definitely made it out of chat. Could sit here for hours and hours!!",
      image: "/images/Goa.jpg"
    },
    {
       id: 7,
       place: "Rajasthan",
       text: "Palaces, forts, and endless desert sands. Soulful food everywhere you go. Royal vibes only.",
       image: "/images/Rajasthan.jpg"
    },
    {
       id: 8,
       place: "Bangalore",
       text: "Cherry blossoms, Corporate giants, Crispy dosas, Crazy cool Bengaluru!",
       image: "/images/Bangalore.jpg"
    }
  ];

  const ROTATIONS = ["-2deg", "1.5deg", "-1deg", "2deg", "-1.5deg", "1deg"];

  return (
    <div className="travel-container">
      <div className="travel-header">
        <h1>✈️ Travel Logs</h1>
         <p>Not your average nerd who only plays Chess... I like to travel too! :D</p>
      </div>

      <div className="polaroid-grid">
        {trips.map((trip, index) => (
          <div 
            className="polaroid-wrapper" 
            key={trip.id}
            style={{ transform: `rotate(${ROTATIONS[index % ROTATIONS.length]})` }}
          >
            <div className="polaroid-inner">
              <div className="polaroid-front">
                <div className="photo-frame">
                   <img src={trip.image} alt={trip.place} />
                </div>
                <div className="caption">
                  <FaMapMarkerAlt className="pin-icon" /> {trip.place}
                </div>
              </div>

              <div className="polaroid-back">
                <FaQuoteLeft className="quote-icon" />
                <p>{trip.text}</p>
              </div>
            </div>
          </div>
        ))}

        <div 
            className="polaroid-wrapper" 
            style={{ transform: 'rotate(3deg)' }} 
        >
            <div className="polaroid-inner">
              <div className="polaroid-front insta-front">
                 <div className="photo-frame insta-frame">
                    <FaInstagram className="insta-big-icon" />
                 </div>
                 <div className="caption">
                    And many many more...
                 </div>
              </div>

              <div className="polaroid-back insta-back">
                <p>Want to hear more such stories? Let's stay connected! :)</p>
                
                <a href="https://instagram.com/ayushshah381" target="_blank" rel="noreferrer" className="insta-btn">
                   <FaInstagram /> Follow Me 
                </a>
              </div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default Travel;