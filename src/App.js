import './App.css';
import './style/LeftColumn.css';
import './style/RightColumn.css';
import LeftColumnComponent from './components/LeftColumn/LeftColumnComponent';
import RightColumnComponent from './components/RightColumn/RightColumnComponent';

const App = () => {
  return (
    <div className='App'>
      <div className='App-content'>
        <LeftColumnComponent />
        <RightColumnComponent />
      </div>
    </div>
  );
}

export default App;
