---
author: Tatyana Manaseryan
categories:
  - New Releases
date: 2024-06-17T19:14:56.982Z
title: Aim 3.21 - Python 3.12 Support, Ability to delete whole experiment
image: /images/dynamic/aim-3.21.png
description: Aim 3.21 is shipped! Check out the latest improvements.
draft: false
---
Hey community, Aim 3.21 is shipped!

Stay updated with more use-cases and news on our [AimStack Twitter.](https://twitter.com/aimstackio)

\---

> We are on a mission to democratize AI dev tools and are incredibly lucky to have the support of the community. Every question and every issue makes Aim better!

Congratulations and thanks to [mauricekraus](https://github.com/mauricekraus), [jasonmads](https://github.com/jasonmads), [synapticarbors](https://github.com/synapticarbors) and [SandersAaronD](https://github.com/SandersAaronD) for their contributions. 🙌



##  Key highlights:

* Python 3.12 support
* Ability to delete whole experiment
* Improvements in large objects remote tracking
* Improvements in running UI on Jupyter Notebook



### Python 3.12 support



With Aim 3.21, you can install and use Aim in your Python 3.12 projects. 🎉

Thanks to [mahnerak](https://github.com/aimhubio/aim/pull/3161) for adding Python 3.12 builds! 

### Ability to delete whole experiment



You can now delete entire experiments without manually selecting and deleting individual runs. This resolves the issue of empty experiments remaining after all runs are deleted, providing a more streamlined workflow.

Delete all runs of an experiment:

![](/images/dynamic/337321019-d2c0797e-3ec7-442c-92d0-069672eac028.png)

The delete functionality is currently available only on the experiment settings tab, ensuring consistency with the existing run detail deletion process. Shoutout to [mauricekraus](https://github.com/mauricekraus) for adding this much needed feature! 🚀

### Improvements in Large Objects Remote Tracking

Previously, large validation images would sometimes encounter 1009 (message too big) errors during the upload. 

Thanks to [jasonmads](https://github.com/jasonmads), this issue has been resolved by increasing the websockets max_size for large images sent to the server. 

### Improvements in Running Aim UI on Jupyter Notebook

Thanks to [synapticarbors](https://github.com/synapticarbors) help, Aim UI doesn’t have any more issues with rendering on Jupyter Notebook. 

GitHub Release Notes: https://github.com/aimhubio/aim/releases/tag/v3.21.0

## Learn More



[Aim is on a mission to democratize AI dev tools. ](https://aimstack.readthedocs.io/en/latest/overview.html) 🙌

We are incredibly grateful for the support and contributions from the amazing Aim community. It’s humbling and inspiring. ⭐

Join the [Aim community](https://community.aimstack.io/), share your feedback, open issues for new features, bugs.