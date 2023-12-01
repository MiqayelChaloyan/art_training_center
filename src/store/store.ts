import { configureStore } from '@reduxjs/toolkit';

import stateModalSlice from './stateModalSlice';

export const store = configureStore({
	reducer: {
		stateModal: stateModalSlice,
		},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch