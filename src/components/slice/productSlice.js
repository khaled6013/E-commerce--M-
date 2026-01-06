import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carItem: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
     AllProducts:(state,action)=>{
      let findIndex = state.carItem.findIndex((item)=> item.id === action.payload.id)
      if(findIndex !== -1){
        state.carItem[findIndex].quantity++
      }else{
        state.carItem = [...state.carItem, action.payload]
      }
     }
  },
})

// Action creators are generated for each case reducer function
export const { AllProducts } = productSlice.actions

export default productSlice.reducer