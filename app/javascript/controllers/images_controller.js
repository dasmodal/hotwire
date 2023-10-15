import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="images"
export default class extends Controller {
  connect() {
  }

  getUrl(e) {
    const imageSrc = e.target.src

    navigator.clipboard.writeText(imageSrc)
    
    this.dispatch("copy", { detail: { content: "Image URL has been copied!" } })
  }
}
