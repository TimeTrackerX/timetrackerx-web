export default interface JwtServiceInterface {
    get: () => Promise<string | null>;
    set: (token: string) => Promise<void>;
    delete: () => Promise<void>;
}
