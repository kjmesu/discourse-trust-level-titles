# Trust Level Titles

A Discourse theme component that displays default admin-configured titles for users based on their trust level when no custom title is set.

## Features

- Displays trust level-based titles when users don't have a custom title from a badge or group
- Admin-configurable titles for each trust level (0-4)
- Seamlessly integrates with Discourse's existing title display system
- Appears in all standard locations: user cards, posts, profiles, etc.
- Lightweight and uses Discourse's built-in value transformer system

## How It Works

The component uses multiple Discourse integration points to ensure trust level titles appear everywhere user titles are displayed:

1. **Value Transformer**: Uses the `poster-name-user-title` transformer to display titles in post author metadata
2. **Plugin Connectors**: Injects title display into user cards and user profiles via `user-card-post-names` and `user-post-names` connectors
3. **User Model Extension**: Adds a `displayTitle` property to the User model for programmatic access

This comprehensive approach ensures:
- Users with custom titles (from badges or groups) will continue to see their custom titles
- Users without custom titles will see the default title for their trust level (if configured)
- The titles appear in all standard locations: posts, user cards, user profiles, and anywhere else titles are displayed
- Theme components and plugins can access the computed title via `user.displayTitle`

## Styling

The component includes minimal default styling that makes trust level titles appear slightly italicized and with reduced opacity to visually distinguish them from custom titles. You can customize this in your theme's CSS.