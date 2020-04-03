# Crash course to Git Commands

In Git the basic unit is the commit(ment). When you commit you "freeze something in time" locally. At that point you can still modify the history easily. When you push, it's out there and frozen in time for everybody. It's trickier and not recommended that you change your mind at that point.

## Classic git workflow

1. add a file/modify a file
2. commit to changes 
3. pull changes from others (before pushing)
4. push changes 

## Basic commands:
- **"downloading"** an existing repo: `git clone URL`
- **adding a new file** to a repo: `git add FILENAME`. Once you add a file (or you modify it) you need to commit.
- **commit all changes**: `git commit -a -m "YOUR COMMIT MESSAGE HERE"`. (Commit messages can be important. See [here](https://herewecode.io/blog/a-beginners-guide-to-git-how-to-write-a-good-commit-message/) for example)
- **commit explicitly added changes** (only what you just did `git add` on): `git commit  -m "YOUR COMMIT MESSAGE HERE"`
- **Pushing/pulling**: `git push`/`git pull`
- **See history**: `git log` (use option `-p` for more info)
- **"Changing your mind on a local commit"**: `git revert SHA_OF_COMMIT_TO_UNDO`. You can find the SHA of the commit from `git log`.

## For more info
- [A more extended tutorials](https://www.atlassian.com/git)