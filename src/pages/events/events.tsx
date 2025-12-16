import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './events.css';

const Events = () => {
  // State for event filtering
  const [activeFilter, setActiveFilter] = useState('all');
  // State for calendar
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState<Date[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<any[]>([]);

  // Featured events (these will be highlighted at the top)
  const featuredEvents = [
    {
      id: 'f1',
      title: "Chess Night",
      date: "TBD",
      time: "Monthly Event",
      description: "Join us for a relaxed chess meetup monthly—open to all levels. Bring a friend or play with someone new. Coffee specials for all participants.",
      category: "chess",
      price: "$10.00"
    },
    {
      id: 'f2',
      title: "Soccer Match Viewing",
      date: "TBD",
      time: "Match Time",
      description: "Catch live soccer games on our screens with specialty drinks and café snacks during match time at discounted price. $5 cover charge includes access to the viewing.",
      category: "soccer",
      price: "$5.00"
    },
    {
      id: 'f3',
      title: "Art & Sip",
      date: "TBD",
      time: "Evening Event",
      description: "Enjoy a creative break with simple art activities, your favorite Piquant specialty drinks, and a charcuterie board. Ticket includes art supply, one specialty drink, seating, and set up.",
      category: "art",
      price: "$20.00"
    }
  ];

  // Event data - Add specific dates for recurring events
  const events = [
    {
      id: 1,
      title: "Chess Night",
      date: "Monthly",
      formattedDate: "TBD",
      time: "Evening",
      description: "Join us for a relaxed chess meetup monthly—open to all levels. Bring a friend or play with someone new. Coffee specials for all participants.",
      category: "chess",
      price: "$10.00",
      ticketsLeft: 20,
      recurring: false
    },
    {
      id: 2,
      title: "Soccer Match Viewing",
      date: "Match Days",
      formattedDate: "TBD",
      time: "Match Time",
      description: "Catch live soccer games on our screens with specialty drinks and café snacks during match time at discounted price. $5 cover charge includes access to the viewing.",
      category: "soccer",
      price: "$5.00",
      ticketsLeft: 30,
      recurring: false
    },
    {
      id: 3,
      title: "Art & Sip",
      date: "TBD",
      formattedDate: "TBD",
      time: "Evening",
      description: "Enjoy a creative break with simple art activities, your favorite Piquant specialty drinks, and a charcuterie board. Ticket includes art supply, one specialty drink, seating, and set up.",
      category: "art",
      price: "$20.00",
      ticketsLeft: 15,
      recurring: false
    },
  ];

  // Generate calendar days for the month
  useEffect(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // First day of the month
    const firstDayOfMonth = new Date(year, month, 1);
    // Last day of the month
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    // Get the day of the week of the first day (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfWeek = firstDayOfMonth.getDay();
    
    // Calculate days from previous month to show
    const daysFromPrevMonth = firstDayOfWeek;
    
    // Calculate total days to display (42 ensures 6 rows of 7 days)
    const totalDays = 42;
    
    const calendarDaysArray: Date[] = [];
    
    // Add days from previous month
    const prevMonth = new Date(year, month, 0);
    const prevMonthLastDay = prevMonth.getDate();
    for (let i = prevMonthLastDay - daysFromPrevMonth + 1; i <= prevMonthLastDay; i++) {
      calendarDaysArray.push(new Date(year, month - 1, i));
    }
    
    // Add days of current month
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      calendarDaysArray.push(new Date(year, month, i));
    }
    
    // Add days from next month to fill the remaining slots
    const remainingDays = totalDays - calendarDaysArray.length;
    for (let i = 1; i <= remainingDays; i++) {
      calendarDaysArray.push(new Date(year, month + 1, i));
    }
    
    setCalendarDays(calendarDaysArray);
  }, [currentMonth]);

  // Get events for the selected date
  useEffect(() => {
    if (!selectedDate) return;
    
    const day = selectedDate.getDay(); // day of week
    const formattedSelectedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
    
    // Filter events for the selected date or recurring events for the day of week
    const dayEvents = events.filter(event => {
      // Match events on specific date
      if (event.formattedDate === formattedSelectedDate) return true;
      
      // Match recurring events on the day of week
      if (event.recurring && event.recurringDay === day) return true;
      
      return false;
    });
    
    // Apply the category filter to the selected events
    const filteredDayEvents = activeFilter === 'all' 
      ? dayEvents 
      : dayEvents.filter(event => event.category === activeFilter);
    
    setSelectedEvents(filteredDayEvents);
  }, [selectedDate, activeFilter]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  // Function to change month
  const changeMonth = (offset: number) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + offset);
    setCurrentMonth(newMonth);
  };

  // Function to check if a day has events
  const hasEvents = (date: Date) => {
    const day = date.getDay(); // day of week
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    
    return events.some(event => {
      // Match events on specific date
      if (event.formattedDate === formattedDate && (activeFilter === 'all' || event.category === activeFilter)) return true;
      
      // Match recurring events on the day of week
      if (event.recurring && event.recurringDay === day && (activeFilter === 'all' || event.category === activeFilter)) return true;
      
      return false;
    });
  };

  // Function to format date for the badge
  const formatDateForBadge = (dateStr: string) => {
    if (dateStr.startsWith("Every")) {
      return { month: "WEEKLY", day: "" };
    }
    
    try {
      const parts = dateStr.split(" ");
      return {
        month: parts[0].substring(0, 3).toUpperCase(),
        day: parts[1].replace(",", "")
      };
    } catch (e) {
      return { month: "TBD", day: "" };
    }
  };

  // Get month name and year
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthName = monthNames[currentMonth.getMonth()];
  const currentYear = currentMonth.getFullYear();
  
  // Day names for the week
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="events-page">
      {/* Hero Section */}
      <div className="events-hero">
        <div className="events-hero-content">
          <h1>Upcoming Events</h1>
          <p>Join us for chess nights, soccer viewing, and creative experiences</p>
        </div>
      </div>

      {/* Featured Events Section */}
      <section className="featured-events-section">
        <div className="container">
          <div className="featured-events-header">
            <h2>Featured Events</h2>
            <p>Don't miss these special events happening at Piquant Café</p>
          </div>
          
          <div className="featured-events-grid">
            {featuredEvents.map((event) => (
              <div className="featured-event" key={event.id}>
                <div className="event-icon-wrapper">
                  {event.category === 'chess' && (
                    <svg className="event-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,22H5V20H19V22M17,10C15.58,10 14.26,10.77 13.55,12H13V7H16V5H13V2H11V5H8V7H11V12H10.45C9.74,10.77 8.42,10 7,10C4.79,10 3,11.79 3,14C3,16.21 4.79,18 7,18H17C19.21,18 21,16.21 21,14C21,11.79 19.21,10 17,10Z"/>
                    </svg>
                  )}
                  {event.category === 'soccer' && (
                    <svg className="event-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,3C7.03,3 3,7.03 3,12C3,16.97 7.03,21 12,21C16.97,21 21,16.97 21,12C21,7.03 16.97,3 12,3M12,4.44L14.47,7.47L12,8.5L9.53,7.47L12,4.44M5.83,8.23L9.3,8.94L9.14,12.5L6.17,10.77L5.83,8.23M18.17,8.23L17.83,10.77L14.86,12.5L14.7,8.94L18.17,8.23M8.5,14.36L11,14.73V18.56L8.5,14.36M15.5,14.36L13,18.56V14.73L15.5,14.36M10.24,18.17L10.5,15.5H13.5L13.76,18.17L12,19.56L10.24,18.17Z"/>
                    </svg>
                  )}
                  {event.category === 'art' && (
                    <svg className="event-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z"/>
                    </svg>
                  )}
                </div>
                <div className="featured-event-content">
                  <span className="event-category-tag">{event.category}</span>
                  <h3>{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <div className="event-meta">
                    <div className="event-detail">
                      <span className="event-detail-label">Date</span>
                      <span className="event-detail-value">{event.date}</span>
                    </div>
                    <div className="event-detail">
                      <span className="event-detail-label">Price</span>
                      <span className="event-detail-value">{event.price}</span>
                    </div>
                  </div>
                  <button className="btn-buy-ticket">
                    Buy Tickets
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,4L10.59,5.41L16.17,11H4V13H16.17L10.59,18.59L12,20L20,12L12,4Z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories Filter */}
      <section className="events-filter-section">
        <div className="container">
          <div className="events-filter">
            <button 
              className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              All Events
            </button>
            <button 
              className={`filter-button ${activeFilter === 'chess' ? 'active' : ''}`}
              onClick={() => handleFilterClick('chess')}
            >
              Chess
            </button>
            <button 
              className={`filter-button ${activeFilter === 'soccer' ? 'active' : ''}`}
              onClick={() => handleFilterClick('soccer')}
            >
              Soccer
            </button>
            <button 
              className={`filter-button ${activeFilter === 'art' ? 'active' : ''}`}
              onClick={() => handleFilterClick('art')}
            >
              Art & Sip
            </button>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="events-calendar-section">
        <div className="container">
          <div className="calendar-header">
            <h2>Events Calendar</h2>
            <div className="calendar-navigation">
              <button className="calendar-nav-btn" onClick={() => changeMonth(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#471f3a">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              <h3 className="calendar-month">{currentMonthName} {currentYear}</h3>
              <button className="calendar-nav-btn" onClick={() => changeMonth(1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#471f3a">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="calendar-container">
            <div className="calendar-grid">
              {/* Day names */}
              {dayNames.map(day => (
                <div className="calendar-day-name" key={day}>
                  {day}
                </div>
              ))}
              
              {/* Calendar days */}
              {calendarDays.map((day, index) => {
                const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
                const isToday = new Date().toDateString() === day.toDateString();
                const isSelected = selectedDate?.toDateString() === day.toDateString();
                const hasEventsOnDay = hasEvents(day);
                
                return (
                  <div 
                    key={index}
                    className={`calendar-day ${!isCurrentMonth ? 'other-month' : ''} ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${hasEventsOnDay ? 'has-events' : ''}`}
                    onClick={() => setSelectedDate(day)}
                  >
                    <span className="calendar-day-number">{day.getDate()}</span>
                    {hasEventsOnDay && <span className="calendar-event-indicator"></span>}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Selected day events */}
          <div className="calendar-events">
            <h3 className="selected-date">
              {selectedDate ? `Events for ${selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}` : 'Select a date to view events'}
            </h3>
            
            {selectedEvents.length > 0 ? (
              <div className="selected-events-list">
                {selectedEvents.map(event => (
                  <div className="calendar-event-card" key={event.id}>
                    <div className="calendar-event-icon">
                      {event.category === 'chess' && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19,22H5V20H19V22M17,10C15.58,10 14.26,10.77 13.55,12H13V7H16V5H13V2H11V5H8V7H11V12H10.45C9.74,10.77 8.42,10 7,10C4.79,10 3,11.79 3,14C3,16.21 4.79,18 7,18H17C19.21,18 21,16.21 21,14C21,11.79 19.21,10 17,10Z"/>
                        </svg>
                      )}
                      {event.category === 'soccer' && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,3C7.03,3 3,7.03 3,12C3,16.97 7.03,21 12,21C16.97,21 21,16.97 21,12C21,7.03 16.97,3 12,3M12,4.44L14.47,7.47L12,8.5L9.53,7.47L12,4.44M5.83,8.23L9.3,8.94L9.14,12.5L6.17,10.77L5.83,8.23M18.17,8.23L17.83,10.77L14.86,12.5L14.7,8.94L18.17,8.23M8.5,14.36L11,14.73V18.56L8.5,14.36M15.5,14.36L13,18.56V14.73L15.5,14.36M10.24,18.17L10.5,15.5H13.5L13.76,18.17L12,19.56L10.24,18.17Z"/>
                        </svg>
                      )}
                      {event.category === 'art' && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z"/>
                        </svg>
                      )}
                    </div>
                    <div className="calendar-event-content">
                      <span className="calendar-event-category">{event.category}</span>
                      <h4>{event.title}</h4>
                      <p className="calendar-event-description">{event.description}</p>
                      <div className="calendar-event-footer">
                        <span className="calendar-event-price">{event.price}</span>
                        <button className="btn-sm-buy-ticket">Buy Tickets</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-events-message">
                <p>No events scheduled for this date.</p>
                <p>Check other dates or <Link to="/contact" className="contact-link">contact us</Link> to host your own event!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Events CTA Section */}
      <section className="events-cta-section">
        <div className="cta-bg-icons">
          <div className="cta-icon cta-icon-coffee-beans">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#471f3a">
              <path d="M12,4C8.97,4 6.5,5.4 6.5,7C6.5,8.6 8.97,10 12,10C15.03,10 17.5,8.6 17.5,7C17.5,5.4 15.03,4 12,4M8.84,8.2C8.5,8.32 8.45,8.55 8.76,8.72C9.08,8.9 9.61,9 10.16,9C11.17,9 12,8.5 12,7.9C12,7.3 11.17,6.8 10.16,6.8C9.93,6.8 9.71,6.83 9.5,6.89C9.05,7.03 8.84,7.9 8.84,8.2M16.4,12.34L12.8,15.93V16H13.14L15.93,13.21V10.4C16.12,10.18 16.27,10 16.4,9.79C16.56,10.57 16.97,11.71 16.4,12.34M6.5,13C6.5,14.6 8.97,16 12,16C15.03,16 17.5,14.6 17.5,13C17.5,11.4 15.03,10 12,10C8.97,10 6.5,11.4 6.5,13M8.4,13.64C8.06,13.76 8.03,13.97 8.33,14.14C8.66,14.32 9.19,14.42 9.73,14.42C10.75,14.42 11.57,13.93 11.57,13.33C11.57,12.73 10.73,12.23 9.72,12.23C9.5,12.23 9.29,12.26 9.08,12.31C8.62,12.46 8.38,13.39 8.4,13.64M17.5,16C17.5,17.6 15.03,19 12,19C8.97,19 6.5,17.6 6.5,16C6.5,14.4 8.97,13 12,13C15.03,13 17.5,14.4 17.5,16M8.88,17.73C8.53,17.85 8.5,18.08 8.81,18.25C9.14,18.43 9.66,18.53 10.21,18.53C11.23,18.53 12.05,18.03 12.05,17.43C12.05,16.83 11.22,16.33 10.21,16.33C9.98,16.33 9.77,16.36 9.56,16.41C9.1,16.57 8.86,17.5 8.88,17.73M12,20C8.97,20 6.5,18.6 6.5,17C6.5,15.4 8.97,14 12,14C15.03,14 17.5,15.4 17.5,17C17.5,18.6 15.03,20 12,20Z" />
            </svg>
          </div>
          <div className="cta-icon cta-icon-coffee-cup">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#471f3a">
              <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20Z" />
            </svg>
          </div>
          <div className="cta-icon cta-icon-steam">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#471f3a">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8M10.5,8A1.5,1.5 0 0,1 12,9.5A1.5,1.5 0 0,1 10.5,11A1.5,1.5 0 0,1 9,9.5A1.5,1.5 0 0,1 10.5,8M15,14C14.5,14.4 13.8,14.7 13,14.9V17H14A1,1 0 0,1 15,18H17A1,1 0 0,1 18,19A1,1 0 0,1 17,20H7A1,1 0 0,1 6,19A1,1 0 0,1 7,18H9V14.9C8.2,14.7 7.5,14.4 7,14C6.5,13.6 6.2,12.9 6,12C7.3,12.6 8.6,13 10,13H14C15.4,13 16.7,12.6 18,12C17.8,12.9 17.5,13.6 17,14V14Z" />
            </svg>
          </div>
          <div className="cta-icon cta-icon-coffee-grain">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#471f3a">
              <path d="M11,13V5A3,3 0 0,0 8,2A3,3 0 0,0 5,5A3,3 0 0,0 8,8H10V13A5,5 0 0,0 5,18A5,5 0 0,0 10,23H12A2,2 0 0,1 10,21A3,3 0 0,1 7,18A3,3 0 0,1 10,15A3,3 0 0,1 13,18A3,3 0 0,1 10,21A2,2 0 0,1 12,23H14A5,5 0 0,0 19,18A5,5 0 0,0 14,13V8H16A3,3 0 0,0 19,5A3,3 0 0,0 16,2A3,3 0 0,0 13,5V13A5,5 0 0,0 18,18A5,5 0 0,0 23,13H21A3,3 0 0,1 18,16A3,3 0 0,1 15,13A3,3 0 0,1 18,10A3,3 0 0,1 21,13H23A5,5 0 0,0 18,8A5,5 0 0,0 13,13V5A1,1 0 0,1 14,4A1,1 0 0,1 15,5A1,1 0 0,1 14,6H13V5A3,3 0 0,0 10,2V4A1,1 0 0,1 9,5A1,1 0 0,1 10,6A1,1 0 0,1 11,5V2A3,3 0 0,0 8,5V13A5,5 0 0,0 13,18A5,5 0 0,0 18,23H20A2,2 0 0,1 18,21A3,3 0 0,1 15,18A3,3 0 0,1 18,15A3,3 0 0,1 21,18A3,3 0 0,1 18,21A2,2 0 0,1 20,23A5,5 0 0,0 24,18A5,5 0 0,0 19,13H17A3,3 0 0,1 14,16A3,3 0 0,1 11,13Z" />
            </svg>
          </div>
          <div className="cta-icon cta-icon-coffee-plant">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#471f3a">
              <path d="M20,8C18.22,8 16.64,8.86 15.69,10.15C15.88,9.59 16,8.97 16,8.33C16,5.38 13.5,3 10.5,3C8.08,3 6,4.67 5.37,6.91C6.42,5.16 8.34,4 10.5,4C12.93,4 15,5.91 15.34,8.35C14.26,6.9 12.48,6 10.5,6C8.03,6 5.96,7.67 5.22,10H4.25C4.9,6.97 7.47,4.73 10.5,4.73C13.53,4.73 16.1,6.97 16.75,10H18.75C18.75,8.18 19.68,6.59 21.07,5.67C21.07,4.67 20.13,3.75 18.75,3.75C17.6,3.75 16.57,4.39 16.57,5.79C16.57,6.79 17.32,7.86 18.45,7.94C17.11,7.64 16,6.29 16,4.68C16,3 17.8,1.75 19.5,1.75C21.21,1.75 23,3 23,5.5C23,9.5 20,12 20,12V12M11.11,12.35C11.11,15.85 8.93,17.5 6.33,17.5C3.72,17.5 1.5,15.85 1.5,12.35C1.5,8.85 3.67,9.35 6.28,9.35C8.88,9.35 11.11,8.85 11.11,12.35M9.61,11.85C9.61,10.3 8.9,10.85 6.3,10.85C3.69,10.85 3,10.3 3,11.85C3,13.4 3.7,16 6.3,16C8.9,16 9.61,13.4 9.61,11.85Z" />
            </svg>
          </div>
        </div>
        <div className="container">
          <div className="events-cta-content">
            <h2>Want to Host Your Own Event?</h2>
            <p>We offer private event spaces for birthdays, meetings, and more. Contact us to discuss your needs!</p>
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Events Newsletter Section */}
      <section className="events-newsletter-section">
        <div className="container">
          <div className="events-newsletter-content">
            <div className="newsletter-text">
              <h2>Never Miss an Event</h2>
              <p>Subscribe to our newsletter to stay updated on upcoming events and special promotions.</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn-subscribe">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
