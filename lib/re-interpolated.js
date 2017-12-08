const tre = (strings, ...values) => {
  const flags = values
    .filter(v => v instanceof RegExp)
    .map(re => re.flags)
    .reduce(
      (a, b) =>
        a +
        b
          .split("")
          .filter(char => !a.includes(char))
          .join("")
    )
  return new RegExp(
    String.raw(
      strings,
      ...values.map(v => (v instanceof RegExp ? v.source : v))
    ),
    flags
  )
}

module.exports = tre
