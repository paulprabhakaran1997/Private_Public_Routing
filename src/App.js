import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import PublicRouting from './routing/PublicRouting';
import Login from './components/Login';
import PrivateRouting from './routing/PrivateRouting';
import Home from './components/Home';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/"
            element ={
              <PublicRouting>
                <Login />
              </PublicRouting>
            }
          />
          <Route 
            path="/home"
            element={
              <PrivateRouting>
                <Home />
              </PrivateRouting>
            }
          />
          <Route 
            path="/user"
            element={
              <PrivateRouting>
                <User />
              </PrivateRouting>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
