import React, { useState } from 'react';
import '../Home.css';

const Home = () => {
  const [activeQuad, setActiveQuad] = useState(null);

  const quads = [
    { id: 1, title: 'By Topic', desc: 'Enter a topic name to generate questions.', placeholder: 'Enter topic name...' },
    { id: 2, title: 'By Text', desc: 'Paste a paragraph to generate questions.', placeholder: 'Paste your text here...' },
    { id: 3, title: 'Upload File', desc: 'Upload a document to generate questions.', placeholder: 'Drop files here or click to upload' },
    { id: 4, title: 'From URL', desc: 'Paste a link to generate questions.', placeholder: 'https://example.com' }
  ];

  return (
    <div className='flex flex-col min-h-screen justify-center items-center bg-black text-white p-4 overflow-hidden'>
      <div className='circle-container'>
        {quads.map((quad) => (
          <div
            key={quad.id}
            className={`circle-quad quad-${quad.id} ${activeQuad === quad.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveQuad(quad.id)}
            onMouseLeave={() => setActiveQuad(null)}
          >
            <div className="content-wrapper">
              <h1 className='text-3xl font-bold mb-3'>{quad.title}</h1>
              
              {activeQuad === quad.id ? (
                <div className="input-area animate-fade-in">
                  <p className='mb-6 text-lg'>{quad.desc}</p>
                  {quad.id === 3 ? (
                    <div className="border-2 border-dashed border-black p-10 cursor-pointer hover:bg-gray-100 transition-colors">
                      {quad.placeholder}
                    </div>
                  ) : (
                    <input 
                      type="text" 
                      placeholder={quad.placeholder} 
                      className="w-full max-w-md p-4 bg-transparent border-b-2 border-black text-black placeholder-gray-500 focus:outline-none text-xl"
                      autoFocus
                    />
                  )}
                  <button className="mt-8 px-8 py-3 bg-black text-white font-bold hover:scale-105 transition-transform">
                    Generate Questions
                  </button>
                </div>
              ) : (
                <p className='px-12 text-sm opacity-60'>{quad.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;