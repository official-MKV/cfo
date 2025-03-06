import { Navbar } from "@/components/web/Navbar";
import Footer from "@/components/web/Footer";

export default function WebLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
