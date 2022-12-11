import './App.css';
import './style/LeftColumn.css';
import './style/RightColumn.css';
import LeftColumnComponent from './components/LeftColumn/Left_Column_Component';
import RightColumnComponent from './components/RightColumn/Right_Column_Component';

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
