import { useState } from "react";
import "./App.css";
import View from "./Components/View";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState();

  return (
    <div className="App">
      <View
        data={data}
        setData={setData}
        setSearch={setSearch}
        search={search}
      />
    </div>
  );
}

export default App;
