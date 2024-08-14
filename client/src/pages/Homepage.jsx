const Homepage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <img src={"./public/Strive-Logo.png"} alt="Logo" className="logo" />
        <h1>Welcome to Strive</h1>
      </header>
      <main className="main-content">
        <section className="about-us">
          <h2>About Us</h2>
          <p>
          Welcome to Stive your ultimate solution for seamless scheduling and time management. 
          Our mission is to simplify how individuals and teams manage their time, 
          allowing you to focus on what truly matters.
          </p>
          <p>
          At Stive, we understand the challenges of balancing personal and professional schedules. 
          That is why we have created an intuitive and powerful scheduling platform designed to help 
          you effortlessly plan, organize, and collaborate.
          </p>
          <h2>Our Story</h2>
          <p>
          Founded with a vision to enhance productivity and streamline scheduling, Stive was developed by a team of dedicated professionals who are passionate about technology and efficiency. Our journey began with the goal of providing a user-friendly tool that adapts to your needs, whether you’re managing personal appointments or coordinating complex team projects.
          </p>
          <h2>Our Commitmente</h2>
          <p>
          We are committed to continuous improvement and innovation, striving to make Stive the best scheduling tool available. Our dedicated support team is always here to assist you and ensure that your experience is as smooth and productive as possible.
          </p>
          <p>
          Thank you for choosing Strive. We’re excited to help you take control of your time and achieve your goals.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
