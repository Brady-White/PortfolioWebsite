import "../../Styling/Toggle.css";
import DarkButton from "../Images/DarkButton.png"
import LightButton from "../Images/LightButton.png"

interface ToggleProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isChecked: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({ handleChange, isChecked }) => {
    return(
        <div className= "toggle-container">
            <input 
            type="checkbox" 
            id="check" 
            className="toggle" 
            onChange={handleChange}
            checked={isChecked}
            />
            <label htmlFor="check" className="toggle-label">
            <img
                    src={isChecked ? LightButton : DarkButton}
                    alt={isChecked ? "Light Mode" : "Dark Mode"}
                    className="toggle-icon"
                />
            </label>
        </div>
    );
};