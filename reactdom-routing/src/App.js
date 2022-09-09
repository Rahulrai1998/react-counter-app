import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom'
import Home from './components/page1';
import Contact from './components/page2';
import About from './components/page3';

function App() {
  return (

    <Router>
      <div className='App'>
        <ul className='nav'>
          <li className='list'>
            <Link className='link' to='/'>Home</Link>
          </li>
          <li className='list'>
            <Link to='/page2' className='link' >Contact</Link>
          </li>
          <li className='list'>
            <Link to='/page3' className='link' >About</Link>
          </li>
        </ul>

        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/page2' element={<Contact/>}></Route>
          <Route exact path='/page3' element={<About/>}></Route>
        </Routes>

      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
  );
}

export default App;
