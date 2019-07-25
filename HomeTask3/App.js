window.addEventListener('load', () => {
    const model = new Model(),
        view = new View(model),
        controller = new Controller(model, view);
    view.LoadView();
});