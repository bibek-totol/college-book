import Link from "next/link";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Blog", path: "/blog" },
      { name: "Press", path: "/press" },
    ],
    Resources: [
      { name: "Colleges", path: "/colleges" },
      { name: "Admission Guide", path: "/guide" },
      { name: "Scholarships", path: "/scholarships" },
      { name: "FAQs", path: "/faqs" },
    ],
    Legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Cookie Policy", path: "/cookies" },
      { name: "Contact Us", path: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-foreground dark:bg-card text-background dark:text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 gradient-primary rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">EduBook</span>
            </div>
            <p className="text-background/70 dark:text-foreground/70 text-sm">
              Your trusted platform for discovering and booking admissions at top colleges worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-background/10 dark:bg-foreground/10 hover:bg-background/20 dark:hover:bg-foreground/20 flex items-center justify-center transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                  <Link
                      href={link.path}
                      className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 dark:border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 dark:text-foreground/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} EduBook. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/privacy" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground text-sm transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground text-sm transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
