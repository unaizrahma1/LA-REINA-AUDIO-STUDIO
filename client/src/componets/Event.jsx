import React, { useState, useEffect } from "react";
import axios from "axios";
import EventForm from "./EventForm.jsx";
import EventList from "./EventList.jsx";
import Header from "./Header.jsx";

export default function Event() {
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState(null); // Placeholder for user state

  useEffect(() => {
    // Fetch events from the server
    axios
      .get("https://la-reina-audio-studio-1.onrender.com/api/events")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleEventAdd = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleEventDelete = (id) => {
    // Delete an event
    axios
      .delete(`https://la-reina-audio-studio-1.onrender.com/api/events/${id}`)
      .then(() => setEvents(events.filter((event) => event._id !== id)))
      .catch((error) => console.error(error));
  };

  const handleToggleReminder = (eventId) => {
    // Find the event by ID
    const selectedEvent = events.find((event) => event._id === eventId);

    // Toggle the reminder status
    const updatedEvent = {
      ...selectedEvent,
      reminder: !selectedEvent.reminder,
    };

    // Update the event in the database
    axios
      .put(`https://la-reina-audio-studio-1.onrender.com/api/events/${eventId}`, updatedEvent)
      .then(() => {
        // If the update is successful, update the events in the state
        const updatedEvents = events.map((event) =>
          event._id === eventId ? updatedEvent : event
        );
        setEvents(updatedEvents);
      })
      .catch((error) =>
        console.error(
          `Error updating reminder status for event with ID ${eventId}:`,
          error
        )
      );
  };

  const onEventEdit = (eventId, updatedData) => {
    // Update the event in the database
    axios
      .put(`https://la-reina-audio-studio-1.onrender.com/api/events/${eventId}`, updatedData)
      .then(() => {
        // If the update is successful, update the events in the state
        const updatedEvents = events.map((event) =>
          event._id === eventId ? { ...event, ...updatedData } : event
        );
        setEvents(updatedEvents);
      })
      .catch((error) =>
        console.error(`Error updating event with IDdiv ${eventId}:`, error)
      );
  };
  return (
    <div
      className="bg-gradient-to-br from-purple-100 to-indigo-100 p-4 md:p-8"
      style={{ minHeight: "100vh", height: "auto" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-2 text-center">
            <p className="text-blue-100 text-lg">
              Organize and manage your events efficiently
            </p>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="mb-12 flex flex-col justify-center">
                <EventForm onEventAdd={handleEventAdd} />
              </div>
              <div>
                <EventList
                  events={events}
                  onEventDelete={handleEventDelete}
                  onToggleReminder={handleToggleReminder}
                  onEventEdit={onEventEdit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
