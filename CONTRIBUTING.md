# Kandahar-IHS Contributor's Guide

Below is our guidance for how to report issues, propose new features, and submit contributions via Pull Requests (PRs).

## Open Development Workflow

The Kandahar-IHS is VERY active in this GitHub Repo. In fact, we live in it all day long and carry out all our development in the open!

When the team finds issues we file them in the repo. When we propose new ideas or think-up new features, we file new feature requests. When we work on fixes or features, we create branches and work on those improvements. And when PRs are reviewed, we review in public - including all the good, the bad, and the ugly parts.

The point of doing all this work in public is to ensure that we are holding ourselves to a high degree of transparency, and so that the community sees that we apply the same processes and hold ourselves to the same quality-bar as we do to community-submitted issues and PRs. We also want to make sure that we expose our team culture and "tribal knowledge" that is inherent in any closely-knit team, which often contains considerable value to those new to the project who are trying to figure out "why the heck does this thing look/work like this???"

### Repo Actions
<!-- need documentation -->


---
## Reporting Security Issues

**Please do not report security vulnerabilities through public GitHub issues.** Instead, please report them to the whatsapp. See 
<!-- Security file will be added -->
[SECURITY.md](./SECURITY.md) for more information.

## Before you start, file an issue

Please follow this simple rule to help us eliminate any unnecessary wasted effort & frustration, and ensure an efficient and effective use of everyone's time - yours, ours, and other community members':

> 👉 If you have a question, think you've discovered an issue, would like to propose a new feature, etc., then find/file an issue **BEFORE** starting work to fix/implement it.

### Search existing issues first

Before filing a new issue, search existing open and closed issues first: This project is moving fast! It is likely someone else has found the problem you're seeing, and someone may be working on or have already contributed a fix!

If no existing item describes your issue/feature, great - please file a new issue:

### File a new Issue

* Don't know whether you're reporting an issue or requesting a feature? File an issue
* Have a question that you don't see answered in docs, videos, etc.? File an issue
* Want to know if we're planning on building a particular feature? File an issue
* Got a great idea for a new feature? File an issue/request/idea
* Don't understand how to do something? File an issue/Community Guidance Request
* Found an existing issue that describes yours? Great - upvote and add additional commentary / info / repro-steps / etc.

When you hit "New Issue", select the type of issue closest to what you want to report/ask/request:

![New issue types](/doc/images/new-issue-template.png)

### Complete the template

**Complete the information requested in the issue template, providing as much information as possible**. The more information you provide, the more likely your issue/ask will be understood and implemented. Helpful information includes:

* What OS and Browser you're running (inc. CPU type, memory, disk, etc.)
* **We LOVE detailed repro steps!** What steps do we need to take to reproduce the issue? Assume we love to read repro steps. As much detail as you can stand is probably _barely_ enough detail for us!
* Prefer error message text where possible or screenshots of errors if text cannot be captured
* **If you intend to implement the fix/feature yourself then say so!** If you do not indicate otherwise we will assume that the issue is our to solve, or may label the issue as `Help-Wanted`.

### DO NOT post "+1" comments

> ⚠ DO NOT post "+1", "me too", or similar comments - they just add noise to an issue.

If you don't have any additional info/context to add but would like to indicate that you're affected by the issue, upvote the original issue by clicking its [+😊] button and hitting 👍 (+1) icon. This way we can actually measure how impactful an issue is.

---

## Contributing fixes / features

For those able & willing to help fix issues and/or implement features ...

### To Spec or not to Spec

Some issues/features may be quick and simple to describe and understand. For such scenarios, once a team member has agreed with your approach, skip ahead to the section headed "Fork, Branch, and Create your PR", below.

Small issues that do not require a spec will be labelled Type: Bug.

However, some issues/features will require careful thought & formal design before implementation. For these scenarios, we'll request that a spec is written and the associated issue will be labeled Type: Maintenance.

Specs help collaborators discuss different approaches to solve a problem, describe how the feature will behave, how the feature will impact the user, what happens if something goes wrong, etc. Driving towards agreement in a spec, before any code is written, often results in simpler code, and less wasted effort in the long run.

Specs will be managed in a very similar manner as code contributions so please follow the "Fork, Branch and Create your PR" below.

### Writing / Contributing-to a Spec

To write/contribute to a spec: fork, branch and commit via PRs, as you would with any code changes.

Specs are written in markdown, stored under the `\doc\spec` folder and named `[issue id] - [spec description].md`.

👉 **It is important to follow the spec templates and complete the requested information**. The available spec templates will help ensure that specs contain the minimum information & decisions necessary to permit development to begin. In particular, specs require you to confirm that you've already discussed the issue/idea with the team in an issue and that you provide the issue ID for reference.

Team members will be happy to help review specs and guide them to completion.

### Help Wanted

Once the team have approved an issue/spec, development can proceed. If no developers are immediately available, the spec can be parked ready for a developer to get started. Parked specs' issues will be labeled "Help Wanted". To find a list of development opportunities waiting for developer involvement, visit the Issues and filter on [the Help-Wanted label](https://github.com/TheCodeXTeam/Kandahar-IHS/labels/Type-Enhancement).

---

## Development

### Fork, Clone, Branch and Create your PR

Once you've discussed your proposed feature/fix/etc. with a team member, and you've agreed an approach or a spec has been written and approved, it's time to start development:

1. Fork the repo if you haven't already
1. Clone your fork locally
1. Create & push a feature branch
1. Create a [Draft Pull Request (PR)](https://github.blog/2019-02-14-introducing-draft-pull-requests/)
1. Work on your changes

### Code Review

When you'd like the team to take a look, (even if the work is not yet fully-complete), mark the PR as 'Ready For Review' so that the team can review your work and provide comments, suggestions, and request changes. It may take several cycles, but the end result will be solid, testable, conformant code that is safe for us to merge.

### Merge

Once your code has been reviewed and approved by the requisite number of team members, it will be merged into the master branch. Once merged, your PR will be automatically closed.

---

## Thank you

Thank you in advance for your contribution! Now, [what's next on the list](https://github.com/TheCodeXTeam/Kandahar-IHS/issues)? 😜