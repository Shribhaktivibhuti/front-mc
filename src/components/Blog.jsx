import React, { useEffect, useState } from 'react';
import '../styles/blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch existing blogs when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/blogs');
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setBlogs(data); // Update state with fetched blogs
        } else {
          setBlogs([]); // Set to empty if no blogs available
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        alert('An error occurred while fetching the blogs.');
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array means this runs only once after mount

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
            <a href="/blogs" style={{ fontWeight: 'bold' }}>
              Blogs
            </a>
            <a href="/questionnaire">Self Assessment</a>
            <a href="/helpline">Helpline</a>
            <a href="/feedback">Feedback</a>
          </div>
        </div>
      </header>

      <div className="main-container">
        {/* Left: Blog Content */}
        <main className="blog-content">
          <h1>Knowing Responsibilities in Marriage</h1>

          {/* Shared Responsibilities */}
          <section id="Shared-Responsibilities">
            <h2>Shared Responsibilities: A Foundation for Equality</h2>
            <p>
              Gone are the days when marriage roles were strictly defined by
              gender. In today’s world, marriage thrives on equality and mutual
              respect. Shared responsibilities—be it household chores, financial
              management, or parenting—help create a balanced and supportive
              environment.
            </p>
            <p>
              Tip: Sit down with your partner and discuss each person’s strengths
              and preferences. Divide tasks in a way that feels fair and manageable for both.
            </p>
          </section>

          {/* Emotional Support */}
          <section id="emotional-support">
            <h2>Emotional Support: The Pillar of Every Marriage</h2>
            <p>
              Marriage is more than just sharing a home; it’s about sharing emotions. Being there for your partner during challenging times,
              offering a listening ear, and validating their feelings are fundamental responsibilities.
            </p>
            <p>
              Tip: Regularly check in with your partner. A simple "How are you feeling today?" can go a long way in showing care and concern.
            </p>
          </section>

          {/* Financial Accountability */}
          <section id="financial-accountability">
            <h2>Financial Accountability: Building a Secure Future</h2>
            <p>
              Financial stability is a critical aspect of marriage. Both partners must be transparent about their income, expenses, and savings goals.
              Taking responsibility for financial planning helps avoid conflicts and ensures a secure future.
            </p>
            <p>
              Tip: Create a joint budget and review it together regularly. Open communication about money matters fosters trust and reduces misunderstandings.
            </p>
          </section>

          {/* Parenting */}
          <section id="parenting">
            <h2>Parenting: A Shared Journey</h2>
            <p>
              If you have children, parenting becomes a significant responsibility. Raising children involves teamwork, patience, and a shared vision. Each partner should actively participate in nurturing and guiding their kids.
            </p>
            <p>
              Tip: Divide parenting duties equitably and make time for family activities. Consistency in parenting approaches creates a stable environment for children.
            </p>
          </section>

          {/* What to Expect */}
          <section id="preparation">
            <h2>What to Expect</h2>

            <h3>Emotional Changes</h3>
            <p>It’s normal to feel a mix of excitement and nervousness.</p>
            <p>
              Open communication with your partner is key to navigating emotions together.
            </p>

            <h3>Physical Preparation</h3>
            <p>Attend prenatal classes to understand labor and delivery.</p>
            <p>
              Prepare your home with essential baby supplies (crib, diapers, car seat, etc.).
            </p>

            <h3>Financial Planning</h3>
            <p>Create a budget for hospital costs, baby gear, and childcare.</p>
            <p>Start or review your emergency fund.</p>
          </section>
        </main>

        {/* Right: Sidebar */}
        <aside className="sidebar">
          <h3>Related Quotes</h3>

          <div className="image">
            <img src="/assets/wt1.jpg" alt="Inspirational Quote 1" />
          </div>
          <div className="quote">
            <p>
              "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed."
            </p>
          </div>

          <div className="image">
            <img src="/assets/wt2.jpg" alt="Inspirational Quote 2" />
          </div>
          <div className="quote">
            <p>
              "You say you’re ‘depressed’ – all I see is resilience. You are allowed to feel messed up and inside out. It doesn’t mean you’re defective – it just means you’re human."
            </p>
          </div>
        </aside>
      </div>

      {/* User Blogs Section */}
      <section id="user-blogs">
        <h2>Little Footprints, Big Stories</h2>
        <div id="blog-list">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog.id} className="blog-post">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
              </div>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
