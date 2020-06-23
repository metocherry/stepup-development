#!/usr/bin/env bash

dnf update -y
dnf install -y langpacks-en
dnf install -y gettext-devel openssl-devel curl-devel expat-devel perl-CPAN perl-devel zlib-devel gcc autoconf

dnf install sqlite
