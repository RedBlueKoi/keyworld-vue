export const getSlug = (name: string): string => {
  return name.trim().toLowerCase().replaceAll(" ", "-")
}

export const capitalize = (str: any): string => {
  return String(str).replaceAll(/\b[a-zA-Z]/g, (match: string) => {
    return match.toUpperCase()
  })
}
