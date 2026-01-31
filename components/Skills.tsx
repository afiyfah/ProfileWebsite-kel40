"use client"

import { motion } from "framer-motion";


export default function Skills() { 
  const skills = [
    {name: " HTML", icon: "ri-code-s-slash-line"}, 
    {name: " CSS", icon: "ri-tailwind-css-fill"}, 
    {name: " JavaScript", icon: "ri-javascript-line"}, 
    {name: " React", icon: "ri-reactjs-line"}, 
    {name: " Next.js", icon: "ri-nextjs-line"}
  ]; 

  return ( 
    <section id="skills" className="scroll-mt-16 bg-[#E9E4DE] flex items-center py-12 px-4 pb-20"> 
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{once:true}}
      className="max-w-4xl mx-auto"> 
        <h2 className="text-4xl font-bold text-[#59171B] [#EFBF6A] text-center mb-8">Skills</h2> 
        <div className= "flex flex-wrap justify-center gap-6" >  

          {skills.map((skill) => (
            <div
              key={skill.name}
              className= "flex flex-col items-center gap-3 font-semibold" /*"flex flex-col items-center gap-3 font-semibold"*/
            >
              <motion.div 
              whileHover={{ y: -6}}
              whileTap={{ scale: 0.95}}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-16 h-16 rounded-full bg-[#59171B] flex items-center justify-center">
                <i className={`${skill.icon} text-3xl text-[#EFBF6A]`}></i>
              </motion.div>

              <span className="text-[#59171B]">{skill.name}</span>
            </div>
          ))}
        </div> 
      </motion.div> 
    </section> 
  ); 
} 