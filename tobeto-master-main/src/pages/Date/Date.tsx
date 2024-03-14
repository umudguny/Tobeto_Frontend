import React, { useEffect, useState } from "react";
import Calendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";
import axios from "axios";
import { Container, Modal, Button } from "react-bootstrap";
import "./Date.css";

const EventSummary: React.FC<{ event: { title: string; start: string } }> = ({
  event,
}) => {
  return (
    <div className="event-summary">
      <span className="event-title">{event.title}</span>
      <span className="event-date">
        {moment(event.start).format("DD MMMM YYYY")}
      </span>
    </div>
  );
};

const EventList: React.FC<{
  events: { title: string; start: string }[];
  showButton?: boolean;
}> = ({ events, showButton = true }) => {
  if (events.length === 0) {
    return null;
  }

  return (
    <div>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <EventSummary event={event} />
          </li>
        ))}
      </ul>
      {showButton && events.length > 3 && (
        <Button className="btn btn-primary">Show More</Button>
      )}
    </div>
  );
};

const Date: React.FC = () => {
  const [events, setEvents] = useState<{ title: string; start: string }[]>([]);
  const [selectedDateEvents, setSelectedDateEvents] = useState<
    { title: string; start: string }[]
  >([]);
  const [showModal, setShowModal] = useState(false);

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

  const handleShowMore = (date: string) => {
    const selectedEvents = events.filter(
      (event) => moment(event.start).format("YYYY-MM-DD") === date
    );
    setSelectedDateEvents(selectedEvents);
    setShowModal(true);
  };

  return (
    <Container>
      <div className="calendar-container">
        <div className="calendar-header">Takvim</div>
        <div className="calendar-content">
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
            dayHeaderContent={(args) => {
              return (
                <div>
                  <span className="custom-day-header">
                    {moment(args.date).format("dddd")}
                  </span>
                </div>
              );
            }}
            eventContent={(arg) => (
              <div>
                <b>{arg.timeText}</b>
                <i>{arg.event.title}</i>
              </div>
            )}
          />
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Selected Date Events</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedDateEvents.length > 0 && (
                <>
                  <h4>
                    {moment(selectedDateEvents[0].start).format("DD MMMM YYYY")}
                  </h4>
                  <ul>
                    {selectedDateEvents.map((event, index) => (
                      <li key={index}>{event.title}</li>
                    ))}
                  </ul>
                </>
              )}
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </Container>
  );
};

export default Date;
