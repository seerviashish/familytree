import { LegalDoc, Section, type TocItem } from '../components/LegalDoc.tsx'
import { meta, paths } from '../content/meta.ts'

const toc: TocItem[] = [
  { id: 'who-we-are', label: 'Who we are' },
  { id: 'summary', label: 'At a glance' },
  { id: 'what-we-collect', label: 'What we collect' },
  { id: 'how-we-use', label: 'How we use it' },
  { id: 'legal-bases', label: 'Legal bases' },
  { id: 'storage', label: 'Storage & processors' },
  { id: 'sharing', label: 'Sharing' },
  { id: 'retention', label: 'Retention' },
  { id: 'your-rights', label: 'Your rights' },
  { id: 'security', label: 'Security' },
  { id: 'children', label: 'Children & relatives' },
  { id: 'transfers', label: 'International transfers' },
  { id: 'changes', label: 'Changes' },
  { id: 'contact', label: 'Contact' },
]

export function PrivacyPolicy() {
  const mail = <a href={`mailto:${meta.contactEmail}`}>{meta.contactEmail}</a>

  return (
    <LegalDoc
      kind="Privacy Policy"
      title="Privacy Policy"
      intro={`This policy explains what the ${meta.appName} ${meta.platform} app collects, why, how it is stored, and the control you have over it.`}
      toc={toc}
    >
      <Section id="who-we-are" title="1. Who we are">
        <p>
          {meta.appName} (&ldquo;the app&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is an {meta.platform}{' '}
          application (package <strong>{meta.androidPackage}</strong>) developed and operated by{' '}
          {meta.developer}. We are the data controller for the personal information described here.
          For any privacy question or request, contact us at {mail}.
        </p>
      </Section>

      <Section id="summary" title="2. At a glance">
        <ul>
          <li>You sign in with your <strong>Google account</strong>; we never see your Google password.</li>
          <li>Your family tree — the people, dates, relationships and photos you add — is stored in your own private space and is not visible to other users.</li>
          <li>We use <strong>Google Firebase</strong> to sign you in and to store and sync your data.</li>
          <li>We collect limited diagnostics (crash and basic usage data) to keep the app working.</li>
          <li>We <strong>do not sell your data</strong>, and the app contains <strong>no advertising</strong>.</li>
          <li>You can edit or delete any person, remove a photo, or delete your whole account from inside the app at any time.</li>
        </ul>
      </Section>

      <Section id="what-we-collect" title="3. Information we collect">
        <h3>Account information</h3>
        <p>
          When you sign in with Google, we receive your <strong>name</strong>, <strong>email address</strong>,{' '}
          <strong>profile photo</strong> and a <strong>Google account identifier</strong>. This
          identifies your account and secures your data.
        </p>

        <h3>Family information you enter</h3>
        <p>
          The heart of the app is the information <em>you</em> choose to record about people in your
          family. This can include:
        </p>
        <ul>
          <li>names;</li>
          <li>gender (optional);</li>
          <li>birth and death dates or years, and whether a person is living, deceased or unknown;</li>
          <li>notes you add;</li>
          <li>relationships between people (parent, partner, child, sibling) and which person is your &ldquo;me&rdquo; anchor;</li>
          <li>photos you upload for a person.</li>
        </ul>
        <p>
          Some of this may be personal information about <strong>other people</strong>. Please see{' '}
          <a href="#children">Children &amp; relatives</a> for your responsibilities when adding it.
        </p>

        <h3>Diagnostics collected automatically</h3>
        <p>
          To keep the app stable we use Firebase Crashlytics and Firebase Analytics, which collect
          technical data such as crash reports and stack traces, app version, device model, operating
          system version, general app-usage events and coarse region. This data is tied to app
          instances and does not include the content of your family tree. We do <strong>not</strong>{' '}
          collect your precise location, your contacts, or your device&rsquo;s files beyond a photo you
          explicitly choose.
        </p>
      </Section>

      <Section id="how-we-use" title="4. How we use your information">
        <ul>
          <li><strong>Provide the service</strong> — save, sync and display your family tree across your sessions and devices.</li>
          <li><strong>Authenticate you</strong> — sign you in securely and keep your data scoped to your account.</li>
          <li><strong>Keep it working</strong> — diagnose crashes and errors and understand which features are used, so we can fix and improve the app.</li>
          <li><strong>Support you</strong> — respond to messages you send us.</li>
        </ul>
        <p>We do not use your family information for advertising or profiling, and we do not sell it.</p>
      </Section>

      <Section id="legal-bases" title="5. Legal bases (EEA / UK users)">
        <p>Where the GDPR or UK GDPR applies, we rely on these legal bases:</p>
        <ul>
          <li><strong>Performance of a contract</strong> — to provide the app&rsquo;s core features to you.</li>
          <li><strong>Legitimate interests</strong> — to secure the service and to keep it stable and improve it, balanced against your rights.</li>
          <li><strong>Consent</strong> — where required (for example, optional diagnostics on platforms that request it); you can withdraw consent at any time.</li>
        </ul>
      </Section>

      <Section id="storage" title="6. Where your data is stored and who processes it">
        <p>
          Your data is stored using <strong>Google Firebase</strong> on Google Cloud infrastructure.
          The services we use are:
        </p>
        <ul>
          <li><strong>Firebase Authentication</strong> — Google Sign-In and session management;</li>
          <li><strong>Cloud Firestore</strong> — your people and relationships;</li>
          <li><strong>Firebase Storage</strong> — the photos you upload;</li>
          <li><strong>Firebase Crashlytics</strong> and <strong>Firebase Analytics</strong> — diagnostics.</li>
        </ul>
        <p>
          Access is scoped to your account: security rules on Firestore and Storage permit reading and
          writing only the data under your own user space, so other users cannot access your tree.
          Google acts as our processor / sub-processor; its handling is governed by Google&rsquo;s own
          terms and privacy policy.
        </p>
      </Section>

      <Section id="sharing" title="7. Sharing and disclosure">
        <p>We do not sell your personal information. We share it only:</p>
        <ul>
          <li>with <strong>Google Firebase</strong>, as the processor that hosts and secures the app&rsquo;s data;</li>
          <li>if <strong>required by law</strong>, such as a valid legal request; and</li>
          <li>to <strong>protect rights and safety</strong>, where necessary to prevent fraud, abuse or harm.</li>
        </ul>
      </Section>

      <Section id="retention" title="8. How long we keep your data">
        <p>
          We keep your family information for as long as your account exists. When you delete a person,
          remove a photo, or delete your account in the app, the corresponding data is removed:
        </p>
        <ul>
          <li>deleting a person removes that person and their relationship links and photo;</li>
          <li>deleting your account permanently erases all of your people, relationships and photos, and your app account.</li>
        </ul>
        <p>
          Limited diagnostic data may be retained by Firebase for a bounded period per Google&rsquo;s
          defaults. Backups and logs may persist for a short time before being overwritten.
        </p>
      </Section>

      <Section id="your-rights" title="9. Your choices and rights">
        <p>You are in control of your data:</p>
        <ul>
          <li><strong>Access &amp; portability</strong> — most of your data is visible in the app; email us at {meta.contactEmail} for a copy.</li>
          <li><strong>Correction</strong> — edit any person or detail directly in the app.</li>
          <li><strong>Deletion</strong> — delete a person, remove a photo, or delete your entire account from{' '}
            <em>Settings → Delete account</em>.</li>
          <li><strong>Withdraw consent</strong> — sign out, or delete your account, at any time.</li>
          <li><strong>Complain</strong> — if you are in the EEA or UK, you may lodge a complaint with your local data protection authority.</li>
        </ul>
        <p>To exercise any right, contact {mail}. We will respond within the time required by applicable law.</p>
      </Section>

      <Section id="security" title="10. Security">
        <p>
          Data is encrypted in transit (HTTPS/TLS) and at rest on Google Cloud. Access is restricted to
          your authenticated account through Firebase security rules. Sensitive actions such as account
          deletion require you to re-authenticate with Google. No method of transmission or storage is
          perfectly secure, but we work to protect your information using industry-standard measures.
        </p>
      </Section>

      <Section id="children" title="11. Children and adding relatives">
        <p>
          The app is not directed to children, and you must meet the minimum age in your country to
          create an account (see the <a href={paths.terms}>Terms</a>). A family tree naturally contains
          information about other people, some of whom may be minors. When you add someone else&rsquo;s
          details or photo, you are responsible for having the appropriate right or consent to do so, and
          for handling their information respectfully. If you believe a person&rsquo;s information has
          been added without a proper basis, contact us at {mail} and we will help.
        </p>
      </Section>

      <Section id="transfers" title="12. International data transfers">
        <p>
          Google may process and store data in data centres located in various countries. Where data is
          transferred across borders, Google applies safeguards such as standard contractual clauses.
          By using the app you understand that your data may be processed outside your country of
          residence.
        </p>
      </Section>

      <Section id="changes" title="13. Changes to this policy">
        <p>
          We may update this policy as the app evolves. Material changes will be reflected here with a
          new &ldquo;Last updated&rdquo; date. Continued use of the app after an update means you accept
          the revised policy.
        </p>
      </Section>

      <Section id="contact" title="14. Contact us">
        <p>
          Questions, requests or concerns about your privacy? Email {meta.developer} at {mail}. This
          policy is published at{' '}
          <a href={`${meta.baseUrl}/privacy-policy/`}>{meta.baseUrl.replace('https://', '')}/privacy-policy/</a>.
        </p>
      </Section>
    </LegalDoc>
  )
}
