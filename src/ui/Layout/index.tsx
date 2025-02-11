import { Outlet } from "react-router";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = () => (
  <section className="mx-auto w-full overflow-hidden flex px-[20px] flex-col items-center justify-between">
    <Header />
    <Outlet />
    <Footer />
  </section>
);
