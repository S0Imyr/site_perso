import React, { Component } from 'react';

class Project extends Component {
    render() {
        let {title, languagesIcons, source, info, img} = this.props.item;
        return (
            <div className='project'>
                <div className='icons'>
                    {languagesIcons.map(icon => 
                        <i className={icon} key={icon}></i>
                    )}
                </div>
                <h3>{title}</h3>
                <img src={img} alt='/' />
                <span className='infos'>
                    <i className='fas fa-plus-circle'></i>
                </span>
            </div>
        );
    }
}

export default Project;