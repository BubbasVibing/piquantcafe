import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './events.css';

// Import placeholder images (you can replace these with actual event images later)
import chessImage from '../../assets/coffee-image.jpg'; // Placeholder - replace with chess event image
import soccerImage from '../../assets/food-image.jpg';  // Placeholder - replace with soccer event image
import quizzoImage from '../../assets/cafe-image.jpg';  // Placeholder - replace with quizzo event image

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
      title: "Championship Chess Tournament",
      date: "Saturday, June 15, 2023",
      time: "2:00 PM - 6:00 PM",
      description: "Join us for our monthly chess tournament! Players of all skill levels welcome. Prizes for winners and coffee specials for all participants.",
      image: chessImage,
      category: "chess",
      price: "$10.00",
      ticketsLeft: 12
    },
    {
      id: 'f2',
      title: "Soccer Finals Viewing Party",
      date: "Sunday, June 18, 2023",
      time: "3:30 PM - 6:30 PM",
      description: "Watch the championship match on our big screen with fellow soccer enthusiasts! Special menu featuring international dishes and exclusive drink deals.",
      image: soccerImage,
      category: "soccer",
      price: "$8.00",
      ticketsLeft: 15
    },
    {
      id: 'f3',
      title: "Trivia Night Championship",
      date: "Friday, June 23, 2023",
      time: "7:00 PM - 10:00 PM",
      description: "Our biggest trivia event of the year! Teams compete for the grand prize and bragging rights. Food and drink specials all night long.",
      image: quizzoImage,
      category: "quizzo",
      price: "$5.00",
      ticketsLeft: 20
    }
  ];

  // Event data - Add specific dates for recurring events
  const events = [
    {
      id: 1,
      title: "Weekly Chess Club",
      date: "Every Tuesday",
      formattedDate: "2023-06-06", // Example Tuesday
      time: "6:00 PM - 9:00 PM",
      description: "Casual chess meetup for players of all levels. Bring your own board or use ours. Coached sessions available.",
      image: chessImage,
      category: "chess",
      price: "Free",
      ticketsLeft: "Unlimited",
      recurring: true,
      recurringDay: 2 // Tuesday (0 = Sunday, 1 = Monday, etc.)
    },
    {
      id: 2,
      title: "World Cup Watch Party",
      date: "June 20, 2023",
      formattedDate: "2023-06-20",
      time: "3:00 PM - 5:30 PM",
      description: "Watch the big game on our large screens! Special menu featuring international dishes and drink specials.",
      image: soccerImage,
      category: "soccer",
      price: "$5.00",
      ticketsLeft: 24,
      recurring: false
    },
    {
      id: 3,
      title: "Premier League Finals",
      date: "June 24, 2023",
      formattedDate: "2023-06-24",
      time: "2:00 PM - 4:30 PM",
      description: "Don't miss the excitement of the finals! Watch with fellow fans while enjoying our game day menu.",
      image: soccerImage,
      category: "soccer",
      price: "$5.00",
      ticketsLeft: 18,
      recurring: false
    },
    {
      id: 4,
      title: "Quizzo Night: Coffee Edition",
      date: "Every Thursday",
      formattedDate: "2023-06-08", // Example Thursday
      time: "7:00 PM - 9:00 PM",
      description: "Test your knowledge on coffee, food, and general trivia! Teams of up to 5 people. Weekly prizes!",
      image: quizzoImage,
      category: "quizzo",
      price: "Free",
      ticketsLeft: "Unlimited",
      recurring: true,
      recurringDay: 4 // Thursday (0 = Sunday, 1 = Monday, etc.)
    },
    {
      id: 5,
      title: "Monthly Chess Tournament",
      date: "July 8, 2023",
      formattedDate: "2023-07-08",
      time: "1:00 PM - 6:00 PM",
      description: "Competitive chess tournament with timed matches. Entry fee includes one free beverage of your choice.",
      image: chessImage,
      category: "chess",
      price: "$10.00",
      ticketsLeft: 16,
      recurring: false
    },
    {
      id: 6,
      title: "Themed Quizzo: Movies & TV",
      date: "June 22, 2023",
      formattedDate: "2023-06-22",
      time: "7:00 PM - 9:30 PM",
      description: "Special themed trivia night focusing on movies and TV shows. Costume wearing encouraged!",
      image: quizzoImage,
      category: "quizzo",
      price: "$2.00",
      ticketsLeft: 30,
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
          <p>Join us for exciting events, competitions, and gatherings</p>
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
                <div className="featured-event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="event-date-badge">
                    <span className="event-month">{formatDateForBadge(event.date).month}</span>
                    <span className="event-day">{formatDateForBadge(event.date).day}</span>
                  </div>
                  <div className="event-category-tag">{event.category}</div>
                </div>
                <div className="featured-event-content">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <div className="event-time">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#471f3a">
                        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM17 13H11V7H13V11H17V13Z"/>
                      </svg>
                      <span>{event.date}, {event.time}</span>
                    </div>
                    <div className="event-tickets">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#471f3a">
                        <path d="M22 10V6C22 4.89 21.1 4 20 4H4C2.9 4 2 4.89 2 6V10C3.11 10 4 10.9 4 12S3.11 14 2 14V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V14C20.9 14 20 13.1 20 12S20.9 10 22 10ZM20 8.54C18.81 9.23 18 10.53 18 12S18.81 14.77 20 15.46V18H4V15.46C5.19 14.77 6 13.47 6 12C6 10.5 5.2 9.23 4 8.54L4 6H20V8.54Z"/>
                      </svg>
                      <span>{event.ticketsLeft} Tickets Left</span>
                    </div>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <div className="event-footer">
                    <span className="event-price">{event.price}</span>
                    <button className="btn-buy-ticket">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 21H20V8H4V21ZM14 15H18V11H14V15ZM6 15H12V17H6V15ZM6 11H12V13H6V11Z"/>
                        <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2 6.89 2 8V21C2 22.11 2.89 23 4 23H20C21.11 23 22 22.11 22 21V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM20 21H4V8H20V21Z"/>
                      </svg>
                      Buy Tickets
                    </button>
                  </div>
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
              className={`filter-button ${activeFilter === 'quizzo' ? 'active' : ''}`}
              onClick={() => handleFilterClick('quizzo')}
            >
              Quizzo
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
                    <div className="calendar-event-image">
                      <img src={event.image} alt={event.title} />
                      <div className="calendar-event-category">{event.category}</div>
                    </div>
                    <div className="calendar-event-content">
                      <h4>{event.title}</h4>
                      <div className="calendar-event-time">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#471f3a">
                          <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM17 13H11V7H13V11H17V13Z"/>
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      <p className="calendar-event-description">{event.description}</p>
                      <div className="calendar-event-footer">
                        <span className="calendar-event-price">{event.price}</span>
                        <div className="calendar-event-tickets-buy">
                          <span className="calendar-event-tickets">{event.ticketsLeft} tickets left</span>
                          <button className="btn-sm-buy-ticket">Buy Tickets</button>
                        </div>
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
