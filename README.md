# README

## TOC

## Tech Stack

### Frontend

- TypeScript
- React
- Next.js
- scss & modules
- Storybook
- JSDocs
- Stripe? donations
- Eslint, prettier? Other configs?
- User auth - firebase!!!!
- Redux toolkit
- Icons?
- Dotprop
- Reselect
- Jest
- react-popup
- lodash

#### Packages

### Backend

- Postgres?
- Vercel
- S3
- GH Workflow, Actions?
- Docker
- Backup system??

## Schemas & Type Definitions

### Stored in DBs

- User
- CharacterImage
- Account???

- Set
- Item
- MakeupCollection
- Brand
- Ally
- Lightchase (pav)
- Photo
- Decoration
- Title
- Recipe
- Property
- Furniture

## Overview

A webapp where players of Life Makeover can view the game's items with advanced sort and filter options and build personal catalogs of owned, wishlisted, and unlocked items. Users can calculate the material requirements of wishlists to plan out their spending and preview details of items that can't be seen in-game before investing in them.

### Inspirations

- Shining Nikki fansites
- Notion sort and filter features
- Wikis - crowdsourcing

### Feature List

P0s:

- Catalog of items
- Can sort
- Can filter
- Can see details in detail-page
  - Shows calculated cost of item (currency, materials, etc.)

P1s:

- User accounts
- Can mark items as owned, wishlist, rating
- Admin UI to upload new content

P2s:

- User can mark item palettes as unlocked, wishlist
- User can upload images for sets and items in image gallery
- User has personal profile page with image gallery

P3s? Unsure?:

- Include other game content like: allies, photo assets, decorations, home stuff

- Tabbed item gallery - sets, fashion, makeup, allies, photo, decoration (avatar, frame, chat bubble, chat bg), title, recipe, homes
- Sort by: Rarity, Name, Release, Cost?, Subcategory, Attributes (10), Owned/Unowned
- Filter by: Rarity, Attributes, Tag, Obtain Method, Cost?, Subcategory, Owned/Unowned
- View item details:
  - Name
  - Description
  - Star rarity
  - Attributes
  - Images
  - Obtain method
  - Unlock method (vanes, color charts)
  - Set?
  - Collection?
- Enable user catalogs to mark items/sets as:
  - Owned
  - Wishlist
  - Rating - 5-1 hearts (A-F)
  - Palette wishlist - All or individually (16)
- User image uploads - monetization??? - per-user limit?
- SE
- Report option for bad content (bad username, bad images)
- View user-created content
- Images
  - Official
  - Default - angles
  - Default - styled
  - Official recolors
  - Unique recolors
- Admin UI to edit and upload items
- Backup system?

## Technical Challenges

- How to do efficient, optimized sorting and filtering? Considering multiplied complexity of combined reqs?
- If I store item info in db and update via UI or postgres, then the UI should probably be thoroughly tested to ensure it doesn't break and I don't have to go back in and debug it later
  - I will never come back and debug it, so if it breaks, it's dead forever.
- Consider for multilanguage support including user contributions as a multilanguage game
- Consider multi-region information for things like release dates, availability, etc.
- Report and flagging system for abuse from users

## Design

- Copy LM's design aesthetic as the lead
- Use their assets where possible

### Wireframes

- Homepage
- User profile creation
- Item popup/hover modal
- Item page
- User profile

## Timeline

- Have design doc and P0 app working on Render
- Share to community for feedback
- Get beta-ready
- Oct - get beta testers, add P1s, polish & finalize, consider monetization
  - Study C#, Unity
- Nov - Game, Persistamp?

- NOW:
  [x] Create GitHub repo
  [x] Deploy to Vercel
  [x] Add libraries and links to docs
  [x] Finish building navigation
  [/] Add mock data including images (1 user, 1-3 items per category)
  [] Create user accounts with firebase
  [] Create reducers

  [] Clean file structure and organization
  [] Add scss stylesheets
  [] Add Storybook

- NEXT:

  - Create database
  - Start api
  - Set up eslint, prettier, JSDocs, and other dev tools
  - Create basic eng guidelines for self
  - Add tests for existing code
  - Use TDD to sketch out more utilities

  - Hook everything together
  - Solidify contracts
  - Create style design system (storybook)
  - Add layout and other basic styling

- LATER:
  - Polish website appearance
  - Add full seeder metadata to db
  - Collect and clean image assets from game
  - Support user login and profiles
  - Create admin UI for updating content
  - Add support for non-fashion categories
  - Support user image uploads and galleries
  - Ask beta testing

## Monetization?

- \*\*\* Donation link - buy me a coffee
- Requires Stripe or Paypal. Paypal is apparently a pain.
