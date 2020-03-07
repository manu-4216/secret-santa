# _Secret Santa_ project

#### Table of Contents

- [Description](#description)
- [Tech](#tech)
- [Features](#features)
- [Screenshots](#screenshots)

## Description

> **Secret Santa** is a Western Christmas tradition in which members of a group or community are randomly assigned a person to whom they give a gift. The identity of the gift giver is a secret not to be revealed until after the gift is opened.

## Tech

- AWS lambda, serverless
- nodemailer (for sending emails)

## Features

#### F1. Creating a secret santa group

1. User UI:
   - enter a list of name-emails
   - enter instructions (deadline, max price, etc)
2. Backend:

   - match the friends randomly
   - send an email with the instructions and the generated match

#### F2. Editing a wish list

1. User UI:

   - enter a wish list

2. Backend:
   - also send to each user an unique URL where they can edit their wish list. This will encrypt the email of the match
   - decrypt the email from the unique URL, and notify by email of the wish list update

## Screenshots

- First email:
  ![](/screenshots/first-email.png?raw=true)

- Email for wishlist update:
  ![](/screenshots/wishlist-email.png?raw=true)
