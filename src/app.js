export class App {
    configureRouter(config, router) {
        config.map([
            { route: '', moduleId: 'pages/home/home', title: 'Home' },
            { route: 'agua', moduleId: 'pages/agua/agua', title: 'Agua' },
        ])
        this.router = router;
    }
}
