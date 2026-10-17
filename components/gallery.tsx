const FALLBACK_IMAGE = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7159-bm2KCWCSyQelGmTM2LMtMIVHdQu8TA.png'

const photo = {
  ursula: { src: FALLBACK_IMAGE, alt: 'Ursula cosplay' },
  elastigirl: { src: FALLBACK_IMAGE, alt: 'Elastigirl cosplay' },
  jessie: { src: FALLBACK_IMAGE, alt: 'Jessie cosplay' },
  velma: { src: FALLBACK_IMAGE, alt: 'Velma cosplay' },
  spider: { src: FALLBACK_IMAGE, alt: 'Spider-themed cosplay' },
  rogue: { src: FALLBACK_IMAGE, alt: 'Rogue cosplay' },
  shego: { src: FALLBACK_IMAGE, alt: 'Shego cosplay' },
}

function CosplayImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="cosplay-image" loading="lazy" />
}

export function Gallery() {
  return (
    <section aria-label="Cosplay photo gallery" className="gallery-section">
      <div className="velma-feature">
        <CosplayImage {...photo.velma} />
      </div>

      <div className="cosplay-columns">
        <div className="cosplay-column">
          <CosplayImage {...photo.ursula} />
          <CosplayImage {...photo.spider} />
          <nav className="social-links" aria-label="HerLipz social profiles">
            <a href="https://x.com/her_lipz_" target="_blank" rel="noopener noreferrer">
              <span className="social-platform">X</span>
              <span className="social-handle">her_lipz_</span>
            </a>
            <a href="https://fansly.com/Her_Lipz" target="_blank" rel="noopener noreferrer">
              <span className="social-platform">FANSLY</span>
              <span className="social-handle">Her_Lipz</span>
            </a>
            <a href="https://onlyfans.com/her_lipz" target="_blank" rel="noopener noreferrer">
              <span className="social-platform">ONLYFANS</span>
              <span className="social-handle">her_lipz</span>
            </a>
          </nav>
        </div>

        <div className="cosplay-column">
          <CosplayImage {...photo.elastigirl} />
          <CosplayImage {...photo.rogue} />
        </div>

        <div className="cosplay-column">
          <CosplayImage {...photo.jessie} />
          <CosplayImage {...photo.shego} />
        </div>
      </div>
    </section>
  )
}
