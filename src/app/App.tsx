import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import ProfileInfo from '../components/ProfileInfo';
import Navigation from '../components/Navigation';
import RatingScreen from '../components/RatingScreen';
import ActivitiesScreen from '../components/ActivitiesScreen';
import CalendarScreen from '../components/CalendarScreen';
import ForumScreen from '../components/ForumTopic';
import SettingsScreen from '../components/SettingsScreen';
import Achievements from '../components/Achievements';
import AllAchievements from '../components/AllAchievements';
import { Student, CalendarEvent, ForumTopic } from '../interfaces';
import ContestDetails from '../components/ContestDetalis';

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        expand: () => void;
        ready: () => void;
        HapticFeedback: {
          impactOccurred: (style: string) => void;
        };
        close: () => void;
      };
    };
  }
}

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<string>('main');
  const [student, setStudent] = useState<Student>({
    name: "Загрузка...",
    direction: "загрузка...",
    course: "загрузка...",
    group: "загрузка..."
  });
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [topics, setTopics] = useState<ForumTopic[]>([]);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand();
      tg.ready();

      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains('nav-btn')) {
          tg.HapticFeedback.impactOccurred('light');
        }
      });
    }

    loadUserData();
  }, []);

  const loadUserData = () => {
    const mockStudent: Student = {
      name: "Иван Иванов",
      direction: "frontend",
      course: "3",
      group: "frontend(вт-чт 18:00)"
    };


    const mockEvents: CalendarEvent[] = [
      { date: '2025-03-02', name: 'Дополнительная лекция "Тайм-менеджмент"', time: '12:00-14:00' },
      { date: '2025-03-04', name: 'Frontend', time: '18:00-19:30' },
      { date: '2025-03-07', name: 'Frontend', time: '18:00-19:30' }
    ];

    const mockTopics: ForumTopic[] = [
      {
        title: "БОЛЬШОЙ КОНКУРС",
        badge: "Важное",
        description: "Разработай будущее",
        date: "10.02 - 03.03",
      }
    ];

    setStudent(mockStudent);
    setEvents(mockEvents);
    setTopics(mockTopics);
  };

  const handleNavigate = (screen: string) => {
    setActiveScreen(screen);
  };

  const handleBack = () => {
    setActiveScreen('main');
  };

  return (
    <div id="app">
      <Header />
      <div className={`screen ${activeScreen === 'main' ? 'active' : ''}`} id="main-screen">
        <ProfileInfo student={student} />
        <Navigation onNavigate={handleNavigate}/>
      </div>

      <div className={`screen ${activeScreen === 'rating' ? 'active' : ''}`} id="rating-screen">
        <RatingScreen onBack={handleBack}/>
      </div>

      <div className={`screen ${activeScreen === 'activities' ? 'active' : ''}`} id="activities-screen">
        <ActivitiesScreen onBack={handleBack} />
      </div>

      <div className={`screen ${activeScreen === 'calendar' ? 'active' : ''}`} id="calendar-screen">
        <CalendarScreen onBack={handleBack} events={events} />
      </div>

      <div className={`screen ${activeScreen === 'forum' ? 'active' : ''}`} id="forum-screen">
        <ForumScreen onBack={handleBack} topics={topics} onContestDetails={() => setActiveScreen('contest-details')} />
      </div>

      <div className={`screen ${activeScreen === 'contest-details' ? 'active' : ''}`} id="contest-details-screen">
        <ContestDetails onBack={handleBack}/>
      </div>

      <div className={`screen ${activeScreen === 'settings' ? 'active' : ''}`} id="settings-screen">
        <SettingsScreen onBack={handleBack} />
      </div>
      <div className={`screen ${activeScreen === 'achievements' ? 'active' : ''}`} id="achievements-screen">
        <Achievements onBack={handleBack} onViewAll={() => setActiveScreen('all-achievements')} />
      </div>

      <div className={`screen ${activeScreen === 'all-achievements' ? 'active' : ''}`} id="all-achievements-screen">
        <AllAchievements
          onBack={() => setActiveScreen('achievements')}
          onMyAchievements={() => setActiveScreen('achievements')}
        />
      </div>

    </div>
  );
};

export default App;