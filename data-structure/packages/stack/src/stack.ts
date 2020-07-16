export class Stack<T> {
    /**
     * 스택 저장소
     */
    #storage: { [key: number]: T } = {};

    /**
     * 스택 위치(top)
     */
    #pointer: number = 0;

    /**
     * 스택 용량
     * @private
     */
    #max_capacity: number;

    constructor(capacity: number = 10) {
        this.#max_capacity = capacity;
    }

    /**
     * 데이터를 추가한다.
     * @param data
     */
    public push(data: T): void {
        if (this.full()) {
            return;
        }

        this.#storage[this.#pointer] = data;
        this.#pointer++;
    }

    /**
     * 데이터를 삭제한다.
     * @param data
     */
    public pop(): void {
        if (this.empty()) {
            return;
        }

        delete this.#storage[this.#pointer - 1];
        this.#pointer--;
    }

    /**
     * 가장 최근에 입력된 데이터(top)를 리턴한다.
     * @param data
     */
    public peek(): T | null {
        if (this.empty()) {
            return null;
        }

        return this.#storage[this.#pointer - 1];
    }

    /**
     * 입력된 데이터의 Index 를 리턴한다.
     * 일치하는 데이터가 없다면, -1 을 리턴한다.
     * @param data
     */
    public indexOf(data: T): number {
        let index = this.#pointer;

        while (--index > 0) {
            if (this.#storage[index] === data) {
                return index;
            }
        }

        return -1;
    }

    /**
     * 스택을 초기화한다.
     */
    public clear(): void {
        this.#pointer = 0;
        this.#storage = {};
    }

    /**
     * 스택이 비어있는지 판단한다.
     */
    public empty(): boolean {
        return this.#pointer < 1;
    }

    /**
     * 스택이 가득 차 있는지 판단한다.
     */
    public full(): boolean {
        return this.#pointer >= this.#max_capacity;
    }

    /**
     * 스택의 현재 크기를 리턴한다.
     */
    public size(): number {
        return this.#pointer;
    }
}
