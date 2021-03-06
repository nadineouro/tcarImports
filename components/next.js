class Next extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div onclick="plusSlides(1)">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Próxima imagem</title><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"/><polygon points="8.48 7.08 13.4 12 8.48 16.92 9.89 18.33 16.23 12 9.89 5.67 8.48 7.08"/></svg>
      </div>
    `;
  }
}

customElements.define("next-icon", Next);
