---
author: Gev Soghomonian
categories:
  - New Releases
date: 2022-01-24T16:06:51.383Z
title: Aim 3.4 – Remote Tracking Alpha, Sorting & deleting runs
image: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*F-Ubp6reeVEAahicQEz-SQ.png
description: Hey team, Aim 3.4  featuring remote-tracking is now available! 😊
  Aim is an open source AI experiment tracking tool.
draft: false
---
Hey team, Aim 3.4  featuring remote-tracking is now available! 

Aim is an open source AI experiment tracking tool. We are on a mission to democratize AI dev tools. Thanks to the awesome Aim community for the help and contributions.

This is a milestone release with lots of anticipated new features and one that’s super-anticipated (remote-tracking!). Brace yourselves, the collaborative Aim is here one commit at a time!!!

## Here is what’s new:

* Remote tracking \[experimental]
* Run delete and archive: batch and single
* Ability to stack images on the [Images Explorer](https://aimstack.io/blog/new-releases/aim-3-1-images-tracker-and-images-explorer)
* Text filtering via regexp
* Trendline on scatterplots
* More images features: display images by original size, align by width, images reordering

Special thanks to Geoffrey Chen, gormat, sjakkampudi, osoblanco, Sennevs, gloryVine, krstp and others for continuous feedback and help.

## Remote tracking \[experimental]

This is a milestone release with lots of anticipated new features and one that’s super-anticipated. Brace yourselves, the collaborative Aim is here one commit at a time!!!

Aim Remote Tracking is very simple and easy to get started with 

Here are the steps to make it work. For more details pls check out [the end-to-end guide on Aim docs](https://aimstack.readthedocs.io/en/latest/using/remote_tracking.html).

````
### Ensure Aim version 3.4.x
```sh
$ pip install "aim>=3.4.0"
```

### Initialize the remote server
```sh
$ aim init # (optional)
$ aim server --repo <REPO_PATH>
```
Output:
```
> Server is mounted on 0.0.0.0:53800
> Press Ctrl+C to exit
```
### Start the Aim UI
```
$ aim up --repo <REPO_PATH>
```

### Change only 1 line in your training code
Point your repo to the remote location
```py
aim_run = Run(repo='aim://172.3.66.145:53800')# replace example IP with your tracking server IP/hostname
```
````

## Run, delete and archive: Batch and single

One of the very highly anticipated features by the Aim community. Now you can archive or hard delete your premature, interrupted runs from all the explorer pages as well as Run Details Settings tab.

It’s really easy to use. just select the run and the `Delete` / `Archive` buttons will appear.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2Qu9172RudbYfvFaVXVvNg.png)

## Ability to stack images on the Images Explorer

This feature allows to not only view the tracked images sequentially, but also stack them by the last grouped param.

Once stacked, a slider appears that will allow you to navigate between the layers of stacked images. This feature will allow to closely observe the evolution of output images (GANs, wave outputs as img etc)

Here is a quick demo [link](http://play.aimstack.io:10002/images?grouping=7sKkRob88jEDScwcb7RLVkxZMAGNj8QPqfbeDBN11Hau1HzW4sr7FGSESSWwWH7qPYX4NvhSCtkgWXMTkHXEixu6soDSnPEYZ6CCa5fqUhbpWZ17EGMYDCknV4JErUVLaxyDtt2VjKEVSgEfGdWghLKLL5euM3YAF34MwNEtRVJxuXGAreiKEtXYbwbMHrs5JJ5kZ&select=gTSaqzN7Mb8GdSizQfqNj9qCzd61EVTqUzAWmhAMFt1NVE2ABWM3PcYXbvEoHXrHBBwG51ytmWtG2AXtTVbUr8PVynYCpDzJqg4ZFEGauDS7PFw91DQ7nnxPzstQYFwbxWBQTR8x2eiUdScMgXh5XvkpPpn1HQpTbKz7ZgU1GXuezCrjcVXN9KGatx2S5iJAwNS4pLWpuE6HthgD9ww8sNzQzDBJuDHHHUSgkXDV2CoJqzAEE6RKf8gsdrWwP9GLovkHk43oMqPzwcmXCnUG4TFG7oL2HGaqXk2MSAN44RAMDbhwBH9nwV4KAyCHZD6kcrvdyBdadH92iPJMsW4cDQD26XaMsRxN3mWAqkvZPvAznnppWaVNFHv4V8q4kmemmoTNRi5jCD2r4b1ZgpuVN639cNsniPdQxPHm38bw56&images=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) to try out. Here is a glimpse of the UI:

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*hdJPM1ggTMtdcri1htvZdg.png)

## Text Search

Now a comprehensive text searching is available to be able to outline the desired text. Regular Expressions are available among others.

Here is a link for a quick [demo](http://play.aimstack.io:10004/runs/d9e89aa7875e44b2ba85612a/texts). And a glimpse of the UI:

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*pt8sjFzpbhomdqRDwKb-Mw.png)

## Trendline on scatterplots

Now you can render a trendline over your scatterplots on Scatters Explorer. We have enabled linear and Loess trendline.

Thanks to [sjakkampudi](https://github.com/aimhubio/aim/issues/1160) for the help on this one.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*pndAq3SIevuTckBZ20wwqg.png)

## More Images Features

We have added a number of new tools to the Images Explorer

## Display Images by original size

Now you can view & compare the tracked images by their original size. This has been a key missing ingredient for effective images comparison.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*vXgyBHiVPAV_8l6-im_P3A.png)

## Align by width

You can also align images by their width. This is especially handy when long images are tracked, such as sound spectograms (40px / 1000px). This feature will allow to effectively compare such images.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*dHHMux9rYd1sLRX4OjLCeQ.png)

## Images Sorting

You can also apply sorting of images by any tracked available parameter. In this case I have enabled sorting by step in descending order to see the later generated images in my GAN experiments. A lot smoother than the ones above.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*d4gA2EO7b0AI39YjcpLwIA.png)

## Learn more

[Aim is on a mission to democratize AI dev tools.](https://aimstack.readthedocs.io/en/latest/overview.html)

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring.

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://community.aimstack.io/), share your feedback, open issues for new features, bugs.

And don’t forget to leave Aim a star on GitHub for support.