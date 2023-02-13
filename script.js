const form = document.querySelector("#searchForm");
const resetBtn = document.querySelector("#reset");
const input = document.querySelector("input");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  printImage(res.data);
  console.log(res.data);
  input.value = "";
});

const printImage = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

const deleteImgs = function () {
  const imgs = document.querySelectorAll("img");
  for (let img of imgs) {
    img.remove();
  }
};

resetBtn.addEventListener("click", deleteImgs);

input.addEventListener("change", deleteImgs);
