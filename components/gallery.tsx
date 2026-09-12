const ASSET_BASE = 'https://herlipz-4ihi1ci3s-her-lipz.vercel.app'

const photo = {
  ursula: { src: `${ASSET_BASE}/gallery/ursula.png`, alt: 'Ursula cosplay' },
  elastigirl: { src: `${ASSET_BASE}/gallery/elastigirl.png`, alt: 'Elastigirl cosplay' },
  jessie: { src: `${ASSET_BASE}/gallery/jessie.png`, alt: 'Jessie cosplay' },
  velma: { src: `${ASSET_BASE}/gallery/velma.jpeg`, alt: 'Velma cosplay' },
  spider: { src: `${ASSET_BASE}/gallery/spiderman.png`, alt: 'Spider-themed cosplay' },
  rogue: { src: `${ASSET_BASE}/gallery/rogue.png`, alt: 'Rogue cosplay' },
  shego: { src: `${ASSET_BASE}/gallery/shego.png`, alt: 'Shego cosplay' },
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
