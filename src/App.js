import { useState } from "react";
import Cell from "./components/Cell";
const App = () => {

  const [cells, setCells] = useState(["","","","","","","","",""])
  return (
    <div className="App">
      <div className="gameboard">
      {cells.map((cell,index) =>
         <Cell 
            key={index}
            id={index}
            cell={cell}
         />
         )}
      </div>
    </div>
  );
}

export default App;
