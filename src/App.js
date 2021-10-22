import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
import { Provider } from "react-redux";

//reducer
const reducer = (state, action) => {
	return state;
};

//create initial store
const initialStore = {
	cartItems,
	count: 21,
};

//create store, execute reducer
const store = createStore(reducer, initialStore);

function App() {
	// cart setup
	// create store

	//setup initial store

	return (
		<Provider store={store}>
			<Navbar />
			<CartContainer />
		</Provider>
	);
}

export default App;
