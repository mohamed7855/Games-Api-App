import { Ui } from "./ui.module.js";

export class Games {
  constructor() {
    this.ui = new Ui();
    this.showAllGames("mmorpg");
    this.navElementEvent();
    this.fixedNavbar();
  }

  // Fetch data based on category name or fetch game details based on game id
  async getData(gameId, categoryName) {
    let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}`;
    if (gameId) {
      url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
    }
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3d0c0e9548msh86ab523115e0914p1c4c04jsn89cf04d0561a",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async showAllGames(category) {
    if (!$(".loading").hasClass("d-flex")) {
      $(".loading").addClass("d-flex");
    }

    // get all games in a specific category
    const games = await this.getData(null, category);
    this.ui.showAllGames(games);

    $(".loading").removeClass("d-flex").addClass("d-none");
    $(".games").removeClass("d-none");

    // that to use class function
    const that = this;

    // event for each card to show details
    $("#gamesData .card").on("click", function () {
      $(".games").toggleClass("d-none");
      $(".gameDetails").toggleClass("d-none");
      that.showGameDetails($(this).attr("id"));
    });

    // event for close button in game details section
    $(".gameDetails .btn-close").on("click", () => {
      $(".games").toggleClass("d-none");
      $(".gameDetails").toggleClass("d-none");
    });
  }

  async showGameDetails(gameId) {
    if (!$(".loading").hasClass("d-flex")) {
      $(".loading").addClass("d-flex");
    }
    // get details of the game
    const game = await this.getData(gameId, null);
    this.ui.showGameDetails(game);
    $(".loading").removeClass("d-flex").addClass("d-none");
  }

  // event for each nav links to get nav data
  navElementEvent() {
    // that to use class function
    const that = this;

    $(".nav-item a").on("click", function () {
      if (!$(".loading").hasClass("d-flex")) {
        $(".loading").addClass("d-flex");
      }

      $(".nav-item a").removeClass("active");
      $(this).addClass("active");
      that.showAllGames($(this).html());

      $(".loading").removeClass("d-flex").addClass("d-none");
    });
  }

  // event for fixed navbar
  fixedNavbar() {
    $(window).scroll(function () {
      // console.log(this);
      if ($(this).scrollTop() > $("header").outerHeight(true) - 30) {
        console.log($("header").offset().top);

        $(".navbar")
          .addClass("position-sticky")
          .css({ cssText: "top: 0px !important" });
      } else {
        $(".navbar")
          .removeClass("position-sticky")
          .css({ cssText: "top: -30px !important" });
      }
    });
  }
}
