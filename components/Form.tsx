import { useState } from "react";

type Props = {
  onAddEvent: (title: string, date: string) => void;
};

export function Form({ onAddEvent }: Props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title && date) {
      onAddEvent(title, date);
      setTitle("");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <input
          className="h-[50px] rounded-lg p-3 text-lg outline-none bg-gray-700 text-white placeholder-gray-400"
          placeholder="Título do evento"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="h-[50px] rounded-lg p-3 text-lg outline-none bg-gray-700 text-white placeholder-gray-400"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button
          className="h-[50px] bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-all"
          type="submit"
        >
          Adicionar Evento
        </button>
      </div>
    </form>
  );
}
