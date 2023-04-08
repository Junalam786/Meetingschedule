import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ScheduleMeetingForm from "./ScheduleMeetingForm";
import { useNavigate } from 'react-router-dom';
import "./Style.css";
import "./App.css";



function convertToStandard(date, time) {
  let res = new Date(date.getFullYear(), date.getMonth(), date.getDate(), parseInt(time.substring(0, 2)), parseInt(time.substring(3)));
  return res
}

function Calender() {
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [meetings, setMeetings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let old_data = JSON.parse(localStorage.getItem("meeting") || "[]")
    let arr = []
    old_data.forEach((meet) => {
      arr.push(meet)
    })
    setMeetings(arr)
  }, [])

  function handleDateClick(info) {
    setSelectedDate(info.date);
    setShowForm(true);
  }

  function handleScheduleMeeting(formData) {
    let actualDate = convertToStandard(selectedDate, formData.time)
    let old_data = JSON.parse(localStorage.getItem("meeting") || "[]")
    old_data.push({ start: actualDate, ...formData })
    localStorage.setItem("meeting", JSON.stringify(old_data))
    setMeetings([...meetings, { start: actualDate, ...formData }]);
    setShowForm(false);
  }

  function handleViewMeetings() {
    navigate('/meetings');
  }

  return (
    <>
      {showForm && <ScheduleMeetingForm onScheduleMeeting={{ handleScheduleMeeting, showForm, setShowForm }} />}
      <br />
      <button className='button' onClick={handleViewMeetings}>View Meetings</button>
      <div className='container'>
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            start: "prev,next today",
            center: "title",
            end: 'dayGridMonth,dayGridWeek,dayGridDay,dayGridlist'
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          dateClick={handleDateClick}
          displayEventTime="false"
          eventColor='green'
          events={meetings.map(meeting => ({ title: meeting.clientName, start: meeting.start, color: 'red' }))}
        />
      </div>
    </>
  );
}

export default Calender;
