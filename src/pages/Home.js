import React from 'react';
import Navigation from '../components/Navigation';


function Home() {
    return (
      <div className="home">
        <Navigation/>
        <div className="homeContent">
          <div className="content">
            <h1>Raphaël Lossec</h1>
            <h2>Développeur Python</h2>
            <p>Bonjour et bienvenue !</p>
            <div className="pdf">
              <a href="./media/CV.pdf" target="_blank">Télécharger CV</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Home;