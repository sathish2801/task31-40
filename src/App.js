import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import './App.css';
import img1 from './assets/img.jpg'; // Make sure this image path is correct

// Lazy load image component

  // Lazy load image with default loading state
  const LazyImage = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);
  
    return (
      <div
        style={{
          width: '100%',
          height: 'auto',
          position: 'relative',
          backgroundColor: '#f0f0f0', // Background while loading
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Placeholder spinner while loading */}
        {!loaded && (
          <div
            style={{
              width: '40px',
              height: '40px',
              border: '4px solid rgba(0, 0, 0, 0.1)',
              borderTop: '4px solid #333',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              position: 'absolute',
            }}
          />
        )}
  
        {/* Image Element */}
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            display: loaded ? 'block' : 'none', // Hide image while loading
          }}
        />
      </div>
    );
  };
  

// Multi-step Form
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handlePrev = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Step 1: Name</h2>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: Email</h2>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <button onClick={handlePrev}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Step 3: Address</h2>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
          <button onClick={handlePrev}>Back</button>
          <button onClick={() => alert('Form Submitted!')}>Submit</button>
        </div>
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  // Real-time search suggestion
  const [search, setSearch] = useState('');
  const data = ['React', 'Angular', 'Vue', 'Svelte', 'Ember'];

  const filteredData = data.filter((item) => item.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      {/* Fixed Navigation Bar */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          backgroundColor: '#333',
          color: '#fff',
          padding: '10px',
        }}
      >
        <h1>Fixed Navigation Bar</h1>
      </nav>

      {/* Sticky Sidebar */}
      <aside
        style={{
          position: 'sticky',
          top: '60px',
          width: '200px',
          backgroundColor: '#f4f4f4',
          padding: '10px',
          float: 'left',
        }}
      >
        <h3>Sticky Sidebar</h3>
      </aside>

      <main style={{ margin: '60px 0 0 220px', padding: '20px' }}>
        {/* Multi-step Form */}
        <h1>Multi-Step Form</h1>
        <MultiStepForm />

        {/* Image Zoom Effect */}
        <h1>Image Zoom Effect</h1>
        <div
  style={{
    width: '300px',
    height: '200px',
    overflow: 'hidden',
    position: 'relative',
  }}
>
  <img
    src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Placeholder"
    style={{
      width: '100%',
      height: '100%',
      transition: 'transform 0.3s ease',
    }}
  />
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 1,
    }}
  >
    <img
      src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Zoomed Placeholder"
      style={{
        width: '100%',
        height: '100%',
        transform: 'scale(1)',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => (e.target.style.transform = 'scale(1.5)')}
      onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
    />
  </div>
</div>


        {/* CSS Grid Layout */}
        <h1>CSS Grid Layout</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          <div style={{ background: '#ddd', padding: '20px' }}>Item 1</div>
          <div style={{ background: '#ddd', padding: '20px' }}>Item 2</div>
          <div style={{ background: '#ddd', padding: '20px' }}>Item 3</div>
        </div>

        {/* Flexbox Layout */}
        <h1>Flexbox Layout</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            padding: '20px',
            background: '#f4f4f4',
          }}
        >
          <div style={{ background: '#ddd', padding: '20px' }}>Item 1</div>
          <div style={{ background: '#ddd', padding: '20px' }}>Item 2</div>
          <div style={{ background: '#ddd', padding: '20px' }}>Item 3</div>
        </div>

        {/* Lazy Loading Image */}
        <h1>Image Lazy Loading</h1>
        <LazyImage src="https://images.unsplash.com/photo-1440581572325-0bea30075d9d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Placeholder" /> {/* Ensure proper path to img asset */}

        {/* Real-time Search Suggestion */}
        <h1>Real-time Search Suggestion</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <ul>
          {filteredData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Carousel with Autoplay */}
        <h1>Carousel with Autoplay</h1>
        <Carousel autoPlay infiniteLoop>
          <div>
            <img src="https://via.placeholder.com/600x400" alt="Slide 1" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/600x400" alt="Slide 2" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/600x400" alt="Slide 3" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </main>
    </div>
  );
};

export default App;
