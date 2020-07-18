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
    });

    describe("사용자는 하나의 데이터를 삭제할 수 있다.", () => {
        it("리스트가 비어 있다면, 에러가 발생한다.", () => {
            const list = new LinkedList<number>();
            expect(() => list.remove()).toThrow();
        });

        it("리스트에 데이터가 있다면, 마지막 데이터를 삭제한다.", () => {
            const list = new LinkedList<number>();
            list.add(10);
            list.add(20);
            list.add(30);

            list.remove();

            expect(list.size()).toBe(2);
            expect(list.findLast()).toBe(20);
        });
    });

    describe("사용자는 특정 인덱스의 데이터를 삭제할 수 있다.", () => {
        it("리스트가 비어 있다면, 에러가 발생한다.", () => {
            const list = new LinkedList<number>();
            expect(() => list.removeAt(0)).toThrow();
        });

        it("인덱스가 유효하지 않은면, 에러가 발생한다.", () => {
            const list = new LinkedList<number>();
            list.add(10);

            expect(() => list.removeAt(1)).toThrow();
        });

        it ("리스트에 데이터가 한 개 존재할 때, 인덱스 0 의 데이터를 삭제한다.", () => {
            const list = new LinkedList<number>();
            list.add(10);

            list.removeAt(0);

            expect(list.size()).toBe(0);
            expect(() => list.findFirst()).toThrow();
        })

        it("리스트에 데이터가 세 개 존재할 때, 인덱스 1 의 데이터를 삭제한다.", () => {
            const list = new LinkedList<number>();
            list.add(10);
            list.add(20);
            list.add(30);

            list.removeAt(1);

            expect(list.size()).toBe(2);
            expect(list.find(1)).toBe(30);
        });
    });

    it("사용자는 리스트를 비울 수 있다.", () => {
        const list = new LinkedList<number>();
        list.add(10);
        list.add(20);

        list.clear();

        expect(list.size()).toBe(0);
    });

    describe("사용자는 배열이 비어있는지 확인할 수 있다.", () => {
        it("리스트가 비어있다면, true를 리턴한다.", () => {
            const list = new LinkedList<number>();

            expect(list.isEmpty()).toBe(true);
        });

        it("리스트에 데이터가 있다면, false를 리턴한다.", () => {
            const list = new LinkedList<number>();

            list.add(10);

            expect(list.isEmpty()).toBe(false);
        });
    });

    describe("사용자는 입력된 데이터와 가장 먼저 일치하는 데이터의 인덱스를 찾을 수 있다.", () => {
        it("일치하는 데이터가 없다면, -1을 리턴한다.", () => {
            const list = new LinkedList<number>();

            expect(list.indexOf(0)).toBe(-1);
        });

        it("일치하는 데이터가 있다면, 데이터가 위치한 인덱스를 리턴한다.", () => {
            const list = new LinkedList<number>();
            list.add(10);
            list.add(20);
            list.add(30);

            expect(list.indexOf(30)).toBe(2);
        });
    });

    describe("사용자는 배열에 입력된 데이터가 존재하는지 판단할 수 있다.", () => {
        it("일차하는 데이터가 없다면, false를 리턴한다.", () => {
            const list = new LinkedList<number>();

            expect(list.contain(10)).toBe(false);
        });

        it("일차하는 데이터가 있다면, true를 리턴한다.", () => {
            const list = new LinkedList<number>();
            list.add(10);
            list.add(20);
            list.add(30);

            expect(list.contain(10)).toBe(true);
        });
    });

    it("사용자는 배열을 순회할 수 있다.", () => {
        const list = new LinkedList<number>();
        list.add(10);
        list.add(20);
        list.add(30);

        expect([...list]).toEqual([10, 20, 30]);
    });
});
