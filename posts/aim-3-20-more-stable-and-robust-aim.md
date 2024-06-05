---
author: Gev Soghomonian
categories:
  - New Releases
date: 2024-06-05T10:07:45.324Z
title: Aim 3.20 - More stable and robust Aim
image: /images/dynamic/release.png
description: "Hey team, Aim 3.20 is out! What's new? Most of our focus have been
  on Aim robustness and stability. "
draft: false
---
Hey community, Aim 3.20 is out!! Most of our focus have been on Aim robustness.

Stay tuned on the [AimStack](https://twitter.com/aimstackio) X where we share more use-cases and updates.

## Here are the key highlights:

* Remote tracker robustness
* Better Data consistency and availability
* Improved Run finalization and resource cleanup

## Database corruption fixes

Aim runs are stored in separate chunks (one for metadata, one for sequence data).

Unfortunately, in case of database corruption of just one chunk entire database could become inaccessible.

This is solved in 3.20 🎉

Now Aim handles database opening/read errors and skips the runs that cannot be read. Users will get a popup warning both in UI and terminal.

![UI warning ](/images/dynamic/screen-shot-2024-06-05-at-14.19.01.png "UI warning")

## Run finalization and resource cleanup improvements



We have added CLI commands to list and delete corrupted runs. 

Runs are stored on the file system and can get corrupted for all kinds of reasons. 

Aim will now detect those runs and will suggest users to delete these runs through the CLI.

![](/images/dynamic/screenshot-2024-06-04-at-16.56.33.png)

Thanks to the Aim community for helping us find these issues. \
Big part of our focus is going to be working on these types of issues once they arise.\
\
**If you encounter any issues or have questions, please let us know.**

We have shared the product roadmap on [Aim Discord. ](https://community.aimstack.io/)

The upcoming enhancements include, but are not limited to, the Reports page, Custom views, Enhanced Run page with faster UI performance, and live updates. We are developing new features and improvements that we can't wait to show you. 

You have a chance to impact the roadmap by reporting bugs or proposing new ideas.

Thanks for all the love and support. Stay tuned!! 🚀

### Learn More



Aim is on a mission to democratize AI dev tools. 🙌 \
We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring. ⭐

Join and be the part of an amazing [Aim community](community.aimstack.io).