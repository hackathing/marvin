SHELL:=/bin/bash

NBIN=./node_modules/.bin


help: ## Prints help for targets with comments
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


test: ## Run the tests once
	$(NBIN)/ava


test-watch: ## Run the tests when files change
	$(NBIN)/ava --watch


lint: ## Run the linter
	$(NBIN)/eslint .


lint-fix: ## Auto fix lint errors where possible
	$(NBIN)/eslint . --fix


deploy-dev: ## Deploy to the dev environment
	$(NBIN)/sls deploy --env=dev


deploy-prod: test ## Deploy to the prod environment
	$(NBIN)/sls deploy --env=prod


logs-dev: ## View dev logs
	$(NBIN)/sls logs --function handleMessage --env=dev


logs-prod: test ## View prod logs
	$(NBIN)/sls logs --function handleMessage --env=prod
