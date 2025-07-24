import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  Facebook,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="flex flex-col items-center justify-center w-full mb-16">
          <div className="flex space-x-4 justify-center">
            <a href="https://www.linkedin.com/in/marwin-john-gonzales-a38509322/" target="_blank" className="hover:text-primary transition-colors">
              <Linkedin />
            </a>
            <a href="https://www.facebook.com/marwin.john.gonzales.2024/" target="_blank" className="hover:text-primary transition-colors">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/maruwinu/" target="_blank" className="hover:text-primary transition-colors">
              <Instagram />
            </a>
            <a href="mailto:marwinjohngonzales@gmail.com" target="_blank" className="hover:text-primary transition-colors">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
