import React from 'react';

const OtherSkills = () => {
    return (
        <div className="otherSkills">
            <h3>Autres compétences</h3>
            <div className="list">
                <ul>
                    <li> <i className="fas fa-check-square"></i>
                    <span> Anglais courant</span>
                    </li>
                    <li> <i className="fas fa-check-square"></i>
                    <span> Github</span>
                    </li>
                    <li> <i className="fas fa-check-square"></i>
                    <span> Méthodes agiles</span>
                    </li>
                </ul>
                <ul>
                    <li> <i className="fas fa-check-square"></i>
                    <span> Docker</span>
                    </li>
                    <li> <i className="fas fa-check-square"></i>
                    <span> PostgreSQL</span>
                    </li>
                    <li> <i className="fas fa-check-square"></i>
                    <span> Postman</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OtherSkills;