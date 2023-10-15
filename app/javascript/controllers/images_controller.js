import { Controller } from "@hotwired/stimulus"
import { Toast } from "bootstrap"

// Connects to data-controller="images"
export default class extends Controller {
  connect() {
    this.toast = new Toast(
      document.getElementById("liveToast")
    )
  }

  getUrl(e) {
    const imageSrc = e.target.src

    navigator.clipboard.writeText(imageSrc)

    this.toast.show()
  }
}
