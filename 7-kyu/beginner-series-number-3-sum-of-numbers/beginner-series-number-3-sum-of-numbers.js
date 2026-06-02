function getSum(a, b)
{
  const minNum = Math.min(a,b);
  const maxNum = Math.max(a,b);
  const count = (maxNum - minNum) + 1
  return (count * (maxNum + minNum)) / 2
}