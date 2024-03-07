import { create } from "zustand";

interface ModalState {
  movieId?: string;
  nameMovie?: string;
  visible: boolean;
  show: (movieId?: string, nameMovie?: string) => void;
  hide: () => void;
}

const useModalDelete = create<ModalState>((set) => ({
  visible: false,
  movieId: undefined,
  nameMovie: undefined,
  show: (movieId, nameMovie) => {
    set(() => ({ visible: true, movieId, nameMovie }));
  },
  hide: () => {
    set(() => ({ visible: false, movieId: undefined, nameMovie: undefined }));
  },
}));

export default useModalDelete;
