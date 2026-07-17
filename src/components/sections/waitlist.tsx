"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FieldGroup, FieldLabel, Input, Select } from "@/components/ui/field";
import { countries, constructionStages, userTypes } from "@/lib/waitlist-options";
import { supabase } from "@/lib/supabase";

interface FormState {
  name: string;
  email: string;
  country: string;
  userType: string;
  stage: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  country: "",
  userType: "",
  stage: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!values.name.trim()) errors.name = "Enter your full name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!emailPattern.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.country) errors.country = "Select your country.";
  if (!values.userType) errors.userType = "Tell us who you are.";
  if (!values.stage) errors.stage = "Select your current stage.";
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
    <section id="waitlist" className="section-y bg-ink-950 text-white">
      <Container className="flex flex-col items-center gap-4 text-center">
        <Badge className="border-white/15 bg-white/5 text-ink-200">Early access</Badge>
        <h2 className="max-w-2xl text-display-md font-semibold text-balance text-white">
          Be the first to build with confidence.
        </h2>
        <p className="max-w-[46ch] text-lg leading-relaxed text-ink-300">
          Join the waitlist to get priority access as we bring Dexment to more homeowners, contractors and
          project teams.
        </p>

        <div className="relative mt-8 w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-8 text-left md:p-10">
          <AnimatePresence mode="wait" initial={false}>
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-5 py-6 text-center"
              >
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-400"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12.5l4.5 4.5L19 7"
                      stroke="#0A0A0B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.span>
                <h3 className="text-2xl font-semibold text-white">You&apos;re on the list.</h3>
                <p className="max-w-sm text-[0.9375rem] leading-relaxed text-ink-300">
                  Thanks, {values.name.split(" ")[0]}. We&apos;ll be in touch as early access spots open up for
                  builders in {values.country}.
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="mt-2 text-ink-300"
                  onClick={() => {
                    setValues(initialState);
                    setStatus("idle");
                  }}
                >
                  Add another project
                </Button>
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
                className="flex flex-col gap-5"
              >
                <FieldGroup>
                  <FieldLabel htmlFor="wl-name">Full name</FieldLabel>
                  <Input
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
                    <span id="wl-name-error" className="text-[0.8rem] text-accent-400">
                      {errors.name}
                    </span>
                  ) : null}
                </FieldGroup>

                <FieldGroup>
                  <FieldLabel htmlFor="wl-email">Email address</FieldLabel>
                  <Input
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
                    <span id="wl-email-error" className="text-[0.8rem] text-accent-400">
                      {errors.email}
                    </span>
                  ) : null}
                </FieldGroup>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FieldGroup>
                    <FieldLabel htmlFor="wl-country">Country</FieldLabel>
                    <Select
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
                    </Select>
                    {errors.country ? <span className="text-[0.8rem] text-accent-400">{errors.country}</span> : null}
                  </FieldGroup>

                  <FieldGroup>
                    <FieldLabel htmlFor="wl-type">I am a</FieldLabel>
                    <Select
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
                    </Select>
                    {errors.userType ? (
                      <span className="text-[0.8rem] text-accent-400">{errors.userType}</span>
                    ) : null}
                  </FieldGroup>
                </div>

                <FieldGroup>
                  <FieldLabel htmlFor="wl-stage">Current construction stage</FieldLabel>
                  <Select
                    id="wl-stage"
                    name="stage"
                    value={values.stage}
                    onChange={(e) => updateField("stage", e.target.value)}
                    aria-invalid={Boolean(errors.stage)}
                  >
                    <option value="" disabled>
                      Select stage
                    </option>
                    {constructionStages.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </Select>
                  {errors.stage ? <span className="text-[0.8rem] text-accent-400">{errors.stage}</span> : null}
                </FieldGroup>

                {submitError ? (
                  <p role="alert" className="text-center text-[0.8125rem] text-accent-400">
                    {submitError}
                  </p>
                ) : null}

                <Button type="submit" variant="accent" size="lg" disabled={status === "submitting"} className="mt-2 w-full">
                  {status === "submitting" ? "Joining..." : "Join the Early Access Waitlist"}
                </Button>

                <p className="text-center text-[0.8rem] text-ink-400">
                  No spam. We&apos;ll only reach out about your early access invitation.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
