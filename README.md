# Contentful backup action

This action can be used to create periodic "backup" copies of a Contentful `master` environment. Such backups can be leveraged to quickly roll back to previous stable content, should the need arise, or for testing various migrations before committing to `master`. 

Example backup name: `daily_2022-12-30_02-47-22_BAK`

The naming convention for the environments is derived from a) the `backup-name-prefix` passed in ("daily" in the above example), b) the date the workflow is run, and finally, c) the backup suffix, which is always "BAK"; all separated by underscores.
# Inputs

**`contentful-space-id`** (required, string): the Space ID of the Contentful space to back up

**`contentful-content-management-token`** (required SECRET, string): the Contentful content management token for the space.
E.G. `CONTENTFUL_CONTENT_MANAGEMENT_TOKEN`

**`backup-name-prefix`** (optional string, alphanumeric): if no `backup-name-prefix` is passed as an argument, no backup will be created

**`delete-name-prefix`** (optional string, alphanumeric): if no `delete-name-prefix` is passed as an argument, no environment will be deleted

# Outputs

_none_

# Example workflow

The following example is run on a schedule (See [crontab guru](https://crontab.guru/#0_18_*_*_1-5) for examples), but can also be triggered by a user at any time.

See the `/.github/workflows/contentful_...` files for examples of how to use this action.

```js
name: Contentful - weekday backup
on:
    schedule:
        - cron: "0 18 * * 1-5"
    workflow_dispatch:

jobs:
    contentful_backup_job:
        runs-on: ubuntu-latest
        name: Contentful backup
        steps:
            - name: Checkout
              uses: actions/checkout@v3
            - name: Back up Contentful environment
              uses: ./
              id: backup
              with:
                  contentful-content-management-token: ${{secrets.CONTENTFUL_CONTENT_MANAGEMENT_TOKEN}}
                  contentful-space-id: "16nm6vz43ids"
                  backup-name-prefix: "daily"
                  delete-name-prefix: "daily"
```
