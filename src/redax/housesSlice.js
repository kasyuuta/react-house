import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import Api from "../api"; 

export const fetchHouses = createAsyncThunk("house/setHouses", async ()=>  {
    const res = await Api.getHouses()
    return res.data
})

const housesSlice = createSlice({
    name: "houses",
    initialState: {
        isLoading: true,
        data: []
    },
    reducers: {
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchHouses.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })
    }
   
})

export const housesSliceAction = housesSlice.actions
export const housesSliceReducer = housesSlice.reducer