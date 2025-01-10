import { Link } from "react-router-dom";

export default function SiteMap() {
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "Voice Agents", path: "/voice-agents" },
      ]
    },
    {
      title: "Healthcare Specialties",
      links: [
        { name: "Telemedicine", path: "/telemedicine" },
        { name: "Primary Care", path: "/primary-care" },
        { name: "Mental Health", path: "/mental-health" },
        { name: "Elderly Care", path: "/elderly-care" },
        { name: "Cardiology", path: "/cardiology" },
        { name: "Dermatology", path: "/dermatology" },
        { name: "OB/GYN", path: "/obgyn" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Content Library", path: "/content-library" },
        { name: "Support Center", path: "/support" },
        { name: "Contact", path: "/contact" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Use", path: "/terms-of-use" },
      ]
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Site Map</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {siteStructure.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link 
                    to={link.path}
                    className="text-primary hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}