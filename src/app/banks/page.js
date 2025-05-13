import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from './page.module.css';
import '@/app/globals.css'  // or

export default function Banks() {
    return (
        <div className={styles.banksPage}>
            <Navigation />

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <div>
                            <h1 className={styles.heroTitle}>Unlock new payment revenue with LocalPay</h1>
                            <p className={styles.heroText}>Offer faster, more secure transactions while generating new revenue streams. LocalPay enhances your payment ecosystem with instant settlements and lower costs.</p>
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
                                <h3 className={styles.benefitTitle}>New Revenue Streams</h3>
                                <p className={styles.benefitText}>Boost your earnings with innovative payment solutions that generate additional transaction revenue.</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <Image
                                    src="/images/icon-instant.svg"
                                    alt="Instant Benefit"
                                    width={64}
                                    height={64}
                                />
                                <h3 className={styles.benefitTitle}>Instant Settlements</h3>
                                <p className={styles.benefitText}>Speed up transaction processing with real-time settlements, improving liquidity and cash flow.</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <Image
                                    src="/images/icon-trusted.svg"
                                    alt="Trusted Benefit"
                                    width={64}
                                    height={64}
                                />
                                <h3 className={styles.benefitTitle}>Advanced Security</h3>
                                <p className={styles.benefitText}>Protect every transaction with bank-grade encryption and fraud prevention measures.</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <Image
                                    src="/images/icon-simple.svg"
                                    alt="Simple Benefit"
                                    width={64}
                                    height={64}
                                />
                                <h3 className={styles.benefitTitle}>Seamless Integration</h3>
                                <p className={styles.benefitText}>Enhance your payment system without disruption LocalPay works alongside your existing infrastructure.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Ready to Transform Your Payment Solutions?</h2>
                        <p className={styles.ctaText}>Join leading banks already benefiting from our innovative blockchain technology. Start your journey to enhanced payment processing today.</p>
                        <button className="btn btnSecondary">Partner with Us</button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
