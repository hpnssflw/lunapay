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

export const RegisterDialog = () => {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [error, setError] = useState<string | null>(null);

  const postForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await validationSchema.validate(inputs, { abortEarly: false });
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      console.log("Form submitted successfully:", await response.json());
    } catch (error) {
      console.log("$$ error", error);

      if (error instanceof Yup.ValidationError) {
        console.log("$$ error", error);
        setError(error.message);
      } else {
        console.log("$$ error", error);
        console.error("Error submitting form:", error);
        setError("An unexpected error occurred.");
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={postForm}>
      <h2>Please fill the form below</h2>
      <div className="flex flex-col gap-2">
        <Input
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          type="email"
        />
        <Input placeholder="Name" name="name" onChange={handleInputChange} />
        <Input
          placeholder="Phone"
          name="phone"
          onChange={handleInputChange}
          type="tel"
        />
      </div>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      {error && <p className="text-red-500">{error}</p>}
      <p>
        By clicking the "Submit" button, you agree to our{" "}
        <a
          href="/docs/privacy-policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          Privacy Policy
        </a>
      </p>
    </form>
  );
};
