import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './components/slice/counterSlice'

export const store = configureStore({
  reducer: {
    products:productSlice
  },
})