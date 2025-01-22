export default class Unauthorized extends Error {
    constructor() {
        super("Invalid credentials.");
        this.name = Unauthorized.name;
    }
}