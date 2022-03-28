import { FC } from "react";
import "./style.css";

interface IProps {
    score1: number;
    score2: number;
}

const Score: FC<IProps> = ({score1, score2}) => {
    return (
        <div className="column">
            <div className="row1">
                <span>P1</span>
                <span>P2</span>
            </div>
            <div className="row2">
                <span>{score1}</span>
                <span>X</span>
                <span>{score2}</span>
            </div>
        </div>
    )
}

export default Score