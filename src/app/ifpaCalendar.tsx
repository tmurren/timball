export default async function ifpaCalendar() {
  const getEventCalendar = async () => {
    const calendarRaw = await fetch('https://api.ifpapinball.com/v1/calendar/search?api_key=71b6ed213f6dca99b8a35dec41f7e1f8&address=141%20Mount%20Vernon%20Ave%20Alexandria%20VA%2022301&m=110');
    const calendarJson = await calendarRaw.json();
    return calendarJson;
  }

  const eventCalendar = await getEventCalendar();
  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const vaResults = eventCalendar.calendar.filter((event:any) => event.state === 'VA' && event.event_name != 'League' && event.tournament_name != 'Carpool - Get Rated');
  const vaResultsReturn = vaResults.map((event:any) => {
    let tournamentDate = event.start_date;
    let dateAsDate = new Date(tournamentDate);
    let dayOfWeek = dateAsDate.getDay();
    return <div key={event.calendar_id} className="ifpa-event-item">
      <h3>{event.tournament_name}</h3>
      <ul className="unlisted inline">
        <li>{event.start_date}</li>
        <li>{dayNames[dayOfWeek]}</li>
        <li>{event.city}, {event.state}</li>
      </ul>
    </div>
  });

  const otherResults = eventCalendar.calendar.filter((event:any) => event.state != 'VA' && event.event_name != 'League');
  const otherResultsReturn = otherResults.map((event:any) => { 
    let tournamentDate = event.start_date;
    let dateAsDate = new Date(tournamentDate);
    let dayOfWeek = dateAsDate.getDay();
    return <div key={event.calendar_id} className="ifpa-event-item">
      <h3>{event.tournament_name}</h3>
      <ul className="unlisted inline">
        <li>{event.start_date}</li>
        <li>{dayNames[dayOfWeek]}</li>
        <li>{event.city}, {event.state}</li>
      </ul>
    </div>
  });
  
  return (
    <div className="ifpa-calendar">

      <div className="paper">
        <h2 className="h1-styling">VA Event Calendar</h2>
        {vaResultsReturn}
      </div>

      <div className="paper">
        <h2 className="h1-styling">Other Event Calendar</h2>
        {otherResultsReturn}
      </div>

    </div>
  )
}
