import React, { useState } from 'react';
import './Knowledge.css'
const Knowledge = () => {
  const [activeTab, setActiveTab] = useState('ask');

  return (
    <div className="user-card">
      <div className="card-header">
        <button onClick={() => setActiveTab('ask')}>Ask</button>
        <button onClick={() => setActiveTab('answer')}>Answer</button>
        <button onClick={() => setActiveTab('post')}>Post</button>
      </div>
      <div className="card-content">
        {activeTab === 'ask' && <Ask />}
        {activeTab === 'answer' && <Answer />}
        {activeTab === 'post' && <Post />}
      </div>
    </div>
  );
};

const Ask = () => (
  <div>
    <div className="quoraheader">
    <h2>Ask a Question</h2>
    </div>
    <textarea placeholder="Type your question here..."></textarea>
    <div className="quoraheader">
    <button>Submit</button>
    </div>
    
  </div>
);

const Answer = () => (
  <div>
    <div className="quoraheader">
    <h2>Answer a Question</h2>
    </div>
    
    <textarea placeholder="Type your answer here..."></textarea>
    <div className="quoraheader">
    <button>Submit</button>
    </div>
  </div>
);

const Post = () => (
  <div>
        <div className="quoraheader">
    <h2>Create a Post</h2>
    </div>
    <textarea placeholder="Type your post here..."></textarea>
    <div className="quoraheader">
    <button>Submit</button>
  </div>
  </div>
);

export default Knowledge;
