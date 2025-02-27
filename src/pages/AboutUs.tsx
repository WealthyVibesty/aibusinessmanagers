
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <>
      <SEO 
        title="About Our AI Business Management Solutions" 
        description="Learn about AI Business Managers - pioneers in AI-powered business management solutions. Discover our mission, values, and commitment to transforming businesses through AI innovation." 
        path="/about" 
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 sm:px-12 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
          <div className="stars"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Story
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Transforming businesses through cutting-edge AI technology and innovative management solutions
              </motion.p>
            </div>
          </div>
          <div className="twinkling absolute inset-0"></div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-6 sm:px-12 bg-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                At AI Business Managers, our mission is to democratize access to advanced AI technology for businesses of all sizes. We believe that the power of artificial intelligence should not be limited to large corporations with massive resources, but should be available to every entrepreneur and business leader looking to grow their organization and better serve their customers.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="bg-slate-50 p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">Our Values</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      <span className="text-gray-700"><strong>Innovation:</strong> We are committed to pushing the boundaries of what's possible with AI.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      <span className="text-gray-700"><strong>Integrity:</strong> We maintain the highest ethical standards in all our business practices.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      <span className="text-gray-700"><strong>Impact:</strong> We measure our success by the tangible results we deliver to our clients.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      <span className="text-gray-700"><strong>Inclusion:</strong> We believe in creating technology that works for everyone.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">Our Approach</h3>
                  <p className="text-gray-700 mb-4">
                    We combine technical expertise with business acumen to create practical AI solutions that address real business challenges. Our approach is collaborative, working closely with clients to understand their unique needs and develop customized solutions that deliver measurable results.
                  </p>
                  <p className="text-gray-700">
                    Every solution we build is designed with scalability, security, and user experience in mind, ensuring that our technology not only works well today but continues to deliver value as your business grows.
                  </p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 text-center">Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    name: "Alex Morgan",
                    title: "Founder & CEO",
                    bio: "With 15+ years in AI and business transformation, Alex leads our strategic vision and innovation roadmap."
                  },
                  {
                    name: "Jamie Chen",
                    title: "Chief Technology Officer",
                    bio: "Jamie oversees all technical development, ensuring our AI solutions represent the cutting edge of what's possible."
                  },
                  {
                    name: "Taylor Williams",
                    title: "Chief Operations Officer",
                    bio: "Taylor ensures seamless delivery of our solutions, managing our operations and client success programs."
                  }
                ].map((member, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-sm text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-2xl font-bold">{member.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                    <p className="text-gray-700 text-sm">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Dark Background Section (duplicated from AIBusinessManagers) */}
        <section className="py-20 px-6 sm:px-12 bg-slate-900 relative">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">About AI Business Managers</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-10">
                We are pioneers in AI-powered business management solutions. Our dedicated team combines technical expertise with business acumen to deliver transformative AI systems that automate operations, enhance customer experiences, and drive growth. With years of experience in artificial intelligence and business operations, we're committed to helping organizations of all sizes harness the power of AI to achieve extraordinary results.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-medium rounded-md" onClick={() => window.location.href = '/contact'}>
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="twinkling absolute inset-0"></div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-20 px-6 sm:px-12 bg-blue-50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Ready to Transform Your Business?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                Join the thousands of businesses that have already experienced the power of our AI-driven solutions. Book a consultation today to discover how we can help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-medium rounded-md">
                  <Link to="/demo">
                    See Our Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" asChild variant="outline" className="bg-white text-slate-900 border-slate-300 hover:bg-slate-100 px-8 py-6 text-lg font-medium rounded-md">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
