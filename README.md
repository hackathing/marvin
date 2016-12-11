Marvin
======

## A slackbot who is awesome (and lambda)

### Usage:

```sh
# Install deps
yarn install

# Lint
make lint
make lint-fix

# Test
make test
make test-watch

# Deploy to AWS lambda
make deploy-dev
make deploy-prod
```


### Environment Varaibles

These are required in Marvin's lambda environment.

- `THE_CAT_API_KEY`: An API key for [the cat API](http://thecatapi.com/)
