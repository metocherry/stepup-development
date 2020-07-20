import { LinkedNode } from "./linked-node";

export class LinkedList<T> implements Iterable<T> {
    #head?: LinkedNode<T>;

    #tail?: LinkedNode<T>;

    #pointer: number = -1;

    constructor() {}

    [Symbol.iterator](): IterableIterator<T> {
        let node: LinkedNode<T> | undefined;

        return {
            next: (): IteratorResult<T, undefined> => {
                node = node ? node.next : this.#head;

                return node
                    ? { done: false, value: node!.value }
                    : { done: true, value: undefined };
            },
            [Symbol.iterator](): IterableIterator<T> {
                return this;
            }
        };
    }

    /**
     * 현재 크기를 리턴한다.
     */
    public size(): number {
        return this.#pointer + 1;
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
     * 첫번쩨 데이터를 조회한다.
     */
    public findFirst(): T | undefined {
        this.assertEmpty();
        return this.#head?.value;
    }

    /**
     * 마지막 데이터를 조회한다.
     */
    public findLast(): T | undefined {
        this.assertEmpty();
        return this.#tail?.value;
    }

    /**
     * 데이터와 일치하는 인덱스를 조회한다.
     * @param data
     */
    public indexOf(data: T): number {
        let node = this.#head;

        for (let i = 0; i < this.#pointer + 1; i++) {
            if (node!.value == data) {
                return i;
            }

            node = node!.next;
        }

        return -1;
    }

    /**
     * 입력된 데이터를 가지고 있는지 판단한다.
     * @param data
     */
    public contain(data: T): boolean {
        let node = this.#head;

        for (let i = 0; i < this.#pointer + 1; i++) {
            if (node!.value == data) {
                return true;
            }

            node = node!.next;
        }

        return false;
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
     * 특정 인덱스에 데이터를 추가한다.
     * @param index
     * @param data
     */
    public addAt(index: number, data: T): void {
        this.assertValidIndex(index);

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
     * 마지막 노드부터 순선대로 데이터를 삭제한다.
     */
    public remove(): void {
        this.assertEmpty();

        const node = this.findNode(this.#pointer - 1);
        node!.next = undefined;
        this.#tail = node;

        this.#pointer--;
    }

    /**
     * 인덱스와 일치하는 데이터를 삭제한다.
     * @param index
     */
    public removeAt(index: number): void {
        this.assertValidIndex(index);

        if (index == 0) {
            const node = this.#head!.next;
            this.#head = node;
        }
        else {
            const node = this.findNode(index - 1);
            const temp = node!.next!.next;
            node!.next = temp;
        }

        this.#pointer--;
    }

    /**
     * 리스트가 비어있는데 판단한다.
     */
    public isEmpty(): boolean {
        return this.#pointer < 0;
    }

    /**
     * 리스트를 비운다.
     */
    public clear(): void {
        this.#head = undefined;
        this.#tail = undefined;
        this.#pointer = -1;
    }

    // 시간복잡도 O(N^2)
    // 공간복잡도 O(N)
    // 해시맵을 쓰면, 공간복잡도가 증가하지만, 해시맵을 쓰지 않으면 시간 복잡도가 증가한다.
    // removeDuplicates(): void {
    //     const n = this.#head;

    //     while (n != null && n.next != null) {
    //         let r = n;
    //         while (r.next != null) {
    //             if (n.data == r?.next.data) {
    //                 r.next = r?.next.next;
    //             }
    //             else {
    //                 r = r?.next;
    //             }
    //         }

    //         n = n?.next;
    //     }
    // }

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

    private invalidIndexError(): Error {
        return new Error("The index is invalid");
    }

    /**
     * 인덱스가 유효하지 않으면 에러를 발생시킨다.
     */
    private assertValidIndex(index: number): never | void {
        if (!this.isValidIndex(index)) {
            throw new Error("The index is invalid");
        }
    }

    /**
     * 리스트가 비어있다면 에러를 발생시킨다.
     */
    private assertEmpty(): never | void {
        if (this.isEmpty()) {
            throw new Error("The LinkedList is empty.");
        }
    }
}
