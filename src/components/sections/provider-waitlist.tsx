"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { countries } from "@/lib/waitlist-options";
import { supabase } from "@/lib/supabase";
import styles from "@/app/page.module.css";

const serviceCategories = ["Construction", "Consulting", "Events", "Technical Services", "Other"];

interface ProviderFormState {
  fullName: string;
  email: string;
  country: string;
  serviceCategory: string;
}

const initialState: ProviderFormState = {
  fullName: "",
  email: "",
  country: "",
  serviceCategory: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ProviderFormState) {
  const errors: Partial<Record<keyof ProviderFormState, string>> = {};
  if (!values.fullName.trim()) errors.fullName = "Enter your full name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!emailPattern.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.country) errors.country = "Select your country.";
  if (!values.serviceCategory) errors.serviceCategory = "Select your service category.";
  return errors;
}

export function ProviderWaitlist() {
  const [values, setValues] = useState<ProviderFormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof ProviderFormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  function updateField<K extends keyof ProviderFormState>(key: K, value: ProviderFormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    setSubmitError(null);

    const { error } = await supabase.from("waitlist_signups").insert({
      name: values.fullName.trim(),
      email: values.email.trim().toLowerCase(),
      country: values.country,
      service_category: values.serviceCategory,
      signup_type: "psp",
    });

    if (error) {
      setStatus("idle");
      if (error.code === "23505") {
        setErrors((prev) => ({ ...prev, email: "This email is already on the provider waitlist." }));
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
      return;
    }

    setStatus("success");
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={styles.successPanel}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12.5l4.5 4.5L19 7"
              stroke="#237a58"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className={styles.successTitle}>You&apos;re on the list.</h3>
          <p className={styles.successText}>
            Thanks, {values.fullName.split(" ")[0]}. We&apos;ll be in touch when the PSP network opens for
            providers in {values.country}.
          </p>
          <button
            type="button"
            className={cn(styles.btn, styles.btnGhost)}
            onClick={() => {
              setValues(initialState);
              setStatus("idle");
            }}
          >
            Add another provider
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          noValidate
          className={styles.waitForm}
        >
          <div className={styles.field}>
            <label htmlFor="psp-name">Full name</label>
            <input
              id="psp-name"
              name="full_name"
              autoComplete="name"
              value={values.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "psp-name-error" : undefined}
            />
            {errors.fullName ? (
              <span id="psp-name-error" className={styles.fieldError}>
                {errors.fullName}
              </span>
            ) : null}
          </div>

          <div className={styles.field}>
            <label htmlFor="psp-email">Email address</label>
            <input
              id="psp-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
              value={values.email}
              onChange={(e) => updateField("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "psp-email-error" : undefined}
            />
            {errors.email ? (
              <span id="psp-email-error" className={styles.fieldError}>
                {errors.email}
              </span>
            ) : null}
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor="psp-country">Country</label>
              <select
                id="psp-country"
                name="country"
                value={values.country}
                onChange={(e) => updateField("country", e.target.value)}
                aria-invalid={Boolean(errors.country)}
              >
                <option value="" disabled>
                  Select country
                </option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {errors.country ? <span className={styles.fieldError}>{errors.country}</span> : null}
            </div>

            <div className={styles.field}>
              <label htmlFor="psp-service-category">Service category</label>
              <select
                id="psp-service-category"
                name="service_category"
                value={values.serviceCategory}
                onChange={(e) => updateField("serviceCategory", e.target.value)}
                aria-invalid={Boolean(errors.serviceCategory)}
              >
                <option value="" disabled>
                  Select category
                </option>
                {serviceCategories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {errors.serviceCategory ? (
                <span className={styles.fieldError}>{errors.serviceCategory}</span>
              ) : null}
            </div>
          </div>

          {submitError ? (
            <p role="alert" className={styles.submitError}>
              {submitError}
            </p>
          ) : null}

          <button type="submit" className={cn(styles.btn, styles.dark)} disabled={status === "submitting"}>
            {status === "submitting" ? "Joining..." : "Join the provider waitlist"}
          </button>

          <p className={styles.formNote}>We&apos;ll email you when the PSP network opens. No spam.</p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
