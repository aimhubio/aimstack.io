---
author: Hovhannes Tamoyan
categories:
  - Tutorials
date: 2024-02-28T18:24:47.359Z
title: "Keep your model up to date for Question Answering "
image: /images/dynamic/medium-1-.png
description: "In this article, we'll show you how to keep your language model up
  to date for question answering tasks. We'll tweak a pre-trained DistilBERT
  model and fine-tune it on the SQuAD question-answering dataset. "
draft: false
---
In this article, we'll show you how to keep your language model up to date for question answering tasks. We'll tweak a pre-trained DistilBERT model and fine-tune it on the SQuAD question-answering dataset. We will Aim for tracking our progress and insights.

## Importing Necessary Modules

Let's kick off by importing the necessary modules for our experiments:

```
from datasets import load_dataset
from transformers import (
    AutoModelForQuestionAnswering,
    AutoTokenizer,
    DefaultDataCollator,
    Trainer,
    TrainingArguments,
)
from aim.hugging_face import AimCallback

```

## Preprocessing and Tokenization

To prepare our data for fine-tuning, we need to preprocess and tokenize it appropriately. We employ the DistilBERT tokenizer and define a preprocessing function to handle this task efficiently:

```
tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")

def preprocess_function(examples):
    # Tokenize questions and context
    questions = [q.strip() for q in examples["question"]]
    inputs = tokenizer(
        questions,
        examples["context"],
        max_length=384,
        truncation="only_second",
        return_offsets_mapping=True,
        padding="max_length",
    )

    # Process answers and calculate start/end positions
    # ...
    # Code snippet for answer processing goes here (omitted for brevity)

    inputs["start_positions"] = start_positions
    inputs["end_positions"] = end_positions
    return inputs

```

## Loading and Preparing the Dataset



With our preprocessing function ready, we proceed to load the SQuAD dataset and apply the preprocessing function to it. Additionally, we instantiate a classic data collator to be used as an argument for the Trainer:

```
squad = load_dataset("squad", split="train")
squad = squad.train_test_split(test_size=0.2)

tokenized_squad = squad.map(
    preprocess_function,
    batched=True,
    remove_columns=squad["train"].column_names,
)

data_collator = DefaultDataCollator()

```

## Defining Training Arguments

Next, we define the training arguments for our fine-tuning process, including parameters such as batch size, learning rate, and number of epochs:

```
batch_size = 32
lr = 4e-5

training_args = TrainingArguments(
    output_dir=f"qa_model",
    evaluation_strategy="epoch",
    learning_rate=lr,
    per_device_train_batch_size=batch_size,
    per_device_eval_batch_size=16,
    num_train_epochs=5,
    weight_decay=0.01,
    fp16=True,
)

```

## Integrating Aim for Experiment Tracking



Integrating Aim into our experiments allows us to track metadata effectively. We instantiate the AimCallback, specifying the repository or directory for Aim:

```
aim_callback = AimCallback(
    repo="aim://0.0.0.0:43700", experiment='squad_huggingface_experiment'
)

```

Simply provide the \`aim_callback\` as a callback in the Trainer arguments, and Aim will handle everything behind the scenes.

## Initializing the Trainer

We then load the pre-trained DistilBERT model and define our Trainer instance, incorporating the training arguments, dataset, tokenizer, data collator, and AimCallback:

```
model = AutoModelForQuestionAnswering.from_pretrained("distilbert-base-uncased")

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_squad["train"],
    eval_dataset=tokenized_squad["test"],
    tokenizer=tokenizer,
    data_collator=data_collator,
    callbacks=[aim_callback],
)

