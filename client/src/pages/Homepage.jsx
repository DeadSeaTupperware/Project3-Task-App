import NavBar from '../components/Navbar'; 

const Homepage = () => {
  return (
    <div className="homepage">
      <NavBar />
      <header className="header">
        <img src={"/Strive-Logo.jpg"} alt="Logo" className="logo" />
        <h1>Welcome to Our Homepage</h1>
      </header>
      <main className="main-content">
        <section className="about-us">
          <h2>About Us</h2>
          <p>
            Welcome to our project! We are dedicated to providing top-notch
            services and a great experience. Our team is passionate about
            delivering quality and ensuring customer satisfaction. Learn more
            about our mission, values, and how we can help you.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
