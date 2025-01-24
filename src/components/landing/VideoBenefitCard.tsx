import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface VideoBenefitCardProps {
  title: string;
  description: string;
  delay?: number;
  icon?: React.ReactNode;
}

export default function VideoBenefitCard({ title, description, delay = 0, icon }: VideoBenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 overflow-hidden bg-white/80 backdrop-blur-sm">
        <div className="space-y-6">
          {icon && (
            <motion.div 
              className="flex justify-center"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors duration-300">
                {icon}
              </div>
            </motion.div>
          )}
          <h3 className="text-xl font-semibold text-center">{title}</h3>
          <p className="text-gray-600 text-center">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}