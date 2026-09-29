'use client'

function AdsterraFrame({ id, keyValue }: { id: string; keyValue: string }) {
  const srcDoc = `<!doctype html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:transparent;overflow:hidden;">
<script>
var atOptions = {
  'key': '${keyValue}',
  'format': 'iframe',
  'height': 50,
  'width': 320,
  'params': {}
};
</script>
<script src="https://www.highrevenueformat.com/${keyValue}/invoke.js"></script>
</body>
</html>`

  return (
    <iframe
      id={id}
      title="Advertisement"
      srcDoc={srcDoc}
      width="320"
      height="50"
      frameBorder="0"
      scrolling="no"
      style={{ display: 'block', width: '320px', height: '50px', border: 0 }}
      sandbox="allow-scripts allow-same-origin"
    />
  )
}

const ADSTERRA_TOP_KEY = 'f4e0e840842e1285e5fbcfbc725372c7'
const ADSTERRA_BOTTOM_KEY = '506c7f5488c9373b85d83842e240dea0'

export function AdsterraNative() {
  return (
    <section className="top-ad" aria-label="Advertisement">
      <AdsterraFrame id="adsterra-320x50" keyValue={ADSTERRA_TOP_KEY} />
    </section>
  )
}

export function AdsterraBottom() {
  return (
    <section className="bottom-ad" aria-label="Advertisement">
      <AdsterraFrame id="adsterra-bottom-320x50" keyValue={ADSTERRA_BOTTOM_KEY} />
    </section>
  )
}
