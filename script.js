import { Column } from './column.js'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const FONT_SIZE = 16
let columns = []
let columnsCount = 0

initCanvasSize()
initColumns()
animate()

function initCanvasSize() {
  canvas.width = document.documentElement.clientWidth
  canvas.height = document.documentElement.clientHeight
}
function initColumns() {
  columnsCount = canvas.width / FONT_SIZE
  columns = []
  for (let i = 0; i < columnsCount; i++) {
    columns.push(new Column(i * FONT_SIZE, FONT_SIZE, canvas.height, context))
  }
}
function animate() {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)'
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.fillStyle = 'green'
  context.font = `bold ${FONT_SIZE}px monospace`
  columns.forEach((column) => column.drawSymbol())

  setTimeout(() => requestAnimationFrame(animate), 50)
}
window.addEventListener('resize', () => {
  initCanvasSize()
  initColumns()
  context.clearRect(0, 0, canvas.width, canvas.height)
})

//fillText предоставляемый Canvas 2D API, рисует (заливает) заданный текст в заданной позиции (x, y)

//requestAnimationFrame - сообщает браузеру, что вы хотите выполнить анимацию, и запрашивает, чтобы браузер вызывал указанную функцию для обновления анимации перед следующей перерисовкой.
