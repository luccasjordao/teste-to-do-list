import React from "react";
import { Container } from "./components/Container";
import { Content } from "./components/Content";
import { Filters } from "./components/Filters";
import { Form } from "./components/Form";
import { Event } from "./components/Event";
import { EventList } from "./components/EventList";
import { useState } from "react";

export function App() {
  const [events, setEvents] = useState([
    { title: "Reunião de trabalho", date: "2024-10-27", completed: false },
    { title: "Aniversário", date: "2024-11-01", completed: true },
  ]);

  const [filter, setFilter] = useState<"todos" | "futuro" | "passado">("todos");

  const toggleEventCompletion = (index: number) => {
    setEvents(
      events.map((event, i) => (i === index ? { ...event, completed: !event.completed } : event))
    );
  };

  const addEvent = (title: string, date: string) => {
    setEvents([...events, { title, date, completed: false }]);
  };

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const today = new Date();

    if (filter === "futuro") {
      return eventDate >= today;
    } else if (filter === "passado") {
      return eventDate < today;
    } else {
      return true; // "todos"
    }
  });

  return (
    <Container>
      <Content>
        <h1 className="text-white text-lg font-bold">Agenda de Eventos</h1>
        <Form onAddEvent={addEvent} />
        <Filters currentFilter={filter} setFilter={setFilter} />
        <EventList>
          {filteredEvents.map((event, index) => (
            <Event
              key={index}
              title={event.title}
              date={event.date}
              completed={event.completed}
              onToggle={() => toggleEventCompletion(index)}
            />
          ))}
        </EventList>
      </Content>
    </Container>
  );
}
