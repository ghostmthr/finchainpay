import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function UserAgreement() {
  return (
    <div className={styles.UserAgreementPage}>
      <Navigation />
      <main className={styles.main}>
        
        <div className={styles.content}>
          <h1>FinChain User Agreement</h1>

          <section className={styles.section}>
            <p className={styles.text}>This User Agreement is a contract between you and FinChain governing use of your LocalPay account and the LocalPay services. You must be in the United States and have a U.S. bank account to use the LocalPay services.</p>
            <p className={styles.text}>You agree to comply with all of the terms and conditions in this User Agreement. You also agree to comply with the following additional policies and each of the other agreements posted on LocalPay.com/legal that apply to you:</p>
            <ul className={styles.sectionList}>
              <li>Privacy Policy</li>
            </ul>

            <p className={styles.text}>We may revise this User Agreement and any of the policies listed above from time to time. The revised version will be effective at the time we post it, unless otherwise noted. We reserve the right to amend this agreement at any time without notice, subject to applicable law. By continuing to use our services after any changes to this User Agreement become effective, you agree to abide and be bound by those changes. If you do not agree with any changes to this User Agreement, you may close your account.</p>
          </section>

          <section className={styles.section}>
            <h2>Opening a LocalPay Account</h2>
            <p className={styles.text}>We offer accounts for two types of purposes: personal Consumer accounts and Merchant business accounts. You may only have one personal account. To create a personal Consumer account, you must be a resident of the United States or one of its territories, be at least 18 years old or the age of majority in your state of residence and use a cellular/wireless telephone number that you own. Your LocalPay account is a personal account unless you have a registered business.</p>
            <p className={styles.text}>Personal accounts let you do things like:</p>
            <ul className={styles.sectionList}>
              <li>Pay for products or services to a Merchant who has registered as a LocalPay business account.</li>
              <li>Link various types of bank accounts (i.e. checking, savings) to your personal account.</li>
            </ul>

            <p className={styles.text}>We may also offer you the ability to set up a business profile in addition to your personal account, which you can use to receive payments for the sale of goods and services. This feature is offered in our sole discretion and may not be available to all users.</p>
            <p className={styles.text}>When we refer generally to "your LocalPay account" that includes your personal account you have opened. References to any "balance" or "funds" are held in your verified bank accounts which are linked to your personal LocalPay account, which you agree are owned by you.</p>

            <p className={styles.text}>Keep confidential any credentials used to access your LocalPay account and the LocalPay services. You must keep your phone number, email address and other contact information current in your LocalPay account profile up to date.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>LocalPay Privacy Policy</h2>
            <p className={styles.text}>FinChain, LLC, a Delaware Corporation, ("FinChain," "we" or "us") provides an online and mobile service, the LocalPay website, www.LocalPay.com (the "Site"), computer mobile applications ("App" or "Apps"), and programs hosted by or on behalf of FinChain and related services (together with the Site and the Apps, the "Service"). The terms "you" and "user" mean all individuals and entities that access the Service.</p>
            <p className={styles.text}>This Privacy Policy describes how we use Personal Information (defined below) that we collect from you as part of you using our service. For EU users, please see our special provisions under the "Special Information for EU Users" section below. This Privacy Policy also describes the choices available to you regarding our use of your Personal Information and how you can access and update this information, and what information you provide that we will retain even if you decide to delete the App or stop using the Service. Our Privacy Policy is not a contract, and it does not create any legal rights or obligations.</p>
            <p className={styles.text}>You should also read our User Agreement, available for Client Users at http://LocalPay.com/user-agreement, which contains important information about the scope and nature of the Service, and the rules that apply to your use of our Service. All capitalized terms used in this Privacy Policy that are not defined in this Privacy Policy have the meaning given to them in the User Agreement for LocalPay.</p>
            <p className={styles.text}>Your use of the Service indicates that you consent to our collection, storage, use, and disclosure of your personal information and other information as described in this Privacy Policy and the LocalPay User Agreement. If you do not consent to the use of your Personal Information as described in this Privacy Policy or do not agree to the User Agreement, do not use the Service.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Data Controller</h2>
            <p className={styles.text}>FinChain provides services to users throughout the world. If you use our services in the United States or in the European Union or elsewhere, FinChain, LLC is the data controller. The address for the data controller of the information you provide or that is collected by FinChain or its affiliates is:<br />

              ATTN: Privacy Officer FinChain, LLC<br />
              228 Hamilton Avenue, 3rd Floor<br />
              Palo Alto, CA 94301<br />
              <a href="mailto:privacy@LocalPay.com">privacy@LocalPay.com</a></p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Types of Information We Collect</h2>
            <p className={styles.text}>A. Personal Information. In order to access and utilize the LocalPay services, one is required to become a registered user. As part of the registration process, one is required to provide the following: (1) name; (2) email address; (3) age; (4) username; (5) password; (6) phone number; and (7) access information to hardware requirements in order to access and use the Service. All registration information provided to us must comply with the LocalPay User Agreement.</p>
            <p className={styles.text}>As part of the user experience, you may also exchange information with us that would be part of the personal information we collect. Examples include but are not limited to the following: (1) information provided when you download or use applications from us; (2) information you enter into our system and post as part of using our services (e.g., photos, videos, comments, voice recordings, and other multimedia communication materials); (3) information you provide to us when contacting us for help; (4) profile information you provide for your personal user profile or information that is gathered as part of accessing your computer hardware and related devices (e.g., age, first and last name, picture, image or likeness, phone number, etc.); and (5) access to the data you provide to us via video and/or audio feeds you send to us in order to use our services.</p>
            <p className={styles.text}>1. Specific Use of Personal Information. The information we collect allows us to provide you with a relevant user experience as well as a mechanism to keep you informed on FinChain's latest product announcements, software updates, and promotional information. If you so desire, you can remove yourself from our mailing list by opting out by updating your profile preferences.</p>
            <p className={styles.text}>Other uses of personal information may be for validating a user account, fraud prevention, or other data safety precautions FinChain may elect to implement. Additionally, we may use personal information for our internal purposes such as data analysis, auditing, and research to improve our services to you.</p>
            <p className={styles.text}>B. Non-Personal Information. FinChain collects information that in and of itself does not permit direct association with any specific person. In the case of non-personal information, FinChain has the right to collect, transfer, use, and disclose this information for any purpose. Examples of non-personal information and its intended use:</p>
            <p className={styles.text}>1. Device-related information. We may collect information such as the user device identifier (IDFA), type of mobile device, IP address of your mobile device, mobile operating system, and type of mobile Internet browsers. The device identifier itself may deliver the information to us directly or we may obtain this information via a third-party partner and/or affiliate. We use the information for the express purpose of better understanding customer behavior and improving our products and services.</p>
            <p className={styles.text}>3. Metadata. Metadata is unique technical data that is generally associated with User Content. Metadata allows one to make their User Content more searchable when interacting with our Service. An example of metadata would be a hashtag or some form of geotag that would allow others to more readily find your submitted content and/or its given location.</p>
            <p className={styles.text}>C. Location-based Information. Use of the FinChain services permits us to collect precise information about the location of your particular device. Location may include but is not limited to background location information between Users. We may use your location information to provide requested location services and to allow tagging of files. Users who utilize our platform as test-taking applicants agree and consent to the location-based information we collect in order for us to verify and/or monitor test-taking activities</p>
            <p className={styles.text}>D. Information from Other Sources. This may include:</p>
            <ul className={styles.sectionList}>
              <li>User feedback;</li>
              <li>Requesting services for or on your behalf;</li>
              <li>Users or others providing information in relation to any claim or dispute;</li>
              <li>FinChain business partners including those with whom you may create or access your account, such as payment providers, social media users, or websites who use FinChain's APIs or whose API FinChain uses;</li>
              <li>Publicly available sources;</li>
              <li>Marketing service providers.</li>
            </ul>
            <p className={styles.text}>FinChain may combine the information gathered from these other sources with other information in its possession.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Cookies and Other Tracking Technologies</h2>
            <p className={styles.text}>"Cookies" are small data files that are sent to your web browser when you access a website, and the files stored on your device's hard drive. We use "session" cookies to keep you logged in while you use the Site, to track your preferences and to track trends, and monitor usage and web traffic information on the Site. These are erased when you close your browser. We use "persistent" cookies to relate your use of our Service to other information about you and store information about your preferences to make your user experience consistent and customized. For example, we may create a persistent cookie that includes some basic information about you, like your favorite website locations and whether customer support responded to your inquiry. These cookies stay on your hard drive until you erase them or they expire and associate your information with your account even if you are logged out.</p>
            <p className={styles.text}>Most browsers automatically accept cookies, but you can change your settings on the browser settings to refuse cookies or prompt you before accepting cookies. You can also use your browser settings or other tools to delete cookies you already have. However, if you disable or refuse cookies, then certain features of the Site may be inaccessible or not function properly.</p>
            <p className={styles.text}>Our cookies do not, by themselves, contain Personal Information, and we do not combine the general information collected through cookies with other Personal Information to tell us who you are. As noted, however, we do use cookies to identify that your web browser has accessed aspects of the Service and may associate that information with your account if you have one.</p>
            <p className={styles.text}>We may also use other tracking technologies, such as web beacons, pixels, and clear GIFs, to track your use of the Service and the Site. These technologies may be used in connection with our Site or in connection with our emails.</p>
            <p className={styles.text}>Certain features of the Site may use local shared objects (or "flash cookies"). Flash cookies are small files similar to browser cookies that collect and store information about your preferences and where you browse and what you look at on the Site. Flash cookies are not managed by the same browser or device settings that are used for browser cookies. You may adjust your Adobe Flash Player settings to prevent flash cookies from being placed on your hard drive.</p>
            <p className={styles.text}>We may also use third-party cookies and tracking technologies to track your use of the Service and the Site. These third-party cookies and tracking technologies are not subject to our control and are not covered by our cookie policy. We are not responsible for the privacy practices of these third-party cookies and tracking technologies.</p>
            <p className={styles.text}>This Privacy Policy covers our use of cookies only and does not cover the use of cookies by third parties. We do not control when or how third parties place cookies on your computer. For example, third-party websites to which a link points may set cookies on your computer.</p>
            <p className={styles.text}>PWe may use "clear GIFs" (aka "web beacons" or "pixel tags") or similar technologies, on our Service or in our communications with you to enable us to know whether you have visited a part of our Service or received a message. A clear GIF is typically a one-pixel, transparent image (although it can be a visible image as well), located on a website or in an email or other type of message, which is retrieved from a remote website on the Internet enabling the verification of an individual's viewing or receipt of a website or message.</p>
            <p className={styles.text}>We may use clear GIFs in our emails to our users to help us track email opens, clicks and bounces. Clear GIFs are also used in connection with our Site or in connection with our emails.</p>
            <p className={styles.text}>We do not automatically collect Personal Information, but we may tie Personal Information with the automatically collected information using the above tools or information collected from other sources.</p>
            <p className={styles.text}>We may use clear GIFs in our emails to our users to help us track email opens, clicks and bounces. Clear GIFs are also used in connection with our Site or in connection with our emails.</p>
            <p className={styles.text}>We may also log information using digital images called web beacons on our Service or in our emails. We may use web beacons to manage cookies, count visits, and to learn what marketing works and what does not. We may also use web beacons to tell if you open or act on our emails.</p>
            <p className={styles.text}>We also use third-party analytics services to collect usage data from our Apps in order to help us understand how users are interacting with our Apps. Third-party analytic services are used to track general location information and events that occur without our Services, such as how often you use our Services. This information, including your IP address, is transmitted and stored by third parties as determined by us.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>IP Address Information and Other Information Collected Automatically</h2>
            <p className={styles.text}>We automatically receive and record log file information from your web browser when you interact with the Site, including your IP address and cookie information. Generally, the Site automatically collects usage information, such as the number and frequency of visitors to the Site. We may use this data in aggregate form, that is, as a statistical measure, but not in a manner that would identify you personally. This type of aggregate data enables us, and third parties authorized by us, to figure out how often individuals use parts of the Service so that we can analyze and improve them.</p>
            <p className={styles.text}>In terms of test-taking applicant users, you consent and agree for us to collect this information as part of the test-taking/monitoring aspect of our Services. You understand and acknowledge that this information may be used to identify you personally as a condition to the test-taking policies you have consented to abide by. You also agree and consent for this information to be shared with our Client Users as a condition of your use of our Services.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Third-Party Sites and Services</h2>
            <p className={styles.text}>FinChain products, services, and applications may contain links to third-party services (e.g., Facebook, Google, etc.), products, and websites. Information collected by third parties is governed by their privacy policies and practices. We encourage you to read and learn about their specific privacy practices.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Information Sharing and Disclosures</h2>
            <p className={styles.text}>From time to time, FinChain may make certain personal information available to product and service partners. Specific ways FinChain shares with third parties are described below:</p>

            <p className={styles.text}>A. Third-Party Service Providers. FinChain may elect to outsource some of its technical and customer support, tracking and reporting functions, quality assurance testing, and other services that it may deem necessary. In these specific instances, we may share information about or from you in order for them to provide their services. Additional examples may include:</p>
            <ul className={styles.sectionList}>
              <li>Payment processors and facilitators;</li>
              <li>Cloud storage providers;</li>
              <li>Data analytics providers including Full Story and Google Analytics;</li>
              <li>Research partners;</li>
              <li>Consultants, accountants, lawyers, and other professional service providers.</li>
            </ul>

            <p className={styles.text}>In these specific instances, we may share information about or from you in order for them to provide their services.</p>

            <p className={styles.text}>B. Business Affiliates and Transfers. FinChain may share information from or about you with its subsidiaries, joint ventures, or companies under common control, in which case we will require them to adhere to this Privacy Policy. In the event FinChain, LLC is acquired in total or by a substantial amount of its assets, we will make best efforts to ensure that the purchaser will assume the rights and obligations of this Privacy Policy. However, FinChain cannot make any guarantees or promises with respect to a purchaser adopting the current rights and obligations of this Privacy Policy.</p>

            <p className={styles.text}>C. Investigations. As described in the LocalPay User Agreement, FinChain reserves the right to provide and/or disclose necessary information for investigatory matters. Examples include but are not limited to: 1) compliance with law enforcement or the necessary legal process; 2) behavior and/or use violative of the User Agreement, and 3) instances whereby it is necessary to protect our rights and obligations.</p>

            <p className={styles.text}>D. User Request. This includes sharing your information with:</p>
            <p className={styles.text}>FinChain business partners. For example, we may share your location and/or that of the FinChain sensor(s) when you engage the services, we may make available to you through our business partners and their affiliates.</p>

            <p className={styles.text}>E. With your consent. FinChain may share your information other than as we have described in this policy if we notify you and you consent to the sharing.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Storage of Your Information</h2>
            <p className={styles.text}>The information you provide FinChain may be collected through our services and processed in the United States or any other country in which FinChain, its subsidiaries, affiliates, and/or service providers maintain facilities.</p>
            <p className={styles.text}>As a result, FinChain, its subsidiaries, affiliates, and/or service providers may transfer information we collect about you, including personal information, across borders and from your country or jurisdiction to other countries or jurisdictions around the world. For example, you may reside in another country or region with differing data protection and privacy laws than the United States. Consequently, when you register to use the Service, you acknowledge and consent to FinChain transmitting your information to the United States or to any country in which FinChain and/or its subsidiaries, affiliates, and/or service providers maintain facilities and the use and disclosure of information about you as described in this Privacy Policy.</p>
            <p className={styles.text}>In turn, FinChain uses commercially reasonable standards, measures, and/or protocol to keep the information collected through the Service secure and as a result, we take cautionary steps to verify your identity before granting you Service access. Moreover, FinChain cannot ensure the security of any information submitted or transmitted by you to FinChain nor can we guarantee that said information may not be disclosed, destroyed, and/or altered.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Protection of Personal Information</h2>
            <p className={styles.text}>FinChain preserves the security of your personal information with the utmost caution. As such, we follow the generally accepted industry standards to protect all user information submitted to us. Although we implement accepted industry standards, we cannot guarantee absolute security with respect to your personal information. Given the fact that no one method of transmission over the Internet or via mobile device is 100% secure, we urge you to take the utmost care when transmitting personal information.</p>
            <p className={styles.text}>When you use some of the features of the FinChain services, the personal information and content you share are visible to other users and can be read, collected, or used by them. You are responsible for the personal information you choose to share or submit in these instances. Please take care when using these features.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Data Retention and Deletion</h2>
            <p className={styles.text}>FinChain will retain your personal information for a minimum of 7 years in connection with regulatory, tax, insurance, or other requirements in the places in which it operates. FinChain thereafter deletes or anonymizes such information with applicable laws. Users may request deletion of their account at any time. Following such a request, FinChain deletes the information that is not required to be retained and restricts the use of the information it is required to retain. You may request deletion of your account by contacting us here at <a href="mailto:privacy@LocalPay.com">privacy@LocalPay.com</a>.</p>
            <p className={styles.text}>FinChain may also retain certain information if necessary for its legitimate business interests, such as fraud prevention and enhancing users' safety and security. For example, if FinChain shuts down a user's account, FinChain may retain certain information about that account to prevent that user from opening a new FinChain account in the future.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Access to Personal Information</h2>
            <p className={styles.text}>In order to ensure that your personal information is current and accurate, please log in to your account using the FinChain Site and go to your user profile.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Children</h2>
            <p className={styles.text}>FinChain is aware of the importance of protecting the privacy and safety of children who may use our services. In that regard, we do not knowingly solicit data from or market to children under the age of 13. In the event a child's parent and/or legal guardian becomes aware that their child has provided us with information without their consent, please contact us immediately at <a href="mailto:privacy@LocalPay.com">privacy@LocalPay.com</a>. Once notified, we will delete the information as soon as reasonably possible.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Privacy Concerns</h2>
            <p className={styles.text}>In the event you believe there to be a conflict and/or concern with the terms of this Privacy Policy, you may contact us directly at:</p>
            <p className={styles.text}>
              ATTN: Privacy Officer<br />
              FinChain, LLC<br />
              228 Hamilton Avenue, 3rd Floor<br />
              Palo Alto, CA 94301<br />
              <a href="mailto:privacy@LocalPay.com">privacy@LocalPay.com</a>
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Privacy Policy Modifications</h2>
            <p className={styles.text}>FinChain reserves the exclusive right to change, modify, or alter the terms of this Privacy Policy. The most current version of this policy will govern our use of your information. Continued access and use of the FinChain services after changes to our Privacy Policy occur indicates that you agree to be bound by the revised Privacy Policy.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Consent</h2>
            <p className={styles.text}>Your continued access and use of the FinChain services, subject to the User Agreement, signifies your unequivocal consent to the terms of this Privacy Policy.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Special Information for EU Users</h2>
            <p className={styles.text}>Beginning May 25, 2018, the processing of personal data of users in the European Union is subject to the EU General Data Protection Regulation ("GDPR"). This section summarizes FinChain's grounds for processing personal information under the GDPR, and the rights of EU users as relates to FinChain's handling of personal information. This section provides information as relates to EU users' rights, and FinChain's responsibilities, under this regulation.</p>

            <h3 className={styles.sectionTitle}>A. EU User Rights</h3>
            <p className={styles.text}>If you are a FinChain user in the EU, you have the following rights with respect to FinChain's handling of your personal information. To exercise these rights, please see below or submit your request at a <a href="mailto:privacy@LocalPay.com">privacy@LocalPay.com</a>. Users outside the EU may also request explanation, correction, deletion, or copies of their personal data by contacting us at privacy@LocalPay.com.</p>

            <p className={styles.text}>Explanation and copies of your data</p>
            <p className={styles.text}>FinChain will retain your personal information for a minimum of 7 years in connection with regulatory, tax, insurance, or other requirements in the places in which it operates. FinChain thereafter deletes or anonymizes such information with applicable laws. Users may request deletion of their account at any time. Following such a request, FinChain deletes the information that is not required to be retained and restricts the use of the information it is required to retain. You may request deletion of your account by contacting us here at <a href="mailto:privacy@LocalPay.com"></a>privacy@LocalPay.com.</p>
            <p className={styles.text}>FinChain may also retain certain information if necessary for its legitimate business interests, such as fraud prevention and enhancing users' safety and security. For example, if FinChain shuts down a user's account, FinChain may retain certain information about that account to prevent that user from opening a new FinChain account in the future.</p>
            <ul className={styles.sectionList}>
              <li>You have the right to request an explanation of the information that FinChain has about you and how FinChain uses that information.</li>
              <li>You also have the right to receive a copy of the information that FinChain collects about you if collected on the basis of consent or because FinChain requires the information to provide the services that you request.</li>
            </ul>

            <p className={styles.text}>Correction</p>
            <ul className={styles.sectionList}>
              <li>If FinChain has information about you that you believe is inaccurate, you have the right to request a correction of your information. Please see the section titled "Explanation, Copies, and Correction" below for more information on correcting, or requesting correction of, your information.</li>
            </ul>

            <p className={styles.text}>Deletion</p>
            <ul className={styles.sectionList}>
              <li>Users may request deletion of their accounts at any time. Users may request via FinChain's website at <a href="mailto:privacy@LocalPay.com">LocalPay.com</a>. We may retain certain information about you as required by law and for legitimate business purposes permitted by law.</li>
              <li>Please see the "Data Retention & Deletion" section above for more information regarding FinChain's retention and deletion practices.</li>
            </ul>

            <p className={styles.text}>Objections and complaints</p>
            <ul className={styles.sectionList}>
              <li>Users in the EU have the right to object to FinChain's processing of personal data, including for marketing purposes based on profiling and/or automated decision making. FinChain may continue to process your information notwithstanding the objection to the extent permitted under GDPR.</li>
              <li>You may also submit questions, comments, or complaints to FinChain directly at:</li>
            </ul>
            <p className={styles.text}>
              ATTN: Privacy Officer<br />
              FinChain, LLC<br />
              228 Hamilton Avenue, 3rd Floor<br />
              Palo Alto, CA 94301<br />
              <a href="mailto:privacy@LocalPay.com">privacy@LocalPay.com</a>
            </p>

            <h3 className={styles.sectionTitle}>B. Grounds for Processing</h3>
            <p className={styles.text}>The GDPR requires that companies processing the personal data of EU users do so on the basis of specific legal grounds. As described below, FinChain processes the information of EU users based on one or more of the grounds specified under the GDPR:</p>

            <p className={styles.text}>1. The processing is necessary to provide the services and features you request FinChain must collect and use certain information in order to provide its services. This includes:</p>
            <ul className={styles.sectionList}>
              <li>User profile information that is necessary to establish and maintain your account, including to verify your identity; enable communications with you about the products you order from us; orders and accounts; and to enable you to make payments.</li>
              <li>Integration into your and/or licensed third party's real-time financial services.</li>
              <li>Usage information, which is necessary to maintain, optimize, and enhance FinChain's services, including to determine, sometimes in combination with other information, incentives, etc.</li>
              <li>Collection and use of this information is a requirement for using FinChain's website and services.</li>
            </ul>

            <p className={styles.text}>2. The processing is necessary to protect the vital interests of our users or of others</p>
            <p className={styles.text}>FinChain may process personal information, including disclosing data with law enforcement authorities in case of threats to the safety of users or of others.</p>

            <p className={styles.text}>3. The processing is necessary for FinChain's legitimate interests</p>
            <p className={styles.text}>FinChain collects and uses personal information to the extent necessary for its legitimate interests. This includes collecting and using information:</p>
            <ul className={styles.sectionList}>
              <li>To prevent, detect, and combat fraud in connection with the use of our services. For example, FinChain uses user profile, location, FinChain sensors, and device and usage information to identify and prevent circumstances when users attempt to defraud FinChain or other users.</li>
              <li>To inform law enforcement officials regarding criminal acts or threats to public safety.</li>
              <li>To provide customer support.</li>
              <li>To optimize our service and develop new services. This includes, for example, identifying and perfecting our AI models.</li>
              <li>To aggregate, analyze, and interpret the data collected by the FinChain services.</li>
              <li>For research and analytical purposes. This includes, for example, analyzing usage trends to improve the user experience and enhance the safety and security of our services.</li>
              <li>For direct marketing purposes. This includes, for example, analyzing data to identify trends and tailor marketing messages to user needs.</li>
              <li>To enforce LocalPay's User Agreement.</li>
            </ul>

            <p className={styles.text}>4. The processing is necessary for the legitimate interests of other persons or parties</p>
            <p className={styles.text}>FinChain collects and uses personal information to the extent necessary for the interests of other persons or the general public. This includes sharing information in connection with legal or insurance claims, to protect the rights and safety of others.</p>
            <p className={styles.text}>FinChain may also process personal information, when necessary, in regard to a substantial public interest, on the basis of applicable laws.</p>

            <p className={styles.text}>5. The processing is necessary for FinChain's legal obligations</p>
            <p className={styles.text}>FinChain is subject to legal requirements in the jurisdictions in which it operates that require us to collect, process, disclose and retain your personal data. For example, FinChain is subject to laws and regulations in many cities and countries that require it to collect and retain information about the FinChain products, to retain such information for extended periods of time, and to provide copies of such information to governmental or other authorities.</p>
            <p className={styles.text}>FinChain uses your information to comply with such laws to the extent they apply to your use of the FinChain apps. FinChain may also share information with law enforcement, or requests by third parties pursuant to legal processes. For more information about such sharing, please see Third-Party Sites and Services, above.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Consent</h2>
            <p className={styles.text}>FinChain may collect and use your information on the basis of your consent. You may revoke your consent at any time. If you revoke your consent, you will not be able to use any service or feature that requires the collection or use of the information we collected or used on the basis of consent.</p>

            <p className={styles.text}>FinChain relies on consent in connection with data collections or uses that are necessary to enhance the user experience, to enable optional services or features, or to communicate with you. If you are an EU user, the following types of data collection or uses are done on the basis of your consent.</p>
            <ul className={styles.sectionList}>
              <li>Location Information (Users and FinChain products)</li>
              <li>FinChain sensor data aggregation, analysis, and interpretation by our third-party partners</li>
              <li>Notifications: Account Updates</li>
              <li>Notifications: Discounts and News</li>
              <li>Address Book / Contacts</li>
            </ul>

            <p className={styles.text}>Please see the Choice and Transparency section below for further information about these data collections and uses, how to opt in or out of them, and the effect of opting out of these on your use of FinChain's apps.</p>

            <p className={styles.text}>FinChain may also collect personal information about you through voluntary surveys. Your responses to such surveys are collected on the basis of consent and will be deleted once no longer necessary for the purposes collected.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Choice and Transparency</h2>
            <p className={styles.text}>FinChain provides means for you to see and control the information that FinChain collects, including through:</p>
            <ul className={styles.sectionList}>
              <li>device permissions</li>
              <li>marketing opt-outs</li>
            </ul>

            <p className={styles.text}>You may also request that FinChain provide you with explanation, copies, or correction of your data.</p>

            <h3 className={styles.sectionTitle}>A. DEVICE PERMISSIONS</h3>
            <p className={styles.text}>Most mobile platforms (iOS, Android, etc.) have defined certain types of device data that websites cannot access without your consent. And these platforms have different permission systems for obtaining your consent. The iOS platform will alert you the first time the FinChain website wants permission to access certain types of data and will let you consent (or not consent) to that request. Android devices will notify you of the permissions that the FinChain website seeks before you first use the website, and your use of the website constitutes your consent.</p>

            <h3 className={styles.sectionTitle}>B. EXPLANATIONS, COPIES, AND CORRECTION</h3>
            <p className={styles.text}>You may request that FinChain:</p>
            <ul className={styles.sectionList}>
              <li>Provide a detailed explanation regarding the information FinChain has collected about you and how it uses that information.</li>
              <li>Receive a copy of the information FinChain has collected about you.</li>
              <li>Request correction of any inaccurate information that FinChain has about you.</li>
            </ul>

            <p className={styles.text}>You can make these requests by contacting FinChain at <a href="mailto:privacy@LocalPay.com">privacy@LocalPay.com</a>. You can also edit the name, phone number, and email address associated with your account through the Settings menu on LocalPay's App. You can also look up your transactions, history, etc. on the LocalPay App.</p>

            <h3 className={styles.sectionTitle}>C. MARKETING OPT-OUTS</h3>
            <p className={styles.text}>You may opt out of receiving promotional emails from FinChain at <a href="mailto:privacy@LocalPay.com">privacy@LocalPay.com</a>. You may also opt out of receiving emails and other messages from FinChain by following the instructions in those messages. Please note that if you opt out, we may still send you non-promotional messages, such as receipts or information about your account.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Privacy Policy Modifications and Updates</h2>
            <p className={styles.text}>FinChain reserves the exclusive right to change, modify, or alter the terms of this Privacy Policy. The most current version of this policy will govern our use of your information. Continued access and use of the FinChain services after changes to our Privacy Policy occur indicate that you agree to be bound by the revised Privacy Policy.</p>
          </section>

          <section className={styles.section}>
            <h2>Closing Your LocalPay Account</h2>
            <p className={styles.text}>You may close your LocalPay account and terminate your relationship with us without cost, but you will remain liable for all obligations related to your LocalPay account even after the LocalPay account is closed. Any incomplete transactions or transfers must be completed or canceled from any personal or business profiles of your LocalPay account before closing it.</p>

            <p className={styles.text}>In certain cases, you may not close your LocalPay account, including:</p>
            <ul className={styles.sectionList}>
              <li>To evade an investigation.</li>
              <li>If there is a pending transaction or an open dispute or claim.</li>
              <li>If amounts are owed to us.</li>
              <li>If your LocalPay account is subject to a hold, limitation or reserve.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Link or Unlink a Payment Method</h2>
            <p className={styles.text}>You can link or unlink certain payment methods such as a U.S. bank account to your LocalPay account.</p>
            <p className={styles.text}>Please keep your payment method information current.</p>
          </section>

          <section className={styles.section}>
            <h2>Authorization to Charge Your Payment Method</h2>
            <h3>General Authorization to Charge Your Payment Method</h3>
            <p className={styles.text}>By linking a payment method to your LocalPay account, as described in the section Link or Unlink a Payment Method, you authorize us to charge such linked payment method for the payment amount and any applicable fees (a) whenever you choose such linked payment method to send money or buy something using LocalPay, (b) in connection with any errors, claims, or disputes, and (c) for amounts you owe to us.</p>

            <h3>Authorization of Specific Transactions</h3>
            <p className={styles.text}>Each time you make a payment, as described in the section Making Payments, or buy something, as described in the section Buying Something from Authorized Merchants, you authorize us to charge the selected payment method for the payment amount and any applicable fees. If the amount of your transaction changes after checkout (for example, if the amount increases because you add another product or service like expedited delivery or if the amount decreases or is split because a portion of your order is canceled or delayed), you authorize us to charge the selected method in the revised amount.</p>

            <p className={styles.text}>If you have entered into an automatic payment agreement with a seller, you authorize us to charge your selected payment method each time you make a purchase from the seller, including via recurring payments or any other future transactions scheduled in advance.</p>
          </section>

          <section className={styles.section}>
            <h2>Revoking Your Authorization</h2>
            <p className={styles.text}>You can revoke our authority to charge a payment method by unlinking that payment method from your LocalPay account as described in the section Link or Unlink a Payment Method. Such revocation only applies to transactions that are initiated after you unlink the payment method. It does not affect our authority to charge the payment method for a transaction you have already authorized, including our authority to represent a charge to the unlinked payment method or charge the unlinked payment method as a backup payment method if the original transaction occurred before you unlinked that payment method. Unlinking a payment method also does not revoke our authority to charge or credit the payment method in connection with an error, dispute, or claim with respect to a transaction initiated before you unlinked that payment method. If you have a payment method selected for a connected business, you may not be able to unlink that payment method until you select a different payment method settings in your LocalPay app or by disconnecting the business. If there is a pending transaction with a seller where you have authorized the transaction, but the seller has not yet completed the transaction, you may not be able to unlink the payment method used until the transaction is completed or you select an alternative payment method.</p>
          </section>

          <section className={styles.section}>
            <h2>Receiving Money Sent to You on LocalPay</h2>
            <p className={styles.text}>To receive payment from a LocalPay transaction and use money sent to you, we must verify the required identifying information you provide to us. The required identifying information is:</p>
            <ul className={styles.sectionList}>
              <li>For a personal account or a business profile of an unincorporated business/sole proprietorship: name, physical address, date of birth, and social security or taxpayer identification number; or</li>
              <li>For a business profile of any other type of business legal entity: business name, business address, taxpayer identification number, and proof of business existence.</li>
            </ul>
            <p className={styles.text}>Until you verify the required identifying information, you will not be able to receive money via your LocalPay account.</p>
          </section>

          <section className={styles.section}>
            <h2>Bank Transfer Reviews</h2>
            <p className={styles.text}>We review account and transaction activity at various times, including when bank transfers are initiated. This review checks for, among other things, suspicious or illegal activity, and whether your LocalPay account activity and the activity of users with whom you have transacted comply with this agreement. In connection with our review process, you may be required to provide us with additional information and/or documentation to verify your identity. We may limit your LocalPay account and access to transfer money in it or that is sent to you until verification is completed.</p>

            <p className={styles.text}>Reviews may result in:</p>
            <ul className={styles.sectionList}>
              <li>delayed, blocked or canceled transfers;</li>
              <li>account limitation, suspension or termination;</li>
              <li>money or payments being seized to comply with a court order, warrant or other legal process; and/or</li>
              <li>money or payments you previously received being reversed (i.e., sent back to the bank account that was used to fund the payment).</li>
            </ul>

            <p className={styles.text}>Among other reasons, we may take the above actions if you knowingly or unknowingly were a participant in a payment that was made from a stolen card, compromised bank account, or compromised LocalPay account, or if you were a participant in a transaction for goods and services among personal accounts.</p>
          </section>

          <section className={styles.section}>
            <h2>Account Statements</h2>
            <p className={styles.text}>You have the right to receive account statements showing your LocalPay account activity. You may view your LocalPay account statements by logging into your LocalPay account on the App.</p>
          </section>

          <section className={styles.section}>
            <h2>Making Payments</h2>
            <p className={styles.text}>Using your personal Consumer or business Merchant account, you can send money to or request money from a LocalPay user using the "Pay/Get Paid" payments feature in your LocalPay account. When you accept a charge request sent by another LocalPay user, you will send them money.</p>
          </section>

          <section className={styles.section}>
            <h2>Payments for Goods and Services</h2>
            <p className={styles.text}>Payments for the sale of goods or services made using the Pay/Get Paid feature in your LocalPay account must either be identified as for goods and services or sent to business profiles.</p>
          </section>

          <section className={styles.section}>
            <h2>Fees and Limits</h2>
            <p className={styles.text}>We may, at our discretion, impose limits on the amount and/or the number of payments and transfers you can send and receive.</p>
            <p className={styles.text}>The fees applicable to receiving, withdrawing and sending money can be found on the Fees page.</p>
            <p className={styles.text}>In order to manage risk, we may limit the payment methods available to make a payment.</p>
            <p className={styles.text}>Fees and limits may change from time to time in our sole discretion.</p>
          </section>

          <section className={styles.section}>
            <h2>Buying Something from Authorized Merchants</h2>
            <h3>How to Buy Something from an Authorized Merchant's Website, Mobile App, or In-Person</h3>
            <p className={styles.text}>You may have the ability to use LocalPay as a payment method at checkout at an authorized Merchant's website or mobile app and can make in-person purchases with a QR code. An "authorized Merchant" means a Merchant that has been authorized by us to accept LocalPay as a payment method for purchases of goods and services through the Merchant's website, mobile app, or in-person by using a LocalPay QR code. This includes, for example, buying something online using your mobile phone through an authorized Merchant's website or mobile app and selecting LocalPay as your payment method at checkout, or buying something from an authorized Merchant in-person by using a LocalPay QR code.</p>

            <p className={styles.text}>If a payment is initiated through your LocalPay account with your bank account selected as the payment method, remember that your LocalPay account is issued to you by FinChain and not your bank. The terms, benefits, and protections associated with your LocalPay account may vary from those that apply to your bank account. If your LocalPay account is used to make a purchase that exceeds the balance in the linked bank account, the bank may charge overdraft fees, even if you chose not to allow overdrafts with your bank. Similarly, the liability limits applicable to your LocalPay account may differ from those applicable to the linked bank account.</p>
          </section>

          <section className={styles.section}>
            <h2>Fees and Limits</h2>
            <p className={styles.text}>We may, at our discretion, impose limits on the amount or the number of payments that may be sent, including money sent for authorized Merchant purchases.</p>
            <p className={styles.text}>Fees and limits may change from time to time in our sole discretion.</p>
          </section>

          <section className={styles.section}>
            <h2>Payment Review</h2>
            <p className={styles.text}>We review payments made with your LocalPay account at our discretion. When we identify a potentially high-risk payment to an authorized Merchant, we review the transaction more closely before allowing it to proceed.</p>
          </section>

          <section className={styles.section}>
            <h2>Refunds</h2>
            <p className={styles.text}>When you buy something from an authorized Merchant using LocalPay and the transaction is ultimately refunded, the money will be sent back to your linked bank account. This may take up to 15 business days.</p>
          </section>

          <section className={styles.section}>
            <h2>Selling on LocalPay</h2>
            <p className={styles.text}>You can receive payments for the sale of goods and services only by using a Merchant account. Selling on LocalPay, including receiving payments in your Merchant account or that are identified as for goods and services, is subject to applicable fees for such payments found on the Fees page. If you refund a transaction to a buyer, there are no fees to make the refund, but the fees you originally paid as the seller are not returned.</p>

            <p className={styles.text}>We may restrict the use of your LocalPay account, including any Merchant account, if the selling activity through the account, including any Merchant account, reaches certain thresholds, involves certain activities or violates any terms between you and us. In addition, if your selling activity meets certain transaction thresholds, we may require you to provide additional information and documentation to us from time to time for tax reporting or other reasons (for example, to verify your business activities or resolve claims or disputes), and we may suspend or place limits on your LocalPay account until we receive the requested information and documentation.</p>
          </section>

          <section className={styles.section}>
            <h2>Setting Up a Merchant Account</h2>
            <p className={styles.text}>LocalPay may offer you the ability to create a single Merchant account in addition to your personal account. To be eligible, you must be an individual with a LocalPay account in good standing and complete any required application process, including verification of the required identifying information. As a Merchant account is part of your LocalPay account, any and all terms applicable to your LocalPay account will also govern the Merchant account, unless otherwise specifically stated. The information you use to complete your Merchant account profile must be accurate, and any descriptions, pictures or other content associated with your profile must be owned by you.</p>

            <p className={styles.text}>If you create a Merchant account for a business legal entity (instead of opening a business profile on behalf of an unincorporated business/sole proprietorship), you agree that you are a legal representative of that business and are authorized to accept this User Agreement on its behalf.</p>

            <p className={styles.text}>By creating a Merchant account, you authorize us, directly or through third parties, to make any inquiries we consider necessary to verify your identity or the status of your business. This may include ordering a personal and/or business credit report from a credit reporting agency or verifying your or your business's information against third party databases or other sources.</p>
          </section>

          <section className={styles.section}>
            <h2>Payment of Acceptance Fees</h2>
            <p className={styles.text}>By using the LocalPay service, Merchants agree to allow FinChain to periodically (i.e. weekly, monthly) withdraw an amount from their linked bank account that totals the fees accumulated from all transactions that have occurred in the prior period. If the linked bank account contains insufficient funds to cover the required fees at the time of payment, it is your responsibility to send FinChain the amount due or risk your account being suspended, temporarily disabled, or terminated.</p>
          </section>

          <section className={styles.section}>
            <h2>Taxpayer Identification Number and Withholding Tax</h2>
            <p className={styles.text}>We may request that you provide your tax identification number and/or a US tax form such as W-9 or W-8. If you do not provide us the requested information and documentation, you understand and agree that you may be subject to account limitations and federal and state withholding tax at the applicable rates on all US source income payments received. It is your responsibility as a Merchant to calculate and pay the required appropriate taxes.</p>
          </section>

          <section className={styles.section}>
            <h2>Using Promotional Offers</h2>
            <p className={styles.text}>We may make available functionality that allows business profiles to offer LocalPay users cash back rewards on qualifying purchases. For example, you may elect to offer buyers $5 cash back on a qualifying purchase of $25 or more. You must have a Merchant account in good standing to create an offer. By electing to create any offer, you agree to these terms.</p>

            <p className={styles.text}>In creating an offer, you will be able to stipulate the operative terms for the offer, i.e., the required minimum purchase amount, the amount of cash back to be provided, the date until which the offer is available to be redeemed, the maximum number of users who may redeem the offer, and by when a user must make the qualifying purchase.</p>

            <p className={styles.text}>You are solely responsible for configuring any offer you make and must honor all offers as made (including honoring offer redemptions in excess of your set maximum that occur due to the system limitations described above). In the event you terminate an offer prior to its original expiration date, users that have already saved the offer will still be able to redeem the offer per its original terms and you agree to honor all such offers. We will have no liability to you or any buyer based on any human or other error made in configuring an offer.</p>

            <p className={styles.text}>When you utilize this feature and a user who has saved the offer makes a qualifying purchase, you will receive the discounted purchase amount (subject to fees and any other withholdings as described on our Fees page and elsewhere in this User Agreement). Payments to you that are made by a LocalPay user redeeming one of your offers will be charged a promotional transaction fee in addition to the fee you pay for receiving Merchant account payments. Please see our Fees page for details. If a transaction to a buyer is refunded or reversed, there are no fees to make the refund, but the fees you originally paid as the seller will not be returned.</p>
          </section>

          <section className={styles.section}>
            <h2>Intellectual Property</h2>
            <h3>FinChain's Intellectual Property</h3>
            <p className={styles.text}>"FinChain," "LocalPay" and all logos, designs, artwork, page headers, button icons, scripts and service names related to our services are registered trademarks, trademarks or trade dress of FinChain or its licensors. You may not copy, imitate, modify or use them without our prior written consent. In addition, all page headers, custom graphics, button icons, and scripts are service marks, trademarks, and/or trade dress of FinChain. You may not copy, imitate, modify or use them without our prior written consent. You may not alter, modify or change these logos in any way, use them in a manner that is disparaging to FinChain or the LocalPay services, or display them in any manner that implies FinChain's sponsorship or endorsement.</p>

            <p className={styles.text}>All right, title and interest in and to the LocalPay websites, any content thereon, the LocalPay services, and all technology and any content created or derived from any of the foregoing is the exclusive property of FinChain and its licensors.</p>
          </section>

          <section className={styles.section}>
            <h2>License Grants, Generally</h2>
            <p className={styles.text}>If you are using our software such as an API, developer's toolkit or other software application, which may include software provided by or integrated with software, systems or services of our service providers, that you have downloaded or otherwise accessed through a web or mobile platform, then FinChain grants you a revocable, non-exclusive, non-sublicensable, non-transferable, royalty-free limited license to access and/or use our software in accordance with the documentation accompanying such software, including this User Agreement. This license grant applies to the software and all updates, upgrades, new versions and replacement software. You may not rent, lease or otherwise transfer your rights in the software to a third party. You must comply with the implementation, access and use requirements contained in all documentation accompanying the LocalPay services. If you do not comply with implementation, access and use requirements you agree you will be liable for all resulting damages suffered by you, us and/or third parties. We may update or discontinue any software upon notice to you. While we may have (1) integrated certain third party materials and technology into any web or other application, including its software, and/or (2) accessed and used certain third party materials and technology to facilitate providing you with the LocalPay services, you have not been granted and do not otherwise retain any rights in or to any such third party materials. You agree not to modify, alter, tamper with, repair, copy, reproduce, adapt, distribute, display, publish, reverse engineer, translate, disassemble, decompile or otherwise attempt to create any source code that is derived from the software or any third party materials or technology, or otherwise create any derivative works from any of the software or third party materials or technology. You acknowledge that all rights, title and interest to our software are owned by FinChain and any third party materials integrated therein are owned by our third party service providers. Any other third party software application you use on the LocalPay websites is subject to the license you agreed to with the third party that provides you with this software. You acknowledge that FinChain does not own, control nor have any responsibility or liability for any such third party software application you elect to use on any of our websites, software and/or in connection with the LocalPay services.</p>
          </section>

          <section className={styles.section}>
            <h2>License Grant from You to FinChain; Intellectual Property Warranties</h2>
            <p className={styles.text}>We do not claim ownership of the content that you provide, upload, submit or send to us. When you provide content to us or post content using LocalPay services, you grant us, our affiliates and our users (including parties that we work with) a non-exclusive, perpetual, irrevocable, royalty-free, fully paid-up, transferable, sublicensable and worldwide license to duplicate, copy, display, publish, upload, perform, distribute, modify, create derivative works, delete, post, forward to others and otherwise use your content and associated intellectual property and publicity rights to help us improve, operate, promote, advertise and market our current services and develop new ones, in any form, language, medium or technology now known or later developed. We will not compensate you for any content.</p>

            <p className={styles.text}>You further represent and warrant that (1) you own or otherwise have all the licenses, rights, consents and permissions in your content necessary to make the above license and grant, (2) your content is accurate and (3) your content and our use of your content do not and will not infringe any intellectual property, privacy, proprietary or publicity rights, or otherwise violate confidentiality obligations, these terms or applicable law. Further, you agree to waive your moral rights, and promise that you will not to assert any rights in your content against us.</p>
          </section>

          <section className={styles.section}>
            <h2>Intellectual Property Infringement</h2>
            <p className={styles.text}>We require that LocalPay account holders comply with relevant intellectual property laws, including copyright and trademark laws. We may, in appropriate circumstances and at our discretion, limit or terminate the use of our products or services for users who use or publish content on the LocalPay platform that is subject to intellectual property rights claims.</p>

            <p className={styles.text}>We may terminate an infringer's access to LocalPay products or services in our sole discretion and we have a policy to terminate accounts of repeat infringers.</p>
          </section>

          <section className={styles.section}>
            <h2>Miscellaneous</h2>
            <h3>Assignment</h3>
            <p className={styles.text}>You may not transfer or assign any rights or obligations you have under this User Agreement without our prior written consent. We may transfer or assign this User Agreement or any right or obligation under this User Agreement at any time.</p>

            <h3>Business Days</h3>
            <p className={styles.text}>"Business Day(s)" means Monday through Friday, excluding holidays when LocalPay's offices are not considered open for business during U.S. Federal Holidays. If a holiday falls on a Saturday, we observe the holiday on the prior Friday. If the holiday falls on a Sunday, we observe the holiday on the following Monday.</p>

            <h3>Consumer Fraud Warning</h3>
            <p className={styles.text}>We're always looking for ways to help keep you even more secure. So stay on the lookout for some of these common scams:</p>
            <ul className={styles.sectionList}>
              <li>Seller Scam: a scammer sends you a fraudulent payment for goods or services you provide outside of LocalPay.</li>
              <li>Accidental Payment: a scammer sends you a fraudulent payment, claims it was accidental, and asks that you return their money.</li>
            </ul>
            <p className={styles.text}>Always use common sense when sending money. If something sounds too good to be true, it probably is. Only send money for yourself and not for others. Please let us know immediately if you believe someone is trying to scam or defraud you by writing an email to contact@LocalPay.com.</p>

            <h3>Dormant Accounts</h3>
            <p className={styles.text}>If you do not log in to your personal account for two or more years, we may close your LocalPay account.</p>

            <h3>Governing Law</h3>
            <p className={styles.text}>You agree that, except to the extent inconsistent with or preempted by federal law and except as otherwise stated in this User Agreement, the laws of the State of Delaware, without regard to principles of conflict of laws, will govern this User Agreement and any claim or dispute that has arisen or may arise between you and FinChain regarding your use of the LocalPay services.</p>

            <h3>Identity Authentication</h3>
            <p className={styles.text}>You authorize us, directly or through third parties, to make any inquiries we consider necessary to verify your identity. This may include:</p>
            <ul className={styles.sectionList}>
              <li>asking for further information, such as date of birth, a social security or taxpayer identification number, physical address and other information that will allow us to reasonably identify you;</li>
              <li>requiring steps to confirm ownership of an email address, phone number or financial instrument;</li>
              <li>ordering a credit report from a credit reporting agency, or verifying your information against third party databases or through other sources; or</li>
              <li>requiring you to provide a driver's license or other identifying documents.</li>
            </ul>

            <p className={styles.text}>Anti-money laundering and counter-terrorism financing laws may require that we verify the required identifying information if you use certain LocalPay services. We reserve the right to close, suspend, or limit access to your LocalPay account and/or the LocalPay services in the event that, after reasonable enquiries, we are unable to obtain information required to verify your identity.</p>

            <h3>Privacy</h3>
            <p className={styles.text}>Protecting your privacy is very important to us. Please review our Privacy Policy in order to better understand our commitment to maintaining account holder privacy, as well as our use and disclosure of account holder information.</p>

            <h3>State Disclosures</h3>
            <p className={styles.text}>In addition to reporting complaints about the LocalPay services directly to us as described above, if you are a California resident, you may report complaints to the California Department of Financial Protection & Innovation by mail at Department of Financial Protection & Innovation, Consumer Services, 2101 Arena Boulevard, Sacramento, CA 95834, or online through its website at https://dfpi.ca.gov/file-a-complaint/. The California Department of Financial Protection & Innovation offers assistance with its complaint form by phone at 866-275-2677. If you are a California resident, you have a right to receive communications about your LocalPay account and the LocalPay services by email. To make such a request, send an email to LocalPay at contact@LocalPay.com, include your email address, and your request for that information by email.</p>

            <p className={styles.text}>Florida residents may contact the Florida Department of Financial Services in writing at 200 East Gaines Street, Tallahassee, Florida, 32399, or by telephone at 1-800-342-2762.</p>

            <h3>Third Party Providers</h3>
            <p className={styles.text}>The LocalPay app works on an application linked to a particular device and operating system, such as Apple's iOS operating system. Your use of the LocalPay services may be subject to separate agreements you may enter into with your mobile device operating system provider (e.g., Apple®, Google® or Microsoft®), your mobile device manufacturer (e.g., Apple®, Samsung®), your mobile service carrier (e.g., AT&T® or Verizon®), and other parties involved in providing your mobile device service, which we collectively refer to as "Covered Third Parties." You agree that you will comply with all applicable third-party terms of agreement when using the LocalPay Services. We are not a party to those agreements and we have no responsibility for the products and services provided by third parties. You acknowledge and agree that this agreement is between you and FinChain, not with any Covered Third Party. You acknowledge and agree that we are solely responsible for the LocalPay services and for providing maintenance and support services for the LocalPay services.</p>

            <p className={styles.text}>Covered Third Parties have no warranty obligations whatsoever with respect to the LocalPay Services and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure of the LocalPay services to conform to any warranty provided by us, if any, will be our sole responsibility.</p>

            <p className={styles.text}>We, not any Covered Third Parties, are responsible for addressing any claims relating to the LocalPay services, including, but not limited to: (i) product liability claims; (ii) any claim that the LocalPay Services fail to conform to any applicable legal or regulatory requirement; (iii) claims arising under consumer protection, privacy, or similar legislation; and (iv) intellectual property claims.</p>

            <p className={styles.text}>If you or are using the LocalPay Services on an Apple device, you acknowledge and agree that Apple, and Apple's subsidiaries, are third party beneficiaries of this User Agreement, and that Apple will have the right (and will be deemed to have accepted the right) to enforce this agreement against you as a third party beneficiary. Such rights may also accrue to other handset manufacturers and operating systems which participate in the LocalPay services.</p>

            <p className={styles.text}>If you or are using the LocalPay Services on an Google Android device, you acknowledge and agree that Google, and Google's subsidiaries, the manufacturer of the device, are third party beneficiaries of this User Agreement, and that Google will have the right (and will be deemed to have accepted the right) to enforce this agreement against you as a third party beneficiary. Such rights may also accrue to other handset manufacturers and operating systems which participate in the LocalPay services.</p>

            <h3>Unlawful Internet Gambling Notice</h3>
            <p className={styles.text}>Restricted transactions as defined in Federal Reserve Regulation GG are prohibited from being processed through your LocalPay account or your relationship with FinChain. Restricted transactions generally include, but are not limited to, transactions in which credit, electronic fund transfers, checks, or drafts are knowingly accepted by gambling businesses in connection with unlawful Internet gambling.</p>

            <h3>Your Use of Information; Data Protection Laws</h3>
            <p className={styles.text}>If you receive information about any LocalPay customer, you must keep the information confidential and only use it in connection with the LocalPay services. You may not disclose or distribute any information about LocalPay users to a third party or use the information for marketing purposes unless you receive that user's express consent to do so. You may not send unsolicited emails to a LocalPay customer or use the LocalPay services to collect payments for sending, or assist in sending, unsolicited emails to third parties.</p>

            <p className={styles.text}>The privacy and data protection laws that may apply include any associated regulations, regulatory requirements and codes of practice applicable to the provision of the services described in this agreement.</p>

            <p className={styles.text}>In complying with such laws, you will:</p>
            <ul className={styles.sectionList}>
              <li>implement and maintain all appropriate security measures for the processing of personal data; and</li>
              <li>not knowingly do anything or permit anything to be done which might lead to a breach of any privacy data protection laws.</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}