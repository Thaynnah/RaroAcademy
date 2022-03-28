import React from 'react';
import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Body from './components/Body';
import Column from './components/Column';
import Square from './components/Square';
import './index.css';
import { FC } from "react";
import Button from './components/Button';
import Score from './components/Score';
import GameBoard from './components/GameBoard';

const Game: FC = () => {
  const [player, setPlayer] = useState<string>("player1");
  const [restart, setRestart] = useState<boolean>(false);
  const [score1, setScore1] = useState<number>(0);
  const [score2, setScore2] = useState<number>(0);
  const [player1, setPlayer1] = useState<number[]>([]);
  const [player2, setPlayer2] = useState<number[]>([]);
  const [winner, setWinner] = useState<string>();

  const firstWinnerHouses = [0,1,2,10,20];
  const housesDistance = [11,1,10,9];

  useEffect(() => {
    player1.forEach(position => {
      if(firstWinnerHouses.includes(position)){
        housesDistance.forEach(distance => {
          let secondWinnerHouse = position + distance;
          let thirdWinnerHouse = secondWinnerHouse + distance;
          if(
            player1.includes(secondWinnerHouse) &&
            player1.includes(thirdWinnerHouse)
          ){
            setWinner("Player 1 is the WINNER!");
            setScore1(score1 + 1)
          }
        });
      }
    });

    player2.forEach(position => {
      if(firstWinnerHouses.includes(position)){
        housesDistance.forEach(distance => {
          let secondWinnerHouse = position + distance;
          let thirdWinnerHouse = secondWinnerHouse + distance;
          if(
            player2.includes(secondWinnerHouse) &&
            player2.includes(thirdWinnerHouse)
          ){
            setWinner("Player 2 is the WINNER!");
            setScore2(score2 + 1)
          }
        });
      }
    });

  }, [player1, player2]);


  const reload = () => {
    setPlayer1([]);
    setPlayer2([]);
    setRestart(true)
    setPlayer("player1")
    setWinner("");
  }

    return <GameBoard>
      <div className='title'>
        <span>Tic-Tac-Toe</span>
      </div>
        <Body>
          <div className='column-score'>
              <div className='winner'>{winner}</div>
              <Score score1={score1} score2={score2}></Score>
              <Button reset={reload}></Button>
          </div>
          
            <Column>
              <Square 
                player1={player1}
                player2={player2}
                setPlayer1={setPlayer1}
                setPlayer2={setPlayer2}
                position={0} 
                player={player} 
                setPlayer={setPlayer} 
                restart={restart} 
                setRestart={setRestart}/>
              <Square
                player1={player1}
                player2={player2}
                setPlayer1={setPlayer1}
                setPlayer2={setPlayer2}
                position={10} 
                player={player} 
                setPlayer={setPlayer}
                restart={restart} 
                setRestart={setRestart}/>
              <Square
                player1={player1}
                player2={player2}
                setPlayer1={setPlayer1}
                setPlayer2={setPlayer2}
                position={20} 
                player={player} 
                setPlayer={setPlayer}
                restart={restart} 
                setRestart={setRestart}/>
            </Column>
            <Column>
              <Square 
                player1={player1}
                player2={player2}
                setPlayer1={setPlayer1}
                setPlayer2={setPlayer2}
                position={1} 
                player={player} 
                setPlayer={setPlayer}
                restart={restart} 
                setRestart={setRestart}/>
              <Square  
                player1={player1}
                player2={player2}
                setPlayer1={setPlayer1}
                setPlayer2={setPlayer2}           
                position={11} 
                player={player} 
                setPlayer={setPlayer}
                restart={restart} 
                setRestart={setRestart}/>
              <Square
                player1={player1}
                player2={player2}
                setPlayer1={setPlayer1}
                setPlayer2={setPlayer2}
                position={21} 
                player={player} 
                setPlayer={setPlayer}
                restart={restart} 
                setRestart={setRestart}/>
            </Column>
            <Column>
              <Square 
                player1={player1}
                player2={player2}
                setPlayer1={setPlayer1}
                setPlayer2={setPlayer2}
                position={2} 
                player={player} 
                setPlayer={setPlayer}
                restart={restart} 
                setRestart={setRestart}/>
              <Square
                player1={player1}
                player2={player2}
                setPlayer1={setPlayer1}
                setPlayer2={setPlayer2}
                position={12} 
                player={player} 
                setPlayer={setPlayer}
                restart={restart} 
                setRestart={setRestart}/>
              <Square
                player1={player1}
                player2={player2}
                setPlayer1={setPlayer1}
                setPlayer2={setPlayer2}
                position={22} 
                player={player} 
                setPlayer={setPlayer}
                restart={restart} 
                setRestart={setRestart}/>
            </Column>
        </Body>
    </GameBoard>
}

ReactDOM.render(
  <React.StrictMode>
        <Game></Game>
  </React.StrictMode>,
  document.getElementById('root')
);

