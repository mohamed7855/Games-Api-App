export class Ui {
  constructor() {}

  showAllGames(games) {
    let boxGamesData = "";
    games.forEach((game) => {
      boxGamesData += `<div class="col-md-6 col-lg-4 col-xl-3">
            <div id=${game.id} class="card bg-transparent border-1">
              <div  class="card-body p-3">
                <figure>
                  <img
                    src="${game.thumbnail}"
                    class="card-img-top"
                    alt="..."
                  />
                </figure>
                <figcaption>
                  <div
                    class="d-flex justify-content-between align-items-center text-white"
                  >
                    <h3 class="small">${game.title}</h3>
                    <span class="p-2 text-bg-primary badge">Free</span>
                  </div>
                  <p class="card-text small text-center opacity-50 mt-2">
                  ${game.short_description}
                  </p>
                </figcaption>
              </div>
              <div
                class="card-footer px-3 py-2 d-flex justify-content-between align-items-center"
              >
                <span class="badge">${game.genre}</span>
                <span class="badge">${game.platform}</span>
              </div>
            </div>
          </div>`;
    });
    $("#gamesData").html(boxGamesData);
  }

  showGameDetails(game) {
    let boxGameData = `<div class="col-md-4">
          <div class="gameImage bg-danger">
            <figure>
              <img
                src=${game.thumbnail}
                class="w-100"
                alt="image datail"
              />
            </figure>
          </div>
        </div>
        <div class="col-md-8">
          <div class="gameInfo">
            <h3>Title: <span>${game.title}</span></h3>
            <p>Category: <span class="badge text-bg-info">${game.genre}</span></p>
            <p>Platform: <span class="badge text-bg-info">${game.platform}</span></p>
            <p>Status: <span class="badge text-bg-info">${game.status}</span></p>
            <p class="small">${game.description}</p>
            <a href="${game.game_url}" target="_blank" class="btn btn-outline-warning text-white">Show Game</a>
          </div>
        </div>`;

    $("#detailsContent").html(boxGameData);
  }
}
