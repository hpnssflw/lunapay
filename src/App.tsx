import { Header, Footer } from "@/ui";
import {
  AboutUsPage,
  BlogPage,
  HomePage,
  ServicesPage,
  UseCasesPage,
} from "@/pages";
import { Outlet, Route, Routes } from "react-router";
import "./App.css";

const Layout = () => (
  <section className="mx-auto w-full overflow-hidden flex px-[20px] flex-col items-center justify-between">
    <Header />
    <Outlet />
    <Footer />
  </section>
);

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="use-cases" element={<UseCasesPage />} />
        <Route path="blog" element={<BlogPage />} />
      </Route>
    </Routes>
  );
}

export default App;
