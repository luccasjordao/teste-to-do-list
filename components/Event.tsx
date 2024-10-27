type Props = {
    title: string;
    date: string;
    completed: boolean;
    onToggle: () => void;
  };
  
  export function Event({ title, date, completed, onToggle }: Props) {
    return (
      <div
        className={`flex items-center justify-between bg-gray-700 p-4 mb-2 rounded-lg cursor-pointer hover:bg-gray-600 transition-all ${
          completed ? "line-through text-gray-400" : "text-white"
        }`}
        onClick={onToggle}
      >
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm">{date}</p>
        </div>
        <div className="text-xl">{completed ? "✅" : "🕒"}</div>
      </div>
    );
  }
  