# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- GitHub Actions CI workflow for server dependencies and client build
- Skeleton card loading animation (shimmer) replacing plain "Loading..." text
- Client-side form validation on the host listing form (title length, description length, price, image URL)
- Code of Conduct, Security Policy, and Changelog community health files

### Fixed
- Prevent double booking: overlapping date conflicts return 409 with a clear message
- Prevent check-in dates in the past (frontend min attribute + backend rejection)
- Escape regex special characters in city search to prevent ReDoS
- Confirmation dialog before cancelling a trip (shows stay name and dates)
- Soft-delete listings instead of hard-delete; block deletion if upcoming confirmed bookings exist

## [1.0.0] - 2026-09-01

### Added
- JWT authentication with guest and host roles
- Stay listing with search by city, type, guests, and max price
- Date-range booking with night count and total price calculation
- My Trips page for guests with booking cancellation
- Host dashboard: create, edit, delete listings; accept/decline bookings
- Reviews with eligibility check (completed stays only) and average rating
- Database seeding script with sample stays and demo accounts
