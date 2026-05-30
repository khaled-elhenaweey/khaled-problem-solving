function dnaStrand(dna){
const charReplacement ={
  'A': 'T',
  'T': 'A',
  'C': 'G',
  'G': 'C'
}
​
return dna.replace(/[ATCG]/g, (match) => charReplacement[match]);
}