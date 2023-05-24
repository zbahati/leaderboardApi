// export const addData = () => {
//   const scores = document.querySelector(".scores");
//   const ul = document.createElement("ul");

//   const key =
//     "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AOX5lFiBGXXRnzsT2I1a/scores";

//   fetch(key, {
//     method: "GET",
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       return data.result.forEach((element) => {
//         ul.innerHTML += `
//       <li>
//       <span> ${element.user} :</span>
//       <span> ${element.score}</span>
//       </li>
//      `;
//         scores.appendChild(ul);
//       });
//     });
// };


export const addData = async () => {
  try {
    const scores = document.querySelector(".scores");
    const ul = document.createElement("ul");

    const key =
      "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AOX5lFiBGXXRnzsT2I1a/scores";

    const response = await fetch(key, {
      method: "GET",
    });

    const data = await response.json();

    data.result.forEach((element) => {
      ul.innerHTML += `
        <li>
          <span> ${element.user} :</span>
          <span> ${element.score}</span>
        </li>
      `;
    });

    scores.appendChild(ul);
  } catch (error) {
    console.error(error);
  }
};
