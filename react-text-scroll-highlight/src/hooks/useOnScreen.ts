import { useEffect, useMemo, useState } from "react"

export default function useOnScreen(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ), []);

  useEffect(() => {
    observer.observe(ref.current)
    return () => { observer.disconnect() }
  }, [observer, ref])

  return isIntersecting
}