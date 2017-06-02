import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome', settings: { align: 'left' } },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users', settings: { align: 'left' } },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router', settings: { align: 'right' } }
    ]);

    this.router = router;
  }
}
