import { create } from 'zustand'

type FormStore = {
  form: {
    name: string;
    photo: any;
    arquive: any;
  }
  setForm: (form: FormStore['form']) => void
}

export const useFormStore = create<FormStore>((set) => ({
  form: {
    name: '',
    photo: null,
    arquive: null,
  },
  setForm: (form) => set({ form }),
}));

type FormRouteStore = {
  form: {
    station: string;
    city: string;
    packageNumber: string;
    packageQuantity: string;
    letter: string;
    time: string;
  }
  setForm: (form: FormRouteStore['form']) => void
}

export const useFormRouteStore = create<FormRouteStore>((set) => ({
  form: {
    station: '',
    city: '',
    packageNumber: '',
    packageQuantity: '',
    letter: '',
    time: '',
  },
  setForm: (form) => set({ form }),
}));

type LoadingStore = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useLoadingStore = create<LoadingStore>((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
}));