export function IndonesiaTranslate({ children, style, active = false }) {
  return <span className={`indonesia-translate ${active ? '' : 'd-none'}`} style={style}>{children}</span>
}

export function EnglishTranslate({ children, style, active = true }) {
  return <span className={`english-translate ${active ? '' : 'd-none'}`} style={style}>{children}</span>
}