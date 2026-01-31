"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Website Portfolio",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, eligendi?.",
      tech: ["React", "Tailwind CSS"],
      src: "Proyek.jpg",
    },
    {
      title: "Aplikasi Login",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, fugiat. ",
      tech: ["Next.js", "JavaScript"],
      src: "Proyek.jpg",
    },
    {
      title: "Website Kasir",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, minima? ",
      tech: ["React", "CSS"],
      src: "Proyek.jpg",
    },
  ]

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 py-20 scroll-mt">
      <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#EFBF6A] mb-8 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 sm:px-3 px-6">
          {projects.map((project, index) => (
            <motion.div 
            key={index}
            className=" bg-[#E9E4DE] p-6 rounded-lg shadow-2xl"
            whileHover={{ y: -6}}
            whileTap={{ scale: 0.95}}
            transition={{ type: "spring", stiffness: 100 }}
            >
            {project.src && (
              <div className="w-full h-40 relative mb-2">
                <Image
                src={`/${project.src}`}
                alt={project.title}
                fill
                className="h-20  border-4 border-[#E9E4DE] object-cover"
                />
              </div>
            )}

              <h3 className="text-xl font-bold mb-1 text-[#59171B]">
                {project.title}
              </h3>
              <p className="text-[#59171B] mb-4">
                {project.description}
              </p>

              <div className="flex gap-2 flex-wrap">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="bottom bg-blue-500 text-white px-3 py-1 rounded text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
