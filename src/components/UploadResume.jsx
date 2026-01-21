// import React, { useState } from "react";

// export default function UploadResume() {
//   const [file, setFile] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!file) {
//       alert("Please upload your resume first.");
//       return;
//     }

//     // For now just show filename
//     alert(`Resume uploaded: ${file.name}`);

//     // Later: send to backend using FormData
//   };

//   return (
//     <section id="uploadresume" className="bg-[#eef3ff] py-12">
//       <div className="max-w-4xl mx-auto px-6">
//         <h2 className="text-2xl font-bold">Upload Resume</h2>
//         <p className="text-slate-600 mt-2">
//           Join our team! Upload your resume and we will contact you if your profile matches.
//         </p>

//         <form
//           onSubmit={handleSubmit}
//           className="mt-6 bg-white p-6 rounded-lg shadow max-w-lg"
//         >
//           <label className="block mb-2 font-medium">
//             Upload your resume (PDF/DOC)
//           </label>

//           <input
//             type="file"
//             accept=".pdf,.doc,.docx"
//             onChange={(e) => setFile(e.target.files[0])}
//             className="w-full border p-2 rounded mb-4"
//           />

//           <button
//             type="submit"
//             className="bg-[#0a1a4e] text-white px-6 py-2 rounded hover:bg-[#08143d]"
//           >
//             Submit Resume
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
