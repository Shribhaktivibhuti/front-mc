import React from "react";
import '../styles/style2.css';

function MaritalCounseling() {
  const toggleDropdown = (id) => {
    const content = document.getElementById(id);
    content.style.display = content.style.display === "block" ? "none" : "block";
  };

  return (
    <div>
      <header>
        <div className="header">
          <h1>Marriage Counseling</h1>
        </div>
        <div className="pannel">
          <div className="pannel-opt">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/blogs">Blogs</a>
            <a href="/self-assessment">Self Assessment</a>
            <a href="/helpline">Helpline</a>
            <a href="/feedback">Feedback</a>
          </div>
        </div>
      </header>

      <h1 className="h1">Marital Counseling</h1>
      <p className="p">A step towards a happier and stronger marital journey.</p>

      <main className="container">
        <section className="content-box">
          <h2>What is Marital Counseling?</h2>
          <p>
            Marital counseling is a therapeutic process designed to help couples
            navigate and resolve issues in their relationship. It focuses on
            improving communication, addressing conflicts and fostering a
            healthier relationship.
          </p>

          <h3>Goals of Marital Counseling</h3>
          <ul>
            <li>
              <strong>Improve communication:</strong> Enhancing open and honest
              communication between partners.
            </li>
            <li>
              <strong>Resolve conflicts:</strong> Addressing and resolving
              disagreements in a constructive manner.
            </li>
            <li>
              <strong>Strengthen intimacy:</strong> Promoting both emotional and
              physical intimacy within the relationship.
            </li>
            <li>
              <strong>Address specific challenges:</strong> Tackling issues like
              infidelity, parenting challenges, or financial stress.
            </li>
          </ul>
          <div className="header">
            <h1>Small Things Often</h1>
          </div>
          <div className="main-container">
            <div className="audio-container" id="audioPlayer1">
              <iframe
                src="https://open.spotify.com/embed/episode/1vZ0eW5GZyl3N053g4pe1K?si=ohJgmwNoT9yfYhcBi90p0A"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="Small Things Often"
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
                onClick={() => toggleDropdown("communication")}
              >
                Improve Communication
              </button>
              <div className="dropdown-content" id="communication">
                <h3>The Importance of Improving Communication in Relationships</h3>
                <ul>
                  <li>
                    <strong>Effective communication</strong> is the cornerstone of
                    any healthy relationship.
                  </li>
                  <li>
                    Fosters understanding, trust, and emotional intimacy between
                    partners.
                  </li>
                  <li>
                    Allows individuals to express thoughts, feelings, needs, and
                    concerns.
                  </li>
                  <li>Strengthens the connection between partners.</li>
                </ul>

                <h3>How to Improve Communication in Relationships</h3>

                <h4>1. Active Listening</h4>
                <ul>
                  <li>
                    <strong>Focus on listening:</strong> Give your partner your
                    full attention without interrupting or preparing your response
                    while they speak.
                  </li>
                  <li>
                    <strong>Show engagement:</strong> Use eye contact, nodding,
                    and verbal cues like "I see" or "I understand" to show you are
                    actively listening.
                  </li>
                </ul>

                <h4>2. Be Open and Honest</h4>
                <ul>
                  <li>
                    <strong>Transparency is key:</strong> Be open about your
                    thoughts and feelings.
                  </li>
                  <li>
                    <strong>Honesty promotes trust:</strong> Sharing openly
                    deepens emotional intimacy and prevents misunderstandings.
                  </li>
                </ul>

                <h4>3. Stay Calm During Conflict</h4>
                <ul>
                  <li>
                    <strong>Approach conflicts calmly:</strong> Disagreements are
                    natural, but handling them calmly is crucial.
                  </li>
                  <li>
                    <strong>Avoid negative behaviors:</strong> Refrain from
                    shouting, name-calling, or becoming defensive.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                className="dropdown-btn"
                onClick={() => toggleDropdown("conflict-resolution")}
              >
                Conflict Resolution
              </button>
              <div className="dropdown-content" id="conflict-resolution">
                <h3>The Importance of Resolving Conflicts in Relationships</h3>
                <ul>
                  <li>
                    <strong>Conflict resolution</strong> helps partners work
                    through differences, maintain emotional closeness, and ensure
                    that both individuals feel heard and respected.
                  </li>
                  <li>
                    Addressing issues early and with empathy can prevent small
                    disagreements from escalating into larger, more damaging
                    problems.
                  </li>
                  <li>
                    Conflict resolution helps partners develop skills that:
                    <ul>
                      <li>Improve communication</li>
                      <li>Enhance collaboration</li>
                      <li>Build emotional resilience</li>
                    </ul>
                  </li>
                </ul>
                {/* Add more content as needed */}
              </div>
            </li>
            <li>
              <button
                className="dropdown-btn"
                onClick={() => toggleDropdown("intimacy")}
              >
                Strengthen Intimacy
              </button>
              <div className="dropdown-content" id="intimacy">
                <h3>The Importance of Strengthening Intimacy in Relationships</h3>
                <ul>
                  <li>
                    <strong>Intimacy</strong> is a core component of a healthy and
                    thriving relationship.
                  </li>
                  <li>
                    It goes beyond physical closeness and involves:
                    <ul>
                      <li>Emotional connection</li>
                      <li>Psychological connection</li>
                      <li>Intellectual connection</li>
                    </ul>
                  </li>
                  <li>
                    Strong intimacy fosters:
                    <ul>
                      <li>Trust</li>
                      <li>Closeness</li>
                      <li>Deep emotional bonds</li>
                    </ul>
                  </li>
                </ul>
                {/* Add more content as needed */}
              </div>
            </li>
            {/* Add more dropdown sections as needed */}
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Marriage Counseling Services</p>
      </footer>
    </div>
  );
}

export default MaritalCounseling;
