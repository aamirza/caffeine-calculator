import 'bootstrap/dist/css/bootstrap.css'
import './App.css';


const Header = (props) => {
  return (
    <header className="App-header">
      <h1 className="display-1" id="page-title">{props.title}</h1>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header title='Caffeine Calculator' />
    </div>
  );
}

export default App;
