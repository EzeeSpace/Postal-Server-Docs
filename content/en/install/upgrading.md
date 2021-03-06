---
title: Upgrading
description: ''
position: 2.2
category: Installation
---

<alert>
If you're not currently running Postal v2, you'll need to follow the <a href="/install/upgrade-to-v2">Upgrading from 1.x</a> documentation before you can use these instructions.
</alert>

Once you have installed Postal, you can upgrade it by running this command. This will always upgrade you to the latest version of Postal that is available.

```bash
postal upgrade
```

This will do a few things in the following order:

* Fetch the latest copy of the installation helpers repository using Git.
* Pull the latest version of the Postal containers.
* Perform any necessary updates to the database schema.
* Restart all running containers

This is not a zero downtime upgrade so it is recommended to do this at a time when traffic will be low and you have scheduled the maintenance as appropriate. If you need zero downtime upgrades, you will need to look for alternative container orchestration systems that can handle this (such as Kubernetes).
