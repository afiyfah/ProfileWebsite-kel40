"use client"
import { motion } from "framer-motion"


export default function Hero() { 

  return ( 
    <section id="home" className="py-7 sm:py-10 md:py-25 px-4 h-150"> 
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center
      md:flex-row-reverse md:justify-between md:text-left gap-8 py-8"> 
      <motion.img
          src="johnn doe.jpg"   
          width={100} 
          height={100} 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          alt="Profile" 
          className="w-40 h-40 md:w-70 md:h-70 md: rounded-full border-4 border-[#EFBF6A]  object-cover" 
        /> 
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          > 
          <h2 className="text-3xl md:text-6xl font-bold text-[#E9E4DE]">John Doe</h2> 
          <p className="text-2xl md:text-3xl text-[#EFBF6A] mt-2 ">Programmer</p> 
          <p className="text-sm sm:text-base md:text-md text-[#E9E4DE] max-w-md text-justify mt-2 md:px-0 px-4"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa placeat commodi, harum et vitae. Nostrum, assumenda repudiandae eveniet incidunt maxime in itaque. Voluptatibus deserunt id optio quae eius qui? Aperiam accusamus dicta non expedita dolor repellat voluptatum nulla rerum doloribus vel.
          </p> 
        </motion.div> 
      </div> 
    </section> 
  ); 
} 