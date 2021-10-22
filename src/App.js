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
	switch (action.type) {
		case "CLEAR_CART":
			return { ...state, cartItems: [] };

		case "DECREASE": {
			const { amount, id } = action.payload;
			const targetCart = state.cart.map((item) => {
				if (item.id === id) {
					item.amount = amount - 1;
				}
				return item;
			});

			return { ...state, cart: targetCart };
		}
		case "INCREASE": {
			const { amount, id } = action.payload;
			const targetCart = state.cart.map((item) => {
				if (item.id === id) {
					item.amount = amount + 1;
				}
				return item;
			});

			return { ...state, cart: targetCart };
		}
		case "REMOVE": {
			const { id } = action.payload;
			const newCart = state.cart.filter((item) => item.id !== id);
			return { ...state, cart: newCart };
		}

		case "GET_TOTALS": {
			let makeup = state.cart.reduce(
				(current, iterator) => {
					current.total = current.total + iterator.amount;
					current.amount =
						current.amount + iterator.amount * iterator.price;

					return current;
				},
				{ total: 0, amount: 0 }
			);
			console.log(makeup);
			return { ...state, ...makeup };
		}

		default:
			return state;
	}
};

//create initial store
const initialStore = {
	cart: cartItems,
	count: 21,
	total: 100,
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
