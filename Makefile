SHELL:=/bin/bash

NBIN=./node_modules/.bin


help: ## Prints help for targets with comments
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


test: ## Run the tests once
	$(NBIN)/ava


test-watch: ## Run the tests when files change
	$(NBIN)/ava --watch


deploy-dev: ## Deploy to the dev environment
	$(NBIN)/sls deploy --env=dev


deploy-prod: test ## Deploy to the prod environment
	$(NBIN)/sls deploy --env=prod
