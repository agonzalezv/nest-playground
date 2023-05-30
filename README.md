# Backend Coding Challenge

## Overview

To complete this challenge, you will need to write a simple [NestJS](https://nestjs.com/) based backend app.

## Challenge

In this Challenge you are required to use NestJS (https://nestjs.com/) with TypeScript to build a Backend Application.

## Details

- [x] The Application should run a GraphQL Server
- [x] Use MySql with TypeORM for database
- [x] Add a module named `nft` with the following properties (id, name, blockchainLink, description, imageUrl, owner, mintDate)
    - [x] Expose the following fields to the client (name, blockchainLink, description, imageUrl, mintDate)
- [ ] Add User authentication using JWT token with Role Based Access Control
- [x] Add a mutation to transfer the NFT to another user
- [x] Add a query to fetch user's owned NFTs with pagination
- [ ] Add unit tests where applicable


## On Completion

- Provide your code for review, (ideally in a git repository)
- Provide a loom recording:
    - Show that your solution works
        - [ ] a request to graphql fails without a JWT
        - [ ] a request to graphql succeeds with a JWT
        - [ ] can execute a mutation to change the owner
        - [ ] show pagination
    - [ ] Explain any assumptions you made (if any)
        - [ ] These may also be in the readme
    - [ ] Explain anything else that you think is of interest

Over the course of a couple of days, we will review your recording, and may ask questions against it asynchronously.

# SETUP

- TODO

# NOTES

- How did you decide on the technical and architectural choices used as part of your solution?
- Are there any improvements you could make to your submission?
- What would you do differently if you were allocated more time?


- I COULDN'T MAKE MY VALIDATION WORK!