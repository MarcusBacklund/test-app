import React from 'react';
import '../App.css';
 
const home = () => {
    return (
        <div className="Wrapper">
            <div className="Content">
                <div className="SmallColumn">
                    <h1>Home</h1>
                    <p>Home page body content</p>
                </div>
                <div className="SmallColumn">
                    <h1>Home</h1>
                    <p>Home page body content</p>
                </div>
            </div>
            <div className="Sidebar">
                <h2>Sidebar</h2>
                <p>Text</p>
            </div>
       </div>
    );
}
 
export default home;