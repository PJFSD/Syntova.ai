import React from "react";
import { useModal } from "../context/ModalContext";

export default function ContactModal() {
  const { closeModal } = useModal();

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md relative">

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-[#0a1a4e] mb-4">
          Contact
        </h2>

        <ul className="space-y-4 text-lg text-black">
          {/* Email */}
          <li>
            📧{" "}
            <a
              href="mailto:ceo@syntova.in"
              className="text-blue-600 hover:underline"
            >
              ceo@syntova.in
            </a>
          </li>

          {/* Phone Number */}
          <li>
            📞{" "}
            <a
              href="tel:+91-7620133996"
              className="text-blue-600 hover:underline"
            >
              +91-7620133996
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
