import { Outlet, useLocation } from "react-router";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { useEffect } from "react";

export const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <section className="mx-auto w-full overflow-hidden flex  flex-col items-center justify-between">
      <Header />
      <div className="px-[10px] md:px-[20xp]">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};
