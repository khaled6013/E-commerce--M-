import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'hello redux',
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
     AllProducts:(state)=>{
      
     }
  },
})

// Action creators are generated for each case reducer function
export const { AllProducts } = productSlice.actions

export default productSlice.reducer