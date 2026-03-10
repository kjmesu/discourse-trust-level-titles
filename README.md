# Trust Level Titles

A Discourse theme component that displays default admin-configured titles for users based on their trust level when no custom title is set.

## Features

- Displays trust level-based titles when users don't have a custom title from a badge or group
- Admin-configurable titles for each trust level (0-4)
- Seamlessly integrates with Discourse's existing title display system
- Appears in all standard locations: user cards, posts, profiles, etc.
- Lightweight and uses Discourse's built-in value transformer system

## How It Works

The component uses Discourse's `poster-name-user-title` value transformer to intercept title display. When a user's title would normally be empty, the component checks their trust level and returns the corresponding configured default title instead.

This means:
- Users with custom titles (from badges or groups) will continue to see their custom titles
- Users without custom titles will see the default title for their trust level (if configured)
- The titles appear in all standard locations where user titles are displayed

## Styling

The component includes minimal default styling that makes trust level titles appear slightly italicized and with reduced opacity to visually distinguish them from custom titles. You can customize this in your theme's CSS.