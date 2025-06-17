import './App.css';

function App() {
  let state:{count:number,name:string}={
    count:1,
    name:"ram"
  }
  let {count,name}=state;
  let styles={
    backgroundColor:"blue"
  }
  return (
    <div className="App">
      <h1 style={styles}>{count}</h1>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
