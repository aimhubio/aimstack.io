---
author: Tatyana Manaseryan
categories:
  - New Releases
date: 2025-03-25T17:37:26.107Z
title: Aim 3.28 — Performance improvements & Key fixes
image: /images/dynamic/medium1.png
description: Aim v3.28 is out - Improved performance by removing redundant
  checks and bypassing runs known to yield false results, new AimCallback for
  Hugging Face distributed runs and more fixes..
draft: false
---
We just dropped Aim 3.28!! This release is full of performance improvements and bug fixes. 🎉

> *We are on a mission to democratize AI dev tools and are incredibly lucky to have the support of the community. Every question and every issue makes Aim better!*

Big shoutout to [@bluenote10](https://github.com/bluenote10), [@qzed](https://github.com/qzed),  [@VassilisVassiliadis](https://github.com/VassilisVassiliadis), [@sbatchelder](https://github.com/sbatchelder) and [@guspan-tanadi](https://github.com/guspan-tanadi) for their contributions! 🙌

## ⚡ What’s New?

* Performance improvements
* New `AimCallback` for Hugging Face distributed runs
* Better handling of remote tracking exceptions

![](/images/dynamic/screenshot-2025-03-25-at-16.44.13.png)

## 🛠️ Notable Fixes and Improvements

* \[fix] Resolve issue with adding duplicate tags #3296
* \[fix] Improve error messages for remote tracking by #3303
* \[feat] Skip metrics check when run is known to yield false result #3288
* \[feat] Remove metric version check to improve metric retrieval performance #3307
* \[fix] Resolve issues on data points connection on epoch alignment #3283

Thanks to [cdalinghaus](https://github.com/cdalinghaus) for reporting[ issue #3278](https://github.com/aimhubio/aim/issues/3278) around incorrect data point connections when metrics are logged out of order. We’ve fixed that. ✅

![](/images/dynamic/screenshot-2025-03-25-at-17.16.40.png)

Before the fix:

![](/images/dynamic/screenshot-2025-03-24-at-17.36.26.png)

After the fix:

![](/images/dynamic/screenshot-2025-03-24-at-17.38.24.png)

**Thanks to the Aim community for helping us find these issues.**

🙌 Welcome New Contributors!

* [@bluenote10](https://github.com/bluenote10) made their first contribution in [\#3281.](https://github.com/aimhubio/aim/pull/3281)
* [](https://github.com/aimhubio/aim/pull/3281)[@qzed](https://github.com/qzed) made their first contribution in [\#3298.](https://github.com/aimhubio/aim/pull/3298)

So glad to have you on board!

## Learn More



[Aim is on a mission to democratize AI dev tools. 🙌](https://aimstack.readthedocs.io/en/latest/overview.html)[](https://aimstack.readthedocs.io/en/latest/overview.html)

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring.

Join the [Aim community](https://community.aimstack.io/)!

Don’t forget to leave us a star on [GitHub](https://github.com/aimhubio/aim) if you think Aim is useful ⭐️.