'use client'

import { useEffect } from 'react'

const ADSTERRA_TOP_KEY = 'f4e0e840842e1285e5fbcfbc725372c7'
const ADSTERRA_BOTTOM_KEY = '506c7f5488c9373b85d83842e240dea0'

function loadAdsterra(hostId: string, key: string) {
  const host = document.getElementById(hostId)
  if (!host || host.dataset.loaded === 'true') return

  host.dataset.loaded = 'true'

  const optionsScript = document.createElement('script')
  optionsScript.text = `atOptions = { 'key': '${key}', 'format': 'iframe', 'height': 50, 'width': 320, 'params': {} };`
  host.appendChild(optionsScript)

  const invokeScript = document.createElement('script')
  invokeScript.src = `https://www.highrevenueformat.com/${key}/invoke.js`
  invokeScript.async = true
  host.appendChild(invokeScript)
}

export function AdsterraNative() {
  useEffect(() => {
    loadAdsterra('adsterra-320x50', ADSTERRA_TOP_KEY)
  }, [])

  return (
    <section className="top-ad" aria-label="Advertisement">
      <div id="adsterra-320x50" />
    </section>
  )
}

export function AdsterraBottom() {
  useEffect(() => {
    loadAdsterra('adsterra-bottom-320x50', ADSTERRA_BOTTOM_KEY)
  }, [])

  return (
    <section className="bottom-ad" aria-label="Advertisement">
      <div id="adsterra-bottom-320x50" />
    </section>
  )
}
