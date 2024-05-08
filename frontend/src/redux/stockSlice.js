import { createSlice } from '@reduxjs/toolkit'

export const stockSlice = createSlice({
    name: "stock",
    initialState: {
        stockId: '',
        stockCount: 0,
        stockPrice: 0,
        stockName: '',
        stockImg: '',
        lastWeekData: []
    },
    reducers:{
        setStock: (state, action) => {
            state.stockId = action.payload.stockId;
            state.stockCount = action.payload.stockCount;
            state.stockPrice = action.payload.stockPrice;
            state.stockName = action.payload.stockName;
            state.stockImg = action.payload.stockImg;
            state.lastWeekData = action.payload.lastWeekData;
        }
    }
})

export const { setStock } = stockSlice.actions

export default stockSlice.reducer