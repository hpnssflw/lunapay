import "./App.css";
import { Header } from "./ui/Header/Header";
import { HomePage } from "./pages";

function App() {
  return (
    <section className="mx-auto w-full flex px-[100px] flex-col items-center justify-center">
      <Header />

      <HomePage />
    </section>
  );
}

export default App;
