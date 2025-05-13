import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from './page.module.css';
import '@/app/globals.css'  // or

export default function Individuals() {
    return (
        <div className={styles.individualsPage}>
            <Navigation />

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <div>
                            <h1 className={styles.heroTitle}>A smarter way to pay, secure, instant, and zero extra fees</h1>
                            <p className={styles.heroText}>Pay instantly and securely with no extra fees or hidden costs, giving you full control over your money.</p>
                            <button className="btn btnPrimary">Get The App</button>
                        </div>
                        <div className={styles.heroImage}>
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

                {/* How It Works Section */}
                <section className={styles.howItWorksSection}>
                    <div className={styles.howItWorksContent}>
                        <div className={styles.howItWorksText}>
                            <h2>How Does It Work?</h2>
                            <div className={styles.steps}>
                                <div className={styles.step}>
                                    <h3>1. Connect</h3>
                                    <p>Link your accounts securely to our platform</p>
                                </div>
                                <div className={styles.step}>
                                    <h3>2. Transform</h3>
                                    <p>We process your transactions using blockchain technology</p>
                                </div>
                                <div className={styles.step}>
                                    <h3>3. Succeed</h3>
                                    <p>Experience faster, safer financial operations</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.howItWorksImage}>
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

                {/* Mission Section */}
                <section className={styles.benefitSection}>
                    <div className={styles.benefitContent}>
                    <h2 className={styles.benefitHeader}>What We Offer</h2>
                        <div className={styles.benefitGrid}>
                            <div className={styles.benefitCard}>
                                <Image
                                    src="/images/icon-low-cost.svg"
                                    alt="Low Cost Benefit"
                                    width={64}
                                    height={64}
                                />
                                <h3 className={styles.benefitTitle}>No Extra Fees</h3>
                                <p className={styles.benefitText}>Keep more of your money with transparent pricing. No hidden charges—just simple, cost-effective payments.</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <Image
                                    src="/images/icon-instant.svg"
                                    alt="Instant Benefit"
                                    width={64}
                                    height={64}
                                />
                                <h3 className={styles.benefitTitle}>Bank-Level Security</h3>
                                <p className={styles.benefitText}>Your transactions are protected with advanced encryption, ensuring top-tier security and privacy.</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <Image
                                    src="/images/icon-trusted.svg"
                                    alt="Trusted Benefit"
                                    width={64}
                                    height={64}
                                />
                                <h3 className={styles.benefitTitle}>Instant Payments</h3>
                                <p className={styles.benefitText}>Send and receive money in seconds with seamless, real-time transactions—no waiting required.</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <Image
                                    src="/images/icon-simple.svg"
                                    alt="Simple Benefit"
                                    width={64}
                                    height={64}
                                />
                                <h3 className={styles.benefitTitle}>Global Accessibility</h3>
                                <p className={styles.benefitText}>Pay and get paid anywhere, effortlessly. No borders, no excessive fees—just freedom to transact.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Ready for Faster, Easier Payments?</h2>
                        <p className={styles.ctaText}>Pay instantly with a simple tap and scan—no delays, no hassle. Start using LocalPay today.</p>
                        <button className="btn btnSecondary">Get Started</button>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
