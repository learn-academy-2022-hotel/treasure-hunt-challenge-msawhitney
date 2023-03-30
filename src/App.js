import React, { useEffect, useState } from "react"
import "./App.css"
// import Header from "./components/Header"
// import Footer from ".componets/Footer"
import Square from "./components/Square"

//Define the state for the game board
const App = () => {
  const [board, setBoard] = useState([
    "😎",
    "😎",
    "😎",
    "😎",
    "😎",
    "😎",
    "😎",
    "😎",
    "😎"
  ])
  const [gameOver, setGameOver] = useState(false)
  const [winLocation, setWinLocation] = useState(null)
  const [loseLocation, setLoseLocation] = useState(null)
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    chooseWinLocation()
    chooseLoseLocation()
  }, [])

  const chooseWinLocation = () => {
    setWinLocation(Math.floor(Math.random() * board.length))
  }
  const chooseLoseLocation = () => {
    setLoseLocation(Math.floor(Math.random() * board.length))
  }

//create a function that updates the board when a square is clicked
const handleGamePlay = clickedSquare => {
  if (!gameOver) {
    setClickCount(clickCount +1)
    let updateBoard = [...board];
  if (clickedSquare === winLocation) {
    updateBoard[clickedSquare] = "🎉";
    setGameOver(true);
    // playWinSound()
    setTimeout(() => {
      alert("You win!")
    }, 1000)
    
  }  else if (clickedSquare === loseLocation) {
    updateBoard[clickedSquare] = "🔥";
    setGameOver(true);
    setTimeout(() => {
      alert("Sorry, you lose.")
    }, 1000)
  } else {
    updateBoard[clickedSquare] = "😐"
  }
    setBoard(updateBoard);
  }
};

// const playWinSound = () => {

const handleReset = () => {
    setBoard([
      "😎",
      "😎",
      "😎",
      "😎",
      "😎",
      "😎",
      "😎",
      "😎",
      "😎"
    ])

    setGameOver(false)
    setClickCount(0)
    chooseWinLocation()
    chooseLoseLocation()
  };

return (
    <>
      <h1>Treasure Hunt Game
      <p>Click Count: {clickCount}</p>
      <button onClick={handleReset}>Click to Reset</button></h1>
      <div className="board">
        {/* loop through board squares */}
      {board.map((square, index) => (
          // render a square component for each square state
              <Square
                // pass the emoji and the index for the square as a prop
                square={square}
                index={index}
                //pass handleGamePlay
                handleGamePlay={handleGamePlay}
                />
          ))}
      
      </div>
      <h1>
      <button onClick={handleReset}>Play Again</button>
      </h1>
    </>
  );

};

export default App;
