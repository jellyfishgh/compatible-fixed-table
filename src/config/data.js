import cols from './cols'

const data = new Array(100).fill(0).map((item, i) =>
  cols.reduce(
    (x, y, j) => ({
      ...x,
      [y.prop]: `${i}_${j}`
    }),
    {}
  )
)

export default data
