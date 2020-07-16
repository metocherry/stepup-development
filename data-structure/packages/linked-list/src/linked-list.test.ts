import { LinkedList } from "./linked-list";

describe("[LinkedList]", () => {
    it("사용자는 배열의 크기를 알 수 있다", () => {
        const list = new LinkedList<number>();
        expect(list.size()).toBe(0);
    });
});
