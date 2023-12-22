import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filter:''
}

const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        setFilter(state, actions){
            state.filter = actions.payload;
        }
    }
});

export const {setFilter} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const searchContact = state => state.filter;