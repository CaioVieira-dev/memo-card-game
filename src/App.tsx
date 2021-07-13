import { Game } from './pages/Game'
import { GameContextProvider } from './contexts/GameContext'
function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <Game />
      </GameContextProvider>
    </div>
  );
}

export default App;
