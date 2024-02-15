import React, { useState } from "react";
import CircularButtons from "./CircularButtons";
import Dot from "./Dot";
const QuotesComponent = () => {
  const quotes = [
    {
      text: "Autism is not a processing error. It's a different operating system.",
      author: "Sarah Hendrickx",
      color: "bg-gradient-to-r from-cyan-50 to-cyan-200",
    },
    {
      text: "We may not have it all together, but together we have it all.",
      author: "Anonymous",
      color: "bg-gradient-to-r from-cyan-200 to-blue-200",
    },
    {
      text: "I am not a superhero, but I am a mother of a child with autism. Close enough.",
      author: "Anonymous",
      color: "bg-gradient-to-r from-blue-200 to-indigo-200",
    },
    {
      text: "We need to give each other the space to grow, to be ourselves, to exercise our diversity. We need to give each other space so that we may both give and receive such beautiful things as ideas, openness, and dignity.",
      author: "Max de Pree",
      color: "bg-gradient-to-r from-indigo-200 to-purple-200",
    },
    {
      text: "Autism is not a disease. Don't try to cure us. Try to understand us.",
      author: "Brian R. King",
      color: "bg-gradient-to-r from-purple-200 to-pink-200",
    },
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(
    Math.floor(Math.random() * quotes.length),
  );

  const changeQuote = (direction) => {
    if (direction === "left") {
      // Go to the previous quote or to the last if at the start
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : quotes.length - 1,
      );
    } else {
      // Go to the next quote or to the first if at the end
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex < quotes.length - 1 ? prevIndex + 1 : 0,
      );
    }
  };

  return (
    <div
      className={`h-[32rem] w-full relative ${quotes[currentQuoteIndex].color} to-blue-300 bg-cover bg-center flex items-center justify-between`}
    >
      <CircularButtons direction="left" onClick={() => changeQuote("left")} />

      <div className="text-center p-8  bg-opacity-75 rounded-lg">
        <p className="text-2xl text-black font-semibold mb-4">
          "{quotes[currentQuoteIndex].text}"
        </p>
        <p className="text-xl text-black">
          - {quotes[currentQuoteIndex].author}
        </p>
        <Dot quotes={quotes} currentQuoteIndex={currentQuoteIndex} />
      </div>

      <CircularButtons direction="right" onClick={() => changeQuote("right")} />
    </div>
  );
};

export default QuotesComponent;
