"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useFormStore from "@/lib/store/useFormStore";
import { generatePdf, downloadPdf } from "@/lib/pdf/pdfUtils";

export function ReviewForm() {
  const { formData, setComplete } = useFormStore();

  const handleDownloadPdf = async () => {
    try {
      const pdfBytes = await generatePdf(formData);
      downloadPdf(pdfBytes);
      setComplete(true);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Review Your Application</h2>
      <p className="text-gray-500">
        Please review your application details before submission.
      </p>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">Full Name</p>
                <p className="text-gray-600">
                  {formData.firstName} {formData.lastName}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Date of Birth</p>
                <p className="text-gray-600">{formData.birthDate}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Place of Birth</p>
                <p className="text-gray-600">{formData.birthPlace}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Nationality</p>
                <p className="text-gray-600">{formData.nationality}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Current Nationality</p>
                <p className="text-gray-600">{formData.currentNationality}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Gender</p>
                <p className="text-gray-600">
                  {formData.gender === "male"
                    ? "Male"
                    : formData.gender === "female"
                    ? "Female"
                    : formData.gender === "other"
                    ? "Other"
                    : ""}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Marital Status</p>
                <p className="text-gray-600">
                  {formData.maritalStatus
                    ? formData.maritalStatus.charAt(0).toUpperCase() +
                      formData.maritalStatus.slice(1)
                    : ""}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">Address</p>
                <p className="text-gray-600">{formData.address}</p>
              </div>
              <div>
                <p className="text-sm font-medium">City</p>
                <p className="text-gray-600">{formData.city}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Postal Code</p>
                <p className="text-gray-600">{formData.postalCode}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Country</p>
                <p className="text-gray-600">{formData.country}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Phone Number</p>
                <p className="text-gray-600">{formData.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Email Address</p>
                <p className="text-gray-600">{formData.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Travel Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">Purpose of Travel</p>
                <p className="text-gray-600">
                  {formData.travelPurpose
                    ? formData.travelPurpose
                        .split("_")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")
                    : ""}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Destination Country</p>
                <p className="text-gray-600">{formData.destinationCountry}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Entry Date</p>
                <p className="text-gray-600">{formData.entryDate}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Exit Date</p>
                <p className="text-gray-600">{formData.exitDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">Visa Type</p>
                <p className="text-gray-600">
                  {formData.visaType
                    ? formData.visaType
                        .split("_")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")
                    : ""}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">
                  Previously Fingerprinted for Schengen Visa
                </p>
                <p className="text-gray-600">
                  {formData.hasBeenFingerprinted ? "Yes" : "No"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-8">
          <Button size="lg" onClick={handleDownloadPdf}>
            Download Completed Application
          </Button>
        </div>
      </div>
    </div>
  );
}
