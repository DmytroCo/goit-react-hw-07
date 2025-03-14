import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://67d1f10090e0670699bc07ab.mockapi.io';

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const { data } = await axios.get("/contacts");
        return data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
    }
})
export const addContact = createAsyncThunk("contacts/addContact", async (body, thunkAPI) => { 
    try {
        const { data } = await axios.post('/contacts', body);
        return data
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
}
})
export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        await axios.delete(`/contacts/${id}`)
        return id
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
    }
})