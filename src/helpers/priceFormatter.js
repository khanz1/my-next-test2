export default function priceFormatter(price) {
  const [decimal, fraction] = price.toString().split('.');
  return decimal
    .split('')
    .reverse()
    .map((num, i) => i % 3 === 0 && i !== 0 ? num + ',' : num)
    .reverse()
    .join('') + fraction ? `.${fraction.length < 2 ? fraction + '0' : fraction}` : ''
}
