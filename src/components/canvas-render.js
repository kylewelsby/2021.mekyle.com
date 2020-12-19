let state = {
  color: 'rgba(0,0,0,0.075)',
  rows: 15,
  fontSize: 32,
  row1x: 0,
  row2x: 0,
  text: 'hello world',
  ctx: null,
  canvas: null,
  timeout: null,
}

function render() {
  const ctx = state.ctx
  const canvas = state.canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height) // clear view
  ctx.fillStyle = state.color
  ctx.font = `${state.fontSize}px/2 sans-serif`
  ctx.textBaseline = 'top'

  if (state.row1x < state.textWidth * -1) {
    state.row1x = 0
  }

  if (state.row2x >= 0.0) {
    state.row2x = -state.textWidth
  }

  let n = 0
  while (n < state.rows) {
    ctx.fillText(state.text, state.row1x + 40 * n, state.rowHeight * n)
    ctx.fillText(
      state.text,
      state.row2x + -40 * n,
      state.rowHeight * n + state.fontSize
    )
    n++
  }
  state.row1x += -0.5
  state.row2x += 0.5
}

function loop() {
  if (state.timeout) return
  state.timeout = setTimeout(() => {
    clearTimeout(state.timeout)
    state.timeout = null
    requestAnimationFrame(() => {
      render()
      loop()
    })
  }, 50)
}

export function start(canvas, text) {
  state.canvas = canvas
  state.text = text + text
  state.rowHeight = state.fontSize * 2
  state.ctx = canvas.getContext('2d')
  state.textWidth = state.ctx.measureText(state.text).width
  console.log('starting', state)
  loop()
}
