import * as p5 from "p5"
import { saveScreenshot } from "./screenshot"

let t = 0

const main = (p: p5) => {
  p.setup = () => {
    const canvas = p.createCanvas(1000, 1000)
    canvas.id("canvas")
    canvas.parent("canvas-parent")

    const screenshotButton = document.getElementById("save-screenshot")
    console.log(`screenshotButton: ${String(screenshotButton)}`)
    screenshotButton?.addEventListener("click", () => {
      saveScreenshot(t)
    })
  }

  p.draw = () => {
    p.background(0)
    p.fill(255)
    p.ellipse(20, 20, 60, 60)

    t += 1
  }
}

const sketch = new p5(main)
