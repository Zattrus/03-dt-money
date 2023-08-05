import { ThemeProvider } from "styled-components"
import { Summary } from "./components/Summary"
import { Transactions } from "./pages/Transactions"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/defoult"
import { TransactionsProvider } from "./contexts/TransactionsContext"

export function App() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <TransactionsProvider>
                <Transactions />
            </TransactionsProvider>
        </ThemeProvider>
    )
}


