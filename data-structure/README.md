# Data Structure

## Table of Contents

- [Stack](#stack)
- [LinkedList](#linked-list)

## Prepare

Pull docker image

```shell
docker pull metocherry/centos8-node-with-deno:latest
```

And then,

```shell
./tasks/run.sh
```

## Stack

스택은 마지막에 들어온 것이 먼저 나가는 LIFO(Last In First Out) 구조를 가진 자료 구조입니다.  
일상 생활에서 책을 쌓고, 책을 꺼내는 것과 브라우저에서 서핑 후 뒤로가기 버튼을 누르는 것과 같습니다.

![스택 구조](./imgs/stack.png)

스택은 접근 속도가 빠르지만 변경이 용이하지 않습니다. 배열은 생성할 때, 메모리의 연속된 공간에 데이터를 저장합니다. 그렇기 때문에 검색할 때는 데이터를 빠르게 찾을 수 있지만, 변경이 일어났을 때는 새로운 배열을 생성하고, 생성된 배열에 데이터를 복사해야하기 때문에 느려집니다. 복사해야할 데이터가 많지 않다면, 크게 상관 없지만 데이터가 많아질수록 점점 더 느려질 것입니다.

### Requirement

1. 사용자는 하나의 데이터 추가할 수 있다(push)
2. 사용자는 하나의 데이터 삭제할 수 있다(pop)
3. 사용자는 마지막에 추가된 데이터를 알 수 있다(peek)
4. 사용자는 스택이 비어있는지 확인 할 수 있다(empty)
5. 사용자는 스택이 가득 차 있는지 확인 할 수 있다(full)
6. 사용자는 입력된 데이터와 일치하는 데이터의 인덱스를 알 수있다(indexOf)
7. 사용자는 스택을 비울 수 있다(clear)


## LinkedList

LinkedList 는 이름 그대로 노드들이 연결되어 있습니다. ArrayList 와는 다르게 메모리에 선형으로 저장되지 않고, 임의의 공간에 저장됩니다. 그래서 순회하기 위해 노드는 다음 노드의 위치를 알고 있습니다. 

![메모리 구조](./imgs/list_and_linked_list_memory.png)

### LinkedList 특징

1. 크기의 제한이 없습니다. 배열은 생성할 때 일정한 크기를 가지고 생성됩니다. 만약, 생성된 배열의 크기를 초과해서 데이터를 추가해야한다면, 새로운 배열을 다시 생성해서, 이전에 생성했던 데이터를 복사해주어야합니다. 반대로, LinkedList 는 포인터를 이용해 연결되기 때문에 데이터를 추가하고, 데이터가 저장된 포인터를 이전 노드에 알려주면 되기 때문에 크기에 대한 제한이 없습니다.
2. 추가, 삭제에 대한 작업이 용이합니다. 앞에 말한대로 포인터를 이용해 참조되기 때문에, 추가나 삭제가 발생했을 때 메모리 위치를 변경할 필요 없이 연결된 포인터가 변경하면됩니다.
3. 공간이 효율성이 ArrayList 보다 떨어집니다. 노드에 포인터를 저장해야하기 때문에, 더 많은 메모리가 필요합니다.
4. 검색이 ArrayList 보다 느립니다. 포인터를 통해 순회하기 때문에 찾기 위한 시간이 소요됩니다.

### LinkedList 구조

LinkedList 는 `head` 에서 순회를 시작하고, `next` 를 통해 다음 노드를 찾습니다. 그리고 `next` 값이 존재하지 않는다면, 순회를 마칩니다. 하지만 LinkedList 종류에 따라 순환하기도 합니다.

- head: 출입구로서, 첫번째 노드를 가르킵니다.
- value: 저장되는 데이터 필드입니다.
- next: 다음 노드의 포인터를 저장하여, 노드와 노드를 연결합니다.

![LinkedList 구조](./imgs/linked_list_structure.png)

### LinkedList 종류

- Single Linked List
- Single Circular Linked List
- Doubly Linked List
- Doubly Circular Linked List

![LinkedList 종류](./imgs/type_of_linked_list.jpeg)

### Requirement

- 사용자는 배열의 크기를 알 수 있다.(size)
- 사용자는 특정 인덱스 뒤에 데이터를 추가할 수 있다. 디폴트는 가장 마자막 인덱스이다.(add)
 사용자는 하나의 데이터를 가장 처음에 추가할 수 있다(addFirst)
- 사용자는 하나의 데이터를 마지막에 추가할 수 있다(addLast)
- 사용자는 특정 인덱스의 데이터를 삭제할 수 있다. 디폴트 인덱스는 0이다(remove)
- 사용자는 첫번째 데이터를 삭제할 수 있다(removeFirst)
- 사용자는 마지막 데이터를 삭제할 수 있다(removeLast)
- 사용자는 배열을 비울 수 있다.(clear)
- 사용자는 배열이 비어있는지 확인 할 수 있다.(empty)
- 사용자는 입력된 데이터와 일치하는 데이터의 인덱스를 알 수있다(indexOf)
- 사용자는 배열에 입력된 데이터가 존재하는지 판단할 수 있다(contain)

### Methods


## References

- [생활코딩 자료구조](https://opentutorials.org/module/1335/8821)
- [ArrayList와 LinkedList란 무엇인가?](https://coding-factory.tistory.com/228)
