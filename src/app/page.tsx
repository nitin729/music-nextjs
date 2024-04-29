import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Instructors from "./components/Instructors";
import StickyScrollReveal from "./components/Sticky-scroll";
import Testimonials from "./components/Testimonials";
import Webinars from "./components/Webinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <FeaturedCourses />
      {/* <StickyScrollReveal /> */}
      <Testimonials />
      <Webinars />
      <Instructors />
      <Footer />
    </main>
  );
}
