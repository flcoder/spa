export class NavigationError extends Error {
    constructor(slugs) {
        super('Slugs: ' + slugs.join(', '));
    }
}
//# sourceMappingURL=navigation-error.js.map