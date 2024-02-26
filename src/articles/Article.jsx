import React from "react";
// import "./sidebar.css";

const Article = ({ title, sections }) => {
  return (
    <main className="container mx-auto max-w-4xl px-6 py-8">
      <h1 className="text-4xl font-extrabold text-gray-800 leading-tight mb-6">
        {title}
      </h1>

      {sections.map((section, index) => (
        <section key={index} id={section.id} className="mb-8">
          {section.image && (
            <div className="mb-4">
              <img src={section.image} alt={`Image for ${section.heading}`} className="rounded-lg" />
            </div>
          )}
          <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
          {section.content.map((paragraph, pIndex) => (
            <p key={pIndex}>{paragraph}</p>
          ))}
        </section>
      ))}
    </main>
  );
};

export default Article;
