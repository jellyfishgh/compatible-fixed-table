const cols = new Array(15).fill(0).map((item, index) => ({
  label: `label${index}`,
  prop: `prop${index}`,
  fixed: !index,
  width: parseInt(40 + Math.random() * 100)
}))

export default cols
