import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="images"
export default class extends Controller {
  static targets = [ "image", "title", "save" ]
  static classes = [ "loading" ]
  static values = {
    id: String
  }

  connect() {
    const title = document.createElement("p")
    title.textContent = this.imageTarget.alt
    title.contentEditable = true
    title.dataset.imagesTarget = "title"
    title.dataset.action = "click->images#editTitle"
    this.element.appendChild(title)
  }

  editTitle(e) {
    if(!this.hasSaveTarget) {
      const btn = document.createElement("button")
      btn.textContent = "Save"
      btn.classList = "btn btn-primary btn-sm"
      btn.dataset.imagesTarget = "save"
      btn.dataset.action = "click->images#saveTitle"
      e.target.insertAdjacentElement("afterend", btn)
    }
  }

  getUrl(e) {
    const imageSrc = e.target.src

    navigator.clipboard.writeText(imageSrc)
    
    this.dispatch("copy", { detail: { content: "Image URL has been copied!" } })
  }

  async saveTitle(e) {
    e.preventDefault()
    e.target.classList.add(this.loadingClass)

    const formData = new FormData()
    formData.append("title", this.titleTarget.innerText)
    await this.doPatch(`/api/images/${this.idValue}`, formData)

    e.target.remove()
  }

  async doPatch(url, body) {
    const csrfToken = document.getElementsByName("csrf-token")[0].content

    await fetch(url, {
      method: "PATCH",
      body: body,
      headers: {
        "X-CSRF-Token": csrfToken
      }
    })
  }
}
