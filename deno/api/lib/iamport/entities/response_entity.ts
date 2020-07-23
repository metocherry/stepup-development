export interface ResponseEntity<T> {
    code: number;
    message?: string;
    response: T;
}
