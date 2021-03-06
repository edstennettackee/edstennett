---
title: CRM migration
description: >-
  I led a project to migrate from Salesforce to Hubspot with a view to getting
  all teams in one place and simplify our processes.
image: /assets/images/portfolio/crm_migration-complete.png
company: Seenit
---

## TL:DR;

This isn't a particularly pretty piece of work. You won't see beautiful mockups on East London billboards, but hopefully you can appreciate the sheer amount of work required to move every team in the company to a new CRM. I led a project to migrate from Salesforce to Hubspot with a view to getting all teams in one place and simplify our processes. The migration was completed in January 2021.

## Background

As a company we were using Hubspot for all things marketing, and Salesforce for all things Sales and CS. Good data is key to my role and to the success of every team in the business. In a bid to simplify our processes, get our data in one place that everyone has access to, and move to a tool that was relatively easy to use, I put forward a business case to migrate all teams, reporting, and processes to Hubspot and remove Salesforce entirely.

After some weeks, the business case was accepted and I led the migration.

## Execution

The main goal of the project was simplification. If I wanted to get competitor insights, win or loss analysis, or funnel conversions, I could look in any number of tools, including:

* Zendesk
* Intercom
* Jiminny
* Mailchimp
* Outreach
* Salesforce
* Hubspot
* Google Sheets
* Notion
* Typeform
* Delighted

As the company grew, so did the number of tools. This is makes sense. The issue we had was that the tools weren't talking together, so data became siloed. The basics of Product Marketing became harder to achieve.

<div><img class="larger-image" width="2305" height="1410" src="/assets/images/portfolio/migration-tools.png" /></div>

### Data sync

I set up the Hubspot &lt;&gt; Salesforce integration for Contact, Company, and Deal objects. I set up a Hubspot inclusion list that meant that MQLs would sync to Salesforce as a new lead. That lead could be sales accepted, disqualified entirely, or sent back to marketing. All salesforce deals and tasks were synced over to Hubspot. Over time, all contacts and companies could be synced as well using the off-the-shelf integration.

<div><img class="larger-image" width="2262" height="1170" src="/assets/images/portfolio/crm_migration-complete.png" /></div>

### Support

I began by migrating Customer Support who were using Intercom and Zendesk. Though Hubspot provided some significant cost savings, their Service product leaves a fair bit to be desired (knowledge base was a particularly difficult sell). The big win proved to be in having service information in the same place that we keep customer information. We could expedite support tickets if they came from a customer with a big renewal or growth deal close to the line.

### Commercial

Moving the commercial teams over proved trickier than simply syncing over everything in Salesforce. Chatter notes were used heavily - these didn't sync directly and required some fiddling with DataLoader in Salesforce. We also needed to migrate some Salesforce legacy notes and attachments. This was achieved by using TrueJay and a custom migration.

There were three major improvements that have enormously helped our commercial teams and company wide reporting.

**Split out pipelines**

In Salesforce, all opportunities sat in a single pipeline with the same stages. By splitting out the pipelines we could set up specific stages for better visibility and reporting. We could also set up pipeline specific automation and workflows. We went from one pipeline to:

* New Business
* Renewals
* Low Touch
* Professional Services
* Growth

**Products**

I set up a product library with our entire offering and, working with the leadership team, created a process that required all future deals to contain product line items. This helped with consistent pricing, track discounts that were being added, and it allowed me to set up some pretty powerful reports. Gone were hefty financial spreadsheets, if we wanted to see our revenue for the financial year broken down by products sold, it was there. If we wanted to track ARR dynamically, the data was there.

A lot of this might seem basic for any SaaS basis, but going from a scrappy start-up to a scale up, it’s easy to focus on bringing in revenue and lose sight of capturing data and reporting.

**Quotes and automation**

Doing some win / loss analysis, it was cleat that our deal cycles were long. It was also interesting to see that the scoping stage for new deals was key. The majority of our deals were lost at this stage, but if you could just make it through to the final stage, deals were more than likely to win. I wanted to find a way of improving this process. Reps would spend hours in google docs writing custom quotes, sending over legal docs, and scoping spreadsheets. Our scoping phase was long, partly because of the admin our sales reps were required to go through. I was able to set up the following:

* Legals hosted on our website. Sending legals as word docs or PDFs increase the propensity for procurement teams to redline and lengthen the legal process. With legals on our website, this was reduced, though not completely eradicated. Link tracking was set up in Hubspot.
* Scoping questionnaires were moved from spreadsheets to very simple online forms where the answers were logged as properties in Hubspot.
* We stopped using google docs for order forms and moved to Hubspot quotes. This was a real game changer. Quotes could be sent over with an e-signature in under 5 minutes and looked the part.

### Reporting

Every member of the team had a Hubspot login. Team OKR dashboards were set up in Hubspot and were emailed team wide on Friday’s. Information was shared openly and was made accessible to the whole business.

Individuals had their own dashboards set up.

## Results

A lot of the success of the project came from simply being able to easily access data. After some internal resistance, the feedback from the commercial team has been excellent. It has sped up processes enormously.

Given the length of our sales cycles, only time will tell the impact this migration has made to sales cycles and conversion rates.

## Learning

The migration was extremely time heavy, received a fair amount of resistance across all teams, and exposed a number of reporting issues we had. There were various points when I didn’t think it would be possible.

Having completed the project, I do feel like I know both Salesforce and Hubspot very well.

* Doing a slow migration, though at times painful, did at least help with the transition. Moving teams over one by one while they still had access to the old system did help.
* Getting key stakeholders on board as early on as possible
* Getting team leads to become internal experts
* Identify internal experts that can help with questions. There were days where I may have had messages from 10+ people a day with ‘how do I’ questions.
* This was steep learning curve. If budgets allowed, perhaps using a service like TrueJay to handle the entire migration may have been more cost and time efficient.
* Prevention. Regularly checking data and reporting, identifying gaps, and fixing as a matter of urgency.
