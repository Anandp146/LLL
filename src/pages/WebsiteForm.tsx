import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import supabase from "../config/supabaseClient"; // Import the Supabase client
// const url = REACT_APP_SUPABASE_URL
// console.log(supabase)
// https://qhtxrkapznipvdydeacv.supabase.co/storage/v1/object/public/images/${values.websiteName}/websiteImage
// https://qhtxrkapznipvdydeacv.supabase.co/storage/v1/object/public/images/${values.websiteName}/logoImage

interface FormValues {
  websiteName: string;
  description: string;
  tags: string;
  websiteImage: File | null;
  logoImage: File | null;
}

const initialValues: FormValues = {
  websiteName: "",
  description: "",
  tags: "",
  websiteImage: null,
  logoImage: null,
};

const validationSchema = Yup.object({
  websiteName: Yup.string().required("Website name is required"),
  description: Yup.string().required("Description is required"),
  tags: Yup.string().required("Tags are required"),
  websiteImage: Yup.mixed()
    .required("Website image is required")
    .test(
      "fileSize",
      "File Size is too large",
      (value) => !value || (value instanceof File && value.size <= 2000000)
    )
    .test(
      "fileType",
      "Unsupported File Format",
      (value) =>
        !value ||
        (value instanceof File &&
          ["image/jpeg", "image/png"].includes(value.type))
    ),
  logoImage: Yup.mixed()
    .required("Logo image is required")
    .test(
      "fileSize",
      "File Size is too large",
      (value) => !value || (value instanceof File && value.size <= 2000000)
    )
    .test(
      "fileType",
      "Unsupported File Format",
      (value) =>
        !value ||
        (value instanceof File &&
          ["image/jpeg", "image/png"].includes(value.type))
    ),
});

const WebsiteForm: React.FC = () => {
  const [websiteImagePreview, setWebsiteImagePreview] = useState<string | null>(
    null
  );
  const [logoImagePreview, setLogoImagePreview] = useState<string | null>(null);

  const handleSubmit = async (values: FormValues) => {
    try {
      const uploads: { field: string; url: string | null }[] = [];
      //  console.log(values.websiteImage)
      if (values.websiteImage) {
        const folderPath = `${values.websiteName}/websiteImage`;
        const { data, error } = await supabase.storage
          .from("images")
          .upload(folderPath, values.websiteImage);
        if (error) {
          console.error("Error uploading image:", error.message);
        } else {
          console.log("Image uploaded successfully:", data);
        }
      }

      if (values.logoImage) {
        const folderPath = `${values.websiteName}/logoImage`;
        const { data, error } = await supabase.storage
          .from("images")
          .upload(folderPath, values.logoImage);
        if (error) {
          console.error("Error uploading image:", error.message);
        } else {
          console.log("Image uploaded successfully:", data);
        }
      }

      let formattedTags: string;
      if (Array.isArray(values.tags)) {
        // Format tags array for PostgreSQL
        formattedTags = `{${values.tags.map((tag) => `"${tag}"`).join(",")}}`;
      } else if (typeof values.tags === "string") {
        // Split the string into an array and format
        formattedTags = `{${values.tags
          .split(",")
          .map((tag) => `"${tag.trim()}"`)
          .join(",")}}`;
      } else {
        throw new Error("Invalid tags format");
      }
      // Construct the form data to be saved in the database
      const formData = {
        websiteName: values.websiteName,
        description: values.description,
        tags: formattedTags,
        websiteImageUrl:
          process.env.REACT_APP_SUPABASE_URL +
          "storage/v1/object/public/images/" +
          values.websiteName +
          "/websiteImage",
        logoImageUrl:
          process.env.REACT_APP_SUPABASE_URL +
          "storage/v1/object/public/images/" +
          values.websiteName +
          "/logoImage",
      };

      const { error } = await supabase.from("work").insert([formData]);
      if (error) throw error;

      console.log("Form submitted:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleFileChange =
    (
      setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined
      ) => void,
      fieldName: string,
      setPreview: React.Dispatch<React.SetStateAction<string | null>>
    ) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.currentTarget.files) {
        const file = event.currentTarget.files[0];
        setFieldValue(fieldName, file);
        setPreview(URL.createObjectURL(file));
      }
    };

  return (
    <div className="max-w-md mx-auto my-20 p-6 bg-white rounded-lg shadow-md sm:my-28">
      <h1 className="text-3xl font-semibold mb-8 text-center text-blue-600">
        Submit Website Information
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-6">
            <div>
              <label
                htmlFor="websiteName"
                className="block text-sm font-medium text-gray-700"
              >
                Website Name
              </label>
              <Field
                id="websiteName"
                name="websiteName"
                type="text"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="websiteName"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <Field
                id="description"
                name="description"
                as="textarea"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-gray-700"
              >
                Tags
              </label>
              <Field
                id="tags"
                name="tags"
                type="text"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="tags"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="websiteImage"
                className="block text-sm font-medium text-gray-700"
              >
                Website Image
              </label>
              <input
                id="websiteImage"
                name="websiteImage"
                type="file"
                onChange={handleFileChange(
                  setFieldValue,
                  "websiteImage",
                  setWebsiteImagePreview
                )}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                aria-describedby="websiteImageError"
              />
              {websiteImagePreview && (
                <img
                  src={websiteImagePreview}
                  alt="Website Preview"
                  className="mt-2 h-32 w-full object-cover rounded-md"
                />
              )}
              <ErrorMessage
                name="websiteImage"
                component="div"
                className="text-red-600 text-sm mt-1"
                id="websiteImageError"
              />
            </div>
            <div>
              <label
                htmlFor="logoImage"
                className="block text-sm font-medium text-gray-700"
              >
                Logo Image
              </label>
              <input
                id="logoImage"
                name="logoImage"
                type="file"
                onChange={handleFileChange(
                  setFieldValue,
                  "logoImage",
                  setLogoImagePreview
                )}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                aria-describedby="logoImageError"
              />
              {logoImagePreview && (
                <img
                  src={logoImagePreview}
                  alt="Logo Preview"
                  className="mt-2 h-32 w-full object-cover rounded-md"
                />
              )}
              <ErrorMessage
                name="logoImage"
                component="div"
                className="text-red-600 text-sm mt-1"
                id="logoImageError"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default WebsiteForm;
