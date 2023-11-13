// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getCoursesNames } from '../../sanity/services/courses-names.service';

// interface StateModal {
//   loading: 'idle' | 'pending' | 'succeeded' | 'failed';
//   courses: any;
// }

// const initialState: StateModal = {
//   loading: 'idle',
//   courses: [],
// };

// export const fetchCourses = createAsyncThunk('state-courses/fetchCourses', async () => {
//   const response = await getCoursesNames();
//   return response.data;
// });

// export const coursesSlice = createSlice({
//   name: 'state-courses',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCourses.pending, (state) => {
//         state.loading = 'pending';
//       })
//       .addCase(fetchCourses.fulfilled, (state, action) => {
//         state.loading = 'idle';
//         state.courses = action.payload;
//       });
//   },
// });

// // export const selectCount = (state: any) => state.coursesSlice.courses;


// export default coursesSlice.reducer;
