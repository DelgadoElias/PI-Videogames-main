import React from "react";
import { Link } from "react-router-dom";


import StylingCSS from "../assets/styles/landing.module.css";
import MainLayout from "../components/Layouts/mainLayout";

/**
 * Landing page route - Shows the lander or welcome page
 * @component
 * @description uses MainLayout component
 */
export default function LandingPage() {

  return (
    <MainLayout noBars={true}>
    <div className={StylingCSS.container}>
      <h1>Welcome to my Individual Project</h1>
      <br />

      <Link to="/home">
        <button className={StylingCSS.buttonLanding}>
          <h3>Come in</h3>
        </button>
      </Link>
    </div>
    </MainLayout>
  );
}
