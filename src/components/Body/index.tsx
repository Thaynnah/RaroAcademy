import { FC } from "react";
import "./style.css";

const Body: FC =({children}) => (
    <div className="body">
        {children}
    </div>
);

export default Body;