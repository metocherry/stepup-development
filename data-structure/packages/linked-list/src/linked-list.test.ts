import { LinkedList } from "./linked-list";

describe("[LinkedList]", () => {
    it("사용자는 배열의 크기를 알 수 있다.", () => {
        const list = new LinkedList<number>();
        expect(list.size()).toBe(0);

        list.add(10);
        expect(list.size()).toBe(1);
    });

    it("사용자는 하나의 데이터를 추가할 수 있다.", () => {
        const list = new LinkedList<number>();
        list.add(10);

        expect(list.size()).toBe(1);
    });

    it("사용자는 특정 인덱스 뒤에 데이터를 추가할 수 있다.", () => {
        const list = new LinkedList<number>();
        list.addTo(0, 10);

        expect(list.size()).toBe(1);
    });
});
