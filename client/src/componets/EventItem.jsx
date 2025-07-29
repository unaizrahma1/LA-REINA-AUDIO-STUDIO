// src/EventItem.js
import React, { useEffect, useState } from "react";
import moment from "moment";

const EventItem = ({ event, onEventDelete, onToggleReminder, onEventEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(event.title);
  const [editedDate, setEditedDate] = useState(
    moment(event.date).format("YYYY-MM-DD")
  );
  const [rem, setRem] = useState("");

  useEffect(() => {
    if (event) {
      setRem(event.reminder ? "" : "Reminder On");

      // Check if the event is today and has a reminder
      const today = new Date();
      const eventDate = new Date(event.date);

      today.setHours(0, 0, 0, 0);
      eventDate.setHours(0, 0, 0, 0);

      if (today.getTime() === eventDate.getTime() && event.reminder) {
        alert(`Today is the day of the event: 
        ${event.title}`);
      }
    } else {
      setRem("Reminder On");
    }
  }, [event, event.reminder]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Perform the update in the database (you may use an API request here)
    onEventEdit(event._id, {
      title: editedTitle,
      date: editedDate,
    });

    // Exit the edit mode
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Reset the edited values and exit the edit mode
    setEditedTitle(event.title);
    setEditedDate(moment(event.date).format("YYYY-MM-DD"));
    setIsEditing(false);
  };

  return (
    <div className="event-card bg-white rounded-xl shadow-lg p-6 flex flex-col gap-3 border border-gray-100 hover:shadow-2xl transition-shadow duration-200">
      {event.reminder && (
        <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full self-start mb-2">
          Reminder On
        </span>
      )}
      <div className="event-info flex-1">
        {isEditing ? (
          <div className="flex flex-col gap-2">
            <input
              type="text"
              className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder="Event Title"
            />
            <input
              type="date"
              className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={editedDate}
              onChange={(e) => setEditedDate(e.target.value)}
            />
          </div>
        ) : (
          <>
            <h3 className="event-title text-lg font-bold text-gray-800 mb-1 truncate">
              {event.title}
            </h3>
            <div className="event-date text-sm text-gray-500 mb-2">
              <span className="font-semibold">Event On:</span>{" "}
              {moment(event.date).add(1, "days").calendar()}
            </div>
          </>
        )}
      </div>
      <div className="event-actions flex gap-2 mt-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSaveClick}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Save
            </button>
            <button
              onClick={handleCancelClick}
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => onToggleReminder(event._id)}
              className={`px-3 py-1 rounded transition ${
                event.reminder
                  ? "bg-green-100 text-green-700 hover:bg-green-200"
                  : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
              }`}
            >
              {event.reminder ? "Disable Reminder" : "Enable Reminder"}
            </button>
            <button
              className="delete-btn px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              onClick={() => onEventDelete(event._id)}
            >
              Delete
            </button>
            <button
              onClick={handleEditClick}
              className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EventItem;
