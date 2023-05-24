import "./style.css";

import { fetchdata } from "./modules/PostData";
import { addData } from "./modules/getData";

const form = document.getElementById("form");
const btn = document.getElementById("refresh");

form.addEventListener("click", fetchdata);
btn.addEventListener("click", addData);
