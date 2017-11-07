// Wraparound screen
export const wrapAround = (width, height, size) => position => {
  if (position.x < -size) position.x = width + size
  if (position.y < -size) position.y = height + size
  if (position.x > width + size) position.x = -size
  if (position.y > height + size) position.y = -size
  return position
}

const _map = (value, istart, istop, ostart, ostop) =>
  ostart + (ostop - ostart) * ((value - istart) / (istop - istart))

export const map = function ([istart, istop], [ostart, ostop]) {
  return value => _map(value, istart, istop, ostart, ostop)
}

export const mapCubed = function ([istart, istop], [ostart, ostop]) {
  return value => {
    const inT = _map(value, istart, istop, 0, 1)
    const outT = inT * inT * inT
    return _map(outT, 0, 1, ostart, ostop)
  }
}
