import { Provider as JotaiProvider } from "jotai";

import { HomePage } from "@/pages";

const App = () => (
  <JotaiProvider>
    <HomePage />
  </JotaiProvider>
);

export default App;
