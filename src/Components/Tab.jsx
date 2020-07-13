import React, { useState } from 'react';

const Tab = props => {

    const [currentTab, setCurrentTab] = useState(0);

    const content = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        "Obcaecati corporis praesentium hic?"
    ];

    return (
        <div>
            <h1>Tabs</h1>
            <ul className="nav nav-tabs my-4">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Tab 1</a>
                </li>
                <li className="nav-item">
                    <a className={currentTab === 1 ? "nav-link active": "nav-link"} href="#" onClick={e => setCurrentTab(1)}>Tab 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Tab 3</a>
                </li>
            </ul>
            <div className="alert alert-info">{content[currentTab]}</div>
        </div>
    );
}

export default Tab;