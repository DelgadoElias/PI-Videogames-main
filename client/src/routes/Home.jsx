import React from "react";
import MainLayout from "../components/Layouts/mainLayout";
import Videogames from "./videogames/Videogames";

/**
 * Home Route - Shows the videogames in cards
 * @description uses MainLayout component
 */
export default function Home() {
  return (
    <div>
      <MainLayout
        needCollapse={true}>
        <Videogames></Videogames>
      </MainLayout>
    </div>
  );
}
