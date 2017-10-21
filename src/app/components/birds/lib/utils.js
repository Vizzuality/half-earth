// Wraparound screen
export const wrapAround = (width, height, size) => position => {
  if (position.x < -size) position.x = width + size
  if (position.y < -size) position.y = height + size
  if (position.x > width + size) position.x = -size
  if (position.y > height + size) position.y = -size
  return position
}

export const map = function ([istart, istop], [ostart, ostop]) {
  return value =>
    ostart + (ostop - ostart) * ((value - istart) / (istop - istart))
}
