---
author: Gev Soghomonian
categories:
  - New Releases
date: 2021-11-25T14:57:05.232Z
title: Aim 3.1 — Images Tracker and Images Explorer
image: https://aimstack.io/wp-content/uploads/2021/08/aim-scaled.jpeg
description: Excited to share with you the Aim 3.1! 😊 A huge milestone on our
  journey towards democratizing AI dev tools. Thanks to the awesome Aim
  community
draft: false
---
Excited to share with you the Aim 3.1! 

A huge milestone on our journey towards democratizing AI dev tools. Thanks to the awesome Aim community for testing this early and sharing issues, feedback.

We have added a new demo to showcase the new Explore Images feature. We have also forked the [lightweight-gan from lucidrains](https://github.com/lucidrains/lightweight-gan) and added the Aim integration.

Demo code: <https://github.com/aimhubio/lightweight-gan>\
Demo site: [play.aimstack.io:10002](http://play.aimstack.io:10002/images?grouping=fkjeugYpZXU3Qy6AUQLGWaYfh7MDvRvP3eTRyMMzRUsZhgqFHwn98jPLEyjZEG4Vxj4XGRnBpUZJoD1XJ6vS7mw7twViU5iQ7AD1GqnqrTZTToPUkfrq&select=2qYYRs1i7GzkG9QbRNTbd8ZwMcueRtLqTWPLqhUQ9L4eeRJgEVkmbjfhnh9n2iZACZFGDuLzqGWHq53o4QQcp9wxb9oJnqhPZPp6bmro8UFDikUqmemyHqTP5q7dyaNPSxhuX7TrLQcsKKbDVKX4gXeJa8q95cTNa6Z9PrNSupd5teqBqStbnAuDzEzSfCjTqzG39A5VzoHGYxWjhc242HSowezeq7wHTSqMz8FbKfrBpWgtsbcdvmJKefZQm4eiMLw6zhwcSCJ1LnqKtJ4VpVtG1mu8NBukKAXVUoCDfprjdTF8my4Z8avf4VG4LCVZTCfL6aKT3FH6rThUDCdtCufS97jkWnAwgP36BjYq4vTMCmJbUcKfUnwGmfDEnGKe7ESSNyC6at6YG2eHJZTqvYGzErTVoEFG7MrSUFzA5QqBvuGzw6bibP4WtjJrDqqQojHhMJ7379dsm3azQHCAjyPsJaNR1XSNAiCSPzCzQ6nuRqdqhqkMPsfzUxB7DTZM6fGFx78P4PCaJWw3537GhX7q4t6tUz5tc7jtc4zfMqeX8TapZ39amp1hxaNjDpjPPCgi7st5BPPtHZHS&images=C9LyLE4XToLCLCAZ2wfH7CYgUFiTvbGGA4eYrDP2ByUR1VMjkinEgCM6CChQcwzwrNpeYxTwam78SGQqMNgqQTVho6CWTVfzxoy8cPxH74shAmToyAGjPpfgMiGqx1jD5BbHP9ZY99kKwYMXwTLEpnyiGa63gaoEfwJ2j2SA9EPC17tTaUEeK5PViLNb4CLzJ7GHxA4Bua1XSVHoZxcyU4RK)

**The notable changes in the Aim 3.1.0:**

* Images tracker and explorer
* Runs navigation from the single run page
* Performance improvements and tests

Thanks to srikanth, Mohamad Elgaar, Mahnerak, Andrew Xu and Bo yu for testing, raising issues and overall support.

## Images Tracker and Explorer

Finally we are shipping the highly requested feature for images tracking. Now you can track images during training and evaluation to explore them on the Aim UI.

All the regular grouping and search goodies are available on Images Explorer too 

Add an image tracker in your training code like this:

```
run.track(Image(tensor_or_pil, caption), name='gen', step=step, context={ "subset": "train" })
```

Once you run your training, the images will be saved and become available on the Images Explorer tab.

On Images Explorer you can filter and group by the images all the params available (just like you would do for metrics). As a result, you get lots of flexibility to compare the runs via tracked images.

Here is a quick promo video of what it can do. The rest of the details can be found in the docs[ here](https://aimstack.readthedocs.io/en/latest/ui/pages/explorers.html).

![](https://aimstack.io/wp-content/uploads/2021/08/1_3IkmtAOLGy-e3eJneuv2bA.png)

A quick demo video.

<https://www.youtube.com/watch?v=4mtUFV8yG_o&feature=youtu.be>

The Images view on the single run page is coming soon …

## Runs Navigation

One of the regressions from the Aim 2.x to [3.0.0](https://aimstack.io/aim-foundations-why-we-re-building-a-tensorboard-alternative/) was the ability to navigate between the runs of the same experiment from the single run page.

![](https://aimstack.io/wp-content/uploads/2021/08/111.png)

We have added that back as the top-most dropdown with the list of all experiments and their corresponding runs for easy navigation.

Sorry for the regression 

## Performance improvements and assurances

Two groups of performance improvements have been made— on the UI and on the SDK side.

### **Column virtualization on Aim UI Table**

The ability to smoothly navigate through metrics and be able to interact with a table is surely the ultimate experience we aim to provide.

We are really proud of our craft and aim to make the best possible usage experience for the experiment comparison problem — and this is a key step towards it. 

### **Storage performance tests**

One of the unique challenges in building Aim is to make sure each newly added data type won’t impact the overall performance. We have added continuously add more performance tests to ensure the new releases don’t impact the performance.

In the past few weeks we learned that users like to record LOTS (up to millions) of steps for their metrics which opened up room for performance improvements of Aim, haha.

Performance reliability is key for Aim and this is a major iteration towards that!

## Learn more

[Aim is on a mission to democratize AI dev tools.](https://github.com/aimhubio/aim#democratizing-ai-dev-tools)

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring.

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://join.slack.com/t/aimstack/shared_invite/zt-193hk43nr-vmi7zQkLwoxQXn8LW9CQWQ), share your feedback, open issues for new features, bugs.

And don’t forget to leave [Aim](https://github.com/aimhubio/aim) a star on GitHub for support.