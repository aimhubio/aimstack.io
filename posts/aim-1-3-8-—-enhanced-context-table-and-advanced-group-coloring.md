---
author: Gev Soghomonian
categories:
  - New Releases
date: 2021-03-01T11:09:06.858Z
title: Aim 1.3.8 — Enhanced Context Table and Advanced Group Coloring
image: https://miro.medium.com/max/1400/1*l27Xjb6pYIMdEkABLkRBRA.webp
description: "Discover Aim 1.3.8's Exciting Features: Advanced Group Coloring &
  Enhanced Context Table. Streamlined AI metrics visualization for efficient
  analysis. Explore now!"
draft: false
---


[Aim](https://aimstack.io/) 1.3.8 is now available. Thanks to the incredible Aim community for the feedback and support on building democratized open-source AI dev tools

Check out the new features at [play.aimstack.io](http://play.aimstack.io:43900/explore?search=eyJjaGFydCI6eyJzZXR0aW5ncyI6eyJwZXJzaXN0ZW50Ijp7ImRpc3BsYXlPdXRsaWVycyI6ZmFsc2UsInpvb20iOm51bGwsImludGVycG9sYXRlIjpmYWxzZSwiaW5kaWNhdG9yIjpmYWxzZSwieEFsaWdubWVudCI6InN0ZXAiLCJwb2ludHNDb3VudCI6NTB9fSwiZm9jdXNlZCI6eyJjaXJjbGUiOnsiYWN0aXZlIjp0cnVlLCJzdGVwIjoxNCwicnVuSGFzaCI6IjRiY2Y4ZDUyLWZjYTgtMTFlYS05MDJiLTBhMTk1NDdlYmIyZSIsIm1ldHJpY05hbWUiOiJsb3NzIiwidHJhY2VDb250ZXh0IjoiZXlKemRXSnpaWFFpT2lKMFpYTjBJbjAifX19LCJzZWFyY2giOnsicXVlcnkiOiJsb3NzLCBibGV1IGlmIGhwYXJhbXMubGVhcm5pbmdfcmF0ZSAhPSAwLjAwMDAxIGFuZCBjb250ZXh0LnN1YnNldCA9PSB0ZXN0IiwidiI6MX0sImNvbnRleHRGaWx0ZXIiOnsiZ3JvdXBCeUNvbG9yIjpbInBhcmFtcy5kYXRhc2V0LnByZXByb2MiXSwiZ3JvdXBCeVN0eWxlIjpbXSwiZ3JvdXBCeUNoYXJ0IjpbIm1ldHJpYyJdLCJhZ2dyZWdhdGVkIjpmYWxzZSwic2VlZCI6eyJjb2xvciI6MTAsInN0eWxlIjoxMH0sInBlcnNpc3QiOnsiY29sb3IiOmZhbHNlLCJzdHlsZSI6ZmFsc2V9fX0=).

Here are the more notable changes:

### Enhanced Context Table



The context table used to not use the screen real-estate effectively — an empty line per grouping, non-efficient column management (imagine you have 200 columns to deal with).

So we have made 3 changes to tackle this problem

### New table groups view

Below is the new modified look of the table. Here is what’s changed:

* The empty per group is removed
* In addition to the group details popover, there is an in-place list group config is available for instant lookup

![](https://miro.medium.com/max/1400/1*l27Xjb6pYIMdEkABLkRBRA.webp "New improved Aim Context Table on Explore")



* **\[In Progress for next release]** Column resize — this will allow to manage the wide columns and free much-needed screen real-estate for the data that matters.

### Column Management



This feature allows to seamlessly pin the important columns to both sides of the table and hide the useless columns in between.

You can also re-order the columns by dragging the mid-section up/down.

This is super-handy when dealing with 100s of columns on the table for parameters.

![](https://miro.medium.com/max/1400/1*71RL39uLxxr3vnxMhn1uKg.webp "Drag columns left and right to pin, search and disable less important ones")



### Advanced Group Coloring



This is the latest iteration over the group coloring.

* Now Aim enables persistent coloring mode which makes sure the group with same configuration always receives the same color.
* You can shuffle the colors in case they aren’t pick to your liking
* You can pick two different color palette for better distribution of the colors.

  ![](https://miro.medium.com/max/1400/1*2pIoR-ZkaPsQ90UQh2W7Fg.webp "Effective coloring of the groups is important!")

  ### Thanks to
* [mahnerak](https://github.com/mahnerak), Lars, [Joe](https://github.com/jafioti) for detailed feedback — helped us immensely in this iteration.

  ### Learn More

  We have been working on Aim for the past 6 months and excited to see the overwhelming interest from the community.

  Try out [Aim](https://aimstack.io/), join the [Aim community](https://slack.aimstack.io/), share your feedback.

  We are building the next generation of democratized AI dev tools.

  And don’t forget to leave [Aim](https://aimstack.io/) a star on GitHub for support 🙌.