import { ThemeProvider } from "styled-components"
import { Summary } from "./components/Summary"
import { Transaction } from "./pages/Transactions"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/defoult"

export function App() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />

            <Transaction />
        </ThemeProvider>
    )
}


