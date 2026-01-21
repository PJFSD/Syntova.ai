import React from "react";

export default function CaseStudyModal({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md relative">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-[#0a1a4e] mb-4">
          {data.title}
        </h2>

        {/* 4 important lines */}
        <ul className="space-y-2 text-slate-700">
          <li>• {data.line1}</li>
          <li>• {data.line2}</li>
          <li>• {data.line3}</li>
          <li>• {data.line4}</li>
        </ul>
      </div>
    </div>
  );
}
