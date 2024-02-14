import { create } from "zustand";

interface PaginationState {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const usePagination = create<PaginationState>((set) => ({
  currentPage: 1,
  setCurrentPage: (currentPage) => {
    set((state) => ({ ...state, currentPage }));
  },
}));

export default usePagination;
