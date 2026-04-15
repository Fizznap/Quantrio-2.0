import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const WhatsAppButton = () => {
  const phoneNumber = "919800000000"; // Replace with actual number
  const message = encodeURIComponent("Hi, I want to automate my business using AI. Can you help?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
      aria-label="Contact us on WhatsApp"
      onClick={() => trackEvent("whatsapp_click")}
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
