import React from "react";
import "../Style/whatsapp.css";

const WhatsAppIcon = () => {
  const phoneNumber = "+918150973255"; // Add your phone number here in international format (without +)

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="whatsapp-icon" onClick={handleWhatsAppClick}>
      <img src="/images/WhatsappIcon.png" alt="WhatsApp" />
    </div>
  );
};

export default WhatsAppIcon;
