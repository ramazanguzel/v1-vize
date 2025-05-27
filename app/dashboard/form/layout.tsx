"use client";

import React from "react";
import { FormContainer } from "@/components/form/container";

// Define form steps
export const formSteps = [
  { id: 1, name: "Personal Information", path: "/dashboard/form/personal" },
  { id: 2, name: "Contact Information", path: "/dashboard/form/contact" },
  { id: 3, name: "Travel Information", path: "/dashboard/form/travel" },
  { id: 4, name: "Additional Information", path: "/dashboard/form/additional" },
  { id: 5, name: "Review & Submit", path: "/dashboard/form/review" },
];

export default function FormLayout() {
  return <FormContainer />;
}
