import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './components/header';
import CaffeineTable from "./components/caffeineTable";

function App() {
  return (
    <div className="App">
      <Header title='Caffeine Calculator' />
      <CaffeineTable />
    </div>
  );
}

export default App;