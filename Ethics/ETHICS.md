# Data Science Ethics Checklist

[![Deon badge](https://img.shields.io/badge/ethics%20checklist-deon-brightgreen.svg?style=popout-square)](http://deon.drivendata.org/)

## A. Data Collection
 - [X] **A.1 Informed consent**: If there are human subjects, have they given informed consent, where subjects affirmatively opt-in and have a clear understanding of the data uses to which they consent?
       
    *Weibo users have consented to third-party statistical analysis of their data by agreeing to Sina Weibo's [Privacy Policy](https://weibo.com/signup/v5/privacy). Many have raised doubts that obtaining this type of consent via a Privacy Policy is truly "informed" and is deeply dependent on context (Nissenbaum, 2011). A recent article quoting Sina Weibo users' views on archiving their data for additional uses reveal some discomfort with the idea (Mengzhen, 2019). Use of Sina Weibo data is increasing, in part due to the establishment of an API in 2014 (Hu, 2020). For our analyses, we focus on data from 2009-2010, before the creation of the Sina Weibo API. The broader context of data privacy in China has changed vastly since that time and China has recently passed new laws that offer protections to users that are similar to GDPR (Pernot-Leplay, 2020). Users who posted on Sina Weibo at that time may have even less of an expectation and understanding of additional third-party data analysis than users today. However, we consider our analyses (centered on how users share information in the network and how to maximize their influence fairly) to be closely related to the administration of Sina Weibo's services themselves and likely aligned to user expectations around data use.*
 - [X] **A.2 Collection bias**: Have we considered sources of bias that could be introduced during data collection and survey design and taken steps to mitigate those?
  
    *Sina Weibo's sampling methods for the API and China's censorship practices may have removed data in ways that we cannot measure. It is possible that certain types of posts -- for example, those related to political uprisings -- may be missing at higher rates. The extent of this bias is unknown to us. Certain types of users -- such as those from rural areas or older individuals who are less likely to use social media -- may appear less in our dataset. We are concerned with the behavior of active Sina Weibo users and bias related to who is likely to use social media is outside of the scope of this project. Although we are concerned with fairness, we can only address fairness along measurable dimensions in our dataset and only in terms of the distributions of these among active users. Gender is captured in a limited way in our dataset (as only male or female). Users who identify in other ways are misrepresented in the data.*
 - [X] **A.3 Limit PII exposure**: Have we considered ways to minimize exposure of personally identifiable information (PII) for example through anonymization or not collecting information that isn't relevant for analysis?
    
    *We have analyzed minimal amount of data about users: only their gender; when they post; and who they re-post from are included in our main dataset. We have masked usernames with numeric IDs. Despite this effort to de-identify the data, users could be identified by looking at Sina Weibo posts that match a given timestamp and volume of reshares. Given that this information is public, we are not revealing any additional PII that is not already available. However, we are increasing the accessibility of the information, which could increase the risk that users might be identified. In this context -- where we are identifying users with a great deal of influence -- this may cause harm to users who could be identified as potentially dangerous and candidates for censorship if their posts are political in nature.*
 - [X] **A.4 Downstream bias mitigation**: Have we considered ways to enable testing downstream results for biased outcomes (e.g., collecting data on protected group status like race or gender)?

    *Our analysis is focused on testing downstream results for biased outcomes.*

## B. Data Storage
 - [ ] **B.1 Data security**: Do we have a plan to protect and secure data (e.g., encryption at rest and in transit, access controls on internal users and third parties, access logs, and up-to-date software)?
 - [ ] **B.2 Right to be forgotten**: Do we have a mechanism through which an individual can request their personal information be removed?
 - [ ] **B.3 Data retention plan**: Is there a schedule or plan to delete the data after it is no longer needed?

## C. Analysis
 - [x] **C.1 Missing perspectives**: Have we sought to address blindspots in the analysis through engagement with relevant stakeholders (e.g., checking assumptions and discussing implications with affected communities and subject matter experts)?

    *We have discussed our research with subject matter experts at the University of California, Berkeley I School. We do not have connections to Sina Weibo users and were not able to speak with affected communities, which is a major blindspot in our research. We do not -- for example -- understand their perspective on our definition of fairness and any harms associated with the way we conducted our research.*
 - [ ] **C.2 Dataset bias**: Have we examined the data for possible sources of bias and taken steps to mitigate or address these biases (e.g., stereotype perpetuation, confirmation bias, imbalanced classes, or omitted confounding variables)?

    * *
 - [ ] **C.3 Honest representation**: Are our visualizations, summary statistics, and reports designed to honestly represent the underlying data?
 - [ ] **C.4 Privacy in analysis**: Have we ensured that data with PII are not used or displayed unless necessary for the analysis?
 - [ ] **C.5 Auditability**: Is the process of generating the analysis well documented and reproducible if we discover issues in the future?

## D. Modeling
 - [ ] **D.1 Proxy discrimination**: Have we ensured that the model does not rely on variables or proxies for variables that are unfairly discriminatory?
 - [ ] **D.2 Fairness across groups**: Have we tested model results for fairness with respect to different affected groups (e.g., tested for disparate error rates)?
 - [ ] **D.3 Metric selection**: Have we considered the effects of optimizing for our defined metrics and considered additional metrics?
 - [ ] **D.4 Explainability**: Can we explain in understandable terms a decision the model made in cases where a justification is needed?
 - [ ] **D.5 Communicate bias**: Have we communicated the shortcomings, limitations, and biases of the model to relevant stakeholders in ways that can be generally understood?

## E. Deployment
 - [ ] **E.1 Redress**: Have we discussed with our organization a plan for response if users are harmed by the results (e.g., how does the data science team evaluate these cases and update analysis and models to prevent future harm)?
 - [ ] **E.2 Roll back**: Is there a way to turn off or roll back the model in production if necessary?
 - [ ] **E.3 Concept drift**: Do we test and monitor for concept drift to ensure the model remains fair over time?
 - [ ] **E.4 Unintended use**: Have we taken steps to identify and prevent unintended uses and abuse of the model and do we have a plan to monitor these once the model is deployed?

*Data Science Ethics Checklist generated with [deon](http://deon.drivendata.org).*

## References

Hu, S. (2020, March 26). *Weibo – How is China’s second largest social media platform being used for social research?*. The London School of Economics and Political Science Blog. Retrieved from: https://blogs.lse.ac.uk/impactofsocialsciences/2020/03/26/weibo-how-is-chinas-second-largest-social-media-platform-being-used-for-social-research/ 

Mengzhen, W. (2019, May 19). *China's national library to archive 200 billion Sina Weibo posts*. CGTN. Retrieved from: https://news.cgtn.com/news/3d3d674d79677a4e34457a6333566d54/index.html 

Nissenbaum, H. (2011). A Contextual Approach to Privacy Online. *Daedalus, 140* (4): 32–48. doi: https://doi.org/10.1162/DAED_a_00113

Pernot-Leplay, E. (2020). China’s Approach on Data Privacy Law: A Third Way Between the U.S. and the EU?. *Penn State Journal of Law & International Affairs, Vol. 8*, No. 1. https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3542820

Zeng, J., Burgess, J., & Bruns, A. (2015) The challenges of Weibo for data-driven digital media research. In IR16: Phoenix 2015, 2015-10-21 - 2015-10-24. Retrieved from: https://eprints.qut.edu.au/90266/ 
