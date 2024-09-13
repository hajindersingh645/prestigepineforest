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
          scheduletime: data.scheduletime,
          drake: "a936629a-cc8d-4157-a719-46278475a167",
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

      <select
        class="form-select form-control"
        name="scheduletime"
        {...register("scheduletime", { required: true })}
      >
        <option class="d-none">Best Time To Call You</option>
        <option value={"Within 15 Min."}>Within 15 Min.</option>
        <option value={"08AM To 12PM"}>08AM To 12PM</option>
        <option value={"12PM To 04PM"}>12PM To 04PM</option>
        <option value={"04PM To 08PM"}>04PM To 08PM</option>
        <option value={"anytime"}>Anytime</option>
      </select>
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
