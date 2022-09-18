'use strict';

import header from "./modules/header.js";
import slider from "./modules/slider.js";
import catalogo from "./modules/catalogo.js";


const documentReady = ()=>{
    header();
    slider();
    catalogo();
}

document.addEventListener('DOMContentLoaded',documentReady);