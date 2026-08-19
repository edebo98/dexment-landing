"use client";

import { cn } from "@/lib/utils";
import { Waitlist } from "@/components/sections/waitlist";
import { ProviderWaitlist } from "@/components/sections/provider-waitlist";
import { SiteNav } from "@/components/dexment/nav";
import { SiteFooter } from "@/components/dexment/footer";
import styles from "@/app/page.module.css";

export function DexmentLanding() {
  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#main">
        Skip to content
      </a>

      <SiteNav />

      <main id="main">
        <header className={styles.hero}>
          <div className={cn(styles.wrap, styles.heroGrid)}>
            <div>
              <div className={styles.eyebrow}>Plan. Track. Deliver.</div>
              <h1>Powering projects, connecting expertise.</h1>
              <p>
                Dexment is a connected project and professional-services platform that brings clients, project
                managers, consultants, vendors, trades and verified professionals into one transparent workspace.
              </p>
              <div className={styles.actions}>
                <a className={cn(styles.btn, styles.dark)} href="/#contact">
                  Join the Waitlist
                </a>
                <a className={cn(styles.btn, styles.yellow)} href="/#psp-signup">
                  Join the Provider Waitlist
                </a>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <img
                src="/images/hero-app-mockup.webp"
                alt="Dexment on desktop and mobile"
                width={1000}
                height={882}
                className={styles.heroImg}
              />
              <div className={styles.statChips}>
                <div className={styles.chip}>
                  <span className={styles.chipLabel}>PROJECT</span>
                  <span className={styles.chipValue}>62% complete</span>
                </div>
                <div className={styles.chip}>
                  <span className={styles.chipLabel}>BUDGET</span>
                  <span className={styles.chipValue}>63% used</span>
                </div>
                <div className={styles.chip}>
                  <span className={styles.chipLabel}>STATUS</span>
                  <span className={cn(styles.chipValue, styles.chipStatus)}>&#9679; On track</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="solutions">
          <div className={styles.wrap}>
            <div className={styles.head}>
              <div className={styles.eyebrow}>One platform. Multiple industries.</div>
              <h2>Manage the work, not just the project.</h2>
              <p>
                Dexment starts with construction, but its workflow is built to support consulting, events, technical
                services, property, facilities and other professional engagements.
              </p>
            </div>
            <div className={styles.grid4}>
              <div className={styles.card}>
                <div className={styles.icon}>01</div>
                <h3>Construction</h3>
                <p>Builds, renovations, maintenance, trades, budgets, schedules, drawings, site records and closeout.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.icon}>02</div>
                <h3>Consulting</h3>
                <p>Scopes, deliverables, approvals, reports, professional engagements and client collaboration.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.icon}>03</div>
                <h3>Events</h3>
                <p>Teams, suppliers, schedules, budgets, tasks, deliverables and client communication.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.icon}>04</div>
                <h3>Technical Services</h3>
                <p>Field jobs, service requests, inspections, documentation and client updates.</p>
              </div>
            </div>
            <div className={styles.grid4}>
              <div className={styles.card}>
                <div className={styles.icon}>05</div>
                <h3>Property &amp; Facilities</h3>
                <p>Maintenance, upgrades, inspections, vendors, assets and recurring work.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.icon}>06</div>
                <h3>Design &amp; Professional</h3>
                <p>Architecture, engineering, design, marketing and specialized services.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.icon}>07</div>
                <h3>Operations</h3>
                <p>Turn scattered requests and conversations into accountable, trackable work.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.icon}>08</div>
                <h3>Future Services</h3>
                <p>A flexible platform designed to expand with the professional ecosystem.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="tools" className={styles.tools}>
          <div className={styles.wrap}>
            <div className={styles.head}>
              <div className={styles.eyebrow}>The Dexment toolkit</div>
              <h2>Every core tool your team needs &mdash; connected.</h2>
              <p>
                From the first request to final closeout, Dexment keeps work, money, documents, communication and
                evidence connected to the project.
              </p>
            </div>
            <div className={styles.grid3}>
              <div className={cn(styles.card, styles.toolcard)}>
                <div className={styles.icon}>01</div>
                <h3>Project Dashboard</h3>
                <p>See progress, budget, approvals, risks, activity and outstanding actions at a glance.</p>
              </div>
              <div className={cn(styles.card, styles.toolcard)}>
                <div className={styles.icon}>02</div>
                <h3>Task Management</h3>
                <p>Create, assign, prioritize and track tasks, milestones, dependencies and completion.</p>
              </div>
              <div className={cn(styles.card, styles.toolcard)}>
                <div className={styles.icon}>03</div>
                <h3>Schedule Builder &amp; Tracker</h3>
                <p>Build project schedules, set dates and milestones, track actual progress and flag delays.</p>
              </div>
              <div className={cn(styles.card, styles.toolcard)}>
                <div className={styles.icon}>04</div>
                <h3>Budget Creation &amp; Management</h3>
                <p>Create budget lines, monitor committed and actual costs, track changes and maintain live visibility.</p>
              </div>
              <div className={cn(styles.card, styles.toolcard)}>
                <div className={styles.icon}>05</div>
                <h3>Expenses &amp; Invoicing</h3>
                <p>Log expenses, attach receipts, connect costs to budget lines and create or track invoices.</p>
              </div>
              <div className={cn(styles.card, styles.toolcard)}>
                <div className={styles.icon}>06</div>
                <h3>Contract Management</h3>
                <p>Create, store, share and track contracts, agreements, approvals, changes and signed records.</p>
              </div>
              <div className={cn(styles.card, styles.toolcard)}>
                <div className={styles.icon}>07</div>
                <h3>Document Storage &amp; Distribution</h3>
                <p>Centralize drawings, specifications, reports, contracts and files with controlled sharing and organization.</p>
              </div>
              <div className={cn(styles.card, styles.toolcard)}>
                <div className={styles.icon}>08</div>
                <h3>Photo Capture &amp; Viewing</h3>
                <p>Upload and save project photos with context so progress and site evidence never disappear in chat.</p>
              </div>
              <div className={cn(styles.card, styles.toolcard)}>
                <div className={styles.icon}>09</div>
                <h3>In-App Messaging</h3>
                <p>Message clients, PMs, consultants, workers and vendors directly inside the relevant project.</p>
              </div>
              <div className={cn(styles.card, styles.toolcard)}>
                <div className={styles.icon}>10</div>
                <h3>Requests for Information</h3>
                <p>Create, assign, respond to and close RFIs and information requests with a traceable record.</p>
              </div>
              <div className={cn(styles.card, styles.toolcard)}>
                <div className={styles.icon}>11</div>
                <h3>Reports &amp; Insights</h3>
                <p>Generate project reports from live information &mdash; progress, costs, tasks, documents and activity.</p>
              </div>
              <div className={cn(styles.card, styles.toolcard)}>
                <div className={styles.icon}>12</div>
                <h3>Approvals &amp; Notifications</h3>
                <p>Route decisions and approvals while keeping stakeholders alerted to changes, risks and deadlines.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.darkSec}>
          <div className={styles.wrap}>
            <div className={styles.head}>
              <div className={styles.eyebrow}>Connected project intelligence</div>
              <h2>Stop managing information in separate places.</h2>
              <p>
                Dexment connects the evidence behind a project &mdash; costs, schedules, tasks, photos, documents,
                contracts, conversations and approvals &mdash; so everyone works from the same picture.
              </p>
            </div>
            <div className={styles.grid3}>
              <div className={styles.card}>
                <h3>Live Cost Visibility</h3>
                <p>Every expense and receipt can be tied back to the right budget line, helping teams spot variance before it becomes a surprise.</p>
              </div>
              <div className={styles.card}>
                <h3>One Project Record</h3>
                <p>Documents, photos, approvals, contracts and activity stay organized inside the project rather than scattered across email, WhatsApp and paper.</p>
              </div>
              <div className={styles.card}>
                <h3>Evidence, Not Guesswork</h3>
                <p>Clients and project teams can see progress, decisions and records in context &mdash; building accountability into the workflow.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="psp" className={styles.psp}>
          <div className={cn(styles.wrap, styles.pspGrid)}>
            <div>
              <div className={styles.eyebrow}>Get discovered. Win more work.</div>
              <h2 className={styles.pspTitle}>Connect with clients who need your expertise.</h2>
              <p className={styles.pspLead}>
                Dexment helps qualified service providers get discovered by clients looking for trusted expertise.
                Build your profile, submit credentials for verification, showcase your services and experience, and
                manage opportunities from first contact through project delivery.
              </p>
              <ul className={styles.checks}>
                <li>Build a verified profile that strengthens client trust</li>
                <li>Get discovered by clients searching by service, expertise and location</li>
                <li>Receive and respond to relevant project opportunities</li>
                <li>Communicate directly with prospective clients</li>
                <li>Manage scopes, documents, approvals and deliverables in one place</li>
              </ul>
              <a className={cn(styles.btn, styles.dark)} href="/#psp-signup">
                Join the Provider Waitlist
              </a>
            </div>
            <img
              src="/images/psp-app-mockup.webp"
              alt="Dexment PSP network on mobile"
              width={360}
              height={794}
              className={styles.pspImg}
            />
          </div>
        </section>

        <section id="workflow">
          <div className={styles.wrap}>
            <div className={styles.head}>
              <div className={styles.eyebrow}>How Dexment works</div>
              <h2>From request to delivery.</h2>
              <p>Whether it is construction, consulting, an event or a technical job, the workflow stays connected.</p>
            </div>
            <div className={styles.flow}>
              <div className={styles.step}>
                <b>01</b>
                <h3>Create</h3>
                <p>Start a project or service request.</p>
              </div>
              <div className={styles.step}>
                <b>02</b>
                <h3>Connect</h3>
                <p>Invite your team or find a PSP/vendor.</p>
              </div>
              <div className={styles.step}>
                <b>03</b>
                <h3>Plan</h3>
                <p>Set scope, budget, schedule and responsibilities.</p>
              </div>
              <div className={styles.step}>
                <b>04</b>
                <h3>Collaborate</h3>
                <p>Message, share, approve and track work.</p>
              </div>
              <div className={styles.step}>
                <b>05</b>
                <h3>Deliver</h3>
                <p>Complete, report and close out with a clear record.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.darkSec}>
          <div className={styles.wrap}>
            <div className={styles.head}>
              <div className={styles.eyebrow}>Built for every role</div>
              <h2>One workspace. Different views.</h2>
            </div>
            <div className={styles.grid4}>
              <div className={styles.card}>
                <h3>Clients</h3>
                <p>Oversee projects, review costs, approve requests and see progress in real time.</p>
              </div>
              <div className={styles.card}>
                <h3>Project Managers</h3>
                <p>Control tasks, schedules, budgets, contracts, teams, documents and project communication.</p>
              </div>
              <div className={styles.card}>
                <h3>Workers &amp; SMEs</h3>
                <p>Track assigned work, record expenses, upload evidence and collaborate with the project team.</p>
              </div>
              <div className={styles.card}>
                <h3>Vendors &amp; PSPs</h3>
                <p>Receive requests, manage orders or engagements, communicate and submit invoices and deliverables.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta} id="contact">
          <div className={cn(styles.wrap, styles.ctaIn)}>
            <div>
              <div className={styles.eyebrow}>The new Dexment</div>
              <h2>
                One platform.
                <br />
                Every professional connection.
              </h2>
            </div>
            <div className={styles.formCol}>
              <Waitlist />
            </div>
          </div>
        </section>

        <section id="psp-signup" className={styles.providerSignup}>
          <div className={cn(styles.wrap, styles.providerGrid)}>
            <div>
              <div className={styles.eyebrow}>For service providers</div>
              <h2>Get on the provider waitlist.</h2>
              <p>
                Tell us what you do and where you work. When the PSP network opens, verified providers get first
                access to client requests in their category.
              </p>
            </div>
            <div className={styles.providerCard}>
              <ProviderWaitlist />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
