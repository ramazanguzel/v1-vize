import { PDFDocument } from "pdf-lib";
import type { FormData } from "../store/useFormStore";

// Define the mapping between form fields and PDF form fields
export const formFieldMapping = {
  // Personal information
  firstName: "firstName",
  lastName: "lastName",
  birthDate: "birthDate",
  birthPlace: "birthPlace",
  nationality: "nationality",
  currentNationality: "currentNationality",
  gender: "gender",
  maritalStatus: "maritalStatus",

  // Contact information
  address: "address",
  city: "city",
  postalCode: "postalCode",
  country: "country",
  phone: "phone",
  email: "email",

  // Travel information
  travelPurpose: "travelPurpose",
  destinationCountry: "destinationCountry",
  entryDate: "entryDate",
  exitDate: "exitDate",

  // Additional information
  hasBeenFingerprinted: "hasBeenFingerprinted",
  visaType: "visaType",
};

// Function to load PDF template
export const loadPdfTemplate = async (
  templateUrl: string
): Promise<PDFDocument> => {
  try {
    const templateBytes = await fetch(templateUrl).then((res) =>
      res.arrayBuffer()
    );
    const pdfDoc = await PDFDocument.load(templateBytes);
    return pdfDoc;
  } catch (error) {
    console.error("Error loading PDF template:", error);
    throw new Error("Failed to load PDF template");
  }
};

// Function to fill PDF form fields with form data
export const fillPdfForm = async (
  pdfDoc: PDFDocument,
  formData: FormData
): Promise<PDFDocument> => {
  try {
    const form = pdfDoc.getForm();

    // Map through our form data and fill the corresponding PDF fields
    Object.entries(formFieldMapping).forEach(([formField, pdfField]) => {
      const field = form.getTextField(pdfField);
      if (field) {
        const value = formData[formField as keyof FormData];
        // Convert boolean to string if needed
        const stringValue =
          typeof value === "boolean"
            ? value
              ? "Yes"
              : "No"
            : value?.toString() || "";
        field.setText(stringValue);
      }
    });

    // Flatten form fields to make them non-editable (optional)
    // form.flatten()

    return pdfDoc;
  } catch (error) {
    console.error("Error filling PDF form:", error);
    throw new Error("Failed to fill PDF form");
  }
};

// Function to generate and download the filled PDF
export const generatePdf = async (formData: FormData): Promise<Uint8Array> => {
  try {
    // Load the template
    const pdfDoc = await loadPdfTemplate(
      "/templates/schengen_visa_application.pdf"
    );

    // Fill the form fields
    const filledPdfDoc = await fillPdfForm(pdfDoc, formData);

    // Save the filled PDF
    const pdfBytes = await filledPdfDoc.save();

    return pdfBytes;
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF");
  }
};

// Function to download the PDF
export const downloadPdf = (
  pdfBytes: Uint8Array,
  filename: string = "schengen_visa_application.pdf"
): void => {
  // Create a blob from the PDF bytes
  const blob = new Blob([pdfBytes], { type: "application/pdf" });

  // Create a URL for the blob
  const url = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  // Append the link to the body
  document.body.appendChild(link);

  // Click the link to trigger the download
  link.click();

  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
