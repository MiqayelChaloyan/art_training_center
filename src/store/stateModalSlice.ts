import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

interface stateModal {
	isOpen: boolean
}

const initialState: stateModal = {
	isOpen: false,
};

export const stateModal = createSlice({
	name: 'state-modal',
	initialState,
	reducers: {
		openModal: (state) => {
			state.isOpen = true;
		},
		closeModal: (state) => {
			state.isOpen = false;
		}
	},
});

export const { openModal, closeModal } = stateModal.actions;

export const selectCount = (state: RootState) => state.stateModal.isOpen;

export default stateModal.reducer;