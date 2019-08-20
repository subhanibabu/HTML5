import '@babel/polyfill';
import 'isomorphic-fetch';
import Model from "./Model.js";
import View from "./View.js";
import Controller from "./Controller.js";

window.addEventListener('load', () => {
    const model = new Model();
      const  view = new View(model);
       const controller = new Controller(model, view);
    view.loadView();
});