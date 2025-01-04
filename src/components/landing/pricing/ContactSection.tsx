import { Mail, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const handleChatToggle = () => {
    if (typeof window !== 'undefined' && window.Tawk_API) {
      window.Tawk_API.toggle();
    }
  };

  return (
    <div className="text-center space-y-8 animate-fadeIn py-8" style={{ animationDelay: "900ms" }}>
      <div className="px-4 space-y-4">
        <h3 className="text-xl font-bold mb-3">Got Questions?</h3>
        <p className="text-muted-foreground text-lg flex items-center justify-center gap-3">
          <Mail className="h-5 w-5" />
          <a 
            href="mailto:Support@aimarketingprofile.com" 
            className="hover:text-primary transition-colors"
          >
            Support@aimarketingprofile.com
          </a>
        </p>
        <button 
          onClick={handleChatToggle}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <MessageSquare className="h-5 w-5" />
          Chat with our AI Assistant
        </button>
      </div>

      <div className="px-4">
        <h3 className="text-xl font-bold mb-3">
          Why Wait? Your Business Can't Afford to Fall Behind.
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          AI is the future—and it's moving fast. Don't let your competitors outpace you. 
          Let's transform your business together.
        </p>
      </div>
    </div>
  );
}