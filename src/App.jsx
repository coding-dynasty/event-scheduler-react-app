import './App.scss'

import EventForm from "./EventForm";
import EventList from "./EventList";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div className="App">
      <h1>Event Scheduler</h1>
      <EventForm onAddEvent={addEvent} />
      <EventList events={events} />
    </div>
  );
}

export default App;
