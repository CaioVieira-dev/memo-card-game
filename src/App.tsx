import { Game } from './pages/Game'
import { GameContextProvider } from './contexts/GameContext'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import { usePersistedState } from './hooks/usePersistedState'

import lightBlue from './styles/themes/lightBlue'
import red from './styles/themes/red'
import blue from './styles/themes/blue'
import lemon from './styles/themes/lemon'
import pink from './styles/themes/pink'
import purple from './styles/themes/purple'
import yellow from './styles/themes/yellow'
import green from './styles/themes/green'
import malva from './styles/themes/malva'
import orange from './styles/themes/orange'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('--memo-game-theme', lightBlue)

  function handleThemeSwitch(themeTitle: string, hue?: number) {
    if (themeTitle === 'custom') {
      console.log(hue)
      if (!hue) { return }
      const customTheme = {
        title: "custom",
        colors: {
          hue: hue,
        }
      }
      setTheme(customTheme)
    } else {


      const themes = [lightBlue,
        red,
        blue,
        lemon,
        pink,
        purple,
        yellow,
        green,
        malva,
        orange] //all themes
      const nextTheme = themes.filter(theme => theme.title === themeTitle);

      setTheme(nextTheme[0]);
    }
  }

  return (
    <ThemeProvider theme={theme}>

      <div className="App">
        <GameContextProvider>
          <Game handleThemeSwitch={handleThemeSwitch} />
        </GameContextProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
