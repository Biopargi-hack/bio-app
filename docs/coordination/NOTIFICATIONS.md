# Notifications

GitHub email settings are **per account**. No repository or organisation setting
can switch off someone else's email, so each of the four does this once.

## 1. Turn off email, keep the GitHub inbox (recommended)

1. Open <https://github.com/settings/notifications>.
2. Under **Email notification preferences**, choose **Custom**.
3. Uncheck every row in the **Email** column, or uncheck **Email** at the top.
4. Keep the GitHub notifications inbox — review requests still appear there.

This applies to every repository, not just this one. Reverse it the same way.

## 2. Gmail filter (hard stop)

In Gmail: **Settings → Filters → Create a new filter**.

- From: `notifications@github.com`
- Subject: `Biopargi-hack/bio-app`
- Action: **Skip the Inbox**, apply label `GitHub/bio-app`, never send to spam

GitHub notification subjects start with `[Biopargi-hack/bio-app]`.

## What still sends email by design

- A failed `verify` or `pr-notes` check on your own pull request.
- An explicit @mention or an assignment.
- A security alert, if a secret is ever pushed.

Those are the ones worth keeping.

## What no longer sends email

Team-wide review requests. The old `CODEOWNERS` rule asked all four people to
review every pull request; it was removed on 27 November. A pull request still
needs one approval from any crew member, but the author chooses the reviewer, so
only that person is notified.
