import { FC } from "react";
import "./style.css";

const GameBoard: FC =({children}) => (
    <div className="game-board">
        {children}
    </div>
);

export default GameBoard;