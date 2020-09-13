export class NavigationError extends Error {
  constructor(slugs:string[]) {
    super('Slugs: ' + slugs.join(', '))
  }
}