
# Influence Maximization and Fairness in Social Networks at Scale

[Project Overview](#project-overview)  •  [Influence Maximization](#influence-maximization)  •  [Fairness](#fairness)  •  [Solutions](#solutions)  •  [Contact Us](#contacting-us!)  •  [Who We Are](#who-we-are)

<p align=center>
<img width=350 src="images/test_influencers.gif" />
</p>



This README provides an overview of a project completed as part of UC Berkeley's Masters of Information and Data Science program (see "Who We Are" section below). You can find a more visual representation of our project on our Github Page: https://autumninthecloud.github.io/IM_w_fairness/ 

Continue reading below to understand the project itself, what our repo contains (and learn about how to use the code), ethical considerations, and how to contact us.

## Project Overview

<details>

In 2009, Sina Weibo – a Twitter-like platform in China – had over a million users who retweeted over 20 million messages. Most of these originated with a few “influential” users, whose original messages were retweeted many times. In the Sina Weibo network, each **node** represents a user and each **edge** represents a retweet. 

Some influencers start huge chains of retweeting, where their message is retweeted over an over. This is called a **cascade**. The largest cascade in this Sina Weibo network is over 50,000 retweets long. 

What if we have a message we want to share widely on Sina Weibo? How might we find the right influencers, who will be able to start these large cascades and share that message with the most people? This problem could apply to any kind of message, like an ad about a product we want to sell, a call for donations for a cause, or important information many people should know, like information about the COVID-19 vaccine.

**Influence maximization** algorithms solve this problem. More formally, an IM algorithm finds the set of *k* influencers that maximize information spread in the network. 

Some influencers share information with many different people, who might represent a diversity of genders, classes, races, ethnicities, et cetera. Others might share information just as widely, but only with a certain group. 

If the *cascade distribution* for a given attribute looks similar to that of the *broader network*, we might think of this as **"fair"** information spread. This concept of fairness is similar to what some might recognize as **"demographic parity"**.

**Our project updates influence maximization to find the most fair and impactful influencers.**

</details>

### Influence Maximization

<details>

[INSERT MORE IN-DEPTH EXPLANATION OF IM]

</details>

### Fairness 

<details>

[INSERT MORE IN-DEPTH EXPLANATION OF FAIRNESS]

</details>

### Solutions 

<details>

[INSERT EXPLANATION OF FPS/FAC]

</details>

### Experiments

</details>

[INSERT DESCRIPTION OF REPLICATION PROCESS - INCLUDING MEASUREMENT METHOD]

</details>

### Conclusion 

</details>

[SUMMARY OF WHAT WE LEARNED]

</details>

## Repository 

This repository contains information and resources about this project (within the README and folders in the repo). We plan to share the code once the original paper has been published.

## Contacting Us! 

If you have any input on the content of this repo, please submit a pull request. 

For anything else, please send us an email at team-influencers@googlegroups.com! We are happy to communicate about anything about this project, including:

* Any questions about how we worked together, our code, the dataset, etc.
* Ethical considerations (also see our ethics checklist directly [here](https://github.com/autumninthecloud/IM_w_fairness/blob/main/Ethics/ETHICS.md) or in our Ethics folder in the repo). For example...
  * If you find your data in our dataset, and would like us to delete it
  * If you think we should delete the data we have posted publicly 

## Who we are

We are Team Influencers, a group of students in the University of California, Berkeley's Masters of Information and Data Science program. We completed this project for our program capstone during the 2022 summer semester. You can find our project on the Berkeley website **HERE (need to add later)**. Other capstone projects are listed on this page: https://www.ischool.berkeley.edu/programs/mids/capstone. 

**Team Members (in alphabetical order)** 

[David Peletz](https://www.linkedin.com/in/david-peletz/)

[Autumn Rains](https://www.linkedin.com/in/autumninthecloud/)

[Sophia Skowronski](https://www.linkedin.com/in/sophiaskowronski/)

[Alissa Stover](https://www.linkedin.com/in/alissa-stover/)

**Advisors (in alphabetical order)**

[Prof. Alberto Todeschini](https://www.ischool.berkeley.edu/people/alberto-todeschini)

[Prof. Puya Vahabi](https://www.ischool.berkeley.edu/people/puya-h-vahabi)

**Additional thanks to everyone who gave us feedback along the way (in alphabetical order)**

Usability study participants

[Prof. Morgan Ames](https://www.ischool.berkeley.edu/about/profiles/morgan-ames)

Ankitkumar Patel
