# Questionator

Question asking app written in Nuxt.js. No registration required. .

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

- refactor in vue 3, leave vue 2 implementation in separate branch
- investigate how to purge old topics
- buttons loading state
- disabled upvote button
- switch between card view and compact view
- logo + favicon
- seo
- responsive :(
- implement short url
- functionality to limit number of questions per topic
- better organize css
