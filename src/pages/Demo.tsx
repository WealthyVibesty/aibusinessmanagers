import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import DemoRequestForm from "@/components/DemoRequestForm";

export default function Demo() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const handleDemoRequest = () => {
    console.log("Opening demo request form");
    setIsDemoFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 sm:p-6">
      <motion.div 
        className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center space-y-4 pt-20">
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold text-gray-800 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Schedule a Live Demo
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Experience how our AI solution can transform your business operations with a personalized demo.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="px-4"
        >
          <Card className="p-8 bg-white shadow-md border border-gray-100">
            <div className="text-center space-y-6">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Calendar className="h-8 w-8 text-blue-500" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Book Your Free Demo Session</h3>
                <p className="text-gray-600">
                  Our team will walk you through our AI solution and show you how it can benefit your business.
                </p>
                <Button 
                  size="lg"
                  onClick={handleDemoRequest}
                  className="w-full sm:w-auto px-8 py-6 text-lg h-auto"
                >
                  Schedule Your Demo Now
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>

      <DemoRequestForm 
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />
    </div>
  );
}