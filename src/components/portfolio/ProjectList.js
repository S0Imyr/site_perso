import React, { Component } from 'react';
import { projectsData } from '../../data/portfolioData'
import Project from './Project';


class ProjectList extends Component {
    state = {
        projects:projectsData
    };
    
    
    render() {
        let {projects} = this.state;


        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">

                </ul>
                <div className="projects">
                    {
                        projects.map(item => {
                            
                            return (
                                <Project 
                                    key={item.id}
                                    item={item}

                                />
                            )
                        }) 
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;
