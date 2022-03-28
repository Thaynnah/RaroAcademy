import { FC } from "react";
import "./style.css"

const Column: FC =({children}) => (
    <div className="column">
        {children}
    </div>
);

export default Column;