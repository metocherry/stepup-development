export class LinkedNode<T> {
    #data: T;

    public next?: LinkedNode<T>;

    constructor(data: T) {
        this.#data = data;
    }
}
