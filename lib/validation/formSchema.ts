import { z } from "zod";

// Personal information schema
export const personalInfoSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  birthDate: z.string().min(1, "Birth date is required"),
  birthPlace: z.string().min(1, "Birth place is required"),
  nationality: z.string().min(1, "Nationality is required"),
  currentNationality: z.string().min(1, "Current nationality is required"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Gender is required",
  }),
  maritalStatus: z.enum(
    ["single", "married", "divorced", "widowed", "separated", "other"],
    {
      required_error: "Marital status is required",
    }
  ),
});

// Contact information schema
export const contactInfoSchema = z.object({
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
});

// Travel information schema
export const travelInfoSchema = z.object({
  travelPurpose: z.enum(
    [
      "tourism",
      "business",
      "visiting_family_friends",
      "cultural",
      "sports",
      "official_visit",
      "medical",
      "study",
      "transit",
      "other",
    ],
    {
      required_error: "Travel purpose is required",
    }
  ),
  destinationCountry: z.string().min(1, "Destination country is required"),
  entryDate: z.string().min(1, "Entry date is required"),
  exitDate: z.string().min(1, "Exit date is required"),
});

// Additional information schema
export const additionalInfoSchema = z.object({
  hasBeenFingerprinted: z.boolean(),
  visaType: z.enum(["single_entry", "double_entry", "multiple_entry"], {
    required_error: "Visa type is required",
  }),
});

// Combined form schema
export const formSchema = z.object({
  // Personal information
  ...personalInfoSchema.shape,

  // Contact information
  ...contactInfoSchema.shape,

  // Travel information
  ...travelInfoSchema.shape,

  // Additional information
  ...additionalInfoSchema.shape,
});

export type FormSchemaType = z.infer<typeof formSchema>;
