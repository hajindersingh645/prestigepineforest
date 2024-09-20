"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const LeadForm = ({ buttonLabel = `Download Brochure` }) => {
  /* Router */
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* Local State */
  const [error, setError] = useState(false);
  const [errorsList, setErrorsList] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (data) => {
    setSubmitting(true);
    (async () => {
      const rawResponse = await fetch("https://artbroodshq.com/api/form", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          drake: "8b21ed2c-7565-4092-9537-3690d432e3cc",
        }),
      });
      const rawContent = rawResponse;
      const content = await rawResponse.json();

      if (rawContent.status === 422) {
        setError(true);
        setErrorsList(content);
      } else {
        setError(false);
        setErrorsList({});
        router.push(`/thank-you`);

        // Trigger PDF download
        const pdfUrl = "/upload/Prestige Pine Forest RERA Brochure LR.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // After 3 seconds, redirect to home page
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }

      setSubmitting(false);
    })();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <input
        type="text"
        className="input"
        name="name"
        placeholder="name"
        {...register("name", { required: true })}
        id=""
      />
      {errors.name && <span className="error">{`Name can not be empty`}</span>}
      <input
        type="email"
        className="input"
        name="email"
        placeholder="Email"
        {...register("email", { required: true })}
        id=""
      />
      {errors.email && (
        <span className="error">{`Email can not be empty`}</span>
      )}
      <input
        type="number"
        className="input"
        name="phone"
        placeholder="Phone Number"
        {...register("phone", { required: true })}
        id=""
      />
      <textarea
        type="number"
        rows={3}
        className="input"
        name="message"
        placeholder="Message"
        {...register("message", { required: true })}
        id=""
      />
      {errors.name && (
        <span className="error">{`Phone number can not be empty`}</span>
      )}
      <button
        type="submit"
        className="btn mt-5 w-full text-center  justify-center"
      >
        {submitting ? `Submitting` : buttonLabel}
      </button>
      <p
        className={`text-red-700 font-semibold mt-4 text-center ${
          error ? `block` : `hidden`
        }`}
      >
        <span className="errors">
          {errorsList.hasOwnProperty("name") ? (
            <>
              <span className="block">{errorsList.name[0]}</span>
            </>
          ) : (
            <></>
          )}
          {errorsList.hasOwnProperty("email") ? (
            <>
              <span className="block">{errorsList.email[0]}</span>
            </>
          ) : (
            <></>
          )}
          {errorsList.hasOwnProperty("phone") ? (
            <>
              <span className="block">{errorsList.phone[0]}</span>
            </>
          ) : (
            <></>
          )}
        </span>
      </p>
    </form>
  );
};

export default LeadForm;
