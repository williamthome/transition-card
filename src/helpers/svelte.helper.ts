import { quintOut } from 'svelte/easing'
import { crossfade } from 'svelte/transition'

const includesKey = (obj: unknown): obj is { key: PropertyKey } =>
  typeof obj === 'object' && !!obj && 'key' in obj

export const [send, receive] = crossfade({
  duration: (d) => Math.sqrt(d * 200),

  fallback(node, params) {
    const style = getComputedStyle(node)
    const transform = style.transform === 'none' ? '' : style.transform

    return {
      duration: includesKey(params) && params.key === -1 ? 0 : 200,
      easing: quintOut,
      css: (t) => `
        transform: ${transform} scale(${t});
        opacity: ${t}
      `,
    }
  },
})
