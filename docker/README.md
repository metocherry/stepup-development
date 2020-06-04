# Docker

This guide is written for user who use Mac OS.

Install Deno on Mac or Linux

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

## Install Centos 7

```bash
docker pull centos:centos7
```

if the error is occured such as 'Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?',
you should install docker hub. You can download [here](https://hub.docker.com/editions/community/docker-ce-desktop-mac/)


You can check the downloaded image using the command below

```bash
docker images
```

Downloaded Images :

```txt
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
centos              centos7             b5b4d78bc90c        4 weeks ago         203MB
```

## Run Container

Comand Line :

```bash
docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]
```

- `-d` : Run container in background and print container ID
- `-p` : Publish a container's port(s) to the host
- `-v` : Bind mount a volume
- `-e` : Set environment variables
- `--name` : Assign a name to the container
- `--rm` : Automatically remove the container when it exits
- `-it` : `-i` is that keep `STDIN` open even if not attached, `-t` is that allocate a pseudo-TTY
- `-link` :

-d	detached mode 흔히 말하는 백그라운드 모드
-p	호스트와 컨테이너의 포트를 연결 (포워딩)
-v	호스트와 컨테이너의 디렉토리를 연결 (마운트)
-e	컨테이너 내에서 사용할 환경변수 설정
–name	컨테이너 이름 설정
–rm	프로세스 종료시 컨테이너 자동 제거
-it	-i와 -t를 동시에 사용한 것으로 터미널 입력을 위한 옵션
–link	컨테이너 연결 [컨테이너명:별칭]


Create container, start, and exit.

```bash
docker run centos:centos7
```

Confirm list of container

```bash
docker container ls
```

컨테이너는 정상적으로 실행됐지만 뭘 하라고 명령어를 전달하지 않았기 때문에 컨테이너는 생성되자마자 종료됩니다. 컨테이너는 프로세스이기 때문에 실행중인 프로세스가 없으면 컨테이너는 종료됩니다.

```bash
docker run --rm -it centos:centos7 /bin/bash
```




image : 도커 컨테이너를 구성하는 파일 시스템과 실행할 애플리케이션 설정을 하나로 합친 것으로, 컨테이너를 생성하는 템플릿 역할을 한다.
container : 도커 이미지를 기반으로 생성되며, 파일 시스템과 애플리케이션이 구체화돼 실행되는 상태
tty: TTY(teletypewriter) 항목은 리눅스 디바이스 드라이브중에서 콘솔이나 터미널을 의미
console mode : 모니터, 키보드로 직접 본체에 연결된 모드. 2번째 콘솔부터는 가상콘솔. 두번째 모니터, 키보드는 실제로 존재하지 않으므로 '가상(pseudo)' 붙는다.
