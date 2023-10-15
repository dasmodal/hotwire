import { Controller } from "@hotwired/stimulus"
import { Toast } from "bootstrap"

// Connects to data-controller="toast"
export default class extends Controller {
  initialize() {
    this.toast = new Toast(
      document.getElementById("liveToast")
    )
  }

  show({ detail: { content }}) {
    this.toast._element.querySelector(".toast-body").innerText = content
    this.toast.show()
  }
}
