
import React from "react";

const Popup = ({ imageUrl,onclose}) =>{
    return (
        <div className="popup-overlay" onClick={onclose}>
            <div className= "popup-content">
                <img src = {imageUrl} alt="Popup Image" />
                <button onClick={onclose}>Close</button>

            </div>
        </div>
    );
};

export default Popup;