import { FC, useEffect, useState } from "react";
import "./style.css"

interface IProps {
    player1: number[];
    player2: number[];
    setPlayer1: React.Dispatch<React.SetStateAction<number[]>>;
    setPlayer2: React.Dispatch<React.SetStateAction<number[]>>;
    position: number;
    player: string;
    setPlayer: React.Dispatch<React.SetStateAction<string>>;
    restart: boolean;
    setRestart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Square: FC<IProps> =({
    position, 
    player, 
    setPlayer, 
    restart, 
    setRestart,
    player1,
    player2,
    setPlayer1,
    setPlayer2,}) => {
    const [select, setSelect] = useState<number>(1);
    
  useEffect(() => {
    if (restart === true) {
      setSelect(1) 
      setRestart(()=>false)
    }
  }, [restart,setRestart]);

    const changeState = () => {
        if(player == "player1"){
            setPlayer1([...player1,position]);
            setPlayer("player2")
            setSelect(2)
        } else {
            setPlayer2([...player2,position]);
            setPlayer("player1")
            setSelect(3)
        }
    }

    if(select == 1){
        return (
            <span onClick={() => changeState()} className="square"></span>
            
        );
    } else if(select == 2) {
        return (
            <span className="square">X</span>
            );
    } else  {
        return (
            <span className="square">O</span>
            );
    }
}

export default Square;