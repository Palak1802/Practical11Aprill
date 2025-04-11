// const fetchUserProfile = createAsyncThunk(
//   constant.getProfile,
//   async (token: string | undefined, thunkAPI) => {
//     try {
//       const response = await axiosInstance.get(constant.getProfile, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }); // Replace with your API endpoint
//       if (response?.status == 200) {
//         thunkAPI.dispatch(getUserDetails(response?.data));
//         return response.data;
//       }
//     } catch (error: any) {
//       Log('User profile failed::', error);
//       {
//         return thunkAPI.rejectWithValue(error.response.data);
//       }
//     }
//   },
// );

export {};
