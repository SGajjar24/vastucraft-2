import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-primary min-h-screen pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-serif font-bold text-stone-100 mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-stone max-w-none">
          <p className="text-stone-400 mb-6">Last Updated: March 2024</p>

          <h2 className="text-2xl font-bold text-stone-200 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-stone-400 mb-4">
            We collect information you provide directly to us when you fill out our contact form, request a quote, or communicate with us. This includes your name, email address, phone number, and project details.
          </p>

          <h2 className="text-2xl font-bold text-stone-200 mt-8 mb-4">2. Use of Information</h2>
          <p className="text-stone-400 mb-4">
            We use the information solely to:
          </p>
          <ul className="list-disc pl-6 text-stone-400 mb-6 space-y-2 marker:text-gold">
            <li>Respond to your inquiries and provide architectural services.</li>
            <li>Schedule consultations for Vastu or AI monitoring services.</li>
            <li>Send administrative information, such as updates, security alerts, and support messages.</li>
          </ul>

          <h2 className="text-2xl font-bold text-stone-200 mt-8 mb-4">3. Data Protection</h2>
          <p className="text-stone-400 mb-4">
            We implement appropriate technical and organizational measures to protect the security of your personal information. Your data is never sold to third parties.
          </p>

          <h2 className="text-2xl font-bold text-stone-200 mt-8 mb-4">4. Contact Us</h2>
          <p className="text-stone-400 mb-4">
            If you have any questions about this Privacy Policy, please contact us at <span className="text-gold">hello@vastucraftai.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;