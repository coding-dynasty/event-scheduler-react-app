/* eslint-disable react/prop-types */
import './eventList.scss'

function EventList(props) {
  return (
    <div>
      <h2>Events:</h2>
      <ul>
        {props.events.map((event, index) => (
          <li key={index}>
            {event.name} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
