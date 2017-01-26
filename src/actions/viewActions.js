export function sizeChange(w, h) {
  return {
    type: "CHANGE_SIZE",
    payload: {
      width: w,
      height: h
    }
  }
}

export function scrollChange(st) {
  return {
    type: "CHANGE_SCROLL",
    payload: {
      scrollTop: st
    }
  }
}
