import React, { useState } from 'react';
import "./Style.css"

function ScheduleMeetingForm({ onScheduleMeeting }) {
  const { handleScheduleMeeting, showForm, setShowForm } = onScheduleMeeting
  const [clientName, setClientName] = useState('');
  const [duration, setDuration] = useState(0);
  const [time, setTime] = useState('00:00 pm');
  const [cost, setCost] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();

    handleScheduleMeeting({ clientName, duration, time, cost });
    setClientName('');
    setDuration('');
    setTime('');
    setCost('');
  }

  function handleCloseForm(event) {
    event.preventDefault();
    setShowForm(false);
  }

  return (
    <div className='popup-container'>
      <a className='close' onClick={handleCloseForm}>X</a>
      {showForm &&
        <form onSubmit={handleSubmit}>
          <label>
            Client Name&ensp;
            <input type="text" value={clientName} onChange={(event) => setClientName(event.target.value)} required />
          </label>
          <br />
          <br />
          <label>
            Start time&ensp;
            <input type="time" value={time} onChange={(event) => setTime(event.target.value)} required />
          </label>
          <br />
          <br />
          <label>
            Duration&ensp;
            <input type="number" value={duration} onChange={(event) => setDuration(event.target.value)} required />
          </label>
          <br />
          <br />
          <label>
            Cost&ensp;
            <input type="number" value={cost} onChange={(event) => setCost(event.target.value)} required />
          </label>
          <br />
          <br />
          <button type="submit">Schedule Meeting</button>
        </form>
      }
    </div>
  );
}

export default ScheduleMeetingForm;


