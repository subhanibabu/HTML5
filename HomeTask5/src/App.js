import '@babel/polyfill';
import 'isomorphic-fetch';
import Model from "./Model.js";
import View from "./View.js";
import Controller from "./Controller.js";

window.addEventListener('load', () => {
    const model = new Model(),
        view = new View(model),
        controller = new Controller(model, view);
    view.LoadView();
});