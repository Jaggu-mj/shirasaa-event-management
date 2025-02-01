import React from "react";
import "../Style/socialIcons.css";

const SocialIcons = () => {
  const socialLinks = [
    {
      id: "instagram",
      icon: "fab fa-instagram", // Font Awesome class
      url: "https://www.instagram.com/shirasaa.events/?utm_source=ig_web_button_share_sheet",
      hoverText: "Follow us on Instagram",
    },
    {
      id: "youtube",
      icon: "fab fa-youtube",
      url: "https://www.youtube.com/your-youtube-id",
      hoverText: "Subscribe to our YouTube",
    },
    {
      id: "facebook",
      icon: "fab fa-facebook-f",
      url: "https://www.facebook.com/your-facebook-id",
      hoverText: "Follow us on Facebook",
    },
    {
      id: "gmail",
      icon: "fas fa-envelope",
      url: "SHIRASAA.EVENTS@GMAIL.COM",
      hoverText: "Email us at Gmail",
    },
  ];

  return (
    <div className="social-icons-container">
      {socialLinks.map((social) => (
        <div className="icon-wrapper" key={social.id}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className={social.icon}></i>
          </a>
          <span className="hover-text">{social.hoverText}</span>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
