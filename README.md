# Vroom JS Utilities

This package is installed directly from Github source code, so the depended should have the `npm run prepare` 
script executed successfully to build the `lib/` dir. Because of this, `babel` dependencies also required as
core dependencies (not dev dependencies).

## Docker user beware

Beware that when we use Docker containers, by default the container run as `root` used. And NPM have behaviour
when we install package using `root` user, NPM will not run `npm run prepare` command plus there is no
notification about this behaviours causing us wondering why `lib/` folder not created.

## Docker commands

```shell script
docker-compose up
docker-compose run app npm run-script build
```
