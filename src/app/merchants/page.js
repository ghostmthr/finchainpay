import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from './page.module.css';
import '@/app/globals.css'  // or

export default function Merchants() {
    return (
        <div className={styles.merchantsPage}>
            <Navigation />

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <div>
                            <h1 className={styles.heroTitle}>Reduce transaction fees, get paid instantly</h1>
                            <p className={styles.heroText}>Stop overpaying on transaction fees and keep more of what you earn. With instant and secure payments, there are no delays, no hidden costs, just seamless transactions for your business.</p>
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
                                <h3 className={styles.benefitTitle}>Lower Transaction Costs</h3>
                                <p className={styles.benefitText}>Reduce payment processing fees and keep more of your revenue with our cost-effective solution.</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <Image
                                    src="/images/icon-instant.svg"
                                    alt="Instant Benefit"
                                    width={64}
                                    height={64}
                                />
                                <h3 className={styles.benefitTitle}>Instant Payouts</h3>
                                <p className={styles.benefitText}>Get paid in real time, improving cash flow and eliminating waiting periods for funds.</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <Image
                                    src="/images/icon-trusted.svg"
                                    alt="Trusted Benefit"
                                    width={64}
                                    height={64}
                                />
                                <h3 className={styles.benefitTitle}>Secure Transactions</h3>
                                <p className={styles.benefitText}>Enjoy bank-level security and fraud protection, keeping your business and customers safe.</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <Image
                                    src="/images/icon-simple.svg"
                                    alt="Simple Benefit"
                                    width={64}
                                    height={64}
                                />
                                <h3 className={styles.benefitTitle}>Seamless Integration</h3>
                                <p className={styles.benefitText}>Accept payments with QR codes using your existing setup with no extra hardware or complex installations.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Ready to Lower Costs and Get Paid Instantly?</h2>
                        <p className={styles.ctaText}>Join businesses optimizing their cash flow with seamless, secure, and cost-effective payments. Start accepting LocalPay today.</p>
                        <button className="btn btnSecondary">Partner with Us</button>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
