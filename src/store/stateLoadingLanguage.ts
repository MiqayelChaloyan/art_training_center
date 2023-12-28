import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

interface stateModalLoadingLanguage {
	isOpen: boolean
}

const initialState: stateModalLoadingLanguage = {
	isOpen: false,
};

export const stateModalLoadingLanguage = createSlice({
	name: 'state-modal-loading',
	initialState,
	reducers: {
		openModalLoading: (state) => {
			state.isOpen = true;
		},
		closeModalLoading: (state) => {
			state.isOpen = false;
		}
	},
});

export const { openModalLoading, closeModalLoading } = stateModalLoadingLanguage.actions;

export const selectCount = (state: RootState) => state.stateModalLoadingLanguage.isOpen;

export default stateModalLoadingLanguage.reducer;