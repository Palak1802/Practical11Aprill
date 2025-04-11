import {createSlice} from '@reduxjs/toolkit';

const initialState: UserReducerProps = {
  wishlistProducts: [],
};
const userSlice = createSlice({
  name: 'userReducer',
  initialState: initialState,
  reducers: {
    productsWishlist: (state, action) => {
      return {
        ...state,
        wishlistProducts: action?.payload,
      };
    },
  },
  extraReducers: builder => {
    // builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
    //   return {
    //     ...state,
    //     userProfileDetails: action.payload,
    //   };
    // });
  },
});

export const {productsWishlist} = userSlice.actions;

export default userSlice.reducer;
