import Konva from 'konva'
import { HUMAN } from './constant'

const Human = class {
  constructor(
    x = HUMAN.x,
    y = HUMAN.y,
    width = HUMAN.w,
    height = HUMAN.h,
    fill = '#CAF0F8'
  ) {
    this.node = new Konva.Rect({
      x: x,
      y: y,
      width: width,
      height: height,
      fill: fill,
    })
  }
}
export default Human
