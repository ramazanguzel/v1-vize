"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectOption } from "@/components/ui/select";
import useFormStore from "@/lib/store/useFormStore";

export function PersonalInfoForm() {
  const { formData, updateForm } = useFormStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateForm({ [name]: value });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Personal Information</h2>
      <p className="text-gray-500">
        Please provide your personal details as they appear on your passport.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium">
            First Name
          </label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium">
            Last Name
          </label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="birthDate" className="text-sm font-medium">
            Date of Birth
          </label>
          <Input
            id="birthDate"
            name="birthDate"
            type="date"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="birthPlace" className="text-sm font-medium">
            Place of Birth
          </label>
          <Input
            id="birthPlace"
            name="birthPlace"
            value={formData.birthPlace}
            onChange={handleChange}
            placeholder="Enter your place of birth"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="nationality" className="text-sm font-medium">
            Nationality at Birth
          </label>
          <Input
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            placeholder="Enter your nationality at birth"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="currentNationality" className="text-sm font-medium">
            Current Nationality
          </label>
          <Input
            id="currentNationality"
            name="currentNationality"
            value={formData.currentNationality}
            onChange={handleChange}
            placeholder="Enter your current nationality"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="gender" className="text-sm font-medium">
            Gender
          </label>
          <Select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <SelectOption value="">Select gender</SelectOption>
            <SelectOption value="male">Male</SelectOption>
            <SelectOption value="female">Female</SelectOption>
            <SelectOption value="other">Other</SelectOption>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="maritalStatus" className="text-sm font-medium">
            Marital Status
          </label>
          <Select
            id="maritalStatus"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            required
          >
            <SelectOption value="">Select marital status</SelectOption>
            <SelectOption value="single">Single</SelectOption>
            <SelectOption value="married">Married</SelectOption>
            <SelectOption value="divorced">Divorced</SelectOption>
            <SelectOption value="widowed">Widowed</SelectOption>
            <SelectOption value="separated">Separated</SelectOption>
            <SelectOption value="other">Other</SelectOption>
          </Select>
        </div>
      </div>
    </div>
  );
}
