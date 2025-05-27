"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import useFormStore from "@/lib/store/useFormStore";
import { cn } from "@/lib/utils";

interface StepData {
  title: string;
  description: string;
}

const steps: StepData[] = [
  {
    title: "Personal Information",
    description: "Basic personal details",
  },
  {
    title: "Contact Information",
    description: "How to reach you",
  },
  {
    title: "Travel Information",
    description: "Your travel plans",
  },
  {
    title: "Additional Information",
    description: "Extra details for your visa",
  },
  {
    title: "Review & Submit",
    description: "Verify your application",
  },
];

export function FormNavigation() {
  const { formData, nextStep, prevStep, goToStep } = useFormStore();
  const currentStep = formData.currentStep;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            onClick={() => goToStep(index)}
          >
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center mb-2 cursor-pointer transition-all",
                index === currentStep
                  ? "bg-primary text-primary-foreground"
                  : index < currentStep
                  ? "bg-primary/30 text-primary-foreground"
                  : "bg-gray-200 text-gray-500"
              )}
            >
              {index < currentStep ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                index + 1
              )}
            </div>
            <span
              className={cn(
                "text-sm font-medium",
                index === currentStep ? "text-primary" : "text-gray-500"
              )}
            >
              {step.title}
            </span>
            <span className="text-xs text-gray-500 hidden md:block">
              {step.description}
            </span>
          </div>
        ))}
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full rounded">
          <div
            className="h-1 bg-primary rounded transition-all"
            style={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        {currentStep < steps.length - 1 ? (
          <Button onClick={nextStep}>Next</Button>
        ) : (
          <Button onClick={() => {}}>Submit Application</Button>
        )}
      </div>
    </div>
  );
}
