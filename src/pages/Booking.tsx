import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

export default function Booking() {
  useEffect(() => {
    // Load HubSpot Meetings Embed Script
    const script = document.createElement('script');
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    script.onload = () => {
      console.log('HubSpot Meetings script loaded');
      toast.success('Booking calendar loaded successfully');
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Schedule a Free Strategy Call
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can transform your business operations
          </p>
        </motion.div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Clock className="h-6 w-6 text-blue-500" />,
              title: "30-Minute Session",
              description: "Focused discussion on your specific needs"
            },
            {
              icon: <Users className="h-6 w-6 text-blue-500" />,
              title: "Expert Consultation",
              description: "Meet with our AI implementation specialists"
            },
            {
              icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
              title: "Custom Solution",
              description: "Get a tailored plan for your business"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  {benefit.icon}
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Calendar Section */}
        <motion.div
          className="bg-white rounded-lg shadow-xl p-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div 
            className="meetings-iframe-container" 
            data-src="https://meetings.hubspot.com/mcgregory?embed=true"
            style={{ minHeight: '700px' }}
          />
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to Expect
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            During this call, we'll discuss your current operations, challenges, and how our AI solutions can help streamline your processes. You'll receive a personalized demo and implementation plan.
          </p>
        </motion.div>
      </div>
    </div>
  );
}