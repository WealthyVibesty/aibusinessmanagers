import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface VideoBenefitCardProps {
  title: string;
  description: string;
  videoUrl: string;
  delay?: number;
}

export default function VideoBenefitCard({ title, description, videoUrl, delay = 0 }: VideoBenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 overflow-hidden bg-white/80 backdrop-blur-sm">
        <div className="space-y-4">
          <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}