import { create } from "zustand";

interface DrawerState {
  visible: boolean;
  show: () => void;
  hide: () => void;
  isEdit: boolean;
  movieId?: string;
  showEdit: (movieId: string) => void;
}

const useDrawerMovie = create<DrawerState>((set) => ({
  visible: false,
  isEdit: false,
  movieId: undefined,
  show: () => {
    set(() => ({ visible: true }));
  },
  hide: () => {
    set(() => ({ visible: false, movieId: undefined }));
  },
  showEdit: (movieId) => {
    set((state) => ({ ...state, visible: true, movieId }));
  },
}));

export default useDrawerMovie;
