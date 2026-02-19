import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className={"max-w-330 mx-auto px-4 sm:px-0"}>
      {children}
    </div>
  );
};

export default Container;