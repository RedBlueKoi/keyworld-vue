export const getSlug = (name: string): string => {
  return name.trim().toLowerCase().replaceAll(" ", "-")
}
