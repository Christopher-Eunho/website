"use client";

import React from "react";
import SectionHeading from "@/components/sectionHeading";
import { motion } from "framer-motion";

export default function About() {
  
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
    <SectionHeading> About me</SectionHeading>
    
    <p className="mb-3">
    My path in the tech world began as a{" "}
    <span className="font-medium">Software Development Engineer Intern at Amazon</span>, where I focused on Java and AWS to create recommendation services for Alexa. This experience was a key part of my growth in{" "}
    <span className="font-medium">software engineering</span>, further developed during my role as a{" "}
    <span className="font-medium">Junior Software Developer at LUCID Vision Labs</span>. There, my work in C++ to enhance machine vision applications demonstrated my dedication to technological innovation.{" "}
    <span className="italic">My love for coding</span> is complemented by my academic journey in{" "}
    <span className="font-medium">Computer Science at The University of British Columbia</span>, maintaining a strong{" "}
    <span className="underline">3.9/4.0 GPA</span>.
    </p>

    <p>
    <span className="italic">When I'm not immersed in coding</span>, I enjoy various physical activities such as{" "}
    <span className="font-medium">power lifting, running,  snowboarding</span>, and swimming. My commitment to learning and personal growth goes hand in hand with my professional aspirations. I am currently seeking a{" "}
    <span className="font-medium">full-time position</span> in software development, eager to apply my skills and continue evolving in this dynamic field.
    </p>
    </motion.section>
  );
}