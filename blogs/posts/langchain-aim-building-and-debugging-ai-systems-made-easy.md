---
author: Gor Arakelyan
categories:
  - Integrations
date: 2023-04-06T17:51:14.014Z
title: "LangChain + Aim: Building and Debugging AI Systems Made EASY!"
image: /images/dynamic/langchain_header.jpg
description: As AI systems get increasingly complex, the ability to effectively
  debug and monitor them becomes crucial. Use Aim to easily trace complex AI
  systems.
draft: false
---


# The Rise of Complex AI Systems

With the introduction of ChatGPT and large language models (LLMs) such as GPT3.5-turbo and GPT4, AI progress has skyrocketed. These models have enabled tons of AI-based applications, bringing the power of LLMs to real-world use cases.

But the true power of AI comes when we combine LLMs with other tools, scripts, and sources of computation to create much more powerful AI systems than standalone models.

**As AI systems get increasingly complex, the ability to effectively debug and monitor them becomes crucial.** Without comprehensive tracing and debugging, the improvement, monitoring and understanding of these systems become extremely challenging.

In this article, we will take a look at how to use Aim to easily trace complex AI systems built with LangChain. Specifically, we will go over how to:

* track all inputs and outputs of chains,
* visualize and explore individual chains,
* compare several chains side-by-side.

# LangChain: Building AI Systems with LLMs

LangChain is a library designed to enable the development of powerful applications by integrating LLMs with other computational resources or knowledge sources. It streamlines the process of creating applications such as question answering systems, chatbots, and intelligent agents.

It provides a unified interface for managing and optimizing prompts, creating sequences of calls to LLMs or other utilities (chains), interacting with external data sources, making decisions and taking actions. LangChain empowers developers to build sophisticated, cutting-edge applications by making the most of LLMs and easily connecting them with other tools!

# **Aim:** Upgraded Debugging Experience for AI Systems

Monitoring and debugging AI systems requires more than just scanning output logs on a terminal.

**Introducing Aim!**

Aim is an open-source AI metadata library that tracks all aspects of your AI system's execution, facilitating in-depth exploration, monitoring, and reproducibility.

Importantly, Aim helps to query all the tracked metadata programmatically and is equipped with a powerful UI / observability layer for the AI metadata.

In that way, Aim makes debugging, monitoring, comparing different executions a breeze.

**Experience the ultimate control with Aim!**

Check out Aim on GitHub: **[github.com/aimhubio/aim](http://github.com/aimhubio/aim)**

![](/images/dynamic/explorer.jpg)

# Aim + LangChain = 🚀

With the release of LangChain **[v0.0.127](https://github.com/hwchase17/langchain/releases/tag/v0.0.127)**, it's now possible to trace LangChain agents and chains with Aim using just a few lines of code! **All you need to do is configure the Aim callback and run your executions as usual.**

Aim does the rest for you by tracking tools and LLMs’ inputs and outputs, agents' actions, and chains results. As well as, it tracks CLI command and arguments, system info and resource usage, env variables, git info, and terminal outputs.

![](/images/dynamic/langchain_aim.jpg)

Let's move forward and build an agent with LangChain, configure Aim to trace executions, and take a quick journey around the UI to see how Aim can help with debugging and monitoring.

# Hands-On Example: Building a Multi-Task AI Agent

## Setting up the agent and the Aim callback

Let’s build an agent equipped with two tools:

* the SerpApi tool to access Google search results,
* the LLM-math tool to perform required mathematical operations.

In this particular example, we'll prompt the agent to discover who Leonardo DiCaprio's girlfriend is and calculate her current age raised to the 0.43 power:

```python
tools = load_tools(["serpapi", "llm-math"], llm=llm, callback_manager=manager)
agent = initialize_agent(
    tools,
    llm,
    agent="zero-shot-react-description",
    callback_manager=manager,
    verbose=True,
)
agent.run(
    "Who is Leo DiCaprio's girlfriend? What is her current age raised to the 0.43 power?"
)
```

Now that the chain is set up, let's integrate the Aim callback. It takes just a few lines of code and Aim will capture all the moving pieces during the execution.

```python
from langchain.callbacks import AimCallbackHandler

aim_callback = AimCallbackHandler(
    repo=".",
    experiment_name="scenario 1: OpenAI LLM",
)

aim_callback.flush_tracker(langchain_asset=agent, reset=False, finish=True)
```

> **Aim is entirely open-source and self-hosted, which means your data remains private and isn't shared with third parties.**

Find the full script and more examples in the official LangChain docs: [](https://python.langchain.com/en/latest/ecosystem/aim_tracking.html)**<https://python.langchain.com/en/latest/ecosystem/aim_tracking.html>**

## **Executing the agent and running Aim**

Before executing the agent, ensure that Aim is installed by executing the following command:

```shell
pip install aim
```

Now, let's run multiple executions and launch the Aim UI to visualize and explore the results:

1. execute the script by running `python example.py`,
2. then, start the UI with `aim up` command.

With the Aim up and running, you can effortlessly dive into the details of each execution, compare results, and gain insights that will help you to debug and iterate over your chains.

## Exploring executions via Aim

### Home page

On the home page, you'll find an organized view of all your tracked executions, making it easy to keep track of your progress and recent runs. To navigate to a specific execution, simply click on the link, and you'll be taken to a dedicated page with comprehensive information about that particular execution.

![](/images/dynamic/home.jpg)



### Deep dive into a single execution

When navigating to an individual execution page, you'll find an overview of system information and execution details. Here you can access:

* CLI command and arguments,
* Environment variables,
* Packages,
* Git information,
* System resource usage,
* and other relevant information about an individual execution.

![](/images/dynamic/individual_exec.jpg)

Aim automatically captures terminal outputs during execution. Access these logs in the “Logs” tab to easily keep track of the progress of your AI system and identify issues.

![](/images/dynamic/logs.jpg)

In the "Text" tab, you can explore the inner workings of a chain, including agent actions, tools and LLMs inputs and outputs. This in-depth view allows you to review the metadata collected at every step of execution.

![](/images/dynamic/text_tab.jpg)

With Aim's Text Explorer, you can effortlessly compare multiple executions, examining their actions, inputs, and outputs side by side. It helps to identify patterns or spot discrepancies.

![](/images/dynamic/explorer.jpg)

For instance, in the given example, two executions produced the response, "Camila Morrone is Leo DiCaprio's girlfriend, and her current age raised to the 0.43 power is 3.8507291225496925." However, another execution returned the answer "3.991298452658078". This discrepancy occurred because the first two executions incorrectly identified Camila Morrone's age as 23 instead of 25.

**With Text Explorer, you can easily compare and analyze the outcomes of various executions and make decisions to adjust agents and prompts further.**

# Wrapping Up

In conclusion, as AI systems become more complex and powerful, the need for comprehensive tracing and debugging tools becomes increasingly essential. LangChain, when combined with Aim, provides a powerful solution for building and monitoring sophisticated AI applications. By following the practical examples in this blog post, you can effectively monitor and debug your LangChain-based systems!

# Learn more

Check out the Aim + LangChain integration docs [here](https://python.langchain.com/en/latest/ecosystem/aim_tracking.html).

LangChain repo: [](https://github.com/hwchase17/langchain)<https://github.com/hwchase17/langchain>

Aim repo: [](https://github.com/aimhubio/aim)<https://github.com/aimhubio/aim>

If you have questions, join the [Aim community](https://community.aimstack.io/), share your feedback, open issues for new features and bugs. You’re most welcome! 🙌

Drop a ⭐️ on [GitHub](https://github.com/aimhubio/aim), if you find Aim useful.