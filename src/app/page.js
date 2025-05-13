'use client'

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from './page.module.css';
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Verify these arrays have all three items
const images = [
  "/images/create-account.png",
  "/images/link-payments.png",
  "/images/pay-seamlessly.png"
];

const texts = [
  {
    title: "Create Your Account",
    description: "Get the LocalPay app from the App Store or Google Play. Sign up with your email or phone number, then verify your identity for secure transactions."
  },
  {
    title: "Link Your Payment Method",
    description: "Easily connect your bank account, debit/credit card, or crypto wallet. LocalPay encrypts your data to keep your payments safe and private."
  },
  {
    title: "Pay Seamlessly Anywhere",
    description: "Tap, scan, or send—whether you're shopping online, in-store, or sending money to friends, LocalPay makes transactions instant and secure."
  }
];

export default function Home() {
  const containerRef = useRef(null);
  const [error, setError] = useState(null);

  // Verify all images and texts are available
  console.log('Images array length:', images.length);
  console.log('Texts array length:', texts.length);

  if (error) {
    return (
      <div className="error-container">
        <h2>Something went wrong!</h2>
        <button onClick={() => window.location.reload()}>
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <div className={styles.homepage}>
      <Navigation />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.heroSubtitle}>Local Bank, Local Pay™</p>
              <h1 className={styles.heroTitle}>Instant and secure global payments, reimagined</h1>
              <p className={styles.heroText}>Built on cutting-edge technology for ultra-secure, instant payments—no middlemen, no delays.</p>
              <button className="btn btnPrimary">Get The App</button>
            </div>
            <div className={styles.heroImage}>
              <video
                src="/images/localpay.mp4"
                alt="FinChain Platform"
                width="auto"
                height="500"
                autoPlay
                muted
                loop
                playsInline
                style={{ height: '500px' }}
              />
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className={styles.partnersSection}>
          <h2 className={styles.partnersHeader}>Trusted By Industry Leaders</h2>
          <div className={styles.partnersGrid}>
            <div className={styles.partnerLogo}>
              <Image
                src="/images/fiserv-logo.svg"
                alt="Fiserv"
                width={0}
                height={40}
                style={{ width: 'auto', height: '40px' }}
                priority
              />
            </div>
            <div className={styles.partnerLogo}>
              <Image
                src="/images/jack-henry-logo.svg"
                alt="Jack Henry"
                width={0}
                height={40}
                style={{ width: 'auto', height: '40px' }}
                priority
              />
            </div>
            <div className={styles.partnerLogo}>
              <Image
                src="/images/fis-logo.svg"
                alt="FIS"
                width={0}
                height={40}
                style={{ width: 'auto', height: '40px' }}
                priority
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.howItWorksSection}>
          <h2 className={styles.sectionHeader}>How It Works</h2>
          
          <div className={styles.contentContainer} ref={containerRef}>
            {/* Step 1 */}
            <div className={styles.step}>
              <motion.div 
                className={styles.content}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.7 }}
              >
                <div className={styles.phoneImage}>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ 
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <Image
                      src={images[0]}
                      alt="Create Account"
                      width={400}
                      height={800}
                      style={{ width: 'auto', height: '600px', objectFit: 'contain' }}
                      priority
                    />
                  </motion.div>
                </div>
                <div className={styles.stepText}>
                  <motion.h3
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ 
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >{texts[0].title}</motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ 
                      duration: 0.7,
                      delay: 0.15,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >{texts[0].description}</motion.p>
                </div>
              </motion.div>
            </div>

            {/* Step 2 */}
            <div className={styles.step}>
              <motion.div 
                className={styles.content}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.phoneImage}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ 
                      duration: 0.7,
                      ease: "easeOut"
                    }}
                  >
                    <Image
                      src={images[1]}
                      alt="Link Payments"
                      width={400}
                      height={800}
                      style={{ width: 'auto', height: '600px', objectFit: 'contain' }}
                      priority
                    />
                  </motion.div>
                </div>
                <div className={styles.stepText}>
                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >{texts[1].title}</motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.1
                    }}
                  >{texts[1].description}</motion.p>
                </div>
              </motion.div>
            </div>

            {/* Step 3 */}
            <div className={styles.step}>
              <motion.div 
                className={styles.content}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.phoneImage}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ 
                      duration: 0.7,
                      ease: "easeOut"
                    }}
                  >
                    <Image
                      src={images[2]}
                      alt="Pay Seamlessly"
                      width={400}
                      height={800}
                      style={{ width: 'auto', height: '600px', objectFit: 'contain' }}
                      priority
                    />
                  </motion.div>
                </div>
                <div className={styles.stepText}>
                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >{texts[2].title}</motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.1
                    }}
                  >{texts[2].description}</motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className={styles.introSection}>
          <div className={styles.introContent}>
            <div>
              <h2 className={styles.introTitle}>
                Made possible by LocalPay's <span className={styles.greenText}>next-generation technology</span>
              </h2>
              <p className={styles.introText}>LocalPay is built on patented distributed payment routing technology that delivers low-cost, lightning-fast, and ultra-secure confirmation and settlement.</p>
              <ul className={`${styles.introList} ${styles.greenText}`}>
                <li>Proprietary distributed payment routing rail</li>
                <li>Ultra-secure point-to-point confirmation and settlement through tokenized payment data</li>
                <li>Real-time capable settlement at payment confirmation</li>
              </ul>
              <button className="btn btnPrimary">Get The App</button>
            </div>
            <div className={styles.introImage}>
              <Image
                src="/images/mobile.png"
                alt="FinChain Platform"
                width={0}
                height={500}
                style={{ width: 'auto', height: '500px' }}
                priority
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitSection}>
          <div className={styles.benefitContent}>
            <h2 className={styles.benefitHeader}>A low-cost, ultra-fast, and ultra-secure distributed rail for consumers and businesses to pay merchants</h2>
            <div className={styles.benefitGrid}>
              <div className={styles.benefitCard}>
                <Image
                  src="/images/icon-low-cost.svg"
                  alt="Low Cost Benefit"
                  width={64}
                  height={64}
                />
                <h3 className={styles.benefitTitle}>Lower Costs</h3>
                <p className={styles.benefitText}>Save up to 1.5% on merchant fees while maintaining issuer fees and consumer rewards.</p>
              </div>
              <div className={styles.benefitCard}>
                <Image
                  src="/images/icon-instant.svg"
                  alt="Instant Benefit"
                  width={64}
                  height={64}
                />
                <h3 className={styles.benefitTitle}>Instant</h3>
                <p className={styles.benefitText}>Real-time capable settlement at payment confirmation</p>
              </div>
              <div className={styles.benefitCard}>
                <Image
                  src="/images/icon-trusted.svg"
                  alt="Trusted Benefit"
                  width={64}
                  height={64}
                />
                <h3 className={styles.benefitTitle}>Trusted</h3>
                <p className={styles.benefitText}>Banking-grade security, not based on crypto or stablecoins</p>
              </div>
              <div className={styles.benefitCard}>
                <Image
                  src="/images/icon-simple.svg"
                  alt="Simple Benefit"
                  width={64}
                  height={64}
                />
                <h3 className={styles.benefitTitle}>Simple</h3>
                <p className={styles.benefitText}>Quick and easy setup for merchants, businesses, and consumers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.serviceSection}>
          <div className={styles.serviceContent}>
            <h2 className={styles.serviceHeader}>
              Better retail payments for all <span className={styles.greenText}>Get going with LocalPay™</span>
            </h2>
            <div className={styles.serviceGrid}>
              <div className={`${styles.serviceCard} ${styles.bgPrimary}`}>
                <Image
                  src="/images/icon-consumers.svg"
                  alt="Consumer Service"
                  width={154}
                  height={197}
                />
                <h3 className={styles.serviceTitle}>
                  A Better Way To Pay<br /> 
                  <span className={styles.whiteText}>For Individuals</span>
                </h3>
                <p className={styles.serviceText}>Pay with your bank account at participating merchants</p>
                <a href="/individuals" className="btn btnWhite">Learn More →</a>
              </div>
              
              <div className={`${styles.serviceCard} ${styles.bgSecondary}`}>
                <Image
                  src="/images/icon-merchants.svg"
                  alt="Merchant Service"
                  width={190}
                  height={195}
                />
                <h3 className={styles.serviceTitle}>
                  A Better Way To Get Paid<br /> 
                  <span className={styles.whiteText}>For Merchants</span>
                </h3>
                <p className={styles.serviceText}>Accept bank payments and save on processing fees</p>
                <a href="/merchants" className="btn btnWhite">Learn More →</a>
              </div>
              
              <div className={`${styles.serviceCard} ${styles.bgTertiary}`}>
                <Image
                  src="/images/icon-banks.svg"
                  alt="Business Service"
                  width={184}
                  height={209}
                />
                <h3 className={styles.serviceTitle}>
                  A Better Way To Transact<br /> 
                  <span className={styles.whiteText}>For Banks</span>
                </h3>
                <p className={styles.serviceText}>Send and receive payments with your business partners</p>
                <a href="/banks" className="btn btnWhite">Learn More →</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}