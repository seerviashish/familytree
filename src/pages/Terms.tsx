import { LegalDoc, Section, type TocItem } from '../components/LegalDoc.tsx'
import { meta, paths } from '../content/meta.ts'

const toc: TocItem[] = [
  { id: 'acceptance', label: 'Acceptance' },
  { id: 'service', label: 'The service' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'account', label: 'Your account' },
  { id: 'your-content', label: 'Your content' },
  { id: 'license', label: 'License to us' },
  { id: 'acceptable-use', label: 'Acceptable use' },
  { id: 'photos', label: 'Photos' },
  { id: 'availability', label: 'Availability' },
  { id: 'warranty', label: 'No warranty' },
  { id: 'liability', label: 'Liability' },
  { id: 'termination', label: 'Termination' },
  { id: 'third-party', label: 'Third parties' },
  { id: 'changes', label: 'Changes' },
  { id: 'law', label: 'Governing law' },
  { id: 'contact', label: 'Contact' },
]

export function Terms() {
  const mail = <a href={`mailto:${meta.contactEmail}`}>{meta.contactEmail}</a>

  return (
    <LegalDoc
      kind="Terms & Conditions"
      title="Terms & Conditions"
      intro={`These terms are the agreement between you and ${meta.developer} for your use of the ${meta.appName} ${meta.platform} app.`}
      toc={toc}
    >
      <Section id="acceptance" title="1. Acceptance of these terms">
        <p>
          By downloading, signing in to, or using {meta.appName} (&ldquo;the app&rdquo;), you agree to
          these Terms &amp; Conditions and to our <a href={paths.privacy}>Privacy Policy</a>. If you do
          not agree, please do not use the app.
        </p>
      </Section>

      <Section id="service" title="2. The service">
        <p>
          {meta.appName} lets you record your family — people, their details and relationships, and
          photos — and view them as a tree. The app signs you in with Google and stores your data using
          Google Firebase so it syncs to your account and is available offline. Features may change,
          improve, or be discontinued over time.
        </p>
      </Section>

      <Section id="eligibility" title="3. Eligibility">
        <p>
          You must be at least the age of digital consent in your country (for example, 13 in much of
          the world, or 16 in parts of the EEA) and legally able to enter into this agreement. If you
          use the app on behalf of an organisation, you confirm you are authorised to accept these terms
          for it.
        </p>
      </Section>

      <Section id="account" title="4. Your account">
        <p>
          You access the app with your Google account. You are responsible for keeping your Google
          account secure and for activity that occurs under your account in the app. Notify us at{' '}
          {meta.contactEmail} if you believe your account has been compromised.
        </p>
      </Section>

      <Section id="your-content" title="5. Your content and responsibilities">
        <p>
          You keep ownership of the information and photos you add (&ldquo;your content&rdquo;). You are
          solely responsible for it, and you represent that:
        </p>
        <ul>
          <li>you have the right to add and store it, including any personal information or photos of other people;</li>
          <li>it does not infringe anyone&rsquo;s rights or break any law; and</li>
          <li>you will add information about others respectfully and with an appropriate basis to do so.</li>
        </ul>
      </Section>

      <Section id="license" title="6. License you grant us">
        <p>
          To operate the app, you grant us a limited, non-exclusive licence to host, store, back up,
          reproduce and display your content <strong>solely</strong> to provide the service to you (for
          example, to sync your tree and show your photos in the app). We claim no ownership of your
          content, and this licence ends when you delete the content or your account, subject to routine
          backups clearing.
        </p>
      </Section>

      <Section id="acceptable-use" title="7. Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>use the app for anything unlawful, harmful, harassing, or infringing;</li>
          <li>upload content you have no right to use, or that is abusive or hateful;</li>
          <li>attempt to access other users&rsquo; data, or probe, scan or breach the app&rsquo;s security;</li>
          <li>reverse engineer, disrupt, overload, or misuse the app or its Firebase backend; or</li>
          <li>use the app to build a competing service from its data.</li>
        </ul>
      </Section>

      <Section id="photos" title="8. Photos">
        <p>
          When you add a photo to a person, you confirm you have the right to use it. You can reposition
          and crop the photo in the app, replace it, or remove it at any time. Removing a photo or
          deleting the person deletes the stored image.
        </p>
      </Section>

      <Section id="availability" title="9. Availability and changes">
        <p>
          We aim to keep the app available and reliable, but we do not guarantee uninterrupted access.
          The app depends on Google Firebase and on your device and network. We may update, suspend or
          discontinue features, and we may release updates you need to install to keep using the app.
        </p>
      </Section>

      <Section id="warranty" title="10. Disclaimer of warranties">
        <p>
          The app is provided <strong>&ldquo;as is&rdquo;</strong> and <strong>&ldquo;as available&rdquo;</strong>,
          without warranties of any kind, whether express or implied, including fitness for a particular
          purpose, accuracy, or non-infringement. You are responsible for keeping your own records of
          important family information; the app is a convenience, not a system of record.
        </p>
      </Section>

      <Section id="liability" title="11. Limitation of liability">
        <p>
          To the maximum extent permitted by law, {meta.developer} will not be liable for any indirect,
          incidental, special, consequential or punitive damages, or for any loss of data, arising from
          your use of or inability to use the app. Nothing in these terms limits liability that cannot be
          limited under applicable law.
        </p>
      </Section>

      <Section id="termination" title="12. Termination">
        <p>
          You may stop using the app and delete your account at any time from{' '}
          <em>Settings → Delete account</em>. We may suspend or terminate your access if you breach these
          terms or use the app in a way that harms others or the service. On termination, your right to
          use the app ends; the sections that by their nature should survive (such as ownership,
          disclaimers and limitation of liability) will survive.
        </p>
      </Section>

      <Section id="third-party" title="13. Third-party services">
        <p>
          The app relies on Google services, including Google Sign-In and Firebase. Your use of those
          services is also subject to Google&rsquo;s terms and privacy policy. We are not responsible for
          third-party services we do not control.
        </p>
      </Section>

      <Section id="changes" title="14. Changes to these terms">
        <p>
          We may update these terms as the app changes. When we do, we will update the &ldquo;Last
          updated&rdquo; date above. If you continue to use the app after changes take effect, you accept
          the updated terms.
        </p>
      </Section>

      <Section id="law" title="15. Governing law">
        <p>
          These terms are governed by the laws of {meta.governingLaw}, without regard to conflict-of-law
          rules. Where a dispute cannot be resolved informally, it will be subject to the courts having
          jurisdiction in {meta.governingLaw}, unless mandatory law in your country of residence provides
          otherwise.
        </p>
      </Section>

      <Section id="contact" title="16. Contact">
        <p>
          Questions about these terms? Email {meta.developer} at {mail}. These terms are published at{' '}
          <a href={`${meta.baseUrl}/terms/`}>{meta.baseUrl.replace('https://', '')}/terms/</a>.
        </p>
      </Section>
    </LegalDoc>
  )
}
