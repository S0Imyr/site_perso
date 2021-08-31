import React from 'react';
import Navigation from '../components/Navigation';


function Home() {
    return (
      <div className="home">
        <Navigation/>
        <div className="homeContent">
          <div className="content">
            <h1>Raphaël Lossec | Développeur Python</h1>
            <h2>Bonjour et bienvenue !</h2>
            <div className="pdf">
              <a href="./media/CV.pdf" target="_blank">Télécharger CV</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Home;