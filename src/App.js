import TimeDigit from './components/TimeDigit.jsx';
import Clock from './components/Clock.jsx';
import ThemeToggle from './components/theme.jsx';
import './styles/boss.css';

function App() {

  return (
    <>
    <div className="heading">
      <h1>THE CL</h1>
      <div className='clockUp'><Clock></Clock></div>
      <h1>CK</h1>
    </div>
    
    <div className="content">
      <div>
        <Clock Name="clockNew"></Clock>
      </div>
      <div className="timeBoard">
        <TimeDigit className="newTime"></TimeDigit>
      </div>
    </div>
    <div><ThemeToggle></ThemeToggle></div>
    </>
  )
};

export default App;