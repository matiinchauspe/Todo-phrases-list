import { FC } from "react";

const Error: FC = () => (
  <div className="flex h-screen flex-col items-center justify-center text-2xl">
    <h2 className="font-bold text-red-300">Error - Oops!</h2>
    <p className="text-slate-500">Something went wrong</p>
  </div>
);

export { Error };
