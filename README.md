# _Secret Santa_ project

## Description

> **Secret Santa** is a Western Christmas tradition in which members of a group or community are randomly assigned a person to whom they give a gift. The identity of the gift giver is a secret not to be revealed until after the gift is opened.

## Tech

- AWS lambda, serverless
- nodemon (for sending emails)

## Features

#### F1. Creating a secret santa group

1. User UI:
   - enter a list of name-emails
   - enter instructions (deadline, max price, etc)
2. Backend:

   - match the friends randomly
   - send an email with the instructions and the generated match

#### F2. Editing the wish list

1. User UI:

   - enter a wish list

2. Backend:
   - also send to each user an unique URL where they can edit their wish list. This will encrypt the email of the match
   - receive the form with the submited wish list
   - decrypt the email of the match, and notify them by email of the wish list update
