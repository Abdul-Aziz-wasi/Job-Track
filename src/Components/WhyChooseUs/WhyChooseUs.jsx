import { FaClock, FaUserCheck, FaShieldAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Career Hub?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md">
            <FaUserCheck className="text-3xl mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Verified Companies</h3>
            <p className="text-gray-600">All companies are reviewed and verified before posting jobs.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md">
            <FaClock className="text-3xl mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick Application</h3>
            <p className="text-gray-600">Apply to jobs in one click directly through company websites.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md">
            <FaShieldAlt className="text-3xl mx-auto text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-600">We respect your privacy. Your data is safe and never misused.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
