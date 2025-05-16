import { create } from 'zustand';

// Define the store state type
interface LayoutState {
  sidebarExpanded: boolean;
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
  toggleSidebar: () => void;
  setSidebarExpanded: (expanded: boolean) => void;
}

// Create the store
const useLayoutStore = create<LayoutState>((set) => ({
  sidebarExpanded: false,
  isMobile: false,
  setIsMobile: (isMobile) => set({ isMobile }),
  toggleSidebar: () => 
    set((state) => ({ sidebarExpanded: !state.sidebarExpanded })),
  setSidebarExpanded: (expanded) => 
    set({ sidebarExpanded: expanded }),
}));

export default useLayoutStore;