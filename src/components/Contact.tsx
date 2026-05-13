"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-5 md:px-16 flex flex-col items-center text-center">
      {/* Vertical line decoration (from Stitch) */}
      <div className="w-px h-24 bg-gradient-to-b from-primary-fixed to-transparent mb-12"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-headline-lg-mobile md:text-headline-lg uppercase mb-8 max-w-2xl"
      >
        READY TO ARCHITECT THE NEXT <span className="text-primary-fixed">SYNTAX?</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-6 mb-16"
      >
        <a
          href="mailto:evansdev86@gmail.com"
          className="bg-primary text-surface-container-lowest px-10 py-4 font-display text-lg font-bold hover:bg-white transition-colors"
        >
          REQUEST PROPOSAL
        </a>
        <a
          href="#portfolio"
          className="border border-outline-variant px-10 py-4 font-display text-lg font-bold text-on-surface hover:bg-surface-variant transition-colors"
        >
          VIEW PORTFOLIO
        </a>
      </motion.div>

      {/* Contact form */}
      {!submitted ? (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-panel p-8 md:p-12 w-full max-w-2xl text-left space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-syntax-label uppercase text-on-surface-variant">Full Name</label>
              <input
                type="text"
                required
                className="w-full bg-background border border-outline-variant/30 p-4 text-on-surface focus:border-primary/50 focus:outline-none transition-all placeholder:text-on-surface-variant/30"
                placeholder="NAME_INPUT"
              />
            </div>
            <div className="space-y-2">
              <label className="text-syntax-label uppercase text-on-surface-variant">Email</label>
              <input
                type="email"
                required
                className="w-full bg-background border border-outline-variant/30 p-4 text-on-surface focus:border-primary/50 focus:outline-none transition-all placeholder:text-on-surface-variant/30"
                placeholder="EMAIL_ADDRESS"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-syntax-label uppercase text-on-surface-variant">Subject</label>
            <select className="w-full bg-background border border-outline-variant/30 p-4 text-on-surface focus:border-primary/50 focus:outline-none transition-all appearance-none cursor-pointer">
              <option value="" className="bg-background">SELECT_INQUIRY_TYPE</option>
              <option value="engineering" className="bg-background">SOFTWARE_ARCHITECTURE</option>
              <option value="strategy" className="bg-background">STRATEGIC_ADVISORY</option>
              <option value="security" className="bg-background">SECURITY_AUDIT</option>
              <option value="other" className="bg-background">OTHER_INQUIRY</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-syntax-label uppercase text-on-surface-variant">Message</label>
            <textarea
              rows={5}
              required
              className="w-full bg-background border border-outline-variant/30 p-4 text-on-surface focus:border-primary/50 focus:outline-none transition-all placeholder:text-on-surface-variant/30 resize-none"
              placeholder="MESSAGE_DETAILS..."
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-secondary-fixed text-surface py-4 font-display font-bold uppercase tracking-widest hover:bg-white transition-colors ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isSubmitting ? "TRANSMITTING..." : "TRANSMIT PACKET"}
          </button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-12 w-full max-w-2xl text-center"
        >
          <div className="w-16 h-16 border-2 border-primary mx-auto mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-strategy-md uppercase mb-4">Transmission Received</h3>
          <p className="text-body-lg text-on-surface-variant">Your inquiry has been logged. Expect a response within 24 hours.</p>
        </motion.div>
      )}

      {/* Footer mark */}
      <div className="mt-24 flex items-center gap-8 opacity-80">
        <Image alt="Logo" className="h-10 w-auto" src="/logo.png" width={40} height={40} />
        <div className="h-px w-32 bg-outline-variant"></div>
        <span className="text-syntax-mono text-xs uppercase tracking-widest text-on-surface-variant">EST. 2024 / M.S.C. GLOBAL</span>
      </div>
    </section>
  );
}
