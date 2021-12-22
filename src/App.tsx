import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/store";
import THEME from "./utils/theme";
import Routes from "Routes";

function App() {
	return (
		<ThemeProvider theme={THEME}>
			<Provider store={store}>
				<Routes />
			</Provider>
		</ThemeProvider>
	);
}

export default App;
