---
author: Gev Soghomonian
categories:
  - New Releases
date: 2021-12-08T15:09:19.264Z
title: Aim 3.2 — Jupyter Notebook integration & Histograms
image: https://aimstack.io/wp-content/uploads/2021/08/3.2.0.png
description: "Aim 3.2 featuring Jupyter notebook integration is now available!
  😊 We are on a mission to democratize AI dev tools. "
draft: false
---
Aim 3.2 featuring Jupyter notebook integration is now available! 

We are on a mission to democratize AI dev tools. Thanks to the awesome Aim community for testing this early and sharing issues, feedback.

Within a week after the [v3.1](https://aimstack.io/aim3-1-images-tracker-and-images-explorer/) we are releasing the v3.2 with a number of key highly requested features in:

* Aim Jupyter Notebook extension (Colab is coming soon…)
* Histogram tracking and visualization
* Full-size images, images resize and render modes
* Search autofill and suggest on the UI

## Aim & Jupyter notebook



Now you can use Aim fully from your Jupyter notebook. We have built an Aim Jupyter notebook extension that comes along with the `aim` package.

You don’t need to install anything other than Aim. Here are the [docs](https://aimstack.readthedocs.io/en/latest/index.html).\
A quick demo of integrating Aim & Jupyter Notebook::

![](https://aimstack.io/wp-content/uploads/2022/02/1-3.gif "It’s that easy to use Aim on your Jupyter notebook!")

## Histogram tracking and Visualization

Starting from 3.2 you can track Distributions and visualize them as histograms on the run page.

This is how to track the weights distribution in your training code:

```
from aim import Distribution

for step in range(1000):
    my_run.track(
        Distribution(tensor), # Pass distribution
        name='gradients', # The name of distributions
        step=step,   # Step index (optional)
        epoch=0,     # Epoch (optional)
        context={    # Context (optional)
            'type': 'weights',
        },
    )
```

The [demo](http://play.aimstack.io:10003/runs/426032ad2d7e4b0385bc6c51), [docs](https://aimstack.readthedocs.io/en/latest/index.html) and [examples](https://github.com/aimhubio/aim/blob/main/examples/pytorch_track.py) 

And this is how it looks on the UI. Aim lets you visualize the distributions every layer at every tracked step. Super powerful!

![](https://aimstack.io/wp-content/uploads/2022/02/0.gif "Visualize every layer and every tracked step.")

## Full-size images, images resize and render modes



Now you can resize the tracked images size using the images resize tool available on the right hand tool-pain on the Images Explorer.

Here is how it works:

![](https://aimstack.io/wp-content/uploads/2022/02/2.gif "Easily resize the queried images")

We have also enabled smooth and pixelated images render modes. Especially for sensitive type of images, this allows to see the detailed version of the image without any filter etc.

![](https://aimstack.io/wp-content/uploads/2022/02/3.gif "Toggle between pixelated and smooth images render modes")

You can also view full-size images by clicking on the top right corner magnifier on each images.

BTW the smooth / pixelated config also translates to the full-size images.

![](https://aimstack.io/wp-content/uploads/2022/02/4.gif "full-size images: easy!")

## Query Language autosuggest editor

Another highly requested feature.

Now there is a QL autosuggest on all query inputs on the Aim UI. You will have all your tracked queryable metadata (params, run properties, contexts) at your hand at all times.

Hopefully this makes it much easier to get started with Aim.Here is a quick demo:

![](https://aimstack.io/wp-content/uploads/2022/02/5.gif)

## Learn More

[Aim is on a mission to democratize AI dev tools.](https://aimstack.readthedocs.io/en/latest/overview.html)

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring.

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://join.slack.com/t/aimstack/shared_invite/zt-193hk43nr-vmi7zQkLwoxQXn8LW9CQWQ), share your feedback, open issues for new features, bugs.

And don’t forget to leave Aim a star on GitHub for support.