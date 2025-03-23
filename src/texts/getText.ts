import texts from './texts.json'

type TextKey = keyof typeof texts

export function getText(key: TextKey): string {
  return texts[key] || ''
}
