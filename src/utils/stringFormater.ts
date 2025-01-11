export function slugifier(initialValue: string) {
  return initialValue
    .toLowerCase()
    .trim()
    .replace(/[ \']+/g, "-")
    .normalize("NFD")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/[-]+$/, "")
}
