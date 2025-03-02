import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarEvent } from '../interfaces/calendarevent'; 

interface CalendarScreenProps {
  onBack: () => void;
  events: CalendarEvent[];
}

const CalendarScreen: React.FC<CalendarScreenProps> = ({ onBack, events }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const calendarEvents = events.map(event => ({
    title: event.name,
    start: `${event.date}T${event.time.split('-')[0]}`,
    end: `${event.date}T${event.time.split('-')[1]}`,
    allDay: false
  }));

  // Адаптивные настройки для мобильных устройств
  const isMobile = windowWidth <= 768;
  const initialView = isMobile ? "timeGridDay" : "timeGridWeek";
  const headerToolbar = isMobile 
    ? {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridDay'
      }
    : {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      };

  return (
    <div>
      <div className='btn-exit'>
        <button onClick={onBack} className="nav-btn-exit">
          ←
        </button>
        <h2>Календарь событий</h2>
      </div>
      <div style={{ margin: '20px 0' }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={initialView}
          headerToolbar={headerToolbar}
          events={calendarEvents}
          locale="ru"
          height="auto"
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          }}
        />
      </div>
    </div>
  );
};

export default CalendarScreen;