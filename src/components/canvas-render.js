function render(state) {
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
    ctx.fillText(state.text, state.row1x + -80 * n, state.rowHeight * n)
    ctx.fillText(
      state.text,
      state.row2x + -40 * n,
      state.rowHeight * n + state.fontSize
    )
    n++
  }
  state.row1x += -0.25
  state.row2x += 0.25
}

function loop(state) {
  if (state.timeout) return
  state.timeout = setTimeout(() => {
    clearTimeout(state.timeout)
    state.timeout = null
    requestAnimationFrame(() => {
      render(state)
      loop(state)
    })
  }, 100)
}

export function start(canvas, text, state) {
  if (!state) {
    state = {}
  }
  state = Object.assign(
    {
      color: 'rgba(0,0,0,0.075)',
      rows: 15,
      fontSize: 32,
      row1x: 0,
      row2x: 0,
      text: 'hello world',
      ctx: null,
      canvas: null,
      timeout: null,
    },
    state
  )
  state.canvas = canvas
  state.text = text + text
  state.rowHeight = state.fontSize * 2
  state.ctx = canvas.getContext('2d')
  state.textWidth = state.ctx.measureText(state.text).width
  loop(state)
}
