import React, { useState } from "react";
import "../styles/ques.css";

const PHQ9Form = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [totalScore, setTotalScore] = useState(0);
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");
  const [emoji, setEmoji] = useState("");
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [isFormHidden, setIsFormHidden] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userName || !userEmail) {
      alert("Name and email are required to submit the test.");
      return;
    }

    let score = 0;
    // Loop through all form elements (radio buttons)
    const formData = new FormData(event.target);
    formData.forEach((value, key) => {
      if (key.startsWith("q")) {
        const numericValue = parseInt(value, 10);
        if (!isNaN(numericValue)) {
          score += numericValue;
        }
      }
    });

    // Determine severity and message
    let severityText = "";
    let messageText = "";
    let emojiText = "";

    if (score === 0) {
      severityText = "No depression";
      messageText = `Great, ${userName}! You have no signs of depression. Keep maintaining your mental well-being!`;
      emojiText = "😊";
    } else if (score >= 1 && score <= 4) {
      severityText = "Minimal depression";
      messageText = `Hi ${userName}, this might be due to stress. No need to worry—you can take steps to manage it yourself.`;
      emojiText = "🌟";
    } else if (score >= 5 && score <= 9) {
      severityText = "Mild depression";
      messageText = `${userName}, consider stress-relieving activities or talking to a trusted person.`;
      emojiText = "💡";
    } else if (score >= 10 && score <= 14) {
      severityText = "Moderate depression";
      messageText = `It may be helpful to consult a mental health professional for guidance, ${userName}.`;
      emojiText = "🧠";
    } else if (score >= 15 && score <= 19) {
      severityText = "Moderately severe depression";
      messageText = `${userName}, meeting with a psychiatrist or therapist is strongly recommended.`;
      emojiText = "🩺";
    } else if (score >= 20) {
      severityText = "Severe depression";
      messageText = `${userName}, please seek immediate help from a mental health professional.`;
      emojiText = "🚨";
    }

    setTotalScore(score);
    setSeverity(severityText);
    setMessage(messageText);
    setEmoji(emojiText);
    setIsResultVisible(true);
    setIsFormHidden(true);

    // Send data to the server to store in MongoDB
    const testData = {
      name: userName,
      email: userEmail,
      score,
      severity: severityText,
    };

    fetch("http://localhost:5001/api/saveTestResult", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Test results saved successfully.");
        } else {
          console.error("Failed to save test results.");
        }
      })
      .catch((error) => {
        console.error("Error saving test results:", error);
      });
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
            <a href="/blogs" style={{ fontWeight: 'bold' }}>
              Blogs
            </a>
            <a href="/questionnaire">Self Assessment</a>
            <a href="/helpline">Helpline</a>
            <a href="/feedback">Feedback</a>
          </div>
        </div>
      </header>
      <div>
        <header>
          <h1>Self Assessment Test</h1>
        </header>

        <div className="container">
          {!isFormHidden && (
            <form id="phq9-form" onSubmit={handleSubmit}>
              <div className="user-info">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>

              <p>
                Over the last 2 weeks, how often have you been bothered by any of
                the following problems?
              </p>

              {/* Questions */}
              {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((question) => (
                <div key={question} className="question">
                  <p>{`Question ${question}: Description for the question`}</p>
                  {["0", "1", "2", "3"].map((value) => (
                    <label key={value}>
                      <input
                        type="radio"
                        name={`q${question}`}
                        value={value}
                        required
                      />{" "}
                      {`Option ${value}`}
                    </label>
                  ))}
                </div>
              ))}

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          )}

          {isResultVisible && (
            <div id="result">
              <h2>Your Results</h2>
              <p id="score">Your total score is: {totalScore}</p>
              <p id="severity">Depression Severity: {severity}</p>
              <p id="message">
                {emoji} {message}
              </p>
            </div>
          )}
        </div>

        <footer>
          <p>&copy; 2024 PHQ-9 Assessment Tool</p>
        </footer>
      </div>
    </div>
  );
};

export default PHQ9Form;
