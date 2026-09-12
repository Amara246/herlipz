'use client'

import Script from 'next/script'
import { useEffect } from 'react'

const ADSTERRA_SCRIPT =
  'https://pl31299582.profitableratecpmnetwork.com/edf43554d0782f3da6924f7a46818716/invoke.js'
const ADSTERRA_CONTAINER = 'container-edf43554d0782f3da6924f7a46818716'
const ADCASH_ZONE = '12147686'

export function AdsterraNative() {
  useEffect(() => {
    const container = document.getElementById(ADSTERRA_CONTAINER)
    if (!container) return

    const keepOnlyFirstAd = () => {
      const children = Array.from(container.children) as HTMLElement[]
      children.forEach((child, index) => {
        child.style.display = index === 0 ? '' : 'none'
      })
    }

    const observer = new MutationObserver(keepOnlyFirstAd)
    observer.observe(container, { childList: true })
    keepOnlyFirstAd()

    return () => observer.disconnect()
  }, [])

  return (
    <section className="top-ad" aria-label="Advertisement">
      <div id={ADSTERRA_CONTAINER} className="adsterra-single-ad" />
      <Script
        id="adsterra-native-banner-1"
        src={ADSTERRA_SCRIPT}
        strategy="afterInteractive"
        data-cfasync="false"
      />
    </section>
  )
}

export function AdcashBanner() {
  useEffect(() => {
    const host = document.getElementById(`adcash-banner-${ADCASH_ZONE}`)
    if (!host || host.dataset.loaded === 'true') return

    const runBanner = () => {
      if (host.dataset.loaded === 'true') return
      host.dataset.loaded = 'true'
      const zoneScript = document.createElement('script')
      zoneScript.type = 'text/javascript'
      zoneScript.text = `aclib.runBanner({ zoneId: '${ADCASH_ZONE}' });`
      host.appendChild(zoneScript)
    }

    const adcashLibrary = document.getElementById('aclib') as HTMLScriptElement | null
    if ((window as Window & { aclib?: unknown }).aclib) {
      runBanner()
      return
    }

    adcashLibrary?.addEventListener('load', runBanner, { once: true })
    return () => adcashLibrary?.removeEventListener('load', runBanner)
  }, [])

  return (
    <section className="bottom-ad" aria-label="Advertisement">
      <div id={`adcash-banner-${ADCASH_ZONE}`} className="adcash-banner-host" />
    </section>
  )
}
