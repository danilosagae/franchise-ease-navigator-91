
# Investir em Franquia - WordPress Theme

This WordPress theme loads a React application as the front-end interface.

## Installation

1. Build your React app with `npm run build`
2. Copy the contents of the `dist` folder into the `assets` folder of this theme
3. Upload the entire theme folder to your WordPress installation at `wp-content/themes/`
4. Activate the theme from the WordPress admin dashboard

## Development

For development:

1. Install WordPress locally
2. Install and activate this theme
3. Make changes to your React app
4. Run `npm run build` to update the assets
5. Copy the new build files to the theme's `assets` folder

## Integration Notes

This theme loads your React application within WordPress. The React app is the primary interface, while WordPress provides the backend functionality and data.

For deeper WordPress integration, you can use the WordPress REST API to fetch data from your WordPress site into your React components.
