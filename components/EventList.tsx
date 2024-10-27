type Props = {
    children: React.ReactNode;
  };
  
  export function EventList({ children }: Props) {
    return <div className="mt-4 max-h-[300px] overflow-auto scrollbar-hide">{children}</div>;
  }
  