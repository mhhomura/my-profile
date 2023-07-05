import { ThemeProvider } from "styled-components"
import Routes from "./Routes"
import GlobalStyles from "./Styles/GlobalStyles"
import light from './Styles/themes/light';


const App = () => {

  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}

export default App;