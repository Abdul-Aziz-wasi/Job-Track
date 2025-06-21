import { FaUserPlus, FaSearch, FaBuilding, FaRocket } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
          <FaUserPlus className="text-4xl mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">1. Create Account</h3>
          <p className="text-sm text-gray-600">
            Sign up with email or Google and complete your profile with basic info and photo.
          </p>
        </div>

       
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
          <FaSearch className="text-4xl mx-auto text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">2. Browse Companies</h3>
          <p className="text-sm text-gray-600">
            Explore top companies and job categories that match your interest and skills.
          </p>
        </div>

        
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
          <FaBuilding className="text-4xl mx-auto text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">3. View Details</h3>
          <p className="text-sm text-gray-600">
            Click on any company to see detailed info and their job openings.
          </p>
        </div>

       
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
          <FaRocket className="text-4xl mx-auto text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">4. Apply Easily</h3>
          <p className="text-sm text-gray-600">
            Open the job modal and click “Apply” to go directly to the company’s website.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
