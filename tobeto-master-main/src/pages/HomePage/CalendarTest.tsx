import React, { useEffect, useState } from "react";
import Calendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";
import axios from "axios";
import { Container } from "react-bootstrap";

const CalendarComponent: React.FC = () => {
  const [events, setEvents] = useState<{ title: string; start: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:44340/api/AsyncCourses/GetList"
        );
        const data: { items: { name: string; createdDate: string }[] } =
          response.data;

        const formattedEvents = data.items.map((event) => ({
          title: event.name,
          start: moment(event.createdDate).format("YYYY-MM-DD"),
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <div style={{ padding: "20px" }}>
        <div style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}>
          Takvim
        </div>
        <div style={{ marginTop: "20px" }}>
          <Calendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            events={events}
            dayHeaderFormat={{
              weekday: "long",
              month: "numeric",
              day: "numeric",
              year: "numeric",
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default CalendarComponent;
