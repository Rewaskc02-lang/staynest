# Security Policy

## Supported Versions

We take the security of StayNest seriously. Security fixes are applied to the **latest release** only.

| Version | Supported          |
| ------- | ------------------ |
| latest  | ✅ Yes             |
| older   | ❌ No              |

## Reporting a Vulnerability

**Please do NOT report security vulnerabilities through public GitHub issues.**

If you discover a vulnerability, please report it responsibly by emailing the maintainers directly. Include:

1. A clear description of the vulnerability.
2. Steps to reproduce the issue.
3. The potential impact (e.g., data exposure, authentication bypass, injection).
4. Any suggested remediation if you have one.

We will acknowledge receipt within **48 hours** and aim to provide a fix within **14 days** for confirmed vulnerabilities.

## Security Best Practices in This Project

- **JWT in HttpOnly Cookies** — tokens are never accessible to JavaScript, preventing XSS token theft.
- **bcrypt password hashing** — passwords are hashed with salt rounds before storage.
- **Input sanitisation** — user-provided search queries are escaped before building RegExp patterns.
- **RBAC middleware** — `protect` and `hostOnly` middleware enforce role-based access on every sensitive route.
- **No secrets committed** — `.env` is gitignored; use `.env.example` as a template.

## Disclosure Policy

We follow responsible disclosure. Once a fix is released, the vulnerability may be disclosed publicly with credit to the reporter (unless anonymity is requested).
