import { configureStore } from '@reduxjs/toolkit';

import stateModalSlice from './stateModalSlice';
import stateModalLoadingLanguage from './stateLoadingLanguage';

export const store = configureStore({
	reducer: {
		stateModal: stateModalSlice,
		stateModalLoadingLanguage: stateModalLoadingLanguage,
		},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch