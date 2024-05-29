import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import supabase from "../config/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UpdateModalProps {
  workItem: any;
  onClose: () => void;
  onUpdate: () => void;
}

const UpdateModal: React.FC<UpdateModalProps> = ({
  workItem,
  onClose,
  onUpdate,
}) => {
  const initialValues = {
    websiteName: workItem.websiteName,
    description: workItem.description,
    tags: workItem.tags,
  };

  const validationSchema = Yup.object({
    websiteName: Yup.string().required("Website name is required"),
    description: Yup.string().required("Description is required"),
    tags: Yup.string().required("Tags are required"),
  });

  const handleSubmit = async (values) => {
    try {
      // Split the tags string into an array
      const formattedTags = values.tags.split(",").map((tag) => tag.trim());

      const updateData = {
        websiteName: values.websiteName,
        description: values.description,
        tags: formattedTags, // Save tags as an array
      };

      const { error } = await supabase
        .from("work")
        .update(updateData)
        .eq("id", workItem.id);

      if (error) {
        throw error;
      }

      toast.success("Item updated successfully!");
      onUpdate();
      onClose();
    } catch (error: any) {
      console.error("Error updating item:", error.message);
      toast.error(`Error updating item: ${error.message}`);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <ToastContainer />
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Item</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="websiteName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Website Name
                </label>
                <input
                  id="websiteName"
                  name="websiteName"
                  type="text"
                  value={values.websiteName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 p-2 block w-full border ${
                    errors.websiteName && touched.websiteName
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
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
                <textarea
                  id="description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 p-2 block w-full border ${
                    errors.description && touched.description
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
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
                <input
                  id="tags"
                  name="tags"
                  type="text"
                  value={values.tags}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 p-2 block w-full border ${
                    errors.tags && touched.tags
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                />
                <ErrorMessage
                  name="tags"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  {isSubmitting ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateModal;
