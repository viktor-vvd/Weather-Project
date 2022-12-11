import './App.css';
import './style/LeftColumn.css';
import './style/RightColumn.css';
import Left_Column_Component from './components/LeftColumn/Left_Column_Component';
import Right_Column_Component from './components/RightColumn/Right_Column_Component';

const App = () => {
  return (
    <div className='App'>
      <div className='App-content'>
        <Left_Column_Component />
        <Right_Column_Component />
      </div>
    </div>
  );
}

export default App;
