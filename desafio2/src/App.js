import './App.css';
import HomePage from './HomePage/HomePage';
import menuNav from './MenuNav/MenuNav';


function App() {
  return (
    <div>
      <header>     
        {menuNav}
      </header>
      <main>
        {HomePage}
      </main>
    </div>
  );
}

export default App;
