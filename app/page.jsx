export const metadata = {
  title: 'Privacy Policy — Running Coach App',
  description: 'Privacy Policy for Running Coach App, including Garmin Connect data handling.',
}

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px', color: '#1a1a1a', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4 }}>Privacy Policy</h1>
      <p style={{ fontSize: 13, color: '#888', marginBottom: 40 }}>Last updated: March 2026</p>

      <S title="1. Overview">
        <p>Running Coach App ("the App", "we", "us") is a training plan management platform for running groups. This Privacy Policy describes how we collect, use, store, and protect personal information — including data obtained from Garmin Connect — when you use our service.</p>
        <p>By using the App you agree to the practices described in this policy.</p>
      </S>

      <S title="2. Data We Collect">
        <h3>2.1 Account Information</h3>
        <ul>
          <li>Name and email address (used for authentication and notifications)</li>
          <li>Role within the App (runner, coach, or admin)</li>
          <li>Heart-rate training zones and personal pace configuration</li>
        </ul>
        <h3>2.2 Garmin Connect Fitness Data</h3>
        <p>With your explicit authorization, we access the following data from Garmin Connect:</p>
        <ul>
          <li>Activity summaries (date, distance, duration, activity type)</li>
          <li>Pace data (average pace, lap splits)</li>
          <li>Heart-rate data (average HR, HR zones, max HR)</li>
          <li>Elevation and GPS route data associated with running activities</li>
          <li>VO2 Max estimate (where available from the device)</li>
        </ul>
        <p>We do not access Garmin health data unrelated to running activities (sleep, stress, body composition, menstrual tracking, etc.).</p>
        <h3>2.3 Training Plan Data</h3>
        <ul>
          <li>Scheduled workouts assigned by your coach</li>
          <li>Workout completion status and effectiveness evaluations</li>
          <li>Weekly training summaries</li>
        </ul>
        <h3>2.4 Usage Data</h3>
        <ul>
          <li>Login timestamps and session information</li>
          <li>Actions taken within the App (for debugging and improvement)</li>
        </ul>
      </S>

      <S title="3. How We Use Your Data">
        <ul>
          <li><strong>Training evaluation:</strong> Garmin activity data is compared against your scheduled workout targets to calculate Pace Score and Distance Score (0–100 effectiveness rating).</li>
          <li><strong>Coach visibility:</strong> Your coach can view your completed activities, effectiveness scores, and weekly summaries to guide your training.</li>
          <li><strong>Plan generation:</strong> Aggregate pace and HR data may be used to suggest personalized training plans.</li>
          <li><strong>Notifications:</strong> We send email notifications about workout schedules and plan updates.</li>
          <li><strong>Service improvement:</strong> Anonymized, aggregated statistics are used to improve the App. No individual data is sold or shared for advertising purposes.</li>
        </ul>
      </S>

      <S title="4. Garmin Connect Integration">
        <p>Our App integrates with the Garmin Connect platform under the <a href="https://developer.garmin.com" target="_blank" rel="noopener noreferrer">Garmin Health API / Developer Program</a>. We comply with Garmin's API Terms of Service and data usage guidelines.</p>
        <ul>
          <li><strong>Authorization:</strong> Access to your Garmin data requires your explicit consent through the Garmin OAuth flow. You may revoke access at any time from your Garmin Connect account settings or within the App.</li>
          <li><strong>Token storage:</strong> OAuth access and refresh tokens are encrypted with AES-256-GCM before being stored in our database. Tokens are never logged or exposed in plaintext.</li>
          <li><strong>Scope limitation:</strong> We request only the minimum permissions necessary to sync running activity data and push structured workouts to your Garmin device.</li>
          <li><strong>Data retention:</strong> Garmin activity data is retained as long as your account is active. You may request deletion at any time (see Section 7).</li>
          <li><strong>No re-sharing:</strong> Garmin data is not shared with any third party other than your designated coach within the App and our infrastructure provider (Supabase — see Section 5).</li>
        </ul>
      </S>

      <S title="5. Third-Party Services">
        <p>We use the following sub-processors to operate the App:</p>
        <ul>
          <li><strong>Supabase</strong> (supabase.com) — Database, authentication, and file storage. Data is stored in an encrypted PostgreSQL database with row-level security policies.</li>
          <li><strong>Garmin Connect</strong> (connect.garmin.com) — Fitness data source. Subject to Garmin's own Privacy Policy.</li>
          <li><strong>Resend</strong> (resend.com) — Transactional email delivery.</li>
          <li><strong>Vercel</strong> — Application hosting and serverless functions.</li>
        </ul>
        <p>We do not sell, rent, or trade personal data to any third party for marketing or advertising purposes.</p>
      </S>

      <S title="6. Data Security">
        <ul>
          <li>All data in transit is protected by TLS 1.2+.</li>
          <li>Garmin OAuth tokens are encrypted at rest using AES-256-GCM with a secret key that is never stored alongside the data.</li>
          <li>Database access is protected by row-level security (RLS) — users can only read their own data; coaches can read data for runners in their groups.</li>
          <li>Admin access is restricted to a separately provisioned role set via the database console.</li>
        </ul>
      </S>

      <S title="7. Your Rights">
        <p>You have the right to:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of all personal data we hold about you.</li>
          <li><strong>Correction:</strong> Request correction of inaccurate data.</li>
          <li><strong>Deletion:</strong> Request deletion of your account and all associated data, including Garmin activity records synced to the App.</li>
          <li><strong>Garmin disconnect:</strong> Revoke the App's access to your Garmin account at any time from within the App (Settings → Garmin → Disconnect) or directly from your Garmin Connect account.</li>
          <li><strong>Data portability:</strong> Request an export of your training data in a machine-readable format (JSON or CSV).</li>
        </ul>
        <p>To exercise any of these rights, contact us at the address in Section 9. We will respond within 30 days.</p>
      </S>

      <S title="8. Data Retention">
        <ul>
          <li>Active account data is retained for the duration of your account.</li>
          <li>Upon account deletion, all personal data is permanently removed within 30 days, except where retention is required by law.</li>
          <li>Anonymized, aggregated statistics may be retained indefinitely.</li>
        </ul>
      </S>

      <S title="9. Contact">
        <p>If you have questions about this Privacy Policy or wish to exercise your data rights, please contact:</p>
        <address style={{ marginTop: 12, fontStyle: 'normal' }}>
          <strong>Running Coach App</strong><br />
          Email: <a href="mailto:minh.levu@goldsunfood.vn">minh.levu@goldsunfood.vn</a>
        </address>
      </S>

      <S title="10. Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. Material changes will be communicated via email or an in-app notice at least 14 days before they take effect. Continued use of the App after the effective date constitutes acceptance of the updated policy.</p>
      </S>

      <p style={{ marginTop: 48, fontSize: 12, color: '#aaa', borderTop: '1px solid #eee', paddingTop: 16 }}>
        © {new Date().getFullYear()} Running Coach App
      </p>
    </main>
  )
}

function S({ title, children }) {
  return (
    <section style={{ marginBottom: 36 }}>
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>{title}</h2>
      <div style={{ color: '#333' }}>{children}</div>
    </section>
  )
}
