import { LinkedNode } from "./linked-node";
import { cursorTo } from "readline";

export class LinkedList<T> {
    #head?: LinkedNode<T>;

    #count: number = 0;

    constructor() {}

    /**
     * 현재 크기를 리턴한다.
     */
    public size(): number {
        return this.#count;
    }

    /**
     * 데이터를 추가한다.
     * @param data
     */
    public add(data: T): void {
        const node = new LinkedNode(data);

        if (!this.#head) {
            this.#head = node;
        }
        else {
            let current = this.#head;

            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }

        this.#count++;
    }
}
