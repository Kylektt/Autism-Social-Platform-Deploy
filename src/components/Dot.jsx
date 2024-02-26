import React from 'react'

const Dot = ({quotes,currentQuoteIndex}) => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-4 flex justify-center space-x-2 ">
    {quotes.map((_, index) => (
      <span
        key={index}
        className={`block h-3 w-3 rounded-full ${index === currentQuoteIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
      ></span>
    ))}
  </div>
  )
}

export default Dot
