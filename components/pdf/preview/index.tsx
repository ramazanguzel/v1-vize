"use client";

import React, { useEffect, useState } from "react";
import useFormStore from "@/lib/store/useFormStore";
import { generatePdf } from "@/lib/pdf/pdfUtils";
import { Button } from "@/components/ui/button";

export function PdfPreview() {
  const { formData } = useFormStore();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generatePreview = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const pdfBytes = await generatePdf(formData);
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (err) {
      console.error("Error generating PDF preview:", err);
      setError("Failed to generate PDF preview. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Cleanup function to release the blob URL when component unmounts
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">PDF Preview</h2>
        <Button onClick={generatePreview} disabled={isLoading}>
          {isLoading ? "Generating..." : "Generate Preview"}
        </Button>
      </div>

      {error && <div className="text-red-500">{error}</div>}

      {isLoading && (
        <div className="flex justify-center items-center h-96 border rounded">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}

      {pdfUrl && !isLoading && (
        <div className="border rounded h-96">
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            title="PDF Preview"
          ></iframe>
        </div>
      )}

      {!pdfUrl && !isLoading && (
        <div className="flex justify-center items-center h-96 border rounded bg-gray-50">
          <div className="text-center">
            <p className="text-gray-500 mb-4">
              No preview available. Click the button above to generate a
              preview.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
