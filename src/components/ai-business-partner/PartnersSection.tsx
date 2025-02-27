
import React from "react";
import { motion } from "framer-motion";

interface Partner {
  name: string;
  logo: string;
}

export default function PartnersSection() {
  const partners: Partner[] = [
    { name: "VAPI", logo: "/lovable-uploads/689f666f-f360-42ec-8f5e-c106c7dc14a4.png" },
    { name: "DeepSeek", logo: "/lovable-uploads/99fbefff-3ce1-4226-b63c-3f4b25d618f1.png" },
    { name: "OpenAI", logo: "/lovable-uploads/cb8c7243-5b81-4b79-a213-5d169acaede2.png" },
    { name: "NVIDIA", logo: "/lovable-uploads/a86fa152-b9da-40f8-899e-6a7f321435a6.png" },
    { name: "Oracle", logo: "/lovable-uploads/4593bf5a-446b-418a-b024-f0848d36a02e.png" },
    { name: "Google", logo: "/lovable-uploads/ee8b507f-74cb-49de-81dc-a2282b1a7aba.png" },
    { name: "Eleven Labs", logo: "/lovable-uploads/d93e3f1a-ff0c-49a9-922f-a5ffd654647f.png" },
    { name: "Anthropic", logo: "/lovable-uploads/10c6384a-7a56-494c-bc22-6d612b09d170.png" },
    { name: "Amazon AWS", logo: "/lovable-uploads/57f47dd7-cc27-477d-9586-e32ed172d79b.png" },
    { name: "IBM", logo: "/lovable-uploads/d10dd79d-414a-4e5e-bfc7-7ff92e56f12f.png" },
    { name: "WatsonX", logo: "/lovable-uploads/22a4d603-9942-4a99-be71-c323c84bd0a3.png" },
    { name: "Microsoft", logo: "/lovable-uploads/1935155e-b63e-4ae4-a3f6-c51b7db8289a.png" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#00000005_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Our Technology Partners
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Powered by industry leaders in AI and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative w-full h-12 bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-2 backdrop-blur-sm">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
