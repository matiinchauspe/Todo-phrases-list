import { useAtom } from "jotai";

import { filteredResultAtom } from "@/store/phrases";
import { ControlBar, Header, List } from "@/components/_index";

const HomePage = () => {
  const [phrases] = useAtom(filteredResultAtom);

  return (
    <main className="min-h-screen overflow-hidden antialiased">
      <Header />
      <section className="m-auto flex max-w-3xl flex-col gap-4 py-10">
        <ControlBar />
        <List data={phrases} />
      </section>
    </main>
  );
};

export { HomePage };
