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
- [-] Add User authentication using JWT token with Role Based Access Control (Faulty)
- [x] Add a mutation to transfer the NFT to another user
- [x] Add a query to fetch user's owned NFTs with pagination
- [ ] Add unit tests where applicable (Incomplete)


## On Completion

- Provide your code for review, (ideally in a git repository)
- Provide a loom recording:
    - Show that your solution works
        - [x] a request to graphql fails without a JWT
        - [x] a request to graphql succeeds with a JWT
        - [x] can execute a mutation to change the owner
        - [x] show pagination
    - [x] Explain any assumptions you made (if any)
        - Wallet addresses should be valid
        - Most parameters should be required and/or unique
        - (not in code) The owner transfer is reflected on-chain before updating the DB
    - [x] Explain anything else that you think is of interest
        - Added some extra niceties:
            - Mutations and queries to retrieve and create users
            - Some extra validations to inputs
        
Over the course of a couple of days, we will review your recording, and may ask questions against it asynchronously.

# SETUP

- Clone this repo: 
    ```bash
    git clone git@github.com:agonzalezv/nest-playground.git
    ```

    ```bash
    cd nest-playground
    ```

- Install dependencies: 
    ```bash
    yarn
    ```

- In a separate window, run the database container. You should have `docker` installed in your machine: 
    ```bash
    docker-compose up
    ```

- Start your server: 
    ```bash 
    yarn start
    ```

- To access the GraphQL endpoint, go to https://localhost:3000/graphql in your browser.

Available operations: 

- **Create a new NFT owner**
    ```bash
    mutation CreateOwner($walletAddress: String!) {
        createOwner(walletAddress: $walletAddress) {
            walletAddress
        }
    }
    ```
    variables: 
    ```json
    {
        "walletAddress": "0x0"
    }
    ```
    headers: 
    ```json
    {
         "Authorization": "Bearer valid.jwt.token"
    }
    ```
    
- **Query an NFT owner**
    ```bash
    query owner($walletAddress: ID!) {
        owner(walletAddress: $walletAddress) {
            walletAddress
        }
    }

    ```
    variables: 
    ```json
    {
        "walletAddress": "0x0"
    }
    ```
    headers: 
    ```json
    {
         "Authorization": "Bearer valid.jwt.token"
    }
    ```

- **Query all NFT owners**
    ```bash
    query owners {
        owners {
            walletAddress
        }
    }
    ```
    headers: 
    ```json
    {
        "Authorization": "Bearer valid.jwt.token"
    }
    ```

- **Store a new NFT**
    ```bash
    mutation CreateNft($walletAddress: String!, $data: NftData!) {
        createNft(walletAddress: $walletAddress, data: $data) {
            name
            blockchainLink
            description
            imageUrl
            mintDate
        }
    }

    ```
    variables: 
    ```json
    {
        "walletAddress": "0x0",
        "data": {
            "name": string!,
            "blockchainLink": url!,  
            "imageUrl": url!,
            "description": string,
            "mintDate": ISOTimestamp
        }
    }
    
    * Notes: 
        Values marked with ! are required. 
        mintDate will default to the current timestamp if not manually set. 
        blockchainLink is a unique value. 
    ```

- **Transfer an NFT to a different owner**
    ```bash
    mutation TransferNft($id: ID!, $walletAddress: String!) {
        transferNft(id: $id, walletAddress: $walletAddress) {
            name
            blockchainLink
            description
            imageUrl
            mintDate
        }
    }
    ```
    variables: 
    ```json
    {
        "id": "1",
        "walletAddress": "0x1"
    }
    ```

- **Get NFTs by owner**
    ```bash
    query getByOwner($walletAddress: String!, $limit:Int, $page: Int) {
        getByOwner(walletAddress: $walletAddress, limit: $limit, page: $page) {
            nfts{
            name
            blockchainLink
            description
            imageUrl
            mintDate
            },
            total
        }
    }

    * Notes: 
        limit is optional and will default to 10 if unset. 
        page is optional and will default to 1 if unset.

    ```
    variables: 
    ```json
    {
        "walletAddress": "0x0",
        "limit": 100,
        "page": 1
    }
    ```

- To access the database: 

    First get the container ID:
    ```bash
    docker container ls
    ```
    Then, get into it:
    ```bash
    docker exec -it your-container-id mysql dev -u root -p
    ```
    the database password is `root`. 

    Once there, select your database: 

    ```sql
        > use dev;
        > show tables;
        
        +---------------+
        | Tables_in_dev |
        +---------------+
        | nft           |
        | owner         |
        +---------------+
    ```

- If you make changes to the GraphQL schema you need to generate new typings: 
    ```bash
    yarn run generate-typings
    ```

# NOTES

- How did you decide on the technical and architectural choices used as part of your solution?
    - Mostly following the requirements above with regards to framework, orm etc :) 
    - Did some light whiteboarding regarding database schema, graphql queries, nice-to have features etc. 
    
- Are there any improvements you could make to your submission?
    - Absolutely! 
        - More unit tests
        - Some lots of module dependency weirdness
        - Solve a lot of stuff that I thought it would work by default but it really didnt (default values, validation pipes, guards, module imports to name a few). Went into a couple rabbit holes because of that
        - Better error handling, specially from database responses. 
        - Solve JWT authentication issues. My implementation is buggy, and far from perfect.
        - Maybe a little front-end on top of that :)  

- What would you do differently if you were allocated more time?
    - See above list, and also, 
    - I'd have played with a different database (maybe mongodb)
    - I'd have tinkered with a serverless implementation
