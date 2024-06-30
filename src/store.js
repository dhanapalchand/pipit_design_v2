import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducers/counterSlice'
import cartSlice from './reducers/cartSlice'

export default configureStore({
  reducer: {
    cart:cartSlice,
    counter:counterSlice,
    
  }
})
