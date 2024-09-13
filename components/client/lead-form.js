"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function LeadForm2({ buttonLabel = `I'm Interested` }) {
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
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="input-wrapper type--icon">
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-user"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
            <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
          </svg>
        </span>
        <input
          type="text"
          name="name"
          placeholder="Name"
          {...register("name", { required: true })}
        />
      </div>
      {errors.name && <span className="error">{`Name can not be empty`}</span>}
      <div className="input-wrapper type--icon">
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-mail"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
            <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
          </svg>
        </span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
      </div>
      {errors.email && (
        <span className="error">{`Email can not be empty`}</span>
      )}
      <div className="input-wrapper type--icon">
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-phone"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" />
          </svg>
        </span>
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          {...register("phone", { required: true })}
        />
      </div>
      {errors.name && (
        <span className="error">{`Phone number can not be empty`}</span>
      )}
      <div className="action">
        <button
          type="submit"
          className={`btn btn--primary ${submitting ? "animate-pulse" : ""}`}
        >
          {submitting ? `Submitting` : buttonLabel}
        </button>
      </div>
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
}
