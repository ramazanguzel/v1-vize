"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectOption } from "@/components/ui/select";
import useFormStore from "@/lib/store/useFormStore";

export function AdditionalInfoForm() {
  const { formData, updateForm } = useFormStore();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateForm({ [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateForm({ [name]: checked });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Additional Information</h2>
      <p className="text-gray-500">
        Please provide additional details required for your visa application.
      </p>

      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="visaType" className="text-sm font-medium">
            Visa Type
          </label>
          <Select
            id="visaType"
            name="visaType"
            value={formData.visaType}
            onChange={handleSelectChange}
            required
          >
            <SelectOption value="">Select visa type</SelectOption>
            <SelectOption value="single_entry">Single Entry</SelectOption>
            <SelectOption value="double_entry">Double Entry</SelectOption>
            <SelectOption value="multiple_entry">Multiple Entry</SelectOption>
          </Select>
          <p className="text-xs text-gray-500 mt-1">
            Select the type of visa you are applying for.
          </p>
        </div>

        <div className="space-y-2">
          <Checkbox
            id="hasBeenFingerprinted"
            name="hasBeenFingerprinted"
            checked={formData.hasBeenFingerprinted}
            onChange={handleCheckboxChange}
            label="I have been fingerprinted previously when applying for a Schengen visa"
          />
          <p className="text-xs text-gray-500 mt-1 ml-6">
            Check this box if you have provided fingerprints for a previous
            Schengen visa application.
          </p>
        </div>
      </div>
    </div>
  );
}
