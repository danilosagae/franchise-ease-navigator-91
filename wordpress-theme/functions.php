
<?php
/**
 * Investir em Franquia Theme functions and definitions
 */

// Enqueue scripts and styles
function investiremfranquia_scripts() {
    // Get the theme directory URL
    $theme_url = get_template_directory_uri();
    
    // Enqueue main CSS file with version based on file modification time for cache busting
    wp_enqueue_style(
        'investiremfranquia-main-css',
        $theme_url . '/assets/index.css',
        array(),
        filemtime(get_template_directory() . '/assets/index.css')
    );
    
    // Enqueue main JavaScript file with version based on file modification time
    wp_enqueue_script(
        'investiremfranquia-main-js',
        $theme_url . '/assets/index.js',
        array(),
        filemtime(get_template_directory() . '/assets/index.js'),
        true // Load in footer
    );
    
    // Add dynamic WordPress data to JavaScript
    wp_localize_script(
        'investiremfranquia-main-js',
        'wpData',
        array(
            'siteUrl' => get_site_url(),
            'restUrl' => rest_url(),
            'nonce' => wp_create_nonce('wp_rest')
        )
    );
}
add_action('wp_enqueue_scripts', 'investiremfranquia_scripts');

// Add theme support
function investiremfranquia_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages
    add_theme_support('post-thumbnails');

    // Switch default core markup to valid HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Add custom image sizes
    // add_image_size('custom-size', 1200, 600, true);

    // Register menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'investiremfranquia'),
        'footer' => __('Footer Menu', 'investiremfranquia'),
    ));
}
add_action('after_setup_theme', 'investiremfranquia_setup');

/**
 * Create a React-compatible REST API endpoint for WordPress data
 */
function investiremfranquia_rest_api_init() {
    register_rest_route('investiremfranquia/v1', '/settings', array(
        'methods' => 'GET',
        'callback' => 'investiremfranquia_get_settings',
        'permission_callback' => '__return_true'
    ));
}
add_action('rest_api_init', 'investiremfranquia_rest_api_init');

function investiremfranquia_get_settings() {
    return array(
        'site_title' => get_bloginfo('name'),
        'site_description' => get_bloginfo('description'),
        'home_url' => home_url(),
        'logo_url' => get_theme_mod('custom_logo') ? wp_get_attachment_image_src(get_theme_mod('custom_logo'), 'full') : '',
    );
}
