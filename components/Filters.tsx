type Props = {
    currentFilter: "todos" | "futuro" | "passado";
    setFilter: (filter: "todos" | "futuro" | "passado") => void;
  };
  
  export function Filters({ currentFilter, setFilter }: Props) {
    return (
      <div className="flex justify-between mt-6">
        <button
          className={`flex-1 bg-gray-600 py-2 rounded-lg text-white mx-1 ${
            currentFilter === "todos" ? "bg-blue-500" : "hover:bg-gray-500"
          }`}
          onClick={() => setFilter("todos")}
        >
          Todos
        </button>
        <button
          className={`flex-1 bg-gray-600 py-2 rounded-lg text-white mx-1 ${
            currentFilter === "futuro" ? "bg-blue-500" : "hover:bg-gray-500"
          }`}
          onClick={() => setFilter("futuro")}
        >
          Futuro
        </button>
        <button
          className={`flex-1 bg-gray-600 py-2 rounded-lg text-white mx-1 ${
            currentFilter === "passado" ? "bg-blue-500" : "hover:bg-gray-500"
          }`}
          onClick={() => setFilter("passado")}
        >
          Passado
        </button>
      </div>
    );
  }
  