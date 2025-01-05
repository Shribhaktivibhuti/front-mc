import React, { useState } from 'react';
import '../styles/about.css'; // Assuming your CSS is in the same folder

const About = () => {
  const [showBenefits, setShowBenefits] = useState(false);
  const [showWhy, setShowWhy] = useState(false);

  return (
    <div>
      <header>
        <div className="header">
          <h1>Marriage Counseling</h1>
        </div>
        <div className="pannel">
          <div className="pannel-opt">
            <a href="/">Home</a>
            <a href="/about" style={{ fontWeight: 'bold' }}>About</a>
            <a href="/blogs">Blogs</a>
            <a href="/questionnaire">Self Assessment</a>
            <a href="/helpline">Helpline</a>
            <a href="/feedback">Feedback</a>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="main-container">
        {/* Box 1: Benefits of Marriage Counseling */}
        <div className="content-box">
          <h2 onClick={() => setShowBenefits(!showBenefits)}>
            Benefits of Marriage Counseling
          </h2>
          {showBenefits && (
            <p>
              Marriage counseling offers a safe space for partners to explore their feelings and communicate more effectively. 
              It helps in:
              <ul>
                <li>Resolving conflicts constructively</li>
                <li>Improving communication skills</li>
                <li>Understanding each other's needs and expectations</li>
                <li>Building trust and emotional intimacy</li>
                <li>Strengthening the foundation of the relationship</li>
                <li>Enhancing Problem-Solving and Decision-Making</li>
                <li>Achieving Long-Term Relationship Satisfaction</li>
              </ul>
            </p>
          )}
        </div>

        {/* Box 2: Why We Need Marriage Counseling */}
        <div className="content-box">
          <h2 onClick={() => setShowWhy(!showWhy)}>
            Why We Need Marriage Counseling
          </h2>
          {showWhy && (
            <p>
              Every marriage experiences challenges. Counseling can be invaluable in navigating difficult times. It is needed when:
              <ul>
                <li>Communication has broken down</li>
                <li>There are frequent arguments or conflicts</li>
                <li>One or both partners feel emotionally disconnected</li>
                <li>Financial issues are causing stress</li>
                <li>There is a lack of intimacy or trust</li>
                <li>Inability to Resolve Issues Independently</li>
                <li>One Partner Feeling Unheard or Undervalued</li>
              </ul>
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default About;
