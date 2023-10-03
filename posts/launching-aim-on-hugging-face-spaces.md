---
author: Gor Arakelyan
categories:
  - Integrations
date: 2023-04-19T13:41:34.213Z
title: Launching Aim on Hugging Face Spaces
image: /images/dynamic/hf_space_header.png
description: Deploy Aim on Hugging Face Spaces using the Docker template. Aim
  empowers you to explore logs with interactive visualizations, easily compare
  training runs at scale and be on top of ML development insights.
draft: false
---
We are excited to announce the launch of Aim on Hugging Face Spaces! 🚀

With just a few clicks, you can now deploy Aim on the Hugging Face Hub and seamlessly share your training results with anyone.

![](/images/dynamic/hf_space_me.png)

Aim is an open-source, self-hosted AI Metadata tracking tool.\
It provides a performant and powerful UI for exploring and comparing metadata, such as training runs or AI agents executions. Additionally, its SDK enables programmatic access to tracked metadata — perfect for automations and Jupyter Notebook analysis.

In this article, you will learn how to deploy and share your own Aim Space. Also, we will have a quick tour over Aim and learn how it can help to explore and compare your training logs with ease. Let’s dive in and get started!

Learn more about Aim on the GitHub repository: **[github.com/aimhubio/aim](https://github.com/aimhubio/aim)**

## Deploy Aim on Hugging Face Spaces within seconds using the Docker template

To get started, simply navigate to the Spaces page on the Hugging Face Hub and click on the “Create new Space” button, or open the page directly by the following link: [](https://huggingface.co/new-space?template=aimstack/aim)**<https://huggingface.co/new-space?template=aimstack/aim>**

![](/images/dynamic/hf_space_deploy.png)

Set up your Aim Space in no time:

1. Choose a name for your Space.
2. Adjust Space hardware and the visibility mode.
3. Submit your Space!

After submitting the Space, you'll be able to monitor its progress through the building status:

![](/images/dynamic/hf_space_building.png)

Once it transitions to “Running”, your space is ready to go!

![](/images/dynamic/hf_space_running.png)

**Ta-da! 🎉 You're all set to start using Aim on Hugging Face.**

By pushing your logs to your Space, you can easily explore, compare, and share them with anyone who has access. Here's how to do it in just two simple steps:

1. Run the following bash command to compress `.aim` directory:

   ```shell
   tar -czvf aim_repo.tar.gz .aim
   ```
2. Commit and push files to your Space.

That's it! Now open the App section of your Space, and Aim will display your training logs.

Updating Spaces is incredibly convenient – you just need to commit the changes to the repository, and it will automatically re-deploy the application for you. 🔥

## See Aim in Action with Existing Demos on the Hub

Let’s explore live Aim demos already available on the Hub. Each demo highlights a distinct use case and demonstrates the power of Aim in action.

* Neural machine translation task: [](https://huggingface.co/spaces/aimstack/nmt)<https://huggingface.co/spaces/aimstack/nmt>
* Simple handwritten digits recognition task: [](https://huggingface.co/spaces/aimstack/digit-recognition)<https://huggingface.co/spaces/aimstack/digit-recognition>
* Image generation task with lightweight GAN implementation: [](https://huggingface.co/spaces/aimstack/image-generation)<https://huggingface.co/spaces/aimstack/image-generation>

![](/images/dynamic/hf_space_demos.png)

When navigating to your Aim Space, you'll see the Aim homepage, which provides a quick glance at your training statistics and an overview of your logs.

![Aim homepage](/images/dynamic/hf_space_overview.png "Aim homepage")

Open the individual run page to find all the insights related to that run, including tracked hyper-parameters, metric results, system information (CLI args, env vars, Git info, etc.) and visualizations.

![Individual run page](/images/dynamic/hf_space_individual_run.png "Individual run page")

Take your training results analysis to the next level with Aim's Explorers - tools that allow to deeply compare tracked metadata across runs.

Metrics Explorer, for instance, enables you to query tracked metrics and perform advanced manipulations such as grouping metrics, aggregation, smoothing, adjusting axes scales and other complex interactions.

![Metrics Explorer](/images/dynamic/hf_space_me.png "Metrics Explorer")

Explorers provide fully Python-compatible expressions for search, allowing you to query metadata with ease.

![Pythonic search](/images/dynamic/hf_space_pythonic_search.png "Pythonic search")

In addition to Metrics Explorer, Aim offers a suite of Explorers designed to help you explore and compare a variety of media types, including images, text, audio, and Plotly figures.

![Images Explorer](/images/dynamic/hf_space_media.png "Images Explorer")

Use Aim Space on Hugging Face to effortlessly upload and share your training results with the community in a few steps. Aim empowers you to explore your logs with interactive visualizations at your fingertips, easily compare training runs at scale and be on top of your ML development insights!

## One more thing… 👀

Having Aim logs hosted on Hugging Face Hub, you can embed it in notebooks and websites.

To embed your Space, construct the following link based on Space owner and Space name: **`https://owner-space-name.hf.space`**. This link can be used to embed your Space in any website or notebook using the following HTML code:

```html
%%html
<iframe
    src="https://owner-space-name.hf.space"
    frameborder="0"
    width=100%
    height="800"
>
</iframe>
```

## Next steps

We are going to continuously iterate over Aim Space onboarding and usability, including:

* the ability to read logs directly from Hugging Face Hub model repos,
* automatic conversion of TensorBoard logs to Aim format,
* Aim HF Space-specific onboarding steps.

Much more coming soon... stay tuned for the updates!

## Learn more

Check out Aim Space documentation [here](https://aimstack.readthedocs.io/en/latest/using/huggingface_spaces.html)

Aim repo on GitHub: [github.com/aimhubio/aim](http://github.com/aimhubio/aim)

If you have questions, join the [Aim community](https://community.aimstack.io/), share your feedback, open issues for new features and bugs. You’re most welcome! 🙌

Drop a ⭐️ on [GitHub](https://github.com/aimhubio/aim), if you find Aim useful.