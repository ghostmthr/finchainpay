import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Contact */}
        <div className="footer-brand">
          <Image
            src="/images/logo.svg"
            alt="FinChain Logo"
            width={150}
            height={40}
            className="footer-logo"
          />
          <div className="contact-info">
            <p>123 Blockchain Street</p>
            <p>Silicon Valley, CA 94025</p>
            <p>Email: contact@finchain.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-links">
          <h3>Company</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/user-agreement">User Agreement</Link></li>
            <li><Link href="/press">Press</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Solutions Links */}
        <div className="footer-links">
          <h3>Solutions</h3>
          <ul>
            <li><Link href="/individuals">For Individuals</Link></li>
            <li><Link href="/merchants">For Merchants</Link></li>
            <li><Link href="/banks">For Banks</Link></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div className="footer-links">
          <h3>Resources</h3>
          <ul>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/documentation">Documentation</Link></li>
            <li><Link href="/support">Support Center</Link></li>
            <li><Link href="/api">API Reference</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 FinChain. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 