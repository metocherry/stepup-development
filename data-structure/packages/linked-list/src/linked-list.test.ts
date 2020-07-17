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

    describe("사용자는 인덱스와 일치하는 데이터를 조회할 수 있다.", () => {
        it("입력된 인덱스가 유효하지 않으면, 에러가 발생한다.", () => {
            const list = new LinkedList<number>();
            expect(() => list.find(1)).toThrow();
        });

        it("입력된 인덱스에 데이터가 존재하면, 데이터를 리턴한다.", () => {
            const list = new LinkedList<number>();
            list.add(10);

            expect(list.find(0)).toBe(10);

            list.add(20);
            list.add(30);

            expect(list.find(1)).toBe(20);
        });
    });

    describe("사용자는 특정 인덱스 데이터를 추가할 수 있다.", () => {
        it("입력된 인덱스가 유효하지 않으면, 에러가 발생한다.", () => {
            const list = new LinkedList<number>();

            expect(() => list.addAt(-1, 10)).toThrow();
        });

        it("입력된 인덱스가 유효하면, 데이터를 추가한다.", () => {
            const list = new LinkedList<number>();
            list.add(10);
            list.add(20);

            list.addAt(0, 50);

            expect(list.find(0)).toBe(50);
            expect(list.size()).toBe(3);

            list.addAt(2, 30);

            expect(list.find(2)).toBe(30);
            expect(list.size()).toBe(4);
        });
    })
});
