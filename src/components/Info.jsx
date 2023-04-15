import "../../src/App.css";

export default function Info() {
  return (
    <section className="main--section-info">
      <h1>Woon Koh</h1>
      <h2>Frontend Developer</h2>
      <h3>https://github.com/kohwdev</h3>
      <div className="btn-section">
        <button className="btn email">
          <a href="mailto:woonsta13@gmail.com">
            <i class="fa-solid fa-envelope"></i> Email
          </a>
        </button>
        <button className="btn linkedin">
          <a href="https://www.linkedin.com/in/woon-koh-b1a748b4/">
            <i class="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </button>
      </div>
    </section>
  );
}
