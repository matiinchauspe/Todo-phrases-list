import { FC } from "react";

const Header: FC = () => (
  <header className="border-b border-slate-700 backdrop-blur-sm">
    <div className="m-auto max-w-3xl px-5 py-10 md:px-0">
      <h1 className="text-xl font-bold sm:text-2xl">
        Phrases in the card list
      </h1>
    </div>
  </header>
);

export { Header };
