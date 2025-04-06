import React, { useRef, useState, useEffect } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
// Remove this import as it's no longer needed
// import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import { personalInfo, publicUrls } from "../constants";
import Modal from "./Modal";
import ErrorBoundary from './ErrorBoundary';

const Contact = () => {
  const formRef = useRef();
  
  useEffect(() => {
    return () => {
      // Cleanup WebGL context when component unmounts
      const canvas = document.querySelector('canvas');
      if (canvas) {
        const gl = canvas.getContext('webgl2');
        if (gl) {
          gl.getExtension('WEBGL_lose_context')?.loseContext();
        }
      }
    };
  }, []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    buttonText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace email sending with demo message
    setTimeout(() => {
      setModalContent({
        title: "Demo Only",
        message: "This is a demo contact form. Please contact me directly through My Number or GitHub for any inquiries.",
        buttonText: "Got it",
      });
      setIsModalVisible(true);
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="relative flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <div className="flex items-center justify-end space-x-4 absolute top-8 right-4">
          {Object.keys(publicUrls.socialProfiles).map((socialProfile) => {
            const profile = publicUrls.socialProfiles[socialProfile];
            return (
              <div
                key={`social_${profile.title}`}
                onClick={() => window.open(profile.link, "_blank")}
                className="green-pink-gradient lg:w-10 lg:h-10 h-8 w-8 rounded-full flex justify-center items-center cursor-pointer hover:scale-110"
              >
                <img
                  src={profile.icon}
                  alt={`social_${profile.title}`}
                  className="w-4/6 h-4/6 object-contain"
                />
              </div>
            );
          })}
        </div>

        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's you want to say?"
              className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold w-fit shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Remove the motion.div containing EarthCanvas */}

      {isModalVisible && (
        <Modal
          title={modalContent.title}
          message={modalContent.message}
          buttonText={modalContent.buttonText}
          isError={isError}
          setIsModalVisible={() => setIsModalVisible(false)}
        />
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
