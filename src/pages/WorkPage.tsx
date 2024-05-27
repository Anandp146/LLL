import React, { useState, useEffect } from "react";

const cards = [
  { id: 1, content: "Card 1 Content" },
  { id: 2, content: "Card 2 Content" },
  { id: 3, content: "Card 3 Content" },
];

const WorkPage: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`${
            index === currentCard ? "opacity-100" : "opacity-0 hidden"
          } transition-opacity duration-1000`}
        >
          <div className="w-64 h-40 bg-white p-4 shadow-lg rounded-md">
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkPage;
