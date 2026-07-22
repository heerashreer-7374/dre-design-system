import { describe, expect, it } from 'vitest'
import './button.js'
import type { DreButton } from './button.js'

describe('dre-button', () => {
  it('registers the custom element', () => {
    expect(customElements.get('dre-button')).toBeDefined()
  })

  it('reflects hierarchy and disabled attributes', async () => {
    const el = document.createElement('dre-button') as DreButton
    document.body.appendChild(el)
    el.hierarchy = 'secondary'
    el.disabled = true
    await el.updateComplete
    expect(el.getAttribute('hierarchy')).toBe('secondary')
    expect(el.hasAttribute('disabled')).toBe(true)
    el.remove()
  })
})
