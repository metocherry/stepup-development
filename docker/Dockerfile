FROM centos:centos7

COPY . /app

RUN [ curl -fsSL https://deno.land/x/install/install.sh | sh ]

CMD [ "bash scripts/start.sh" ]
