import elias from "../assets/img/elias.jpeg";

import "../assets/styles/about.css";

export default function AboutCreatorPage() {
  return (
    <div className="container">
      <div className="mini-container">
        <h1>Hi</h1>
        {/* -------------------------------------- */}
        <p>
          Mi name is Elías Delgado, i am from Argentina and i was born at 06 of
          August in 2001. I'm from Posadas,Misiones.
        </p>
        <hr />
        <p>
          This project was born in 23/10/21 as a sample of my learning in
          Henry's Bootcamp
        </p>
        <hr />
        {/* ..... Grilla para columnas ..... */}
        <div className="grid-about-container">
          <div className="card-about-items">
            <img className="faces" src={elias} alt="Vo so re loco" />
          </div>

            {/* ..... Redes sociales ..... */}
          <div className="card-about-items">
            <h3 className="leftier">Social Medias:</h3>
            <ul className="leftier">
              <li><a className="Link" href="https://www.linkedin.com/in/elias-lautaro-delgado-7ba422210/">LinkedIn - Elías L. Delgado</a></li>
              <br />
              <li><a className="Link" href="https://github.com/DelgadoElias">Github - /DelgadoElias</a></li>
              <br />
              <li>Gmail - eliaslautarodelgado@gmail.com</li>
            </ul>
          </div>
          <br />
        </div>

        {/* -------------------------------------- */}
        {/* .....  ..... */}
        <div className="grid-about-container"></div>
      </div>
    </div>
  );
}