```

## Training and Evaluation

With all components set up, we are now ready to commence the training process followed by evaluating our fine-tuned model:

```
trainer.train()
trainer.evaluate()
```

By following these steps, we can effectively fine-tune a pre-trained language model for question answering while leveraging Aim for experiment tracking and metadata analysis. This approach enables us to derive meaningful insights and enhance the performance of our models efficiently.



## Exploring the runs on Aim



After completing our fine-tuning pipeline, it's super easy to explore and analyze the runs using Aim. We conducted experiments with two batch sizes (16, 32) and three learning rates (0.004, 0.0004, 0.00004) to compare their performance and derive insights in real-time.

To visualize and interpret the experiment results, we utilize the Aim command-line interface. By running the following command:

```
aim up
```

We can access the Aim dashboard via the provided URL, where we'll encounter a comprehensive overview of our experiments and their corresponding metadata. Let's delve into what we'll observe in the Runs Explorer page:

![Runs explorer](/images/dynamic/screenshot-2024-02-20-at-11.34.35 pm.png "Runs explorer")

Each run's page provides details on hyperparameters, tracked metrics, system metrics, environment variables, and package versions.

![Run overview](/images/dynamic/screenshot-2024-02-20-at-11.35.20 pm.png "Run overview")

Additionally, you can review the run status in the Logs tab.

![Logs tab](/images/dynamic/screenshot-2024-02-20-at-11.37.51 pm.png "Logs tab")

## Experiments Analysis



The traditional method for comparing machine learning experiments is through observing learning curves.

![Metrics explorer](/images/dynamic/screenshot-2024-02-20-at-11.40.34 pm.png "Metrics explorer")

We plot the loss by differentiating curves based on batch size and learning rate combinations. Evaluation subset curves are shown in solid lines, while training curves are in dashed lines.

Moreover to track hyperparameters and compare them easily, we can utilize the Params Explorer. This involves observing how loss depends on the evaluation subset in relation to batch size and learning rate.

![Param explorer](/images/dynamic/screenshot-2024-02-20-at-11.38.32 pm.png "Params explorer")

Based on this analysis, we observe that the best performing hyperparameter combination is batch size: 32 and learning rate: 0.00004.

## Answering questions

Now let’s use the latest checkpoint of the best model to answer some questions and track the questions and the answers:

```
from transformers import pipeline

model_ckpt = "PATH_TO_BEST_MODEL_CKPT"
question_answerer = pipeline("question-answering", model=model_ckpt)

questions = [
    {
        "question": "How many countries are members of the United Nations?",
        "context": "The United Nations has 195 member countries.",
    },
    {
        "question": "What is the population of China?",
        "context": "China has a population of around 1.4 billion.",
    },
    {
        "question": "Who is the current president of the United States?",
        "context": "As of my last update in 2024, Joe Biden is the current President of the United States, succeeding Donald Trump.",
    },
    {
        "question": "How many planets are there in the solar system?",
        "context": "There are eight planets in the solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
    },
    {
        "question": "What is the capital city of Australia?",
        "context": "The capital city of Australia is Canberra.",
    },
]

for question in questions:
    output = question_answerer(
        question=question["question"], context=question["context"]
    )

    aim_callback.experiment.track(
        Text(question["question"]),
        name="question",
        context={"context": question["context"]},
    )

    aim_callback.experiment.track(
        Text(output["answer"]),
        name="answer",
        context={"context": question["context"]},
    )
```

To observe the responses we can use the Text Explorer, by grouping by “texts.context.context” in the rows, and “texts.name” in the columns:

![Text explorer](/images/dynamic/screenshot-2024-02-20-at-11.47.57 pm.png "Text explorer")

## Conclusion

To sum up, this blog post outlined how to fine-tune a DistilBERT model for question answering with the SQuAD dataset, while leveraging Aim for experiment tracking. We started by preprocessing the data and setting up the Trainer with AimCallback integration. Through systematic experimentation, we discovered the best hyperparameter combinations and monitored our model's performance using Aim's user-friendly interface.



Moreover, we demonstrated the versatility of exploration beyond mere model training by analyzing text inputs and outputs with Aim. By visualizing learning curves, comparing hyperparameter combinations, and monitoring model responses to questions, we gained valuable insights into our model's behavior.



# Learn more



[Aim is on a mission to democratize AI dev tools.](https://aimstack.readthedocs.io/en/latest/overview.html) 🙌



Try out [Aim](https://github.com/aimhubio/aim), join the [Aim community](https://community.aimstack.io/), share your feedback, open issues for new features, bugs.

Don’t forget to leave us a star on [GitHub](https://github.com/aimhubio/aim) if you think Aim is useful. ⭐️