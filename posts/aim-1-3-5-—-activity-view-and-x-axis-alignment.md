---
author: Gev Soghomonian
categories:
  - New Releases
date: 2021-02-05T13:21:35.667Z
title: Aim 1.3.5 — Activity View and X-axis alignment
image: /images/activity-view.gif
description: Aim 1.3.5 is now available. Excited to share highlights of the new
  features! Thanks to the wonderful Aim community!
draft: false
---
[Aim](https://github.com/aimhubio/aim) v1.3.5 is now available. Thanks to the incredible [Aim community](https://aimstack.slack.com/?redir=%2Fssb%2Fredirect) for the feedback and support on building democratized open source MLOps tools.

Check out the new features at [play.aimstack.io](http://play.aimstack.io:43900/explore?search=eyJjaGFydCI6eyJzZXR0aW5ncyI6eyJwZXJzaXN0ZW50Ijp7InlTY2FsZSI6MCwiem9vbU1vZGUiOmZhbHNlLCJ6b29tSGlzdG9yeSI6W10sInBlcnNpc3RlbnQiOnsieVNjYWxlIjowLCJ6b29tTW9kZSI6ZmFsc2UsInpvb21IaXN0b3J5IjpbXSwicGVyc2lzdGVudCI6eyJ5U2NhbGUiOjAsInpvb21Nb2RlIjpmYWxzZSwiem9vbUhpc3RvcnkiOltdLCJwZXJzaXN0ZW50Ijp7ImRpc3BsYXlPdXRsaWVycyI6ZmFsc2UsInpvb20iOm51bGwsImludGVycG9sYXRlIjpmYWxzZX0sImRpc3BsYXlPdXRsaWVycyI6ZmFsc2UsImludGVycG9sYXRlIjp0cnVlLCJ6b29tIjp7IjAiOnsieCI6WzIuNjg1MTczMTQ4MTA1MzM4NSwzOF0sInkiOlszLjQ1NDEwMDA0ODU0MjAyMywzLjY4MjMzOTM5NzAxNzAyOF19LCIxIjp7IngiOlsyLjUzNzIwNjUxMzA3NzU1NywzOF0sInkiOlsyNy42NzE5Nzg3NjM2MTk2ODQsMzIuNTgxOTk5Nzc4NzQ3NTZdfSwiMiI6eyJ4IjpbNi4xMzAwNzcxODU4MDYzMzIsMjddLCJ5IjpbMy40MzIxNTAwNTM5Nzc5NjYsMy42NDc3MDkzNTA2NzM4NjZdfSwiMyI6eyJ4IjpbMy40OTA5MDg3NzA3OTQyNDE0LDI3XSwieSI6WzI5LjE0MjQ0OTMzOTY5ODA4MiwzMy43NzI5OTk5NTQyMjM2MzZdfSwiNCI6eyJ4IjpbNC42OTMxNjM4MzkzNzM3MDgsMjhdLCJ5IjpbMjkuNDA5MjQ3MjgyOTAwMjY0LDMyLjEwMzk5OTcxMDA4MzAxXX0sIjUiOnsieCI6WzYuOTQxMTk3MDgwOTUyMjg1LDI3LjA0MTk0NTU0NjY2ODI2XSwieSI6WzMuNDgxNjAwMDgxOTIwNjI0LDMuNTgyNzgzODQ4MDA3ODUzOF19fX0sInpvb20iOm51bGx9LCJ6b29tIjpudWxsLCJkaXNwbGF5T3V0bGllcnMiOmZhbHNlLCJpbnRlcnBvbGF0ZSI6dHJ1ZX19LCJmb2N1c2VkIjp7ImNpcmNsZSI6eyJhY3RpdmUiOmZhbHNlLCJydW5IYXNoIjpudWxsLCJtZXRyaWNOYW1lIjpudWxsLCJ0cmFjZUNvbnRleHQiOm51bGwsInN0ZXAiOm51bGx9fX0sInNlYXJjaCI6eyJxdWVyeSI6ImJsZXUgaWYgY29udGV4dC5zdWJzZXQgPT0gdGVzdCBhbmQgaHBhcmFtcy5sZWFybmluZ19yYXRlID4gMC4wMDAwMSIsInYiOjF9LCJjb250ZXh0RmlsdGVyIjp7Imdyb3VwQnlDb2xvciI6WyJwYXJhbXMuaHBhcmFtcy5hbGlnbiIsInBhcmFtcy5ocGFyYW1zLm1heF9rIiwicGFyYW1zLmRhdGFzZXQucHJlcHJvYyJdLCJncm91cEJ5Q2hhcnQiOlsicGFyYW1zLmhwYXJhbXMuYWxpZ24iXSwiZ3JvdXBCeVN0eWxlIjpbXSwiYWdncmVnYXRlZCI6dHJ1ZX19)

Here are the highlights of the features:



## Activity View on the Dashboard



The **Activity View** shows the daily experiment runs. With one click you can search each day’s runs and explore them straight away.

**Statistics** displays the overall count of [*Experiments* and *Runs*](https://github.com/aimhubio/aim#concepts)*.*

![](/images/dashboard-1-.gif "The new dashboard in action!")

## X-axis alignment by epoch

X-axis alignment adds another layer of superpower for metric comparison. If you have tracked metrics in different time-frequencies (e.g. train loss — 1000 steps, validation loss — 15 steps) then you can align them by epoch, relative time or absolute time. This can be useful when cross-comparing metrics from Aim with data from your MLOps stack’s other tools.

![](/images/j.gif "No more misaligned metrics!")

## Ordering runs both on Explore and on Dashboard



Now you can order runs both on the *Dashboard* and on the Explore. Sort the runs by a hyperparam value of metric value on dashboard and explore.

On Explore, when sorted by a hyperparam that’s also used for dividing into subplots, the subplots will be positioned by the hyperparam value too.

![](/images/kk.gif "Sort the runs both on Dashboard and Explore")

## Learn More

We have been working on Aim for the past 6 months and excited to see this much interest from the community.

We are working tirelessly for adding new community-driven features to Aim (and those features have been doubling every month😊). Try out Aim, join the [Aim community](https://aimstack.slack.com/?redir=%2Fssb%2Fredirect), share your feedback.

And don’t forget to leave [Aim](https://github.com/aimhubio/aim) a star on GitHub for support 🙌.