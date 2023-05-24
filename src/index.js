import './style.css';

import fetchdata from './modules/PostData.js';
import addData from './modules/getData.js';

const form = document.getElementById('form');
const btn = document.getElementById('refresh');

form.addEventListener('click', fetchdata);
btn.addEventListener('click', addData);
