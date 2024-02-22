import { useState } from "react";
import React from "react";
import './Card.css';


export default function Card({ name, onStepCompletion, stepCompleted, disabled = false, afterText = "Download", beforeText = "Complete", afterCompletion = " ", status = "Completed" }) {
    const [isChecked, setIsChecked] = useState(false);

    const currentDate = new Date().toLocaleDateString();

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleCompleteStep = () => {
        if (isChecked) {
            onStepCompletion();
        } else {
            alert("Please check the checkbox to complete this step.");
        }
    };

    return (
        <div className={`profile-step ${!disabled ? 'completed' : 'notcompleted'}`} style={{ pointerEvents: disabled ? 'none' : 'auto' }}>
            <div className="topCard">
                <input type="checkbox" checked={isChecked || stepCompleted} onChange={handleCheckboxChange} disabled={stepCompleted} />
                <h4>{name}</h4>
            </div>
            <div className="bottomCard">
                <button onClick={handleCompleteStep} disabled={stepCompleted}>
                    {stepCompleted ? afterText : beforeText}
                </button>
            </div>
            <div className="after">
                <h6>
                    {stepCompleted ? afterCompletion : ''}
                </h6>
                <h2>{stepCompleted ? status : ''}</h2>
            </div>
            <div className="date">
                <h4>{stepCompleted ? currentDate : ''}</h4>
            </div>
        </div>
    );
}
