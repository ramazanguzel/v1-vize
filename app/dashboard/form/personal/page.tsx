"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import useFormStore from "@/lib/store/useFormStore";
import { personalInfoSchema } from "@/lib/validation/formSchema";

export default function PersonalInformationForm() {
  const router = useRouter();
  const { formData, updateForm, nextStep } = useFormStore();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form data
      personalInfoSchema.parse({
        firstName: formData.firstName,
        lastName: formData.lastName,
        birthDate: formData.birthDate,
        birthPlace: formData.birthPlace,
        nationality: formData.nationality,
        currentNationality: formData.currentNationality,
        gender: formData.gender,
        maritalStatus: formData.maritalStatus,
      });

      // If validation passes, clear errors and go to next step
      setErrors({});
      nextStep();
      router.push("/dashboard/form/contact");
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to a more usable format
        const formattedErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            formattedErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(formattedErrors);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateForm({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium mb-1"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium mb-1"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
            )}
          </div>

          {/* Birth Date */}
          <div>
            <label
              htmlFor="birthDate"
              className="block text-sm font-medium mb-1"
            >
              Birth Date
            </label>
            <input
              id="birthDate"
              name="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${
                errors.birthDate ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.birthDate && (
              <p className="mt-1 text-sm text-red-500">{errors.birthDate}</p>
            )}
          </div>

          {/* Birth Place */}
          <div>
            <label
              htmlFor="birthPlace"
              className="block text-sm font-medium mb-1"
            >
              Birth Place
            </label>
            <input
              id="birthPlace"
              name="birthPlace"
              type="text"
              value={formData.birthPlace}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${
                errors.birthPlace ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.birthPlace && (
              <p className="mt-1 text-sm text-red-500">{errors.birthPlace}</p>
            )}
          </div>

          {/* Nationality */}
          <div>
            <label
              htmlFor="nationality"
              className="block text-sm font-medium mb-1"
            >
              Nationality
            </label>
            <input
              id="nationality"
              name="nationality"
              type="text"
              value={formData.nationality}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${
                errors.nationality ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.nationality && (
              <p className="mt-1 text-sm text-red-500">{errors.nationality}</p>
            )}
          </div>

          {/* Current Nationality */}
          <div>
            <label
              htmlFor="currentNationality"
              className="block text-sm font-medium mb-1"
            >
              Current Nationality
            </label>
            <input
              id="currentNationality"
              name="currentNationality"
              type="text"
              value={formData.currentNationality}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${
                errors.currentNationality ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.currentNationality && (
              <p className="mt-1 text-sm text-red-500">
                {errors.currentNationality}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium mb-1">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${
                errors.gender ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="mt-1 text-sm text-red-500">{errors.gender}</p>
            )}
          </div>

          {/* Marital Status */}
          <div>
            <label
              htmlFor="maritalStatus"
              className="block text-sm font-medium mb-1"
            >
              Marital Status
            </label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${
                errors.maritalStatus ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
              <option value="separated">Separated</option>
              <option value="other">Other</option>
            </select>
            {errors.maritalStatus && (
              <p className="mt-1 text-sm text-red-500">
                {errors.maritalStatus}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}
