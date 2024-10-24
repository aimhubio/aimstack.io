---
author: Tatyana Manaseryan
categories:
  - Tutorials
date: 2024-10-23T19:42:39.685Z
title: "Log insights from your ML experiments: Why Reports matter"
image: /images/dynamic/screen-shot-2024-10-23-at-10.26.17.png
description: Iterating over analyses is an essential part of model training.
  Reports make it easier to track the progress and see how models improve.
  That's why we created it for you! 🎉
draft: false
---
Iterating over analyses is an essential part of model training. ML engineers run many experiments, tweaking models and tuning hyperparameters. Reports make it easier to track the progress and see how models improve.

For teams, interactive reports are even more important. Without them, insights can become scattered as different members work on separate data parts.

![](/images/dynamic/11.jpg)

**And yes, this slows down the entire development process..⏳**

Reports unite key findings, making it easy to track who analyzed what and how decisions were made, fostering better communication and alignment across the team.

**That's why Reports are essential and we created it for you! 🎉**

Use Aim reports to show your work and iterate over the knowledge around it. And of course, do it with your collaborators.

* Process tracked metadata and produce new plots directly within the Aim UI, saving time by eliminating the need to write custom plotting functions.



## How to use Aim reports.



Reports work as a real-time markdown editor where you can embed queries to the data via regular python as well as use all the markdown abilities to document around.

Imagine a scenario where you’ve noticed the best performing run and want to make sure that you catch and store all the information about this specific run.

How?

Navigate to **Reports page** (Button is located on the side bar, scroll it and you’ll see 👀) and click on ` +New `.

![Reports page](/images/dynamic/screenrecording2024-10-22at17.52.11-ezgif.com-video-to-gif-converter.gif "Reports page")

### The Best Run - Overview



This snippet will generate the best run overview:

````
```aim
metrics_of_interest = 'metric.name in ("Loss", "__system__cpu")'
run_of_interest = 'run.hash == "d9e89aa7875e44b2ba85612a"'
metrics = repo.fetch_metrics(metrics_of_interest + ' and ' + run_of_interest)
JSON(metrics[0]['run']['train_config'])
````

![Reports page](/images/dynamic/screen-shot-2024-10-22-at-18.00.02.png "Reports page")

Now let’s move on to the next task.

## Visualization objects and methods



#### Loss and System CPU metrics

With Aim reports, it’s quite easy to plot the data, write the assumptions and save for a later view.

We are to try out other batch sizes with the hope to reduce the total loss to 1.03. 

**Run this snippet and you’ll get the line charts in less than 2 seconds.**

````
```aim
metrics_of_interest = 'metric.name in ("Loss", "__system__cpu")'
run_of_interest = 'run.hash == "d9e89aa7875e44b2ba85612a"'
metrics = repo.fetch_metrics(metrics_of_interest + ' and ' + run_of_interest)

linechart = LineChart(metrics)
linechart.group('column', ['metric.name'])
linechart.group('row', ['metric.context.type'])
```
````

![Loss and System CPU metrics](/images/dynamic/new-ezgif.com-video-to-gif-converter.gif "Loss and System CPU metrics")

![Loss and System CPU metrics](/images/dynamic/screen-shot-2024-10-23-at-10.26.17.png "Loss and System CPU metrics")

## ⏯🖼️You can also retrieve images and audios from Aim storage.

Just run simple commands like: `fetch_images` , `fetch_audios`

![](/images/dynamic/screen-shot-2024-10-23-at-10.29.01.png)

You can also retrieve metrics, figures and texts from Aim storage and group them by  `color`, ` stroke_style`, ` row`, `column` .

The `group` method can be applied multiple times sequentially.

![](/images/dynamic/grouping-example-1-.png)

When you finish, don’t forget to save your report! 📑

![Save your report](/images/dynamic/screen-shot-2024-10-23-at-10.50.57-1-.png "Save your report")

**A report not only allows you to customize widgets for your analysis but also keeps a persistent set of runs visible each time you open it.**

🔍This makes it easy to return and review experiments anytime.

With Aim reports:

* it’s simple to visualize data, 
* make informed assumptions, 
* and document your analysis in one place. 



You can save these reports for future reference, ensuring that your insights remain accessible for team collaboration or review. This keeps the workflow smooth and makes it easier to track experiments and their outcomes over time.



And yes, **each report comes with a shareable URL**—perfect for keeping your teammates in the loop! We know you’ve been waiting for this… 🤟

## Learn More



But that’s not all—there's so much more you can do with Aim reports.

Check out the [docs](https://aimstack.readthedocs.io/en/latest/ui/pages/reports.html) and feel free to reach out to us on our Discord community if you have any questions!

[Join the Aim community](https://community.aimstack.io/) 💜