import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Name is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone is required"),
});

const LUNA_URL = import.meta.env.LUNA_URL || "https://luna-pay.com";

export const RegisterDialog = () => {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // Validate form inputs
      await validationSchema.validate(inputs, { abortEarly: false });

      // Using FormSubmit AJAX endpoint
      const response = await fetch(`${LUNA_URL}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: inputs.name,
          email: inputs.email,
          phone: inputs.phone,
        }),
      });

      const data = await response.json();
      console.log("FormSubmit response:", data);

      if (data.success === "true" || data.success === true) {
        setSuccess(true);
        setInputs({});
      } else {
        throw new Error(data.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error instanceof Yup.ValidationError) {
        setError(error.message);
      } else if (error instanceof Error) {
        setError(error.message || "An unexpected error occurred.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (success) setSuccess(false);
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <h2>Please fill the form below</h2>

      {success ? (
        <div className="bg-green-50 p-4 rounded-md text-green-700 mb-4">
          Thank you for your submission! We'll contact you soon.
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2">
            <Input
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              type="email"
              value={inputs.email || ""}
              required
            />
            <Input
              placeholder="Name"
              name="name"
              onChange={handleInputChange}
              value={inputs.name || ""}
              required
            />
            <Input
              placeholder="Phone"
              name="phone"
              onChange={handleInputChange}
              type="tel"
              value={inputs.phone || ""}
              required
            />
          </div>

          <Button variant="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>

          {error && <p className="text-red-500">{error}</p>}
        </>
      )}

      <p>
        By clicking the "Submit" button, you agree to our{" "}
        <a
          href="/docs/privacy-policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 p-0 mt-1"
        >
          Privacy Policy
        </a>
      </p>
    </form>
  );
};
