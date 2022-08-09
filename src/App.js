import { BrowserRouter} from 'react-router-dom';
import './styles/Nav.css'
import './styles/Home.css'
import Nav from './components/pages/Nav'
import AnimatedRoutes from './components/AnimatedRoutes';
import './styles/App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
