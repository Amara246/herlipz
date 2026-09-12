import { AdcashBanner, AdsterraNative } from '@/components/ads'
import { Gallery } from '@/components/gallery'

export default function Page() {
  return (
    <main className="site-shell">
      <AdsterraNative />

      <header className="brand-header" aria-label="HerLipz">
        <div className="brand-wordmark">HerLipz<span className="brand-heart">♡</span></div>
      </header>

      <Gallery />

      <AdcashBanner />

      <footer className="site-footer">
        <p>© 2026 HerLipz. All rights reserved.</p>
        <div className="footer-hearts" aria-hidden="true">♡ ♡ ♡</div>
      </footer>
    </main>
  )
}
