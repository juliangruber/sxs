const map = r => ({
  'order date': r[Object.keys(r)[0]], // TODO
  'recipient email': r['buyer email'] || 'mail@juliangruber.com', // TODO
  'phone number': r['buyer phone'] || '00491717545172', // TODO
  'recipient name': r['ship to name'],
  'street (line 1)': r['ship to street'],
  'street number': '', // TODO
  'street (line 2)': r['ship to street 2'],
  city: r['ship to city'],
  state: r['ship to state'],
  'zip code': r['ship to zip'],
  country: r['ship to country code'],
  'item title': r['item name'],
  'item quantity': r.quantity,
  'total order price': r['order total'],
  'order currency': r.currency,
  'sku number': r.sku,
  'order number': r['bandcamp transaction id']
})

export const convert = (input, parse, stringify) => 
  stringify(
    parse(input, { columns: true }).map(map),
    { header: true }
  )
