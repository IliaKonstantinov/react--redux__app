import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: []
}

export const getUsers = createAsyncThunk(
  'posts/getUsers',
  async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
  }
)

export const getByName = createAsyncThunk(
  'posts/getByName',
  async (email) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`);
    const data = await res.json();
    return data;
  }
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers:{
    filerByCity: (state) => {
      state.users.sort((a, b) => a.address.city > b.address.city ? 1 : -1);
      console.log(state.users)
    },
    filerByName: (state) =>{
      state.users.sort((a, b) => a.name > b.name ? 1 : -1);
      console.log(state.users)
    }
  },
  extraReducers:{
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload
    },
    [getUsers.pending]: () => console.log('pending'),
    [getUsers.rejected]: () => console.log('rejected'),
    [getByName.fulfilled]: (state, action) => {
      state.users = action.payload
    },
    [getByName.pending]: () => console.log('pending'),
    [getByName.rejected]: () => console.log('rejected'),
  }
})


export default postsSlice.reducer
export const { filerByCity, filerByName} = postsSlice.actions