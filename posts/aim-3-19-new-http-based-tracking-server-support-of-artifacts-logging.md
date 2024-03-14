---
author: Tatyana Manaseryan
categories:
  - NewReleases
date: 2024-03-14T19:09:56.893Z
title: Aim 3.19 -- New HTTP-based tracking server, Support of Artifacts logging
image: /images/dynamic/twitter1-2-.png
description: Hey community, Aim 3.19 is out!! It's packed with new enhancements,
  such as Artifacts support, New HTTP-based tracking server.
draft: false
---
Hey community, Aim 3.19 is out!! In this blogpost I will share the latest improvements.



Stay tuned on the [AimStack twitter ](https://twitter.com/aimstackio)where we will share more use-cases.

### Aim is evolving!! 🚀

> We are on a mission to democratize AI dev tools. Thanks to the awesome Aim community for the help and contributions.
>
> Thanks to [dushyantbehl](https://github.com/dushyantbehl), [martenlienen](https://github.com/martenlienen) and [angusmf1](https://github.com/angusmf1) for their first contributions!! 🔥

## Here are the key highlights:

\- Support of Artifacts Logging to S3

\- New HTTP-based remote tracking server

\- Allow HF callback to initialize Aim run at init end

## Support of Artifacts logging



The ability to log files/artifacts is a key feature for experiment trackers. Examples of such artifacts are the model checkpoints, training run configuration files, etc.

Starting from the version 3.19, Aim provides the logging API for artifacts, and the UI for showing artifact's metadata.

![Run Artifacts](/images/dynamic/run-overview-artifacts.png "Run Artifacts")

## Artifacts logging SDK

There are only two steps for logging artifacts with Aim:

1. Set the artifacts storage URI for the Aim Run:

```
import aim
run = aim.Run()
# Use S3 as artifacts storage
run.set_artifacts_uri('s3://aim/artifacts/')
```

Aim will create directory with the name of \`run.hash\` and store all artifacts there.

Note that setting artifacts storage URI is required only once per run.

2. Log artifact object:

```
# Log run configuration files as artifacts
run.log_artifact('config.yaml', name='run-config')
```

## Storage backends

Current implementation logs the artifacts to S3 as we found out together withe the community that it’s the most practical use-case for many teams.

Once logged, the artifact metadata will appear in the Aim UI Run details page.

## New HTTP-based tracking server

The first and still experimental implementation of the Aim remote tracking server have been GRPC-based and had lots of issues around it. 

The new Aim tracking server facilitates real-time logging of experiments from remote locations. This  command launches the server with specified configurations, including host, port, and associated repository.

Like the UI, the server can also run in production or development mode (better debugging options).

## Allow HF callback to initialize Aim run at init end



### Previously

Implementation of Hugging Face callback in Aim initializes the \`Run\` object at training begin time. This means if the users wanted to track any additional metrics they had to track before training finished while using \`HFTrainer\` object.

### Now

This modification allows \`HFTrainer\` users to add more custom metrics by accessing the run object via \`callback.experiment\`. 

You can now effortlessly track additional metrics or parameters in conjunction with the default metrics produced by HF, enriching data collection and analysis capabilities.

See docs [here.](https://aimstack.readthedocs.io/en/latest/)[](https://aimstack.readthedocs.io/en/latest/)

See the Release Notes [here.](https://github.com/aimhubio/aim/releases/tag/v3.19.0)

We're developing new features and improvements that we can't wait to show you!!

Thanks for all love and support. Stay tuned! 🚀

## Learn More

[Aim is on a mission to democratize AI dev tools.](https://aimstack.readthedocs.io/en/latest/overview.html) 

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring.

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim Community](https://community.aimstack.io/)[](https://community.aimstack.io/), share your feedback, open issues for new features, bugs.



Don’t forget to leave us a star on [GitHub](https://github.com/aimhubio/aim) if you think Aim is useful ⭐️