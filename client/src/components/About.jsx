import elias from '../assets/img/elias.jpeg';

export default function AboutCreatorPage(){


    return <div className="container">
        <div className="mini-container">
        <h1>Hi</h1>
        <p>Mi name is Elías Delgado, i am from Argentina and i was born at 06 of August in 2001. I'm from Posadas,Misiones.</p>
        <hr />
        <p>This project was born in 23/10/21 Thanks to the knowledge learned in Henry's Bootcamp</p> 
        <hr />
        <h3>Social Medias:</h3>

        <img className="faces" src={elias} alt="Vo so re loco" />

        <ul className="leftier">
            <li>LinkedIn</li>
            <li>Github</li>
            <li>Gmail</li>
        </ul>

        <br />
        </div>


        </div>
        
}