import create from "zustand";

const actionStore = (set) => ({
  isVisible: false,
  setShowModal: () => {
    set((state) => ({ isVisible: !state.isVisible }));
  },
});

const useActionStore = create(actionStore);
export default useActionStore;
