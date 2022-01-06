import Pad from './components/Pad';
import Screen from './components/Screen';
import List from './components/List';
import NavBar from './components/NavBar';

function App() {

  return (
    <div>
      <NavBar />
      <div className="container-fluid navar">
        <Screen />
        <Pad />
        <List />
      </div>
    </div>
  );
}

export default App;
