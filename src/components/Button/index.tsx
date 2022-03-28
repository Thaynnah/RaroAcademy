import { FC } from "react";
import "./style.css"

interface IProps {
    reset:()=>void
}

const Button: FC<IProps> =({reset}) => {

    return <button onClick={() => reset()} type="button" className="button">
        Restart
    </button>
}

export default Button