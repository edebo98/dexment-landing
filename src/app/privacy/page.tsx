import type { Metadata } from "next";
import { SiteNav } from "@/components/dexment/nav";
import { SiteFooter } from "@/components/dexment/footer";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Dexment collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#main">
        Skip to content
      </a>

      <SiteNav />

      <main id="main">
        <header className={styles.hero}>
          <div className={styles.wrap}>
            <div className={styles.head}>
              <div className={styles.eyebrow}>Legal</div>
              <h2>Privacy Policy</h2>
              <p>Effective date: 18 August 2026</p>
              <p>Last updated: 18 August 2026</p>
            </div>
          </div>
        </header>

        <section>
          <div className={styles.wrap}>
            <div className={styles.legalBody}>
              <h2 id="introduction">1. Introduction</h2>
              <p>
                Dexment (&quot;Dexment&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates a connected
                project and professional-services platform. This policy explains how we handle personal information
                collected through our website at the pre-launch stage, when the only personal information we gather
                is what you provide when joining one of our waitlists.
              </p>
              <p>
                We are committed to handling your information lawfully, transparently, and only for the purposes
                described here.
              </p>
              <p>
                This policy is issued by <strong>Dexment Ltd</strong>, a company registered in the Federal Republic
                of Nigeria with its registered office at 101 Morinfolu Street, Akoka, Lagos State 100213, Nigeria.
                Dexment Ltd is the data controller responsible for the information described below.
              </p>
              <p>
                <strong>Scope.</strong> This policy covers the Dexment website only. It does not cover the Dexment
                application, which is not yet publicly available. When the application launches, a separate and
                more detailed policy will govern the project data, documents, financial records, and communications
                processed within it.
              </p>

              <h2 id="information-we-collect">2. Information we collect</h2>
              <p>We operate two waitlists and collect different information for each.</p>

              <h3 id="client-waitlist">2.1 Client and project team waitlist</h3>
              <table>
                <thead>
                  <tr>
                    <th>Information</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Full name</td>
                    <td>To address you correctly in communications</td>
                  </tr>
                  <tr>
                    <td>Email address</td>
                    <td>To notify you when early access opens</td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td>To plan regional rollout and understand where demand sits</td>
                  </tr>
                  <tr>
                    <td>Industry</td>
                    <td>To prioritise features for the sectors our users work in</td>
                  </tr>
                  <tr>
                    <td>Role (&quot;I am a&quot;)</td>
                    <td>To tailor onboarding to how you would use the platform</td>
                  </tr>
                </tbody>
              </table>

              <h3 id="provider-waitlist">2.2 Professional service provider waitlist</h3>
              <table>
                <thead>
                  <tr>
                    <th>Information</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Full name or business name</td>
                    <td>To identify you as a prospective provider</td>
                  </tr>
                  <tr>
                    <td>Email address</td>
                    <td>To contact you about verification and onboarding</td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td>To plan where the provider network launches first</td>
                  </tr>
                  <tr>
                    <td>Service category</td>
                    <td>To understand the mix of expertise available at launch</td>
                  </tr>
                </tbody>
              </table>

              <h3 id="automatic-information">2.3 Information collected automatically</h3>
              <p>
                Our hosting provider records standard technical information when you visit the site, including IP
                address, browser type, and pages requested. This is generated by the infrastructure that serves the
                website and is used for security and reliability purposes, not to build a profile of you.
              </p>
              <p>
                We do <strong>not</strong> use advertising cookies, tracking pixels, or third-party analytics that
                follow you across other websites.
              </p>

              <h3 id="third-party-content">2.4 Third-party content</h3>
              <p>
                Our website loads typefaces from Google Fonts. When your browser requests these files, your IP
                address is transmitted to Google. If you prefer to avoid this, most browsers allow font downloads to
                be blocked, though the site&apos;s appearance will change.
              </p>

              <h2 id="legal-basis">3. Why we process your information, and our legal basis</h2>
              <p>We use the information you provide to:</p>
              <ul>
                <li>Notify you when early access to Dexment opens</li>
                <li>Contact prospective service providers about verification and onboarding</li>
                <li>Understand the size, geography, and sector mix of demand so we can plan our launch</li>
                <li>Respond to questions and requests you send us</li>
              </ul>
              <p>
                As a Nigerian company, our processing is governed principally by the{" "}
                <strong>Nigeria Data Protection Act 2023 (NDPA)</strong>. Our lawful basis is your{" "}
                <strong>consent</strong>, freely and specifically given when you voluntarily submit a waitlist form.
              </p>
              <p>
                Where the <strong>General Data Protection Regulation (GDPR)</strong> applies, because you are in the
                European Economic Area or the United Kingdom, our legal basis is likewise your consent under Article
                6(1)(a). You may withdraw it at any time (see Section 8).
              </p>
              <p>
                Where the <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong>{" "}
                applies in Canada, we rely on your express consent, obtained at the point of collection.
              </p>
              <p>
                <strong>
                  We do not sell your personal information, and we do not share it with advertisers or data brokers.
                </strong>
              </p>

              <h2 id="marketing-communications">4. Marketing communications</h2>
              <p>
                We will email you only about Dexment&apos;s launch and matters directly connected to the waitlist
                you joined. We do not send unrelated promotional material, and we do not pass your address to
                third parties for their own marketing.
              </p>
              <p>
                Every email we send includes a means of unsubscribing. Unsubscribing removes you from the waitlist
                entirely.
              </p>

              <h2 id="data-sharing">5. Who has access to your information</h2>
              <p>
                We do not sell, rent, or trade personal information. We share it only with service providers who
                process it on our behalf, under contract, and only to the extent needed to run the website:
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Provider</th>
                    <th>Role</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Supabase</td>
                    <td>Database hosting, stores waitlist submissions</td>
                    <td>East US (North Virginia)</td>
                  </tr>
                  <tr>
                    <td>Vercel</td>
                    <td>Website hosting and content delivery</td>
                    <td>Global edge network, primary region United States</td>
                  </tr>
                  <tr>
                    <td>Google (Fonts)</td>
                    <td>Serves typefaces, receives IP address only</td>
                    <td>Global</td>
                  </tr>
                </tbody>
              </table>
              <p>
                We may also disclose information where required by law, court order, or a valid request from a
                competent authority, or where necessary to establish or defend legal claims.
              </p>

              <h2 id="international-transfers">6. International transfers</h2>
              <p>
                Dexment Ltd is established in Nigeria, but the infrastructure that runs this website is operated by
                providers based outside Nigeria. Your information is therefore transferred to and stored on servers
                in other jurisdictions, including the United States.
              </p>
              <p>
                Under <strong>section 41 of the NDPA</strong>, we transfer personal data outside Nigeria only where
                the recipient is subject to a legal instrument, contract, or binding arrangement affording an
                adequate level of protection. Our agreements with the providers listed in Section 5 include such
                terms.
              </p>
              <p>
                Where the GDPR applies, we rely on Standard Contractual Clauses approved by the European Commission,
                together with the technical safeguards described in Section 9.
              </p>
              <p>If you would like details of the safeguards applying to a particular transfer, email support@dexment.com.</p>

              <h2 id="data-retention">7. How long we keep your information</h2>
              <p>We keep waitlist information until the earliest of the following:</p>
              <ul>
                <li>
                  <strong>You ask us to delete it</strong>. We action deletion requests within 30 days
                </li>
                <li>
                  <strong>You unsubscribe</strong>. Your record is removed
                </li>
                <li>
                  <strong>24 months from collection</strong>, if Dexment has not launched by then, or if you have
                  not engaged with any communication from us
                </li>
              </ul>
              <p>
                When Dexment launches and you create an account, your waitlist record is either deleted or merged
                into your account, and the application&apos;s own privacy policy governs it from that point.
              </p>
              <p>
                Technical logs generated by our hosting providers are retained according to their own schedules,
                typically no more than 30 days.
              </p>

              <h2 id="your-rights">8. Your rights</h2>
              <p>Depending on where you live, you have some or all of the following rights:</p>
              <ul>
                <li>
                  <strong>Access</strong>: obtain a copy of the personal information we hold about you
                </li>
                <li>
                  <strong>Rectification</strong>: have inaccurate or incomplete information corrected
                </li>
                <li>
                  <strong>Erasure</strong>: have your information deleted
                </li>
                <li>
                  <strong>Restriction</strong>: ask us to limit how we use your information
                </li>
                <li>
                  <strong>Portability</strong>: receive your information in a structured, machine-readable format
                </li>
                <li>
                  <strong>Objection</strong>: object to processing carried out on the basis of legitimate interests
                </li>
                <li>
                  <strong>Withdraw consent</strong>: at any time, without affecting the lawfulness of processing
                  before withdrawal
                </li>
              </ul>
              <p>
                To exercise any of these rights, email <strong>support@dexment.com</strong>. We respond within 30
                days. We may ask you to confirm your identity before acting on a request, to ensure we do not
                disclose your information to someone else.
              </p>
              <p>Exercising these rights is free of charge. We will not treat you differently for doing so.</p>

              <h2 id="data-security">9. How we protect your information</h2>
              <ul>
                <li>All traffic to and from our website is encrypted in transit using TLS</li>
                <li>
                  Waitlist information is stored in a database protected by row-level security policies, which
                  permit only the submission of new entries from the website and prevent public reading of stored
                  records
                </li>
                <li>Access to stored information is limited to Dexment personnel who need it</li>
                <li>Credentials and access keys are held in managed secret storage, not in our source code</li>
              </ul>
              <p>
                No system is completely secure. While we take these measures seriously, we cannot guarantee absolute
                security, and you submit information to us at your own risk.
              </p>

              <h2 id="automated-decision-making">10. Automated decision-making</h2>
              <p>
                We do not use your information for automated decision-making or profiling that produces legal or
                similarly significant effects.
              </p>

              <h2 id="children">11. Children</h2>
              <p>
                Dexment is a business platform intended for adults. We do not knowingly collect personal information
                from anyone under 18. If you believe a child has submitted information to us, email
                support@dexment.com and we will delete it.
              </p>

              <h2 id="policy-changes">12. Changes to this policy</h2>
              <p>
                We may update this policy as Dexment develops, particularly when the application launches. The
                effective date at the top reflects the most recent version. Where changes are material, we will
                notify waitlist members by email before they take effect.
              </p>

              <h2 id="contact">13. Contact and complaints</h2>
              <p>For any privacy question or request:</p>
              <p>
                <strong>Email:</strong> support@dexment.com
                <br />
                <strong>Postal:</strong> 101 Morinfolu Street, Akoka, Lagos State 100213, Nigeria
              </p>
              <p>
                If you are not satisfied with our response, you may lodge a complaint with your data protection
                authority:
              </p>
              <ul>
                <li>
                  <strong>Nigeria</strong>: Nigeria Data Protection Commission (NDPC), our lead supervisory authority
                </li>
                <li>
                  <strong>Canada</strong>: Office of the Privacy Commissioner of Canada
                </li>
                <li>
                  <strong>United Kingdom</strong>: Information Commissioner&apos;s Office (ICO)
                </li>
                <li>
                  <strong>European Economic Area</strong>: the supervisory authority in your country of residence
                </li>
              </ul>
              <p>
                We would appreciate the opportunity to address your concerns directly before you approach a
                regulator.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
