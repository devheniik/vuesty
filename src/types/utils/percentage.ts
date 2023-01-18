export function percentage(value: number, max: number, min = 0) {
  if (value <= min) {
    return 0
  }

  if (value >= max) {
    return 100
  }

  return ((value - min) * 100) / (max - min)
}
