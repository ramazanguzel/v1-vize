"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectOption } from "@/components/ui/select";
import useFormStore from "@/lib/store/useFormStore";

export function TravelInfoForm() {
  const { formData, updateForm } = useFormStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateForm({ [name]: value });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Travel Information</h2>
      <p className="text-gray-500">
        Please provide details about your planned travel to the Schengen area.
      </p>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="travelPurpose" className="text-sm font-medium">
            Purpose of Travel
          </label>
          <Select
            id="travelPurpose"
            name="travelPurpose"
            value={formData.travelPurpose}
            onChange={handleChange}
            required
          >
            <SelectOption value="">Select purpose of travel</SelectOption>
            <SelectOption value="tourism">Tourism</SelectOption>
            <SelectOption value="business">Business</SelectOption>
            <SelectOption value="visiting_family_friends">
              Visiting Family/Friends
            </SelectOption>
            <SelectOption value="cultural">Cultural</SelectOption>
            <SelectOption value="sports">Sports</SelectOption>
            <SelectOption value="official_visit">Official Visit</SelectOption>
            <SelectOption value="medical">Medical</SelectOption>
            <SelectOption value="study">Study</SelectOption>
            <SelectOption value="transit">Transit</SelectOption>
            <SelectOption value="other">Other</SelectOption>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="destinationCountry" className="text-sm font-medium">
            Main Destination Country
          </label>
          <Input
            id="destinationCountry"
            name="destinationCountry"
            value={formData.destinationCountry}
            onChange={handleChange}
            placeholder="Enter your main destination country"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="entryDate" className="text-sm font-medium">
              Planned Entry Date
            </label>
            <Input
              id="entryDate"
              name="entryDate"
              type="date"
              value={formData.entryDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="exitDate" className="text-sm font-medium">
              Planned Exit Date
            </label>
            <Input
              id="exitDate"
              name="exitDate"
              type="date"
              value={formData.exitDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
