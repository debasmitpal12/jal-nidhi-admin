import React from "react";

export default function CTA() {
  return (
    <section id="get-started" className="py-16">
      <div className="w-full px-12 lg:px-20 text-center">
        <h4 className="text-2xl font-bold">Ready to onboard your project?</h4>
        <p className="mt-3 text-gray-600">
          We help you with MRV templates and onboarding checklists to make
          verification smooth.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a className="px-6 py-3 rounded-2xl bg-sky-600 text-white font-medium hover:bg-sky-700 transition">
            Start onboarding
          </a>
          <a className="px-6 py-3 rounded-2xl border hover:shadow-sm transition">
            Contact sales
          </a>
        </div>
      </div>
    </section>
  );
}
