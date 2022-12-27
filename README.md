# Contentful backup workflow

This workflow can be used to create periodic "backup" copies of a Contentful `master` environment. Such backups can be leveraged to quickly roll back to previous stable content, should the need arise, or for testing various migrations before committing to `master`. 

Example backup name: auto_2022-12-27_21-18-01_BAK

The naming convention for the environments is derived from a) the `backup-name-prefix` passed in ("auto" in the above example), b) the date the workflow is run, and finally, c) the backup suffix, which is always "BAK"; all separated by underscores
## Inputs

## `contentful-space-id`:

**Required (string)** 

The Space ID of the Contentful space to back up.

## `contentful-content-management-token`:

**Required SECRET (string)** 

The Contentful content management token for the space
## `backup-name-prefix`:

Optional (string)

If no `backup-name-prefix` is passed as an argument, no backup will be created


## `delete-name-prefix`:

Optional (string)

If no `delete-name-prefix` is passed as an argument, no environment will be deleted

## Outputs

_none_
