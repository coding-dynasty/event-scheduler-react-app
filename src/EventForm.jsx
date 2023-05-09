import './eventForm.scss'

import  { useState } from "react";

function EventForm(props) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    props.onAddEvent({ name: eventName, date: eventDate });
    setEventName("");
    setEventDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Event name:
        <input
          type="text"
          value={eventName}
          onChange={(event) => setEventName(event.target.value)}
        />
      </label>
      <label>
        Event date:
        <input
          type="date"
          value={eventDate}
          onChange={(event) => setEventDate(event.target.value)}
        />
      </label>
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventForm;
