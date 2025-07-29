// src/EventForm.js
import React, { useState } from "react";
import axios from "axios";

const EventForm = ({ onEventAdd }) => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    reminder: false,
  });

  const handleInputChange = (e) => {
    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new event
    axios
      .post("http://localhost:5000/api/events", newEvent)
      .then((response) => {
        onEventAdd(response.data);
        setNewEvent({ title: "", date: "", reminder: false });
      })
      .catch((error) => console.error(error));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl shadow flex flex-col gap-4 border border-purple-200"
    >
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-purple-700">Title:</label>
        <input
          type="text"
          name="title"
          value={newEvent.title}
          onChange={handleInputChange}
          required
          className="border border-purple-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-gray-800"
          placeholder="Enter event title"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-purple-700">Date:</label>
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
          required
          className="border border-purple-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-gray-800"
        />
      </div>
      <button
        type="submit"
        className="mt-2 bg-purple-600 text-white px-5 py-2 rounded-md font-semibold shadow hover:bg-purple-700 transition"
      >
        Add Event
      </button>
    </form>
  );
};
export default EventForm;
