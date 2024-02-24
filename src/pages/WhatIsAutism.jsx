import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Article from "../articles/Article";
import "./WhatIsAutism.css";


const WhatIsAutism = () => {
  const whatIsAutismContent = {
    title: "What is Autism?",
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        image: "/images/1.jpeg",
        content: [
          "Welcome to the What is Autism? page. In this section, we'll provide an overview of autism spectrum disorder (ASD) and its various aspects.",
        ],
      },
      {
        id: "autism-spectrum",
        heading: "What is the Autism Spectrum?",
        image: "/images/2.jpeg",
        content: [
          "Autism is a spectrum disorder, meaning individuals with autism can have a wide range of strengths, challenges, and abilities. We'll explore the diversity within the autism spectrum.",
        ],
      },
      {
        id: "characteristics",
        heading: "Characteristics of Autism",
        image: "/images/3.jpeg",
        content: [
          "Autism is characterized by difficulties in social interaction, repetitive behaviors, and challenges in verbal and nonverbal communication. Each individual with autism is unique, and experiences can vary widely.",
        ],
      },
      {
        id: "aspergers-syndrome",
        heading: "What is Asperger’s Syndrome?",
        content: [
          "Asperger’s Syndrome is a type of autism spectrum disorder characterized by difficulties in social interaction and nonverbal communication. Individuals with Asperger’s may have intense interests and exhibit repetitive behaviors.",
          "It's important to understand the unique traits and challenges associated with Asperger’s Syndrome.",
        ],
      },
      {
        id: "positive-self-identity",
        heading: "Positive Self-Identity and Self-Esteem",
        content: [
          "Building a positive self-identity and self-esteem is crucial for individuals with autism. Embracing one's uniqueness and strengths can contribute to overall well-being.",
          "Supportive environments and understanding communities play a vital role in fostering positive self-identity.",
        ],
      },
      {
        id: "neurodiversity-movement",
        heading: "The Neurodiversity Movement",
        content: [
          "The neurodiversity movement advocates for the acceptance and celebration of neurological differences, including autism. It emphasizes the value of neurodiversity in society and challenges stigmas associated with autism.",
          "Understanding and supporting neurodiversity can contribute to a more inclusive world.",
        ],
      },
      {
        id: "prevalence-of-autism",
        heading: "What is the Prevalence of Autism?",
        content: [
          "Autism spectrum disorder is more prevalent than commonly thought. Understanding the prevalence of autism helps raise awareness and underscores the importance of support, research, and inclusion.",
          "Explore the prevalence rates and their implications for individuals and communities.",
        ],
      },
      {
        id: "history-of-autism",
        heading: "What is the History of Autism?",
        content: [
          "The history of autism involves evolving perspectives, diagnostic criteria, and societal attitudes. Exploring the history of autism provides insights into the progress made in understanding and supporting individuals with autism.",
          "Learn about key milestones and shifts in the historical understanding of autism.",
        ],
      },
      {
        id: "causes-of-autism",
        heading: "What Causes Autism?",
        content: [
          "The causes of autism are complex and multifactorial. Genetic, environmental, and neurological factors may contribute to the development of autism spectrum disorder.",
          "Examine current research and perspectives on the potential causes of autism.",
        ],
      },
      {
        id: "facts-and-misconceptions",
        heading: "The Facts about Autism and Common Misconceptions",
        content: [
          "Dispelling myths and misconceptions about autism is essential for fostering understanding and support. Explore common misconceptions, and learn about the facts that contribute to a more accurate understanding of autism.",
          "Addressing misinformation promotes a more inclusive and informed society.",
        ],
      },
      {
        id: "broaching-autism-subject",
        heading: "Broaching the Subject of Autism",
        content: [
          "Approaching the topic of autism with sensitivity and openness is crucial. Whether as a friend, family member, or community member, understanding how to broach the subject of autism fosters positive communication and support.",
          "Gain insights into effective ways to discuss and approach the subject of autism.",
        ],
      },
    ],
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <nav className="w-1/4 p-4">
        <h3 className="text-lg font-bold mb-4">What's on this page</h3>
        <ul className="list-disc pl-4">
          {whatIsAutismContent.sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="text-blue-500 hover:underline">
                {section.heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="w-3/4">
        {/* Pass the content as a prop to NavBar */}
        <NavBar />
        {/* Pass the content as a prop to Article */}
        <Article {...whatIsAutismContent} />
      </div>
    </div>
  );
};

export default WhatIsAutism;
