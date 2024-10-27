type Props = {
    children: React.ReactNode;
  };
  
  export function Content(props: Props) {
    return (
      <div className="max-w-[600px] w-[90%] bg-white rounded-3xl shadow-lg p-8">
        {props.children}
      </div>
    );
  }
  