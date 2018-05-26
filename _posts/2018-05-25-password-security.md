---
layout: blog-post
title: So, what actually makes a good password?
tags:
- Design
author: Ed Stennett
date:   2018-05-25 08:20:00 +0000
thumbnail: assets/img/blog/26-05-18-password_strength.png
permalink: /blog/:year/:month/:day/:title/
---

The 25th of May 2018, a day that will affectionately be known as ‘GDPR Day’ for years to come, a day where personal privacy and data collected online was at the top of the agenda for companies across the world. That 4 letter acronym that I needn't repeat has been ubiquititous, making us question how many data the tech giants of this world _really_ store about me. With data privacy at the forefront of the worlds media, I thought I'd write about a topic that is actually a lot easier to well than people make out; passwords.

There are myriad considerations when picking a _good_ password: should you reuse the password; how long should it be; how many numbers and special characters should I use? The list continues and sign up forms seem to have varied and conflicting opinions. However, picking a good password is actually a lot easier than people make out. There is a popular meme that eluded to this that surfaced on ‘xkcd’ few years ago.

<div class="container">
<div class="row">
<div class="col-12"> 
<div align="center">
	<img src="{{ site.baseurl }}/assets/img/blog/26-05-18-password_strength.png" alt="new seenit website">
    <h6>Source: xkcd</h6>
</div>
</div>
</div>
</div>

Those that would consider themselves 'experts' in password security talk about a concept called ‘password entropy’, which in laymen’s terms is the amount of data or information in the pass phrase itself. The idea being, very simply, there is a direct correlation between password entropy and password security. This is where the various passwords rules you see so regularly online come into play. Some sites won't let you sign up unless your password is at least 8 characters, contains one uppercase and one lowercase letter, contains at least one number and contains at least one special character. Makes sense? A password that adheres to these rules will contain a sufficient amount of entropy and can therefore be classed as _secure_. 

Ultimately, the reason companies are so keen to ensure their users have secure passwords is the very real threat of attack. If a site is hacked, the attackers can (and do) post passwords online. Companies will never store passwords as plain text, they will encrypt them to ensure even after a data leak passwords remain hard to uncover. How hard this is to do will depend on the level of encryption that has been applied to the passwords. In other words, attackers will attempt crack the passwords either through (brute force)[https://en.wikipedia.org/wiki/Brute-force_attack] or a [dictionary](https://searchsecurity.techtarget.com/definition/dictionary-attack). To put this in perspective, passwords that are encrypted with MD5 (considered a low level of encryption), a powerful computer will be able to go through ~40 billion password hashes a second.

The problem with passwords and the many rules that seem to govern them is that they are becoming increasingly hard for humans to remember and increasingly easy for computers to crack. Take the set of rules stated above. That would yield a password along the lines of:

<div class="container">
    <div class="row">
        <div class="col-12"> 
            <div align="center">
	           <code>@!Rgu1tAr</code>
            </div>
        </div>
    </div>
</div>

8 characters and follows all the necessary rules. But this isn't a good password. It doesn't contain a huge amount of entropy and is fairly hard to remember. A password like the above also follows common conventions like replacing an `i` for an `!` or a `1` and is therefore far easier to crack.

The latest thinking around choosing a good password is to pick something that is easy for a human to remember and hard for a computer to crack. The easiest way of doing this is to quite simply pick out four or five relatively uncommon words and stick them together. As an example, the password will below will be far easier to for a human to remember and far harder for a computer to crack given the amount of entropy it contains.

<div class="container">
    <div class="row">
        <div class="col-12"> 
            <div align="center">
	           <code>basingstoke attributes society benevolent</code>
            </div>
        </div>
    </div>
</div>

#### TL;DR

Where passwords rules allow, chose something that's easy for you to remember and hard for a computer to crack. Try and stitch four or five random and uncommon words together, something ultimately that's easy to type, easy to remember, and keeps those pesky attackers away. If you have to follow certain rules you can always try something like: 

<div class="container">
    <div class="row">
        <div class="col-12"> 
            <div align="center">
	           <code>@1Basingstoke attributes society benevolent</code>
            </div>
        </div>
    </div>
</div>

The main thing is to make sure you are safe and secure online. By using a long but memorable password, never reusing, and ideally making use of something like [LastPass](https://lastpass.com) you can be safe in knowledge it would take a few million years to crack your password, should anyone ever get hold of it's encrypted hash.