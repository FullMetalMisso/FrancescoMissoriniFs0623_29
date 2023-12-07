const disposizioneCard = document.querySelector(".carteContainer")
const loadBtn = document.querySelector(".loadBtn")
const loadSecondaryBtn = document.querySelector(".loadSecondaryBtn")
const searchBar = document.querySelector(".searchBar")

loadBtn.addEventListener("click", () => loadImages("dog"))
loadSecondaryBtn.addEventListener("click", () => loadImages("cat"))

searchBar.addEventListener("input", function() {
  const searchQuery = searchBar.value
  if (searchQuery !== "") {
    loadImages(searchQuery)
  }
});

const loadImages = (query) => {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: "ZjsZvShoCqDcTuPBACdgXSaSnyU2UDZYAG8wJsgO9ogVPIDVt7HJ8aZy",
    },
  })
    .then((res) => res.json())
    .then((data) => mostraImmagini(data))
};

const mostraImmagini = (dogs) => {
  disposizioneCard.innerHTML = ""

  dogs.photos.forEach((dog) => {
    disposizioneCard.innerHTML += `
      <div class="col">
        <div class="col-md-12">
          <div class="card mb-6 shadow-sm">
            <img src="${dog.src.medium}" alt="${dog.photographer}" class="bd-placeholder-img card-img-top" width="100%" height="225">
            <div class="card-body">
              <h5 class="card-title">${dog.photographer}</h5>
              <p class="card-text">${dog.url}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    View
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onclick="nascondiCarta(event)">
                    Hide
                  </button>
                </div>
                <small class="text-muted">${dog.id}</small>
              </div>
            </div>
          </div>
        </div>
      </div>`
  })
}

const nascondiCarta = (event) => {
  event.target.closest(".col").remove();
}
