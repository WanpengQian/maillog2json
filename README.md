# maillog2json

This script analyzes mail.log and outputs the data in JSON format.

Usage:
```
cat /var/log/mail.log | main.js
```

mail.log:
```
Apr 24 17:11:39 mail postfix/pickup[3690]: 03569302AFC: uid=5001 from=<aaa@domain.com>
Apr 24 17:11:39 mail postfix/qmgr[25322]: 03569302AFC: from=<aaa@domain.com>, size=1073860, nrcpt=3 (queue active)
Apr 24 17:11:39 mail postfix/pipe[4369]: 03569302AFC: to=<bbb@domain.com>, relay=dovecot, delay=0.06, delays=0.02/0/0/0.04, dsn=2.0.0, status=sent (delivered via dovecot service)
Apr 24 17:11:39 mail postfix/pipe[4323]: 03569302AFC: to=<ccc@domain.com>, relay=dovecot, delay=0.06, delays=0.02/0/0/0.05, dsn=2.0.0, status=sent (delivered via dovecot service)
Apr 24 17:11:39 mail postfix/pipe[4377]: 03569302AFC: to=<ddd@domain.com>, relay=dovecot, delay=0.07, delays=0.02/0.01/0/0.04, dsn=2.0.0, status=sent (delivered via dovecot service)
Apr 24 17:11:39 mail postfix/qmgr[25322]: 03569302AFC: removed
```

It will output:
```
{
  "03569302AFC": {
    "id": "03569302AFC",
    "from": "<aaa@domain.com>",
    "size": 1073860,
    "date": "Apr 24 17:11:39",
    "to": [
      "<bbb@domain.com>",
      "<ccc@domain.com>",
      "<ddd@domain.com>"
    ]
  }
}
```
for further processing.

It is recommended to process the last hour's data using a cron job.
