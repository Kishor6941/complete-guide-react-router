import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="container">
        <header>
          <h1>Welcome to React Router Information Page</h1>
        </header>

        <section id="home" className="content-section">
          <h2>Home</h2>
          <p>
            This is a simple homepage that provides basic information about
            React Router and how it helps in routing between components in a
            React app.
          </p>
        </section>

        <section id="about" className="content-section">
          <h2>About React Router</h2>
          <p>
            React Router is a popular routing library for React that allows
            developers to create single-page applications with navigation
            between different views. It enables dynamic routing, making the
            development of complex UIs easier.
          </p>
        </section>

        <section id="features" className="content-section">
          <h2>Features of React Router</h2>
          <ul>
            <li>Declarative routing</li>
            <li>Nested routes</li>
            <li>Route matching and rendering</li>
            <li>Dynamic routing</li>
            <li>Code splitting</li>
          </ul>
        </section>

        <section id="contact" className="content-section">
          <h2>Contact Us</h2>
          <p>
            For more information, visit the{" "}
            <a href="https://reactrouter.com/" target="_blank">
              React Router official website
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;
