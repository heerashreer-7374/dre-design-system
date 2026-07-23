/** DRE Design System — AI Readable Figma file. */
export const FIGMA_FILE_URL =
  'https://www.figma.com/design/UnFbmt5yovBqr4tBNjuNx9/DRE-Design-System---AI-Readable'

/** Build a deep link to a Figma node (`12002:17139` → `node-id=12002-17139`). */
export function figmaNodeUrl(nodeId: string): string {
  return `${FIGMA_FILE_URL}?node-id=${nodeId.replace(/:/g, '-')}`
}

/** Docs hyperlink that opens the Figma node in a new tab. */
export function figmaDocLink(nodeId: string): string {
  const href = figmaNodeUrl(nodeId)
  return `<a href="${href}" target="_blank" rel="noopener noreferrer">${nodeId}</a>`
}
