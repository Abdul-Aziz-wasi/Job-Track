import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">Privacy Policy</h1>

      <p className="mb-4">
        Welcome to <strong>Career Hub</strong>. Your privacy is important to us. This Privacy Policy
        explains how we collect, use, and protect your information when you use our job portal.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Personal information such as name, email, phone number, and resume.</li>
        <li>Account login details if you create an account.</li>
        <li>Job preferences, search history, and application activity.</li>
        <li>Technical data like browser type, IP address, and device information.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To match job seekers with relevant job opportunities.</li>
        <li>To communicate updates, recommendations, or support information.</li>
        <li>To improve our website and tailor your experience.</li>
        <li>To ensure security and prevent fraudulent activity.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell your personal data. Your information may be shared with:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Potential employers when you apply for a job.</li>
        <li>Third-party service providers who assist with platform functionality.</li>
        <li>Law enforcement or legal obligations if required.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We use industry-standard security practices to protect your data. However, no system is
        completely secure, and you share your information at your own risk.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Choices</h2>
      <ul className="list-disc list-inside mb-4">
        <li>You can update or delete your profile at any time.</li>
        <li>You can unsubscribe from emails or disable your account.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy occasionally. Any changes will be posted here with the
        updated date.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at{' '}
        <a href="mailto:support@careerhub.com" className="text-blue-600 underline">
          support@careerhub.com
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;

