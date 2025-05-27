import { create } from "zustand";
import { persist } from "zustand/middleware";

export type FormData = {
  // Personal information
  firstName: string;
  lastName: string;
  birthDate: string;
  birthPlace: string;
  nationality: string;
  currentNationality: string;
  gender: string;
  maritalStatus: string;

  // Contact information
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  email: string;

  // Travel information
  travelPurpose: string;
  destinationCountry: string;
  entryDate: string;
  exitDate: string;

  // Additional information
  hasBeenFingerprinted: boolean;
  visaType: string;

  // Application metadata
  currentStep: number;
  isComplete: boolean;
  paymentComplete: boolean;
};

const initialFormData: FormData = {
  // Personal information
  firstName: "",
  lastName: "",
  birthDate: "",
  birthPlace: "",
  nationality: "",
  currentNationality: "",
  gender: "",
  maritalStatus: "",

  // Contact information
  address: "",
  city: "",
  postalCode: "",
  country: "",
  phone: "",
  email: "",

  // Travel information
  travelPurpose: "",
  destinationCountry: "",
  entryDate: "",
  exitDate: "",

  // Additional information
  hasBeenFingerprinted: false,
  visaType: "",

  // Application metadata
  currentStep: 0,
  isComplete: false,
  paymentComplete: false,
};

type FormStore = {
  formData: FormData;
  updateForm: (data: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  resetForm: () => void;
  setComplete: (complete: boolean) => void;
  setPaymentComplete: (complete: boolean) => void;
};

const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      formData: initialFormData,

      updateForm: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),

      nextStep: () =>
        set((state) => ({
          formData: {
            ...state.formData,
            currentStep: state.formData.currentStep + 1,
          },
        })),

      prevStep: () =>
        set((state) => ({
          formData: {
            ...state.formData,
            currentStep: Math.max(0, state.formData.currentStep - 1),
          },
        })),

      goToStep: (step) =>
        set((state) => ({
          formData: { ...state.formData, currentStep: step },
        })),

      resetForm: () => set({ formData: initialFormData }),

      setComplete: (complete) =>
        set((state) => ({
          formData: { ...state.formData, isComplete: complete },
        })),

      setPaymentComplete: (complete) =>
        set((state) => ({
          formData: { ...state.formData, paymentComplete: complete },
        })),
    }),
    {
      name: "visa-application-form",
    }
  )
);

export default useFormStore;
