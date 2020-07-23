const launchTime = `${Math.floor((new Date()).getTime() / 1000)}`
let link: HTMLElement | null
let canvas: HTMLElement | null

function setupScreenshotLink() {
  link = document.getElementById("link")
  canvas = document.getElementById("canvas")
}

export function saveScreenshot(t: number): void {
  const timestamp = `00000000${t}`.slice(-8)
  const filename = `${launchTime}__${timestamp}.png`
  if (link == undefined || canvas == undefined) {
    setupScreenshotLink()
  }
  link?.setAttribute("download", filename)
  link?.setAttribute("href", (canvas as HTMLCanvasElement).toDataURL("image/png")
    .replace("image/png", "image/octet-stream"))
  link?.click()
  console.log(`Saved: ${filename}`)
}
