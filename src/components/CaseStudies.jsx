import React, { useState } from "react";
import Card from "./common/Card";
import CaseStudyModal from "./CaseStudyModal";

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(null);

  const caseStudyData = {
    ecommerce: {
      title: "E-Commerce Chatbot",
      line1: "24/7 AI-powered customer support",
      line2: "Reduced support workload by 60%",
      line3: "Integrated with WhatsApp & Website",
      line4: "Improved customer satisfaction score",
    },
    fintech: {
      title: "FinTech Cloud Migration",
      line1: "Migrated legacy systems to AWS",
      line2: "40% improvement in system performance",
      line3: "High availability & auto-scaling",
      line4: "Reduced infrastructure cost by 30%",
    },
    healthcare: {
      title: "Healthcare Predictive Analytics",
      line1: "ML models for disease prediction",
      line2: "Early diagnosis with 92% accuracy",
      line3: "Real-time patient monitoring",
      line4: "Improved treatment outcomes",
    },
    manufacturing: {
      title: "Manufacturing Automation",
      line1: "Automated production workflows",
      line2: "70% reduction in manual tasks",
      line3: "IoT-based machine monitoring",
      line4: "Increased operational efficiency",
    },
  };

  return (
    <section id="casestudies" className="bg-[#eef3ff] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Case Studies</h2>
        <p className="text-slate-600 mt-2">
          Explore how we help businesses grow with AI, Cloud, and Automation solutions.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            title="E-Commerce Chatbot"
            body="Reduced customer support workload by 60%."
            showView
            onView={() => setSelectedStudy(caseStudyData.ecommerce)}
          />

          <Card
            title="FinTech Cloud Migration"
            body="Achieved 40% faster performance."
            showView
            onView={() => setSelectedStudy(caseStudyData.fintech)}
          />

          <Card
            title="Healthcare Predictive Analytics"
            body="Enabled early diagnosis using ML."
            showView
            onView={() => setSelectedStudy(caseStudyData.healthcare)}
          />

          <Card
            title="Manufacturing Automation"
            body="Eliminated 70% manual tasks."
            showView
            onView={() => setSelectedStudy(caseStudyData.manufacturing)}
          />
        </div>
      </div>

      {/* Modal */}
      <CaseStudyModal
        data={selectedStudy}
        onClose={() => setSelectedStudy(null)}
      />
    </section>
  );
}
