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
                <p><iframe src="https://open.spotify.com/embed/track/4fM2rHFNDcsvxUiLzxB78q" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>
            </div>
       </div>
    );
}
 
export default home;