import React from 'react';
import '../styles/style2.css';


const PostSeparation = () => {
  const toggleDropdown = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = element.style.display === 'block' ? 'none' : 'block';
    }
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

      <h1 className="h1">Post-Separation Counseling</h1>
      <p className="p">Every ending is the start of a new beginning.</p>

      <main className="container">
        <section className="content-box">
          <h2>What is Post-Separation Counseling?</h2>
          <p>
            Post-separation counseling provides therapeutic support and guidance to individuals and families after a separation or divorce. It aims to help navigate the emotional, psychological, and practical challenges that arise during this transition.
          </p>
          <h2>Key Objectives of Post-Separation Counseling:</h2>
          <ul>
            <li><strong>Emotional adjustment:</strong> Support individuals in processing the emotional and psychological impact of separation.</li>
            <li><strong>Co-parenting guidance:</strong> Help parents navigate co-parenting responsibilities and maintain a positive environment for children.</li>
            <li><strong>Conflict resolution:</strong> Address and manage conflicts constructively to reduce stress and promote healing.</li>
            <li><strong>Adaptation to life changes:</strong> Assist individuals in adjusting to significant life changes and establishing a new normal.</li>
            <li><strong>Family support:</strong> Provide tools to help families move forward in a healthy and constructive way.</li>
          </ul>
        </section>

        <div className="header">
          <h1>Small Things Often</h1>
        </div>
        <div className="main-container">
          <div className="audio-container" id="audioPlayer1">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/episode/3VkwOGcHmIk42Y8pnPpfDg?utm_source=generator"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <section className="benefits-box">
          <h2>Key Elements</h2>
          <ul id="benefits-list">
            {[
              {
                id: 'emotional-healing',
                title: 'Emotional Healing and Support',
                content: (
                  <>
                    <h3>The Importance of Emotional Healing and Support in Relationships</h3>
                    <ul>
                      <li>Emotional healing helps recover from past traumas, misunderstandings, or betrayals in romantic relationships.</li>
                      <li>It focuses on rebuilding trust, intimacy, and connection between partners.</li>
                      <li>Emotional healing is crucial for maintaining a healthy and enduring relationship through personal and relational challenges.</li>
                    </ul>
                    <h3>How to Improve Emotional Healing and Support in Relationships</h3>
                    {/* Add detailed lists for other sections similarly */}
                  </>
                ),
              },
              {
                id: 'co-parenting',
                title: 'Co-parenting Skills',
                content: (
                  <>
                    <h3>The Importance of Co-parenting Skills in Relationships</h3>
                    <ul>
                      <li>Co-parenting is crucial after separation or divorce when children are involved.</li>
                      {/* Continue content... */}
                    </ul>
                  </>
                ),
              },
              // Add other sections similarly
            ].map((item) => (
              <li key={item.id}>
                <button className="dropdown-btn" onClick={() => toggleDropdown(item.id)}>
                  {item.title}
                </button>
                <div className="dropdown-content" id={item.id}>
                  {item.content}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Marriage Counseling Services</p>
      </footer>
    </div>
  );
};

export default PostSeparation;
