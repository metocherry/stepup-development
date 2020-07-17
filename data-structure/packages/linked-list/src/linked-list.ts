import { LinkedNode } from "./linked-node";
import { cursorTo } from "readline";

export class LinkedList<T> {
    #head?: LinkedNode<T>;
    #tail?: LinkedNode<T>;

    #pointer: number = -1;

    constructor() {}

    /**
     * 현재 크기를 리턴한다.
     */
    public size(): number {
        return this.#pointer + 1;
    }

    /**
     * 데이터를 추가한다.
     * @param data
     */
    public add(data: T): void {
        const newNode = new LinkedNode(data);

        if (!this.#head) {
            this.#head = newNode;
            this.#tail = this.#head;
        } else {
            this.#tail!.next = newNode;
            this.#tail = newNode;
        }

        this.#pointer++;
    }

    /**
     * 인덱스에 위치한 데이터를 조회한다.
     * @param index
     */
    public find(index: number): T | undefined {
        if (!this.isValidIndex(index)) {
            throw this.invalidIndexError();
        }

        return this.findNode(index)?.value;
    }

    /**
     * 특정 인덱스에 데이터를 추가한다.
     * @param index
     * @param data
     */
    public addAt(index: number, data: T): void {
        if (!this.isValidIndex(index)) {
            throw this.invalidIndexError();
        }

        const newNode = new LinkedNode(data);

        if (index == 0) {
            newNode.next = this.#head;
            this.#head = newNode;
        }
        else {
            const node = this.findNode(index - 1);
            newNode.next = node!.next;
            node!.next = newNode;
        }

        this.#pointer++;
    }

    /**
     * 인덱스와 일치하는 노드를 조회한다.
     * @param index
     */
    private findNode(index: number): LinkedNode<T> | undefined {
        let node = this.#head;

        for (let i = 0; i < index; i++) {
            node = node!.next;
        }

        return node;
    }

    /**
     * 인덱스가 유효한지 판단한다.
     * @param index
     */
    private isValidIndex(index: number): boolean {
        return index >= 0 && index <= this.#pointer;
    }

    /**
     * 유효하지 않은 인덱스 에러를 리턴한다.
     */
    private invalidIndexError(): Error {
        return new Error("The index is invalid");
    }
}
