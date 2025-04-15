import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-center my-4 bg-red-700 text-white font-bold p-3 uppercase">
      {children}
    </div>
  );
};

export default ErrorMessage;
