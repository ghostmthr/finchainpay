import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from './page.module.css';
import '@/app/globals.css'  // or

export default function Company() {
    return (
        <div className={styles.companyPage}>
            <Navigation />

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <div>
                            <h1 className={styles.heroTitle}>Transforming the future of payments</h1>
                            <p className={styles.heroText}>We're building the next generation of payment infrastructure to make transactions faster, safer, and more accessible for everyone.</p>
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

                {/* Intro Section */}
                <section className={styles.introSection}>
                    <div className={styles.introContent}>
                        <div>
                            <h2 className={styles.introTitle}>
                                About LocalPay
                            </h2>
                            <p className={styles.introText}>At LocalPay, we are revolutionizing the way transactions happen in the digital economy. By bridging the gap between traditional banking and blockchain technology, we provide seamless, secure, and efficient payment solutions for consumers, merchants, and financial institutions.</p>
                            <h3 className={styles.introTitle}>Our Mission</h3>
                            <p className={styles.introText}>We aim to empower businesses and individuals with cutting-edge financial technology that simplifies transactions, enhances security, and accelerates global commerce. Our innovative approach ensures that payments are fast, cost-effective, and future-ready.</p>
                            <h3 className={styles.introTitle}>Why Choose LocalPay?</h3>
                            <p className={styles.introText}>LocalPay is more than just a payment processor—we are a movement toward financial inclusivity and technological advancement. Whether you're a consumer looking for convenience, a merchant seeking efficiency, or a financial institution adapting to the digital age, we provide the tools you need to thrive.</p>
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
                                <h3 className={styles.benefitTitle}>Instant Transactions</h3>
                                <p className={styles.benefitText}>Experience real-time payments with low fees and high security.</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <Image
                                    src="/images/icon-instant.svg"
                                    alt="Instant Benefit"
                                    width={64}
                                    height={64}
                                />
                                <h3 className={styles.benefitTitle}>Seamless Integration</h3>
                                <p className={styles.benefitText}>Our platform effortlessly integrates with existing financial systems and digital wallets.</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <Image
                                    src="/images/icon-trusted.svg"
                                    alt="Trusted Benefit"
                                    width={64}
                                    height={64}
                                />
                                <h3 className={styles.benefitTitle}>Security & Compliance</h3>
                                <p className={styles.benefitText}>Built with blockchain encryption and regulatory compliance in mind, ensuring trust and transparency.</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <Image
                                    src="/images/icon-simple.svg"
                                    alt="Simple Benefit"
                                    width={64}
                                    height={64}
                                />
                                <h3 className={styles.benefitTitle}>Global Reach</h3>
                                <p className={styles.benefitText}>Borderless payments designed to support businesses and individuals worldwide.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className={styles.teamSection}>
                    <div className={styles.teamContent}>
                    <h2 className={styles.teamHeader}>Our Leadership Team</h2>
                        <div className={styles.teamGrid}>
                            {/* First Row */}
                            <div className={styles.teamCard}>
                                <Image
                                    src="/images/team/kent-yan.png"
                                    alt="Kent J Yan"
                                    width={120}
                                    height={120}
                                    className={styles.teamImage}
                                />
                                <h3 className={styles.teamName}>Kent J Yan</h3>
                                <p className={styles.teamTitle}>Founder and CEO</p>
                                <div className={styles.teamHistory}>
                                    <p>MS, MIT Electrical Engineering</p>
                                    <span className={styles.separator}></span>
                                    <p>MBA, MIT Sloan School of Management</p>
                                </div>
                                <div className={styles.teamCredentials}>
                                    <Image
                                        src="/images/team/logo-pepsico.svg"
                                        alt="Pepsico"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-mit.svg"
                                        alt="MIT"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-bristol.svg"
                                        alt="Bristol Myers Squibb"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                </div>
                            </div>

                            <div className={styles.teamCard}>
                                <Image
                                    src="/images/team/alan-tam.png"
                                    alt="Alan Tam"
                                    width={120}
                                    height={120}
                                    className={styles.teamImage}
                                />
                                <h3 className={styles.teamName}>Alan Tam</h3>
                                <p className={styles.teamTitle}>Co-Founder, CSO, Business Development</p>
                                <div className={styles.teamHistory}>
                                    <p>Strategy Development Program, HBS</p>
                                    <span className={styles.separator}></span>
                                    <p>MBA, U.C. Berkeley, Haas School</p>
                                    <span className={styles.separator}></span>
                                    <p>BS, U.C. Berkeley, Chemical Engineering</p>
                                </div>
                                <div className={styles.teamCredentials}>
                                    <Image
                                        src="/images/team/logo-ibm.svg"
                                        alt="IBM"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-visa.png"
                                        alt="Visa"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-kraken.png"
                                        alt="Kraken"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                </div>
                            </div>

                            <div className={styles.teamCard}>
                                <Image
                                    src="/images/team/stanley-yang.png"
                                    alt="Stanley X Yang"
                                    width={120}
                                    height={120}
                                    className={styles.teamImage}
                                />
                                <h3 className={styles.teamName}>Stanley X Yang</h3>
                                <p className={styles.teamTitle}>Co-Founder and CTO</p>
                                <div className={styles.teamHistory}>
                                    <p>Tech Lead, Nike</p>
                                    <span className={styles.separator}></span>
                                    <p>Software Engineer, Intel</p>
                                    <span className={styles.separator}></span>
                                    <p>Programmer Analyst, Walmart</p>
                                </div>
                                <div className={styles.teamCredentials}>
                                    <Image
                                        src="/images/team/logo-intel.svg"
                                        alt="Intel"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-walmart.svg"
                                        alt="Walmart"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-nike.svg"
                                        alt="Nike"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                </div>
                            </div>

                            {/* Second Row */}
                            <div className={styles.teamCard}>
                                <Image
                                    src="/images/team/todd-yancey.png"
                                    alt="Todd Yancey"
                                    width={120}
                                    height={120}
                                    className={styles.teamImage}
                                />
                                <h3 className={styles.teamName}>Todd Yancey</h3>
                                <p className={styles.teamTitle}>Co-Founder and VP of Sales and BD</p>
                                <div className={styles.teamHistory}>
                                    <p>VP Strategic ISV Sales, SAP</p>
                                    <span className={styles.separator}></span>
                                    <p>Strategic Sales (ISVs & OEMs), IBM</p>
                                    <span className={styles.separator}></span>
                                    <p>SVP Worldwide Sales, Oracle</p>
                                </div>
                                <div className={styles.teamCredentials}>
                                    <Image
                                        src="/images/team/logo-sap.svg"
                                        alt="SAP"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-ibm.svg"
                                        alt="IBM"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-oracle.svg"
                                        alt="Oracle"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                </div>
                            </div>

                            <div className={styles.teamCard}>
                                <Image
                                    src="/images/team/mike-honda.png"
                                    alt="Mike Honda"
                                    width={120}
                                    height={120}
                                    className={styles.teamImage}
                                />
                                <h3 className={styles.teamName}>Mike Honda</h3>
                                <p className={styles.teamTitle}>Advisor</p>
                                <div className={styles.teamHistory}>
                                    <p>Head of Governmental Affairs</p>
                                    <span className={styles.separator}></span>
                                    <p>Retired Congressman</p>
                                </div>
                                <div className={styles.teamCredentials}>
                                    <Image
                                        src="/images/team/logo-house-of-rep.svg"
                                        alt="House of Representatives"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                </div>
                            </div>

                            <div className={styles.teamCard}>
                                <Image
                                    src="/images/team/trevor-quist.png"
                                    alt="Trevor Quist"
                                    width={120}
                                    height={120}
                                    className={styles.teamImage}
                                />
                                <h3 className={styles.teamName}>Trevor Quist</h3>
                                <p className={styles.teamTitle}>Co-Founder and Strategic Advisor</p>
                                <div className={styles.teamHistory}>
                                    <p>Board of Advisors, Titan HST</p>
                                    <span className={styles.separator}></span>
                                    <p>IP Attorney, Quinn Emmanuel</p>
                                    <span className={styles.separator}></span>
                                    <p>Juris Doctor, WashU</p>
                                </div>
                                <div className={styles.teamCredentials}>
                                    <Image
                                        src="/images/team/logo-washington-u.png"
                                        alt="Washington University"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-titan.png"
                                        alt="Titan"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-quinn.png"
                                        alt="Quinn"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Investors and Advisors */}
                <section className={styles.teamSection}>
                    <div className={styles.teamContent}>
                    <h2 className={styles.teamHeader}>Investors & Advisors</h2>
                        <div className={styles.teamGrid}>
                            {/* First Row */}
                            <div className={styles.teamCard}>
                                <Image
                                    src="/images/team/phil-duff.png"
                                    alt="Phil Duff"
                                    width={120}
                                    height={120}
                                    className={styles.teamImage}
                                />
                                <h3 className={styles.teamName}>Phil Duff</h3>
                                <p className={styles.teamTitle}>Investor & Advisor</p>
                                <div className={styles.teamHistory}>
                                    <p>President & Chief Operating Officer, Tiger Management</p>
                                    <span className={styles.separator}></span>
                                    <p>Managing Director & CFO, Morgan Stanley</p>
                                </div>
                                <div className={styles.teamCredentials}>
                                    <Image
                                        src="/images/team/logo-morgan-stanley.svg"
                                        alt="Morgan Stanley"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-tiger.svg"
                                        alt="Tiger Management"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-vig.svg"
                                        alt="Vig"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                </div>
                            </div>

                            <div className={styles.teamCard}>
                                <Image
                                    src="/images/team/gerhard-schulmeyer.png"
                                    alt="Gerhard Schulmeyer"
                                    width={120}
                                    height={120}
                                    className={styles.teamImage}
                                />
                                <h3 className={styles.teamName}>Gerhard Schulmeyer</h3>
                                <p className={styles.teamTitle}>Investor & Advisor</p>
                                <div className={styles.teamHistory}>
                                    <p>Operations and Business Development EMEA</p>
                                    <span className={styles.separator}></span>
                                    <p>Vice President, Asea Brown Boveri</p>
                                    <span className={styles.separator}></span>
                                    <p>President & CEO, Siemens Corp.</p>
                                    <span className={styles.separator}></span>
                                    <p>Director, Zurich Insurance Company</p>
                                </div>
                                <div className={styles.teamCredentials}>
                                    <Image
                                        src="/images/team/logo-siemens.svg"
                                        alt="Siemens"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-abb.svg"
                                        alt="ABB"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-zurich.svg"
                                        alt="Zurich"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                </div>
                            </div>

                            <div className={styles.teamCard}>
                                <Image
                                    src="/images/team/gary-cowger.png"
                                    alt="Gary Cowger"
                                    width={120}
                                    height={120}
                                    className={styles.teamImage}
                                />
                                <h3 className={styles.teamName}>Gary Cowger</h3>
                                <p className={styles.teamTitle}>Investor & Advisor</p>
                                <div className={styles.teamHistory}>
                                    <p>Former Group VP of General Motors</p>
                                    <span className={styles.separator}></span>
                                    <p>Board of Directors, Delphi</p>
                                    <span className={styles.separator}></span>
                                    <p>Board Member, Saab</p>
                                </div>
                                <div className={styles.teamCredentials}>
                                    <Image
                                        src="/images/team/logo-delphi.svg"
                                        alt="Delphi"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-saab.svg"
                                        alt="Saab"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-gm.svg"
                                        alt="GM"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                </div>
                            </div>

                            {/* Second Row */}
                            <div className={styles.teamCard}>
                                <Image
                                    src="/images/team/gordon-kaufman.png"
                                    alt="Gordon Kaufman"
                                    width={120}
                                    height={120}
                                    className={styles.teamImage}
                                />
                                <h3 className={styles.teamName}>Gordon Kaufman</h3>
                                <p className={styles.teamTitle}>Investor & Advisor</p>
                                <div className={styles.teamHistory}>
                                    <p>Professor Emeritus, MIT Sloan School of Management</p>
                                    <span className={styles.separator}></span>
                                    <p>BS, Electrical Engineering, Yale University</p>
                                    <span className={styles.separator}></span>
                                    <p>MBA, Harvard University</p>
                                </div>
                                <div className={styles.teamCredentials}>
                                    <Image
                                        src="/images/team/logo-harvard.svg"
                                        alt="Harvard"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-mit.svg"
                                        alt="MIT"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-yale.svg"
                                        alt="Yale"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                </div>
                            </div>

                            <div className={styles.teamCard}>
                                <Image
                                    src="/images/team/anastassia-lauterbach.png"
                                    alt="Dr. Anastassia Lauterbach"
                                    width={120}
                                    height={120}
                                    className={styles.teamImage}
                                />
                                <h3 className={styles.teamName}>Dr. Anastassia Lauterbach</h3>
                                <p className={styles.teamTitle}>Investor & Advisor</p>
                                <div className={styles.teamHistory}>
                                    <p>Former SVP, Deutsche Telekom</p>
                                    <span className={styles.separator}></span>
                                    <p>Senior Vice President Global Operations, Qualcomm</p>
                                    <span className={styles.separator}></span>
                                    <p>Executive Vice President Strategy, T-Mobile</p>
                                </div>
                                <div className={styles.teamCredentials}>
                                    <Image
                                        src="/images/team/logo-qualcomm.svg"
                                        alt="Qualcomm"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-tmobile.svg"
                                        alt="TMobile"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-deutsche-telekom.svg"
                                        alt="Deutsche Telekom"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                </div>
                            </div>

                            <div className={styles.teamCard}>
                                <Image
                                    src="/images/team/mario-rosati.png"
                                    alt="Mario Rosati"
                                    width={120}
                                    height={120}
                                    className={styles.teamImage}
                                />
                                <h3 className={styles.teamName}>Mario Rosati</h3>
                                <p className={styles.teamTitle}>Investor & Advisor</p>
                                <div className={styles.teamHistory}>
                                    <p>Partner, Wilson Sonsini Goodrich and Rosati</p>
                                    <span className={styles.separator}></span>
                                    <p>Adjunct Professor, Berkeley Haas School of Business</p>
                                </div>
                                <div className={styles.teamCredentials}>
                                    <Image
                                        src="/images/team/logo-berkeley.svg"
                                        alt="Berkeley University"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                    <Image
                                        src="/images/team/logo-wsgr.svg"
                                        alt="Wilson Sonsini Goodrich and Rosati"
                                        width={139}
                                        height={69}
                                        className={styles.credentialImage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
