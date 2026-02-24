import React from "react";

export default function FollowUpModal() {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 modal-backdrop"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[440px] px-5 sm:px-8 py-6 sm:py-8 modal-card">
        {/* Headline */}
        <h2 className="text-lg font-semibold text-glean-text text-center mb-3 leading-snug">
          Want to see Glean answer
          <br />
          your real questions?
        </h2>

        {/* Body */}
        <p className="text-sm text-glean-gray text-center leading-relaxed mb-6">
          In a live Glean environment, you'd get a real answer here — connected
          to Kemper's actual documents and tools.
        </p>

        {/* Contact info */}
        <p className="text-sm text-glean-text text-center leading-relaxed">
          If you're interested in learning more, please contact
        </p>
        <p className="text-sm font-semibold text-glean-blue text-center mt-1">
          <a href="mailto:melissa.richards@glean.com" className="hover:underline">
            Melissa Richards
          </a>
        </p>
        <p className="text-xs text-glean-gray text-center mt-0.5">
          <a href="mailto:melissa.richards@glean.com" className="hover:underline">
            melissa.richards@glean.com
          </a>
        </p>
      </div>
    </div>
  );
}
