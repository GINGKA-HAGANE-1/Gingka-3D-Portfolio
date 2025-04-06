import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { personalInfo, navigationPaths, services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { TypeAnimation } from 'react-type-animation'; // Add this import

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] min-h-[280px] py-5 px-12 flex flex-col justify-evenly items-center">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {Array.isArray(title) ? (
              title.map((line, i) => (
                <div key={i} className={i > 0 ? "mt-1" : ""}>
                  {line}
                </div>
              ))
            ) : (
              title
            )}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {personalInfo.about}
      </motion.p>

      {/* Background & Goals Section */}
      <motion.div variants={textVariant()} className="mt-20">
        <h2 className={`${styles.sectionHeadText} text-center text-white glow-text`}>
          Background & Goals
        </h2>
        
        <div className="mt-10 bg-tertiary rounded-[20px] p-8">
          <div className="mb-10">
            <h3 className="text-white text-[24px] font-bold flex items-center">
              <span className="mr-2">⏳</span> My Background
            </h3>
            <TypeAnimation
              sequence={[personalInfo.background, 0]}
              wrapper="p"
              className="mt-4 text-secondary text-[17px] leading-[30px]"
              cursor={true}
              repeat={0}
              omitDeletionAnimation={true}
              deletionSpeed={1}
              speed={85} // Added higher speed value
            />
          </div>

          <div>
            <h3 className="text-white text-[24px] font-bold flex items-center">
              <span className="mr-2">🎯</span> My Goals
            </h3>
            <TypeAnimation
              sequence={[personalInfo.goals, 0]}
              wrapper="div"
              className="mt-4 text-secondary text-[17px] leading-[30px]"
              cursor={true}
              repeat={0}
              speed={85}
              dangerouslySetInnerHTML={{ __html: personalInfo.goals }}
            />
          </div>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, navigationPaths.about);
