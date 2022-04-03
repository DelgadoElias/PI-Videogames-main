import React from "react";
import MainLayout from "../components/Layouts/mainLayout";
import Videogames from "../components/videogame/Videogames";

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
