# SQLite

## Command Line

```bash
sqlite3
```

## DDL(Data Definition Language)

- CREATE TABLE
- DROP TABLE
- ALTER TABLE
- TRUNCATE

```sql
CREATE TABLE ORGANIZATION_LINK (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  reg_no TEXT NOT NULL,
  org_code TEXT NOT NULL,
  org_subcode TEXT,
  login_method TEXT NOT NULL,
  location TEXT NOT NULL,
  create_datetime DATETIME DEFAULT (datetime('now'))
);
```

```sql
CREATE TABLE ORGANIZATION_LINK_CARD (
  org_link_id INTEGER NOT NULL,
  no TEXT NOT NULL,
  name TEXT,
  create_datetime DATETIME DEFAULT (datetime('now'))
);
```

```sql
CREATE TABLE ORGANIZATION_LINK_ACCOUNT (
  org_link_id INTEGER NOT NULL,
  no TEXT NOT NULL,
  name TEXT,
  nick_name TEXT,
  create_datetime DATETIME DEFAULT (datetime('now'))
);
```

## DML(Data Manipulation Language)

- SELECT
- INSERT
- UPDATE
- DELETE

```sql
INSERT INTO ORGANIZATION_LINK (user_id, reg_no, org_code, org_subcode, login_method, location)
  VALUES ('test_id1', '1118222222', 'card', '016', 'ID', 'location');

INSERT INTO ORGANIZATION_LINK (user_id, reg_no, org_code, org_subcode, login_method, location)
  VALUES ('test_id1', '1118222222', 'card', '017', 'CERT', 'location');

INSERT INTO ORGANIZATION_LINK (user_id, reg_no, org_code, org_subcode, login_method, location)
  VALUES ('test_id2', '2228122222', 'bank', '001', 'CERT', 'location');


INSERT INTO ORGANIZATION_LINK_CARD (org_link_id, no, name)
  VALUES (1, '1111222233334444', '신용카드');

INSERT INTO ORGANIZATION_LINK_CARD (org_link_id, no, name)
  VALUES (1, '1111222233335555', '신용카드');

INSERT INTO ORGANIZATION_LINK_CARD (org_link_id, no, name)
  VALUES (2, '3333222233335555', '신용카드');


INSERT INTO ORGANIZATION_LINK_ACCOUNT (org_link_id, no, name, nick_name)
  VALUES (3, '111333377777', '적금', '저축');

INSERT INTO ORGANIZATION_LINK_ACCOUNT (org_link_id, no, name, nick_name)
  VALUES (3, '222333377777', '입출금', '일반');
```

## DCL(Data Control Language)

- GRANT
- REVOKE
