// import logo from './logo.svg';
import './App.css';
import FunctionComponents from './functionComponent/functionComponents'
import HookFunC from './hooksFunctionComponent/hookFunC'

function App() {
  return ( 
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <FunctionComponents/>
        <HookFunC></HookFunC>
    </div>
  );
}

export default App;
