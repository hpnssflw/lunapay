import { Route, Routes } from "react-router";
import { AboutUsPage, BlogPage, HomePage, ServicesPage, BlogPage1, BlogPage2, BlogPage3, BlogPage4, BlogPage5, BlogPage6 } from "@/pages";
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
        <Route path="blog1" element={<BlogPage1 />} />
        <Route path="blog2" element={<BlogPage2 />} />
        <Route path="blog3" element={<BlogPage3 />} />
        <Route path="blog4" element={<BlogPage4 />} />
        <Route path="blog5" element={<BlogPage5 />} />
        <Route path="blog6" element={<BlogPage6 />} />
      </Route>
    </Routes>
  );
}

export default App;
