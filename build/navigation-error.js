"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationError = void 0;
class NavigationError extends Error {
    constructor(slugs) {
        super('Slugs: ' + slugs.join(', '));
    }
}
exports.NavigationError = NavigationError;
//# sourceMappingURL=navigation-error.js.map