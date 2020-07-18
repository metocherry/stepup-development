import { Stack } from "./stack";

describe("[Stack]", () => {
    it("사용자는 데이터 한개를 추가할 수 있다.", () => {
        const stack = new Stack<number>();
        stack.push(1);

        expect(stack.size()).toBe(1);

        stack.push(2);

        expect(stack.size()).toBe(2);
    });

    it("사용자는 데이터 한개를 삭제할 수 있다.", () => {
        const stack = new Stack<number>();
        stack.push(1);
        stack.push(2);

        stack.pop();

        expect(stack.size()).toBe(1);

        stack.pop();
        expect(stack.size()).toBe(0);
    });

    it("사용자는 마지막에 추가된 데이터를 알 수 있다.", () => {
        const stack = new Stack<number>();
        stack.push(1);
        stack.push(2);

        expect(stack.peek()).toBe(2);

        stack.pop();
        stack.pop();
        expect(stack.peek()).toBe(null);
    });

    it("사용자는 스택 안에 데이터가 비어있는지 확인 할 수 있다.", () => {
        const stack = new Stack<number>();
        stack.push(1);

        expect(stack.empty()).toBe(false);

        stack.pop();
        expect(stack.empty()).toBe(true);
    });

    it("사용자는 스택이 가득 차 있는지 확인 할 수 있다.", () => {
        const stack = new Stack<number>(2);
        stack.push(1);

        expect(stack.full()).toBe(false);

        stack.push(2);
        expect(stack.full()).toBe(true);
    });

    it("사용자는 입력된 데이터의 인덱스를 알 수 있다.", () => {
        const stack = new Stack<number>(2);
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.indexOf(2)).toBe(1);
        expect(stack.indexOf(3)).toBe(-1);
    });

    it("사용자는 스택을 비울 수 있다.", () => {
        const stack = new Stack<number>(2);
        stack.push(1);
        stack.push(2);

        stack.clear();

        expect(stack.size()).toBe(0);
    });
});
