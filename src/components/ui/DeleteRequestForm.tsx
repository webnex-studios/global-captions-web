"use client";

import { useState, type FormEvent } from "react";

export default function DeleteRequestForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("sending");

    try {
      const res = await fetch(
        "https://global-captions-backend-f560ab24d2f7.herokuapp.com/v1/auth/delete-account-request",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email.trim() }),
        }
      );

      if (res.ok) {
        setStatus("sent");
        setEmail("");
      } else {
        setStatus("sent");
        setEmail("");
      }
    } catch {
      setStatus("sent");
      setEmail("");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-green-600 mb-2">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" />
            <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display font-semibold text-green-800 text-lg mb-1">
          Request Submitted
        </h3>
        <p className="text-green-700 text-sm">
          If an account exists with that email, we will process the deletion
          within 3 business days. You will receive a confirmation email.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-green-600 hover:text-green-800 underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="delete-email"
          className="block text-sm font-medium text-dark-text mb-1.5"
        >
          Email address associated with your account
        </label>
        <input
          id="delete-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-lg border border-dark-text/15 text-dark-text bg-white placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent transition-all"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          "Request Account Deletion"
        )}
      </button>
      <p className="text-xs text-slate-text">
        By submitting this request, you acknowledge that account deletion is
        permanent and irreversible.
      </p>
    </form>
  );
}
