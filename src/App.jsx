import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import your components
import MaritalCounseling from './components/Marital';
import PreMarital from './components/Premarital';
import PostSeparation from './components/Postseparation';
import About from './components/About';
import Blog from './components/Blog';
import Feedback from './components/Feedback';
import Helpline from './components/Helpline';
import Ques from './components/ques'; // Import the PHQ-9 Questionnaire component

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home key="home" />} />

        {/* Counseling Routes */}
        <Route path="/marital" element={<MaritalCounseling />} />
        <Route path="/premarital" element={<PreMarital />} />
        <Route path="/postseparation" element={<PostSeparation />} />

        {/* Additional Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/helpline" element={<Helpline />} />

        {/* PHQ-9 Questionnaire Route */}
        <Route path="/questionnaire" element={<Ques />} />
      </Routes>
    </Router>
  );
}

export default App;
