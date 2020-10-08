import React, { useState } from "react";

import TinderCard from "react-tinder-card";

import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "IU",
      url:
        "https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/120316217_3465070713555410_8219981626973316783_o.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=3f_tNVDr5JwAX8ixXby&_nc_ht=scontent.fsgn2-6.fna&oh=44237ac049f8e88dc9ee76ec564ba732&oe=5FA625C7",
    },
    {
      name: "Rosé",
      url: "https://ge.lnwfile.com/_resize_images/600/600/o5/ko/mp.jpg",
    },
  ]);

  return (
    <div>
      <h1>Welcome Tinder Card</h1>

      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
