export function calculateAge(birthYear: number) {
  const currentYear = new Date().getFullYear()
  return currentYear - birthYear
}