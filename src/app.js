export class App {
    configureRouter(config, router) {
        config.map([
            { route: '', moduleId: 'pages/home/home', title: 'Home' },
            { route: 'memo', moduleId: 'pages/memo/memo', title: 'Memo' },
        ])
        this.router = router;
    }
}
