import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import FeaturedCourses from "./pages/FeaturedCourses";
import PageNotFound from "./pages/PageNotFound";
import TrendingCourses from "./pages/TrendingCourses";
import Courses from "./pages/Courses";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CourseDetails from "./pages/CourseDetails";

const App = () => {
  return (
    <>
      {/* navbar components */}
      <Navbar />
      {/* static Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* dynamic Routing */}
        <Route path="/:id" element={<CourseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        {/* Nested Routing */}
        <Route path="/courses" element={<Courses />}>
          <Route index element={<TrendingCourses/>} />
          <Route path="featured" element={<FeaturedCourses />} />
          <Route path="trending" element={<TrendingCourses />} />
        </Route>
        {/* error handling */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
