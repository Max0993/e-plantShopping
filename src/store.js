import { configureStore } from '@reduxjs/toolkit';
/*import cartReducer from './redux/CartSlice.jsx';*/
import cartReducer from './CartSlice.jsx';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
