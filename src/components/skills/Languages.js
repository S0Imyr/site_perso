import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Python", xp:8.8},
            {id: 2, value: "Javascript", xp:6},
            {id: 3, value: "VBA", xp:4},
            {id: 4, value: "R", xp:3},
        ],
        frameworks: [
            {id: 1, value: "Django", xp:8.5},
            {id: 2, value: "Sass", xp:7},
            {id: 3, value: "React", xp:5.4},
        ]
    }
    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="knowledges">
                <ProgressBar 
                    data={languages}
                    className="languagesDisplay"
                    title="langages"
                />
                <ProgressBar 
                    data={frameworks}
                    className="frameworksDisplay"
                    title="frameworks"
                />
            </div>
        );
    }
}

export default Languages;