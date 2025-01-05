import React, { useState } from "react";
import "../styles/style2.css";

const PreMarital = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <header>
        <div className="header">
          <h1>Marriage Counseling</h1>
        </div>
        <div className="pannel">
          <div className="pannel-opt">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="blog.html">Blogs</a>
            <a href="ques.html">Self Assessment</a>
            <a href="helpline.html">Helpline</a>
            <a href="feedback.html">Feedback</a>
          </div>
        </div>
      </header>

      <h1 className="h1">Pre-Marital Counseling</h1>
      <p className="p">
        Your first step towards a strong and sustainable marriage.
      </p>

      <main className="container">
        <section className="content-box">
          <h2>What is Pre-Marital Counseling?</h2>
          <p>
            Pre-marital counseling helps couples better understand each other
            and prepare for marriage and post-married life.
          </p>
          <h2>Key Benefits of Pre-Marital Counseling:</h2>
          <ul>
            <li>
              <strong>Gain clarity and understanding:</strong> Discuss topics
              that provide insights into what lies ahead in married life.
            </li>
            <li>
              <strong>Address overlooked issues:</strong> Explore areas that
              couples might have missed during courtship.
            </li>
            <li>
              <strong>Prepare for unforeseen challenges:</strong> For couples
              unable to "live-in" together before marriage, it offers guidance
              on navigating married life.
            </li>
            <li>
              <strong>Prevent unexpected shocks:</strong> Helps couples align
              expectations and avoid surprises later in life.
            </li>
          </ul>

          <div className="header">
            <h1>Small Things Often</h1>
          </div>
          <div className="main-container">
            <div className="audio-container" id="audioPlayer1">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/episode/1xKm8nTiBGUzE0ibkHVs3z?utm_source=generator"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Pre-Marital Counseling Podcast"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="benefits-box">
          <h2>Key Elements</h2>
          <ul id="benefits-list">
            <li>
              <button
                className="dropdown-btn"
                onClick={() => toggleDropdown("physical-intimacy")}
                aria-expanded={activeDropdown === "physical-intimacy"}
                aria-controls="physical-intimacy"
              >
                Physical and Emotional Intimacy
              </button>
              <div
                className={`dropdown-content ${
                  activeDropdown === "physical-intimacy" ? "show" : ""
                }`}
                id="physical-intimacy"
              >
                <h3>How to Build Intimacy in Relationships</h3>
                <p>
                  No matter how long you have been together, it's always
                  important to build your intimacy levels. Here are some easy,
                  practical ways to strengthen your levels of intimacy in your
                  relationship:
                </p>
                <h3>Improve Physical Intimacy</h3>
                <ul>
                  <li>
                    <strong>Communicate Openly</strong> Discuss your likes,
                    dislikes, and boundaries with your partner.
                  </li>
                  <li>
                    <strong>Ask and Listen</strong> Encourage your partner to
                    share their preferences and needs, and actively listen
                    without judgment.
                  </li>
                  <li>
                    <strong>Create a Safe Environment</strong> Foster trust by
                    respecting each other's comfort levels and vulnerabilities.
                  </li>
                  <li>
                    <strong>Express Appreciation</strong> Acknowledge your
                    partner’s willingness to share their thoughts and desires.
                  </li>
                </ul>
                <h3>Increase Emotional Intimacy</h3>
                <ul>
                  <li>
                    <strong>Share Openly</strong> Be honest about your thoughts
                    and feelings, fostering a safe space for mutual
                    self-disclosure.
                  </li>
                  <li>
                    <strong>Acknowledge Special Moments</strong> Take note of
                    meaningful events or small gestures that remind you of your
                    partner, and share them to show your care.
                  </li>
                  <li>
                    <strong>Show Thoughtfulness</strong> Surprise your partner
                    with kind gestures or words to let them know they are on
                    your mind.
                  </li>
                  <li>
                    <strong>Build Trust Through Consistency</strong> Follow
                    through on promises and maintain open communication to
                    strengthen your bond over time.
                  </li>
                </ul>
              </div>
            </li>
            {/* Add additional dropdowns (Positive Attitude, Accountability, etc.) in a similar way */}
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Marriage Counseling Services</p>
      </footer>
    </div>
  );
};

export default PreMarital;
