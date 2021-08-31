import React from 'react';

const ProgressBar = (props) => {
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="XP">
                <span>0</span>
                <span>5</span>
                <span>10</span>
            </div>

            <div>
            {
                props.data.map((item) => {
                    let max=10;
                    let progressBar = item.xp / max * 100 + '%';
                    return (
                        <div key={item.id} className="languagesList">
                            <li>{item.value}</li>
                            <div className="progressBar" style={{ width: progressBar}}></div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default ProgressBar;