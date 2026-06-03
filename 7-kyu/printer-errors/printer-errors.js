function printerError(s) {
  const lettersNumbers = s.length;
  const errorNumbers = lettersNumbers - (s.match(/[a-m]/g) || []).length;
  return `${errorNumbers}/${lettersNumbers}`;
}