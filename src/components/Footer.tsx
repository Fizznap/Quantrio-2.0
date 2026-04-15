import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-16">
    <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
      <div>
        <h3 className="text-lg font-bold mb-3">Quantrio</h3>
        <p className="text-sm opacity-70 leading-relaxed">
          AI automation solutions for businesses worldwide.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
        <div className="flex flex-col gap-2 text-sm opacity-70">
          <Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link>
          <Link to="/solutions" className="hover:opacity-100 transition-opacity">Solutions</Link>
          <Link to="/about" className="hover:opacity-100 transition-opacity">About</Link>
          <Link to="/case-studies" className="hover:opacity-100 transition-opacity">Case Studies</Link>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm">Legal</h4>
        <div className="flex flex-col gap-2 text-sm opacity-70">
          <Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
          <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm">Contact</h4>
        <div className="text-sm opacity-70 space-y-1">
          <p>Based in Mira Bhayandar, Maharashtra, India</p>
          <p>Serving clients worldwide</p>
          <p>hello@quantrio.com</p>
          <p>+91 98XXX XXXXX</p>
        </div>
      </div>
    </div>
    <div className="container mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs opacity-50">
      © {new Date().getFullYear()} Quantrio. All rights reserved.
    </div>
  </footer>
);

export default Footer;
