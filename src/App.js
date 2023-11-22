import './App.css';
import QuoteBox from './Components/QuoteBox';
import GameBoard from './Pages/GameBoard';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="container">
      <GameBoard />
      <QuoteBox />
      <Toaster />
    </div>
  );
}

export default App;
