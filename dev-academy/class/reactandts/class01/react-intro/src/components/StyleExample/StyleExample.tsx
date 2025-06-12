// METHOD 1
import './StyleExample.css'
// METHOD 2
import styles from "./StyleExample.module.css"


export const StyleExample = () => {

    return (
        <div>
            <h3>React styling</h3>
        {/* Method 1 EXAMPLE */}
            <div className="css-styled-box">
                <h3>Example, imported CSS File</h3>
                <p>This box styled using classess from StyleExample.css</p>
            </div>

            {/* Method 2 EXAMPLE */}
            <div>
                <h3>Example, CSS Modules</h3>
                <p>This box is styled using classes from StyleExample.css</p>
            </div>

            {/* Method 3 EXAMPLE */}
            <div>
                <h3>Example</h3>
            </div>
        </div>
    )
};