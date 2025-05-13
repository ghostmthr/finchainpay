import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.PrivacyPolicyPage}>
      <Navigation />
      <main className={styles.main}>

        <div className={styles.content}>
          <h1 className={styles.sectionTitle}>LocalPay Privacy Policy</h1>

          <section className={styles.section}>
            <p className={styles.text}>FinChain, LLC, a Delaware Corporation, (“FinChain,” “we” or “us”) provides an online and mobile service, the LocalPay website, www.LocalPay.com (the “Site”), computer mobile applications (“App” or “Apps”), and programs hosted by or on behalf of FinChain and related services (together with the Site and the Apps, the “Service”). The terms “you” and “user” mean all individuals and entities that access the Service.</p>
            <p className={styles.text}>This Privacy Policy describes how we use Personal Information (defined below) that we collect from you as part of you using our service. For EU users, please see our special provisions under the “Special Information for EU Users” section below. This Privacy Policy also describes the choices available to you regarding our use of your Personal Information and how you can access and update this information, and what information you provide that we will retain even if you decide to delete the App or stop using the Service. Our Privacy Policy is not a contract, and it does not create any legal rights or obligations.</p>
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
            <ul className={styles.sectionlist}>
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
            <ul className={styles.sectionlist}>
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
            <p className={styles.text}>FinChain reserves the exclusive right to change, modify, or alter the terms of this Privacy Policy. The most current version of this policy will govern our use of your information. Continued access and use of the FinChain services after changes to our Privacy Policy occur indicates that you agree to be bound by the revised Privacy Policy.Y</p>
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
          <ul className={styles.sectionlist}>
          <li>You have the right to request an explanation of the information that FinChain has about you and how FinChain uses that information.</li>
            <li>You also have the right to receive a copy of the information that FinChain collects about you if collected on the basis of consent or because FinChain requires the information to provide the services that you request.</li>
          </ul>

          <p className={styles.text}>Correction</p>
          <ul className={styles.sectionlist}>
          <li>If FinChain has information about you that you believe is inaccurate, you have the right to request a correction of your information. Please see the section titled "Explanation, Copies, and Correction" below for more information on correcting, or requesting correction of, your information.</li>
          </ul>

          <p className={styles.text}>Deletion</p>
          <ul className={styles.sectionlist}>
          <li>Users may request deletion of their accounts at any time. Users may request via FinChain's website at <a href="mailto:privacy@LocalPay.com">LocalPay.com</a>. We may retain certain information about you as required by law and for legitimate business purposes permitted by law.</li>
            <li>Please see the "Data Retention & Deletion" section above for more information regarding FinChain's retention and deletion practices.</li>
          </ul>

          <p className={styles.text}>Objections and complaints</p>
          <ul className={styles.sectionlist}>
          <li>Users in the EU have the right to object to FinChain's processing of personal data, including for marketing purposes based on profiling and/or automated decision making. FinChain may continue to process your information notwithstanding the objection to the extent permitted under GDPR.</li>
            <li>You may also submit questions, comments, or complaints to FinChain directly at:</li>
          </ul>
          <p className={styles.text}>
            ATTN: Privacy Officer<br />
            FinChain, LLC<br />
            228 Hamilton Avenue, 3rd Floor<br />
            Palo Alto, CA 94301<br />
            ‍<a href="mailto:privacy@LocalPay.com">privacy@LocalPay.com</a>
          </p>

          <h3 className={styles.sectionTitle}>B. Grounds for Processing</h3>
          <p className={styles.text}>The GDPR requires that companies processing the personal data of EU users do so on the basis of specific legal grounds. As described below, FinChain processes the information of EU users based on one or more of the grounds specified under the GDPR:</p>

          <p className={styles.text}>1. The processing is necessary to provide the services and features you request FinChain must collect and use certain information in order to provide its services. This includes:</p>
          <ul className={styles.sectionlist}>
          <li>User profile information that is necessary to establish and maintain your account, including to verify your identity; enable communications with you about the products you order from us; orders and accounts; and to enable you to make payments.</li>
            <li>Integration into your and/or licensed third party's real-time financial services.</li>
            <li>Usage information, which is necessary to maintain, optimize, and enhance FinChain's services, including to determine, sometimes in combination with other information, incentives, etc.</li>
            <li>Collection and use of this information is a requirement for using FinChain's website and services.</li>
          </ul>

          <p className={styles.text}>2. The processing is necessary to protect the vital interests of our users or of others</p>
          <p className={styles.text}>FinChain may process personal information, including disclosing data with law enforcement authorities in case of threats to the safety of users or of others.</p>

          <p className={styles.text}>3. The processing is necessary for FinChain's legitimate interests</p>
          <p className={styles.text}>FinChain collects and uses personal information to the extent necessary for its legitimate interests. This includes collecting and using information:</p>
          <ul className={styles.sectionlist}>
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

          <p className={styles.text}>5. The processing is necessary to fulfill FinChain's legal obligations</p>
          <p className={styles.text}>FinChain is subject to legal requirements in the jurisdictions in which it operates that require us to collect, process, disclose and retain your personal data. For example, FinChain is subject to laws and regulations in many cities and countries that require it to collect and retain information about the FinChain products, to retain such information for extended periods of time, and to provide copies of such information to governmental or other authorities.</p>
          <p className={styles.text}>FinChain uses your information to comply with such laws to the extent they apply to your use of the FinChain apps. FinChain may also share information with law enforcement, or requests by third parties pursuant to legal processes. For more information about such sharing, please see Third-Party Sites and Services, above.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Consent</h2>
          <p className={styles.text}>FinChain may collect and use your information on the basis of your consent. You may revoke your consent at any time. If you revoke your consent, you will not be able to use any service or feature that requires the collection or use of the information we collected or used on the basis of consent.</p>

          <p className={styles.text}>FinChain relies on consent in connection with data collections or uses that are necessary to enhance the user experience, to enable optional services or features, or to communicate with you. If you are an EU user, the following types of data collection or uses are done on the basis of your consent.</p>
          <ul className={styles.sectionlist}>
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
          <ul className={styles.sectionlist}>
          <li>device permissions</li>
            <li>marketing opt-outs</li>
          </ul>

          <p className={styles.text}>You may also request that FinChain provide you with explanation, copies, or correction of your data.</p>

          <h3 className={styles.sectionTitle}>A. DEVICE PERMISSIONS</h3>
          <p className={styles.text}>Most mobile platforms (iOS, Android, etc.) have defined certain types of device data that websites cannot access without your consent. And these platforms have different permission systems for obtaining your consent. The iOS platform will alert you the first time the FinChain website wants permission to access certain types of data and will let you consent (or not consent) to that request. Android devices will notify you of the permissions that the FinChain website seeks before you first use the website, and your use of the website constitutes your consent.</p>

          <h3 className={styles.sectionTitle}>B. EXPLANATIONS, COPIES, AND CORRECTION</h3>
          <p className={styles.text}>You may request that FinChain:</p>
            <ul className={styles.sectionlist}>
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

        <div className={styles.lastUpdated}>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
    </div>
      </main >

    <Footer />
    </div >
  );
};