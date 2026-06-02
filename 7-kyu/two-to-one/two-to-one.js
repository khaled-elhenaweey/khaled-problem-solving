function longest(s1, s2) {
  const cleanStr = new Set([...s1,...s2].sort())
  const result = [...cleanStr].join('')
  return result
}