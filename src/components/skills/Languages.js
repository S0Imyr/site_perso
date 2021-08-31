import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Python", xp:8.2},
            {id: 2, value: "Javascript", xp:5.4},
            {id: 3, value: "VBA", xp:4.4},
            {id: 4, value: "R", xp:3.5},
        ],
        frameworks: [
            {id: 1, value: "Django", xp:7.5},
            {id: 2, value: "Sass", xp:6},
            {id: 3, value: "React", xp:5.4},
        ],
        tools: [
            {id: 1, value: "Git", xp:8},
            {id: 2, value: "Github", xp:7},
            {id: 3, value: "VSCode", xp:6},
            {id: 4, value: "Docker", xp:3},
        ]
    }
    render() {
        let {languages, frameworks, tools} = this.state;

        return (
            <div className="knowledges">
                <ProgressBar 
                    data={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar 
                    data={frameworks}
                    className="frameworksDisplay"
                    title="frameworks"
                />
                <ProgressBar 
                    data={tools}
                    className="toolsDisplay"
                    title="tools"
                />
            </div>
        );
    }
}

export default Languages;