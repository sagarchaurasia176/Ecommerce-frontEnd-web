import { configureStore } from '@reduxjs/toolkit'
import Slice from '../slice/Slice'
// store reducer  
export const store = configureStore({
  reducer: {
    //enter your file name
    //key    -> values
    cartRedux: Slice,
  },
})