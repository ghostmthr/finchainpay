import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from './page.module.css';
import '@/app/globals.css';

export default function Press() {
  const eventItems = [
    {
      id: 1,
      title: "Governmental Affairs Conference 2025: America's Credit Unions",
      date: "March 2-6, 2025",
      location: "Washington Convention Center, Washington DC",
      description: "Join us at the 2025 Governmental Affairs Conference to advocate for credit unions, connect with industry leaders, and shape the future of financial policy.",
      link: "https://www.americascreditunions.org/events-training/conference/governmental-affairs-conference-2025"
    },
    {
      id: 2,
      title: "American Bankers Association Conference for Community Bankers",
      date: "February 16-18, 2025",
      location: "Phoenix, AZ, JW Marriott",
      description: "Join us at the ABA Conference for Community Bankers to network with peers, explore industry challenges, and discover strategies to drive community banking success.",
      link: "https://www.aba.com/training-events/conferences/conference-for-community-bankers"
    },
    {
      id: 3,
      title: "CBA Tech Talk: North",
      date: "November 6, 2024",
      location: "Atlanta, GA, Accelerator Offices",
      description: "Join us at the 2024 CBA Tech Talk North to explore the latest banking technology, connect with industry experts, and discover innovative solutions for community banks.",
      link: "https://www.cbaofga.com/events/2024-tech-talk--north"
    },
    {
      id: 4,
      title: "ICBA ThinkTech",
      date: "November 6-7, 2024",
      location: "Atlanta, GA, Innovation Center",
      description: "Join us at the ICBA Center for Innovation to explore cutting-edge fintech solutions, collaborate with industry leaders, and drive the future of community banking.",
      link: "https://www.icba.org/newsroom/news-and-articles/2024/02/14/icba-opens-center-for-innovation-in-atlanta"
    },
    {
      id: 5,
      title: "California Community Banking Network",
      date: "October 29-31, 2024",
      location: "Carmel Valley Rance, CA",
      description: "Join us at CCB Top Banker 2024 to engage with industry experts, explore key banking trends, and discover innovative strategies for community banking success.",
      link: "https://www.ccbnetwork.org/events/topbanker2024"
    },
    {
      id: 6,
      title: "American Bankers Association Annual Convention",
      date: "October 27-29, 2024",
      location: "New York, NY, New York Hilton Midtown",
      description: "Join us at the ABA Annual Convention to connect with banking leaders, explore emerging industry trends, and gain insights to drive innovation and growth in financial services.",
      link: "https://www.aba.com/training-events/conferences/annual-convention/program"
    },
    {
      id: 7,
      title: "Jack Henry Connect",
      date: "October 7-10, 2024",
      location: "Phoenix, AZ, Phoenix Convention Center",
      description: "Join us at Jack Henry Connect, where industry professionals come together to explore cutting-edge banking technology, share insights, and shape the future of financial services.",
      link: "https://www.jackhenry.com/"
    },
    {
      id: 8,
      title: "Fiserv: Annual Client Event",
      date: "September 29-October 1, 2024",
      location: "Las Vegas, NV, Venetian Resort",
      description: "Three-day intensive workshop covering the latest developments in web technologies.",
      link: "https://www.fiserv.com/en/clientconference.html?rdf=/en/forum-2024&rdc=2025/01/15&rdr=2026/01/14"
    },
    {
      id: 9,
      title: "51st Annual Convention: Independent Community Bankers of Colorado",
      date: "September 18-20, 2024",
      location: "Hythe, Vail, CO",
      description: "Join us at the ICB Colorado Conference to connect with banking leaders, explore industry innovations, and gain insights to navigate the future of community banking.",
      link: "https://icbcolo.org/"
    },
    {
      id: 10,
      title: "47th Annual Convention: Missouri Independent Bankers Association",
      date: "September 9-11, 2024",
      location: "Ozark, MO, The Lodge of Four Seasons",
      description: "Now on its 47th year, our annual convention is a cornerstone for community banking.",
      link: "https://www.miba.net/2024-annual-convention.html"
    },
    {
      id: 11,
      title: "FIS Emerald",
      date: "May 19-32, 2024",
      location: "Orlando, FL, Gaylord Palms Resort",
      description: "Join us at FIS Emerald 2024 for groundbreaking insights, innovative fintech solutions, and unparalleled networking opportunities in the world of financial technology.",
      link: "https://www.fisemerald.com/registration/flow/fis/emerald/home/page/Homepage"
    },
    {
      id: 12,
      title: "FINTECHMeetup: The Future of Fintech",
      date: "March 3-6, 2024",
      location: "Las Vegas, NV, Venetian Resort",
      description: "Fintech Meetup is the most anticipated financial sector event of the first half of the year. It is attended by senior leaders from thousands of Banks, Credit Unions, Fintechs, and Investors that serve the US market.",
      link: "https://fintechmeetup.com/home"
    }
  ];

  const pressItems = [
    {
      id: 1,
      title: "CBA Welcomes New Associate Members",
      publication: "Community Bankers Association of Georgia",
      date: "November 6, 2024",
      link: "https://www.cbaofga.com/news/cba-welcomes-new-associate-members-11624",
      excerpt: "The Community Bankers Association of Georgia (CBA) would like to welcome new Associate Members who were recently approved by the Board of Directors."
    },
    {
      id: 2,
      title: "American Bankers Association",
      publication: "Diamond Member - ABA Partner Network ",
      date: "October 1, 2024",
      link: "https://www.aba.com/experts-peers/partner-network/directory/localpay",
      excerpt: "LocalPay provides Community Banks with a patented Pay-by-Bank solution that allows Consumers to pay local Merchants directly from their bank accounts without any intermediaries."
    },
    {
      id: 3,
      title: "California Community Banking Network",
      publication: "CCB",
      date: "January 10, 2025",
      link: "https://www.ccbnetwork.org/associate-member-directory/finchain-llc",
      excerpt: "LocalPay provides Community Banks with a patented Pay-by-Bank solution that allows Consumers to pay local Merchants directly from their bank accounts without any intermediaries."
    }
  ];

  return (
    <div className={styles.pressPage}>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Press & Events</h1>
            <p className={styles.heroText}>Stay updated with LocalPay in the media. Explore our latest press coverage, events, and conferences, and access our press kits—all in one place.</p>
          </div>
        </section>

        {/* Event Section */}
        <section className={styles.eventSection}>
          <div className={styles.eventContent}>
            <h2 className={styles.eventHeader}>Events</h2>
            <div className={styles.eventGrid}>
              {eventItems.map(item => (
                <a 
                  key={item.id} 
                  href={item.link} 
                  className={styles.eventCard}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className={styles.eventContent}>
                    <h3 className={styles.eventTitle}>{item.title}</h3>
                    <p className={`${styles.eventDate} ${styles.eventLocation}`}>{item.date} - {item.location}</p>
                    <p className={styles.eventText}>{item.description}</p>
                    <span className={styles.learnMore}>Learn more →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Company Section */}
        <section className={styles.companySection}>
          <div className={styles.companyContent}>
            <div>
              <h2 className={styles.companyTitle}>About LocalPay</h2>
              <p className={styles.companyText}>We aim to empower businesses and individuals with cutting-edge financial technology that simplifies transactions, enhances security, and accelerates global commerce.</p>
              <button className="btn btnPrimary">Learn More</button>
            </div>
            <div className={styles.companyImage}>
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


        {/* Press Section */}
        <section className={styles.pressSection}>
          <div className={styles.pressContent}>
            <h2 className={styles.pressHeader}>Press Coverage</h2>
            <div className={styles.pressGrid}>
              {pressItems.map(item => (
                <a 
                  key={item.id} 
                  href={item.link} 
                  className={styles.pressCard}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className={styles.pressContent}>
                    <h3 className={styles.pressTitle}>{item.title}</h3>
                    <p className={styles.pressPublication}>{item.publication} - {item.date}</p>
                    <p className={styles.pressText}>{item.excerpt}</p>
                    <span className={styles.learnMore}>Learn more →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
                {/* Press Kit Section */}
                <section className={styles.prkitSection}>
          <div className={styles.prkitContent}>
            <div>
              <h2 className={styles.prkitTitle}>Press Kit</h2>
              <p className={styles.prkitText}>Featuring LocalPay? Access our comprehensive PR Kit for media inquiries, including brand assets, company information, and interface screenshots. Download everything you need to cover LocalPay with accuracy and ease.</p>
              <button className="btn btnPrimary">Download Press Kit</button>
            </div>
            <div className={styles.prkitImage}>
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

      </main>
      <Footer />
    </div>
  );
}