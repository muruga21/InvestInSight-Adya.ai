import { configureStore } from '@reduxjs/toolkit'
import stockSliceReducer from './stockSlice'

export default configureStore({
  reducer: {
    stockSlice: stockSliceReducer
  }
})