import './App.css';
import './style/LeftColumn.css';
import './style/RightColumn.css';
import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';

const App = () => {
  return (
    <div className='App'>
      <div className='App-content'>
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}

export default App;
