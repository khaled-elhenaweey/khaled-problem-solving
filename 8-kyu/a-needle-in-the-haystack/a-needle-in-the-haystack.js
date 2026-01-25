function findNeedle(haystack) {
  let word = haystack.findIndex(word => word == 'needle')
  return `found the needle at position ${word}`
}