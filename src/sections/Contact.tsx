import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  FileText,
  Twitter,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SocialLinks from "@/components/SocialLinks";
import profile from "@/data/profile";
import Resume from "../assets/NidhiResume.pdf";
import "../App.css";

export default function Contact() {
  const { email, phone, location, social } = profile.basics;

  const getSocialLink = (platform: string) =>
    social.find(
      (item) => item.platform.toLowerCase() === platform.toLowerCase(),
    )?.url || "#";

  const cards = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      desc: "Connect with me professionally",
      link: getSocialLink("LinkedIn"),
    },
    {
      icon: Github,
      title: "GitHub",
      desc: "Check out my projects",
      link: getSocialLink("GitHub"),
    },
    {
      icon: Twitter,
      title: "Tiwtter",
      desc: "Follow my journey",
      link: getSocialLink("tiwtter"),
    },
    {
      icon: FileText,
      title: "Resume",
      desc: "Download my resume",
      link: Resume,
    },
  ];

  return (
    <AnimatedSection id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div className="space-y-2">
          <p className="text-muted-foreground max-w-md">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="icon-circle">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href={`mailto:${email}`} className="hover:text-primary">
                  {email}
                </a>
              </div>
            </div>

            {phone && (
              <div className="flex items-center gap-4">
                <div className="icon-circle">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href={`tel:${phone}`} className="hover:text-primary">
                    {phone}
                  </a>
                </div>
              </div>
            )}

            {location && (
              <div className="flex items-center gap-4">
                <div className="icon-circle">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>{location}</p>
                </div>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
            <SocialLinks links={social} iconSize={22} />
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.a
              key={index}
              href={card.link}
              target="_blank"
              whileHover={{ y: -6 }}
              className="contact-card">
              <card.icon className="text-primary mb-3" size={32} />

              <h4 className="text-lg font-semibold">{card.title}</h4>

              <p className="text-sm text-muted-foreground mt-1">{card.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      {/* <div className="mt-12 p-6 rounded-xl bg-primary/10 flex justify-between items-center flex-col md:flex-row gap-4">
        <p className="text-muted-foreground">
          I'm currently available for{" "}
          <span className="text-primary font-semibold">freelance projects</span>{" "}
          and full-time opportunities.
        </p>

        <a
          href={`mailto:${email}`}
          className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90">
          Let's Work Together →
        </a>
      </div> */}
    </AnimatedSection>
  );
}
