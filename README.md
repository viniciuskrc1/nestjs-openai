## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# OpenAI Integration Project

This project is a simple integration with OpenAI, designed to test the API.

# Setup

To get started, you'll need to create a `.env` file in the root directory of the project. In this file, add the following line:

```
OPENAI_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual OpenAI API key. This key can be generated on the OpenAI platform, which you can access [here](https://platform.openai.com/).


# Testing

To test the API, import the `Open Chat IA.postman_collection.json` file into your Postman application. Then, test the `http://localhost:3001/openai/chat-completion` endpoint.

# Enjoy!

That's it! You're all set up to start exploring and testing the OpenAI API. Enjoy!
