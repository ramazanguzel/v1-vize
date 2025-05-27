"use client";

import React from "react";
import { FormNavigation } from "@/components/form/navigation";
import { PersonalInfoForm } from "@/components/form/steps/personal-info";
import { ContactInfoForm } from "@/components/form/steps/contact-info";
import { TravelInfoForm } from "@/components/form/steps/travel-info";
import { AdditionalInfoForm } from "@/components/form/steps/additional-info";
import { ReviewForm } from "@/components/form/steps/review";
import { PdfPreview } from "@/components/pdf/preview";
import useFormStore from "@/lib/store/useFormStore";

export function FormContainer() {
  const { formData } = useFormStore();
  const currentStep = formData.currentStep;

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoForm />;
      case 1:
        return <ContactInfoForm />;
      case 2:
        return <TravelInfoForm />;
      case 3:
        return <AdditionalInfoForm />;
      case 4:
        return <ReviewForm />;
      default:
        return <PersonalInfoForm />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Schengen Visa Application
        </h1>
        <p className="text-gray-500 text-center">
          Complete the form below to prepare your Schengen visa application.
        </p>
      </div>

      <FormNavigation />

      <div className="bg-white p-6 rounded-lg border shadow-sm">
        {renderStepContent()}
      </div>

      {currentStep === 4 && (
        <div className="mt-8">
          <PdfPreview />
        </div>
      )}
    </div>
  );
}
