 export function setBg(style) {
  return {
    type: 'CHANGE_BG',
    payload: {
      slideStyle: style
    }
  }
}
