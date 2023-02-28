import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/defoult"

export function App() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <h1>Hello World!</h1>
        </ThemeProvider>
    )
}


