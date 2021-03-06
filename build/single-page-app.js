import { NavigationError } from './lib';
export class SinglePageApp {
    constructor() {
        const checkReadyState = () => {
            if (document.readyState === 'interactive')
                this.navigate();
        };
        addEventListener('hashchange', () => this.navigate());
        document.addEventListener('readystatechange', checkReadyState);
        checkReadyState();
    }
    get pages() {
        return {};
    }
    get slugs() {
        const hash = location.hash || '#/hosts';
        const slugs = hash.split('/');
        slugs.shift();
        return slugs.slice(0);
    }
    navigate() {
        const { pages } = this;
        const { slugs } = this;
        const slug = slugs.shift();
        const page = slug ? pages[slug] || pages._404 : pages._home;
        if (page)
            return page.activate(slugs);
        throw new NavigationError(slugs);
    }
}
//# sourceMappingURL=single-page-app.js.map