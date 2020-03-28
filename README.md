# Questionator

Question asking app written in Nuxt.js. Free, open source and no registration required. 
Questionator is meant to provide easier participation on meetings, conferences, workshops etc. 
Speakers will open new topics in Questionator and share the topic ID, topic URL or topic QR code to participants. When a certain topic is accessed, questions can be posted (anonymously) and upvoted, so that questions with more votes will go closer to the top of the list. It is not unfamiliar that IT people and geeks are mostly introverted and shy, so raising hands in a big crowded conference room can be discouraging. What if my question is dumb? What if my question has been already answered? What if my question is simply not good enough? These questions will no longer be an issue with Questionator.

Color theme used from [here](https://colorhunt.co/palette/163836).

Upvote (heart) button used from [here](https://codepen.io/jonitrythall/pen/myEpeV)

Card hover effect inspired by [this pen](https://codepen.io/rafaelavlucas/pen/rQWJYG)


## User stories

As a newcomer, I want to be able...
- to choose if I want to join a topic or create a topic

As a speaker, I want to be able...
- to create a topic and give it a name
- to copy the topic url with a click
- to generate a QR code of the topic
- to limit the number of questions 

As a participant (regular user), I want to be able...
- to join a topic by name
- to join a topic by provided url
- to post my question
- to upvote other questions
- not to upvote the same question multiple times

## Todos

- write some kind of use policy?
- refactor in vue 3, leave vue 2 implementation in separate branch
- think of a way how to purge old unused topics
- logo + favicon (what to do here?)
- switch between card view and compact view for questions
- functionality to limit number of questions per topic
