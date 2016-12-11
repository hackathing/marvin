SHELL:=/bin/bash

NBIN=./node_modules/.bin
AVA=node -r babel-register ./node_modules/.bin/ava


help: ## Prints help for targets with comments
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


test: ## Run the tests once
	$(AVA)


test-watch: ## Run the tests when files change
	$(AVA) --watch


lint: ## Run the linter
	$(NBIN)/eslint .


lint-fix: ## Auto fix lint errors where possible
	$(NBIN)/eslint . --fix


deploy-dev: ## Deploy to the dev environment
	$(NBIN)/sls deploy --stage=dev


deploy-prod: test ## Deploy to the prod environment
	$(NBIN)/sls deploy --stage=prod


logs-dev: ## View dev logs
	NODE_ENV=production $(NBIN)/sls logs --function handleMessage --stage=dev


logs-prod: test ## View prod logs
	NODE_ENV=production $(NBIN)/sls logs --function handleMessage --stage=prod
