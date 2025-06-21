import React from 'react';
import Banner from './Banner/Banner';
import Companies from './Companies/Companies';
import HowItWorks from './HowItWorks/HowItWorks';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import { motion } from 'framer-motion';

const jobsPromise = fetch('job.json').then((res) => res.json());

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <div className="space-y-16">
      <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
        <Banner />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
        <HowItWorks />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
        <Companies jobsPromise={jobsPromise} />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
        <WhyChooseUs />
      </motion.div>
    </div>
  );
};

export default Home;
