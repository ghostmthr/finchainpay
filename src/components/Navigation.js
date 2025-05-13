import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components.css';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="FinChain Logo"
            width={150}
            height={40}
            priority
          />
        </Link>
      </div>

      <div className="nav-links">
        <Link href="/about">Company</Link>
        <Link href="/individuals">For Individuals</Link>
        <Link href="/merchants">For Merchants</Link>
        <Link href="/banks">For Banks</Link>
        <Link href="/contact">Contact</Link>
        <button className="download-btn">Download</button>
      </div>
    </nav>
  );
};

export default Navigation; 