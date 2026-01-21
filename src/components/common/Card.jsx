import React from "react";

export default function Card({ title, body, showView = false, onView }) {
  return (
    <div className="bg-white rounded-lg p-5 shadow hover:shadow-md transition flex flex-col">

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">{body}</p>

      {/* ✅ View button ONLY when showView=true */}
      {showView && (
        <button
          onClick={onView}
          className="mt-auto bg-[#0a1a4e] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#08143d] w-fit"
        >
          View
        </button>
      )}

    </div>
  );
}
