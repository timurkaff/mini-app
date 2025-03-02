import React from 'react';
import { ForumTopic } from '../interfaces/forumtopic';
import backgroundImage from '../img/back-image.svg';
import calendarIcon from '../img/calendar-icon.svg';

interface ForumScreenProps {
  onBack: () => void;
  topics: ForumTopic[];
  onContestDetails: () => void; 
}

const ForumScreen: React.FC<ForumScreenProps> = ({ onBack, topics, onContestDetails }) => {
  return (
    <div className="forum-screen">
      <div className="btn-exit">
        <button onClick={onBack} className="nav-btn-exit">←</button>
        <h2>Конкурсы</h2>
      </div>
      <div className="forum-topic" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {topics.map((topic, index) => (
          <div key={index} className="forum-all">
            <div className="forum-content">
              <h1 className="forum-title">{topic.title}</h1>
              <p className="forum-subtitle">{topic.description}</p>
            </div>
            <div className="forum-footer">
              <div className="forum-info">
                <img src={calendarIcon} alt="Календарь" className="calendar-icon" />
                <span className="forum-date">{topic.date}</span>
              </div>
              <button className="nav-btn" onClick={onContestDetails}>
                Подробнее →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumScreen;