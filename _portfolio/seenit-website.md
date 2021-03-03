---
title: Seenit website
description: >-
  I led the Seenit website project. This involved product messaging, pricing,
  design, data, a bit of development here and there, and lots of hard work. This
  was an extension of the rebrand project and a piece of work I'm really proud
  of. Have a click around and see what you think first hand at seenit.io.
image:
company: Seenit
---
## TL:DR;

I led the Seenit website project. This involved product messaging, pricing, design, data, a bit of development here and there, and lots of hard work. This was an extension of the rebrand project and a piece of work I'm really proud of. Have a click around and see what you think first hand at [seenit.io](http://seenit.io).

## Background

As we approached the start of our 2020 FY and the launch of our new product, Seenit Stellar, we needed to update our website to unify our product offering.

Up to this point, we split our product offering between Stellar (our next-gen product) and Enterprise (our existing product). Users could could sign up to use Stellar as a BETA user, or they could purchase Seenit Enterprise. With the public launch of Stellar, we waned to unify our offering and pricing.

Given the work required, we opted to do a redesign and rebuilt of the entire site. There were a number of projects that were kicked off alongside the launch of the new site.

* Building a SAAS Engine
* Pricing
* Qualification
* Redesign
* Rebuild
* Content migration

Unifying our product offering and pricing proved to be two of the largest chunks of work. Though I'm unable to talk in much detail about the projects, you can see the pricing live on the site.

## Execution

Working closely with our CPO, we began sketching out some sitemaps to look at how we could order the website. Our existing site was huge. It was built by me as one of my first projects after joining Seenit. It had grown from being a simple brochure site with a blog, into a relatively complex repository with free downloads, landing pages, webinars, awards, events, and more.

![](/assets/images/portfolio/seenit_website-menu-2.png){: width="1952" height="1244"}

![](/assets/images/portfolio/seenit_website-menu.png){: width="2070" height="1472"}

After working out a way of structuring the data that seemed to make sense, JIRA design tasks were created and the work was split out between myself and the CPO.

I focused heavily on the graphics, the layouts, and pages that required a fair amount of design work. Our CPO predominately focused on the resource pages.

### Process

We used a combination of JIRA, Sketch, Abstract, and Zeplin for the design work. For example when working on the 'How it Works' page the JIRA ticket would be assigned to me. When I was ready to begin designing, I'd branch off master in Abstract and work in Sketch using our global design libraries. I'd merge back in to master when ready. I could upload the design to Zeplin, attach it to the JIRA ticket and assign to a member of the team.

The process encouraged peer review and debate around design decisions. Abstract kept files structured and with a full history thanks for git.

We've since implemented the same process across all design work in Product and Marketing.

![](/uploads/seenit-website-mockups.png){: width="2654" height="1884"}

### Data

We'd committed to running at least 5 CRO for FY 2021 so data and reporting was a key consideration. We made a number of updates to ensure we could do this beyond Google Analytics.

* Migrate to Hubspot forms to dedicated lead slack channels
* Set up properties and workflows relating to downloadable content and webinars to track performance
* Ensure each page has a 'content\_type' that Hubspot can read for attribution reporting
* Each page could accept a Hubspot campaign ID for better ROI and CAC reporting
* Set up a qualification pipeline in Hubspot to handle inbound MQLs. We could use the pipeline to track the % of MQLs that become Sales Accepted, Sales Qualified, or Disqualified
* Set up lead scoring to flag potentially high quality leads that are more likely to purchase based on their online activity.
* Implement Hotjar and set up an optional monthly team session where we'd watch recordings with a beer and capture trends in Notion

### Build

We decided to stick with Jekyll and CloudCannon CMS for the site build. Though building with Hubspot CMS would give us a pretty tight integration with our CRM, we didn't have a huge amount of internal expertise with HubDB and HubL.

The main build was outsourced to a freelancer. They were on our Zeplin, Abstract, Jira, and Slack and so they could seamlessly become part of our process. Design to developer handoff became far easier as a result.

Opting for Jekyll and CloudCannon hosting did mean that we could get some pretty impressive lighthouse scores.

![](/uploads/seenit-website-performance.png){: width="1064" height="276"}

## Delivery

The site went live in early February 2021. We moved our hosting to CloudCannon with a hefty 301 file that accounted for the new site structure.

## Results

The immediate feedback from the team, investors, and wider community was extremely positive. Though at the time of writing it's still quite early after launch, we did a notice a lift in our OKRs.

* 6\.1% increase in website sessions 30 days after launch
* 34\.5% increase in session duration
* 18% increase in MQLs
* 30% increase in 'Marketing Touched' SQLs
* 14% increase in 'Marketing Touched' pipeline generated

## Learning

As a product marketing person, I'm a big fan of 'retro-ing' projects. For the next rebrand project I do, here's some of my learnings:

* I'd work closely with a shit-hot copywriter to build out the website copy inline with our messaging framework and tone of voice. We had a huge amount of help across the marketing and product team, but working with a copywriter would have helped streamline this process.
* Run it as an agile project, releasing parts of the website. The blog, for example, was a huge piece of work to migrate. We could have set up a [blog.seenit.io](http://blog.seenit.io) domain and hosted it externally to push the release out earlier
* Briefed our in-house video editors at the beginning of the project so they could work on updating some of our product videos. I had originally committed to do this, but in the end opted to launch without because of time.
