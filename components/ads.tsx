'use client'

import { useEffect } from 'react'

const ADSTERRA_KEY = 'f4e0e840842e1285e5fbcfbc725372c7'
const ADCASH_ZONE = '12147686'

export function AdsterraNative() {
  useEffect(() => {
    const host = document.getElementById('adsterra-320x50')
    if (!host || host.dataset.loaded === 'true') return

    host.dataset.loaded = 'true'

    const optionsScript = document.createElement('script')
    optionsScript.text = `atOptions = { 'key': '${ADSTERRA_KEY}', 'format': 'iframe', 'height': 50, 'width': 320, 'params': {} };`
    host.appendChild(optionsScript)

    const invokeScript = document.createElement('script')
    invokeScript.src = `https://www.highrevenueformat.com/${ADSTERRA_KEY}/invoke.js`
    invokeScript.async = true
    host.appendChild(invokeScript)
  }, [])

  return (
    <section className="top-ad" aria-label="Advertisement">
      <div id="adsterra-320x50" />
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
