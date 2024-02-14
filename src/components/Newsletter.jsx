import InteractiveBalls from "./InteractiveBalls";
import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();




    const scriptUrl = "https://script.google.com/macros/s/AKfycbxYhNJYSqbS1cf7iLF6da49-35D-DYwzTFRUq43KG-bn__V4YGklpJGLpZC6v-n19sp9Q/exec"; 
    const urlWithParams = `${scriptUrl}?email=${encodeURIComponent(email)}`;


    try {
      const response = await fetch(
        urlWithParams,
        {
          method: "GET",
          mode: 'cors',
        },
      );

      if (response.ok) {
        alert("Thanks for subscribing!");
        console.log("Success:", response);
        setEmail("");
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 shadow-lg xl:py-32 w-full">
      <InteractiveBalls />
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Stay Updated on Autism Support
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-600">
        Join our community to receive the latest information, resources, and
        support for individuals with autism and their families.
      </p>
      <form
        className="mx-auto mt-10 flex max-w-md gap-x-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={handleEmailChange}
          className="min-w-0 flex-auto border-0 bg-gray-100 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="flex-none bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Notify me
        </button>
      </form>

      <svg
        viewBox="0 36 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#gradient-green)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient
            id="gradient-green"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stopColor="#77D65C" /> {/* 浅绿色 */}
            <stop offset={1} stopColor="#238A34" stopOpacity={0} />
            {/* 深绿色 */}
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
