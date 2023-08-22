---
author: Gev Soghomonian
categories:
  - New Releases
date: 2022-01-13T15:33:59.865Z
title: Aim 3.3 — Audio & Text tracking, Plotly & Colab integrations
image: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*300ZXHcgylKBit_O2KDeMA.png
description: "Hey community, Aim 3.3 is now available! 😊 We are on a mission to
  democratize AI dev tools.  "
draft: false
---
Hey community, Aim 3.3 is now available! 😊

We are on a mission to democratize AI dev tools. Thanks to the awesome Aim community for helping test early versions and thanks for their contributions.

Aim 3.3 is full of highly requested features. Lots of items scratched from the public Aim [roadmap](https://github.com/aimhubio/aim#roadmap).

* Audio tracking and exploration
* Text tracking and visualization
* Scatter plot explorer
* Colab integration
* Plotly integration
* Images visualization on run details page

New Demo: [play.aimstack.io:10004](http://play.aimstack.io:10004/runs/d9e89aa7875e44b2ba85612a)

Demo Code: [github.com/osoblanco/FastSpeech2](https://github.com/osoblanco/FastSpeech2/blob/master/train.py)

Special thanks to Erik Arakelyan (osoblanco), Krystian Pavzkowski (krstp), Flaviu Vadan, SSamDav and AminSlk for their contributions and feedback.

## Audio tracking and exploration

Now you can track audio files with Aim during your speech-to-text or other audio-involving experiments.

It will allow you to track generated audio with context, query them, observe the evolution for audio-related experiments (e.g. speech-to-text). Both input, output and ground truth.

Just like tracking the metrics, we have enabled a simple API to track the audio.

```
from aim import Audio

for step in range(1000):
    my_run.track(
        Audio(arr), # Pass audio file or numpy array
        name='outputs', # The name of distributions
        step=step,   # Step index (optional)
        epoch=0,     # Epoch (optional)
        context={    # Context (optional)
            'subset': 'train',
        },
    )
```

Here is how it looks like on the UI.

![](https://miro.medium.com/v2/resize:fit:1400/1*LkeFigHPnQM1drADXJ3yZQ.gif)

## **Text tracking and visualization**

Use this to compare text inputs and outputs during training

Similarly, you can also track text with Aim during your NLP experiments.

Here is how the code looks like:

```
from aim import Text

for step in range(1000):
    my_run.track(
        Text(string), # Pass a string you want to track
        name='outputs', # The name of distributions
        step=step,   # Step index (optional)
        epoch=0,     # Epoch (optional)
        context={    # Context (optional)
            'subset': 'train',
        },
    )
```

This is the end result on the UI.

![](https://miro.medium.com/v2/resize:fit:1400/1*nkqUz9DecxaMmJoCUe_8Rw.gif "Training info tracked as a text")

## Colab integration

After we have integrated [Aim to Jupyter](https://aimstack.io/blog/new-releases/aim-3-2-jupyter-notebook-integration-histograms), there were many requests to enable Aim on Colab too. Now it has arrived! 

With fully embedded Aim UI, now you can track and follow your experiments live without leaving your colab environment!

Here is an example [colab to get started with](https://colab.research.google.com/drive/1vlXVEtsKCf1390-gAfDhrvLPC14PN3-r?usp=sharing).

> Note: Please make sure to run all the cells to be able to use the UI as well

So this is how it looks on your browser:

![](https://miro.medium.com/v2/resize:fit:1400/1*SjYF_Kq4WzWOodVzsjemvA.gif)

## Plotly integration

Now you can track your custom plotly charts and visualize them on Aim with full native plotly interactive capabilities baked in.

This is a great way to also track all your relevant plotly visualizations per step and have them rendered, navigated in Aim along with everything else already in there.

```
from aim import Figure

for step in range(1000):
    my_run.track(
        Figure(fig_obj), # Pass any plotly figure
        name='plotly_bars', # The name of distributions
        step=step,   # Step index (optional)
        epoch=0,     # Epoch (optional)
        context={    # Context (optional)
            'subset': 'train',
        },
    )
```

The end-result on the Aim Web UI.

![](https://miro.medium.com/v2/resize:fit:1400/1*8xn3PH_Hzk6fotyZQqy-AQ.gif)

## Images visualization on run details page



As we had launched the images tracking and visualization in[ 3.1](https://aimstack.io/blog/new-releases/aim-3-1-images-tracker-and-images-explorer), we haven’t enabled the images on the single run page. Besides the explorer, now you can observe and search through the images on the single run page as well.

Here is how it looks on the UI

![](https://miro.medium.com/v2/resize:fit:1400/1*jnUogPgbzwX6GOmDaXHKMg.gif)

## Learn More

[Aim is on a mission to democratize AI dev tools.](https://aimstack.readthedocs.io/en/latest/overview.html)

We have been incredibly lucky to get help and contributions from the amazing Aim community. It’s humbling and inspiring.

Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://community.aimstack.io/), share your feedback, open issues for new features and bugs.

And don’t forget to leave Aim a star on GitHub for support.