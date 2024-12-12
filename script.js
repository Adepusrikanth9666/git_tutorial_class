document.addEventListener("DOMContentLoaded", function () {
  const moviesContainer = document.getElementById("moviesContainer");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  const searchInput = document.getElementById("searchInput");

  fetch("movies.json")
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
    });
});
