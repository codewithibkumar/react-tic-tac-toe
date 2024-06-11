import { useState } from "react";
import Cell from "./components/Cell";
const App = () => {

  const [cells, setCells] = useState(["","","","","","","","",""])
  const[go, setGo] = useState("circle")
  const [winningMessage, setWinningMessage] = useState(null);

  const message = "It is now " + go + "'s go."
  return (
    <div className="App">
      <div className="gameboard">
      {cells.map((cell,index) =>
         <Cell 
            key={index}
            id={index}
            cell={cell}
            go={go}
            setGo={setGo}
         />
         )}
      </div>
      <p>{winningMessage || message}</p>
    </div>
  );
}

export default App;
