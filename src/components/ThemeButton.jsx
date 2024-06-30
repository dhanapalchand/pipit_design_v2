import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";


function ThemeButton(props){
    const {theme,toggleTheme}=useContext(ThemeContext);
   
    return (
        
        <>
        <button onClick={toggleTheme} className="btn btn-primary">{theme}</button>
        </>
    )
}
export default ThemeButton;