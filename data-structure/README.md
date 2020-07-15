# Data Structure

## Table of Contents

- [Stack](#stack)

## Prepare

Pull docker image

```shell
docker pull metocherry/centos8-node-with-deno:latest
```

And then,

```shell
docker run \
  -it \
  --rm \
  --name data-structure \
  -v "$(pwd)"/:/app:cached \
  metocherry/centos8-node-with-deno
```

## Stack

스택은 마지막에 들어온 것이 먼저 나가는 LIFO(Last In First Out) 구조를 가진 자료 구조입니다.  
일상 생활에서 책을 쌓고, 책을 꺼내는 것과 브라우저에서 서핑 후 뒤로가기 버튼을 누르는 것과 같습니다.

![스택 구조](./imgs/stack.png)

스택은 접근 속도가 빠르지만 변경이 용이하지 않습니다. 배열은 생성할 때, 메모리의 연속된 공간에 데이터를 저장합니다. 그렇기 때문에 검색할 때는 데이터를 빠르게 찾을 수 있지만, 변경이 일어났을 때는 새로운 배열을 생성하고, 생성된 배열에 데이터를 복사해야하기 때문에 느려집니다. 복사해야할 데이터가 많지 않다면, 크게 상관 없지만 데이터가 많아질수록 점점 더 느려질 것입니다.

### Requirement

1. 사용자는 데이터 한개를 추가할 수 있다.
2. 사용자는 데이터 한개를 삭제할 수 있다.
3. 사용자는 마지막에 추가된 데이터를 알 수 있다.
4. 사용자는 스택 안에 데이터가 비어있는지 확인 할 수 있다.
5. 사용자는 스택이 가득 차 있는지 확인 할 수 있다.
6. 사용자는 입력된 데이터의 인덱스를 알 수 있다.
7. 사용자는 스택을 비울 수 있다.

### Methods

1. push()
2. pop()
3. peek()
4. empty()
5. full()
6. indexOf()
7. clear()
