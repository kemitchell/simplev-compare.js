module.exports = simplevCompare

var parse = require('simplev-parse')

// Components of a simplev, in descending order of precedence.
var components = [ 'edition', 'update', 'correction', 'draft' ]

function simplevCompare(a, b) {
  a = parse(a)
  b = parse(b)
  var length = components.length
  for (var index = 0; index < length; index++) {
    var component = components[index]
    var inA = ( component in a )
    var inB = ( component in b )
    if (inA && inB) {
      var aValue = a[component]
      var bValue = b[component]
      if (aValue === bValue) {
        continue }
      else {
        return ( aValue - bValue ) } }
    else if (inA) {
      return -1 }
    else if (inB) {
      return 1 } }
  return 0 }
