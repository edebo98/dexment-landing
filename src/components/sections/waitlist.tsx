"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { countries, userTypes } from "@/lib/waitlist-options";
import { supabase } from "@/lib/supabase";
import styles from "@/app/page.module.css";

const industries = [
  "Construction",
  "Consulting",
  "Events",
  "Technical Services",
  "Property & Facilities",
  "Design & Professional",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  country: string;
  userType: string;
  stage: string;
  industry: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  country: "",
  userType: "",
  stage: "",
  industry: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!values.name.trim()) errors.name = "Enter your full name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!emailPattern.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.country) errors.country = "Select your country.";
  if (!values.userType) errors.userType = "Tell us who you are.";
  if (!values.industry) errors.industry = "Select your industry.";
  return errors;
}

export function Waitlist() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
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
      name: values.name.trim(),
      email: values.email.trim().toLowerCase(),
      country: values.country,
      user_type: values.userType,
      construction_stage: values.stage,
      industry: values.industry,
    });

    if (error) {
      setStatus("idle");
      if (error.code === "23505") {
        setErrors((prev) => ({ ...prev, email: "This email is already on the waitlist." }));
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
      return;
    }

    setStatus("success");
  }

  return (
    <>
      <p>
        For clients who need confidence, teams who need control, and professional providers who want better ways to
        connect and deliver.
      </p>
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
              Thanks, {values.name.split(" ")[0]}. We&apos;ll be in touch as early access spots open up for builders
              in {values.country}.
            </p>
            <button
              type="button"
              className={cn(styles.btn, styles.btnGhost)}
              onClick={() => {
                setValues(initialState);
                setStatus("idle");
              }}
            >
              Add another project
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
              <label htmlFor="wl-name">Full name</label>
              <input
                id="wl-name"
                name="name"
                autoComplete="name"
                placeholder="Amara Okafor"
                value={values.name}
                onChange={(e) => updateField("name", e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "wl-name-error" : undefined}
              />
              {errors.name ? (
                <span id="wl-name-error" className={styles.fieldError}>
                  {errors.name}
                </span>
              ) : null}
            </div>

            <div className={styles.field}>
              <label htmlFor="wl-email">Email address</label>
              <input
                id="wl-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@email.com"
                value={values.email}
                onChange={(e) => updateField("email", e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "wl-email-error" : undefined}
              />
              {errors.email ? (
                <span id="wl-email-error" className={styles.fieldError}>
                  {errors.email}
                </span>
              ) : null}
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="wl-country">Country</label>
                <select
                  id="wl-country"
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
                <label htmlFor="wl-industry">Industry</label>
                <select
                  id="wl-industry"
                  name="industry"
                  value={values.industry}
                  onChange={(e) => updateField("industry", e.target.value)}
                  aria-invalid={Boolean(errors.industry)}
                >
                  <option value="" disabled>
                    Select industry
                  </option>
                  {industries.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
                {errors.industry ? <span className={styles.fieldError}>{errors.industry}</span> : null}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="wl-type">I am a</label>
              <select
                id="wl-type"
                name="userType"
                value={values.userType}
                onChange={(e) => updateField("userType", e.target.value)}
                aria-invalid={Boolean(errors.userType)}
              >
                <option value="" disabled>
                  Select one
                </option>
                {userTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.userType ? <span className={styles.fieldError}>{errors.userType}</span> : null}
            </div>

            {submitError ? (
              <p role="alert" className={styles.submitError}>
                {submitError}
              </p>
            ) : null}

            <button type="submit" className={cn(styles.btn, styles.dark)} disabled={status === "submitting"}>
              {status === "submitting" ? "Joining..." : "Join the waitlist"}
            </button>

            <p className={styles.formNote}>We&apos;ll email you when early access opens. No spam.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </>
  );
}
