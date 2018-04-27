# Git bash / bash terminal (unix-emulated at least)

## Doctrine

## Create entities from metadata
```bash
php vendor/bin/doctrine orm:schema-tool:create
```

## Update entities (when metadata changed)
```bash
php vendor/bin/doctrine orm:schema-tool:drop --force
php vendor/bin/doctrine orm:schema-tool:create
```