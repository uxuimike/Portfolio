export function sizeChange(w, h) {
  return {
    type: "CHANGE_SIZE",
    payload: {
      width: w,
      height: h
    }
  }
}
