document.addEventListener("DOMContentLoaded", function() {
  var headerRow = document.querySelector(".md-header__inner");
  if (headerRow) {
    var btnHtml = `
      <div class="nav-history-buttons" style="display: flex; align-items: center; gap: 10px; margin-right: 15px; flex-shrink: 0;">
        <button onclick="window.history.back()" title="Indietro" style="all: unset; cursor: pointer; display: flex;">
          <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" style="filter: brightness(0) invert(1);">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" stroke="black" stroke-width="1.5"></path>
          </svg>
        </button>
        <button onclick="window.history.forward()" title="Avanti" style="all: unset; cursor: pointer; display: flex;">
          <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" style="filter: brightness(0) invert(1);">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" stroke="black" stroke-width="1.5"></path>
          </svg>
        </button>
      </div>`;
    
    // Inserisce i pulsanti dopo il logo ma prima del titolo
    var logo = headerRow.querySelector(".md-logo");
    if (logo) {
      logo.after(document.createRange().createContextualFragment(btnHtml));
    } else {
      headerRow.insertAdjacentHTML('afterbegin', btnHtml);
    }
  }
});
