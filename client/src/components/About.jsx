import { Link } from "react-router-dom";
import elias from "../assets/img/elias.jpeg";

import vStyles from "../assets/styles/about.module.css";
import { GitHub, LinkedIn } from "../constantes/social";
export default function AboutCreatorPage() {
  return (
    <div className={vStyles.container}>

        {/* ..... Grilla para columnas ..... */}
        <div className={vStyles.gridAboutContainer}>
          <div className={vStyles.cardAboutItems}>
            <div class={vStyles.flipCard}>
              <div class={vStyles.flipCardInner}>
                <div class={vStyles.flipCardfront}>
                  <img src={elias} className={vStyles.flipImage} alt="Author" />
                </div>
                <div class={vStyles.flipCardback}>
                  <h1>Delgado Elias</h1>
                  <p>Software Developer</p>
                  <p>Henry's Student</p>
                  <hr />
                  <h3>Social Medias</h3>
                  <p><a className={vStyles.Link} href={LinkedIn}>
                  LinkedIn - Elías L. Delgado
                </a></p>
                <p><a className={vStyles.Link} href={GitHub}>
                  Github - /DelgadoElias
                </a></p>
                </div>
              </div>
            </div>
          </div>

          {/* ..... Redes sociales ..... */}
          <div className={vStyles.cardAboutItems}>
            <h2 className={vStyles.leftier}>Technologies:</h2>
              <p>
                <a className={vStyles.Link} href={LinkedIn}>
                  React, Redux
                </a>
                , <a className={vStyles.Link} href={GitHub}>
                  Github
                </a>, 
                Express, Node Js, Sequelize, HTML, CSS, PostgreSQL</p>
        <div className={vStyles.cardAboutItems}>
          <a href="https://es.reactjs.org/">
          <img  className={vStyles.icon} src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png" alt="React" />
          </a>
          <a href="https://es.redux.js.org/">
          <img  className={vStyles.icon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ius7-Jh63wNY2IEkn_za_L-jmfEt5kKNUEkSlpN7e5iABYZVH-Jbn-YADH4JT3W1-20&usqp=CAU" alt="Redux" />
          </a>
          <a href="https://developer.mozilla.org/es/docs/Glossary/HTML5">
          <img  className={vStyles.icon} src="https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-512.png" alt="HTML" />
          </a>
          <a href="https://developer.mozilla.org/es/docs/Web/CSS">
          <img  className={vStyles.icon} src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png" alt="CSS" />
          </a>
          <a href="https://nodejs.org/es/docs/">
          <img  className={vStyles.icon} src="https://cinthyasegura.github.io/portafolio/src/public/image/node.png" alt="NodeJs" />
          </a>
          <a href="https://sequelize.org/">
          <img  className={vStyles.icon} src="https://erandro.github.io/EranPort/assets/images/sequelize.png" alt="Sequelize" />
          </a>
          <a href="https://www.postgresql.org/">
          <img  className={vStyles.icon} src="https://cdn6.f-cdn.com/contestentries/216177/9262059/5550f98d5b7e5_thumb900.jpg" alt="PostgreSQL" />
          </a>
          <a href="https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Responsive_Design">
          <img  className={vStyles.icon} src="https://iconarchive.com/download/i93899/graphicloads/seo-services/responsive-design.ico" alt="Responsive" />
          </a>
        </div>
          </div>
          <br />
        </div>

        {/* -------------------------------------- */}
        {/* .....  ..... */}

    </div>
  );
}
