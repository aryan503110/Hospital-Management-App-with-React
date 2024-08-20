import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home">
    <header className="hero">
      <h1>Welcome to Healthify</h1>
      <p>Your Partner in Modern Healthcare Management</p>
    </header>

    <section className="features">
      <div className="feature-card">
        <h2>Patient Management</h2>
        <p>Efficiently manage patient records and appointments</p>
      </div>
      <div className="feature-card">
        <h2>Personal Dashboard</h2>
        <p>Get insights with our personal Dashboard</p>
      </div>
      <div className="feature-card">
        <h2>Secure Data</h2>
        <p>Your data is protected with state-of-the-art security</p>
      </div>
    </section>

    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-card">
        <p>"Healthify has revolutionized our patient management system!"</p>
        - Dr. Jane Smith, General Practitioner
      </div>
      <div className="testimonial-card">
        <p>"The Personal dashboard has given us valuable insights into our practice."</p>
        - John Doe, Hospital Administrator
      </div>
    </section>
  </div>
  )
}

export default Home
