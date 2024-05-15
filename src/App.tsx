import List from "./Components/List";
import MyMap from "./Components/MyMap";
import "./index.css"

function App() {

  return (
    <div style={{ width: "100%", height: "100%", display: "flex"}}>
      <MyMap/>
      <List />
    </div>
  )
}

export default App
