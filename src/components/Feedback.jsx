import React, { useState } from "react";
import "../styles/feedback.css";

const Feedback = () => {
  // State to manage form data and response messages
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [responseColor, setResponseColor] = useState("black");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Show loading message
    setResponseMessage("Submitting your feedback...");
    setResponseColor("blue");

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setResponseMessage("Please enter a valid email address.");
      setResponseColor("red");
      return;
    }

    try {
      // Submit the form data to the backend API
      const response = await fetch("http://localhost:5001/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, feedback }),
      });

      const result = await response.json();

      if (response.ok) {
        // Show success message
        setResponseMessage(`Thank you for your feedback, ${name}!`);
        setResponseColor("green");

        // Clear form fields
        setName("");
        setEmail("");
        setFeedback("");
      } else {
        // Show error message from server response
        setResponseMessage(result.message || "Failed to submit feedback.");
        setResponseColor("red");
      }
    } catch (error) {
      // Handle network or other errors
      setResponseMessage(
        "An error occurred while submitting feedback. Please try again later."
      );
      setResponseColor("red");
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
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/blogs">Blogs</a>
            <a href="/questionnaire">Self Assessment</a>
            <a href="/helpline">Helpline</a>
            <a href="/feedback">Feedback</a>
          </div>
        </div>
      </header>

      <div
        className="feedback-container"
        style={{
          backgroundImage: "url('../assets/s.jpg')", // Corrected path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "40px",
          borderRadius: "8px",
          maxWidth: "600px",
          margin: "auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>We Value Your Feedback</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            placeholder="Your Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>

          <button type="submit">Submit Feedback</button>
        </form>

        <p
          id="responseMessage"
          style={{
            color: responseColor,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {responseMessage}
        </p>
      </div>
    </div>
  );
};

export default Feedback;
