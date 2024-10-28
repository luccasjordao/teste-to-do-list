import React from "react";

type Props = {
  children: React.ReactNode;
};

export function Container({ children }: Props) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="container">{children}</div>
    </div>
  );
}
