import './App.css';

function App() {
  let state:{count:number,name:string}={
    count:1,
    name:"ram"
  }
  let {count,name}=state;
  return (
    <div className="App">
      <h1 style={getStyles()}>{count}</h1>
      <h1>{name}</h1>
    </div>
  );
}

function getStyles(){
  return {
    backgroundColor:"red"
  }
}

export default App;
