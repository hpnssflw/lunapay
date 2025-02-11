import { Route, Routes } from "react-router";
import { AboutUsPage, BlogPage, HomePage, ServicesPage } from "@/pages";
import { Layout } from "./ui/Layout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="blog" element={<BlogPage />} />
      </Route>
    </Routes>
  );
}

export default App;
