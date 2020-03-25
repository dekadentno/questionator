# questionator

> Question asking app. No registration required.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## User stories

As a newcomer, I want to be able...
- to choose if I want to join a topic or create a topic

As a speaker, I want to be able...
- to create a topic and give it a name
- to give a topic a custom (uniq) name that will be used in url 
- to copy the topic url with a click
- to ask for a short url of my topic url
- to disable the possibility of upvoating other people's questions
- to limit the number of questions 
- to remove questions that are fishy (explicit content)
- time limit the voting option

As a participant (regular user), I want to be able...
- to join a topic by name
- to post my question
- to upvote other questions
- not to upvote the same question multiple times
- change the view of the questions (card/table)

## Todos
- cron job for deleting old topics
- buttons loading state
- disabled button
