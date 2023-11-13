import { configureStore } from '@reduxjs/toolkit';

import stateModalSlice from './stateModalSlice';
// import stateCoursesSlice from './stateCoursesSlce';

export const store = configureStore({
	reducer: {
		stateModal: stateModalSlice,
		// courses: stateCoursesSlice
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch