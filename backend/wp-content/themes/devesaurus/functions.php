<?php

$GLOBALS['dist_path'] = get_template_directory_uri() . '/dist';
$GLOBALS['google_api_key'] = '';

// Desired plugins that need to be installed
if (is_admin()) {
  require_once('plugins/utilities/class-tgm-plugin-activation.php');
  require_once('plugins/utilities/plugins.php');
}

// Needed Custom Post types and Taxonomies
//require_once('plugins/cpt-export/posts/cpt-services.php');
//require_once('plugins/cpt-export/taxonomies/cpt-service-type.php');
require_once('plugins/cpt-export/posts/cpt-people.php');
require_once('plugins/cpt-export/posts/cpt-word.php');

require_once('plugins/cpt-export/taxonomies/cpt-department.php');
require_once('plugins/cpt-export/taxonomies/cpt-word-category.php');
require_once('plugins/cpt-export/taxonomies/cpt-word-tag.php');

remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'parent_post_rel_link');
remove_action('wp_head', 'start_post_rel_link');
remove_action('wp_head', 'adjacent_posts_rel_link');
remove_action('wp_head', 'check_and_publish_future_post');
remove_action('wp_head', 'wp_print_styles');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'rel_canonical');
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10);
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_head', 'rest_output_link_wp_head', 10);
remove_action('wp_head', 'wp_oembed_add_discovery_links', 10);
remove_action('wp_print_styles', 'print_emoji_styles');

//add_theme_support('woocommerce');
add_theme_support('post-thumbnails');

add_action('admin_init', 'admin_settings');
add_action('after_setup_theme', 'after_setup_settings');
add_action('wp_footer', 'my_deregister_scripts');
add_action('acf/init', 'acf_settings');

add_filter('upload_mimes', 'custom_mime_types');
add_filter('wpseo_primary_term_taxonomies', '__return_empty_array');
add_filter('wp_terms_checklist_args', 'stop_reordering_my_categories');
add_filter('acf/rest_api/field_settings/show_in_rest', '__return_true');
add_filter('acf/rest_api/field_settings/edit_in_rest', '__return_true');
add_filter('jpeg_quality', function ($arg) {
  return 95;
});


if (function_exists('acf_add_options_page')) {
  acf_add_options_page('Global Content');
//  acf_add_options_page('Events');
}

if (function_exists('add_theme_support')) {
  add_theme_support('html5', array('search-form'));
  add_theme_support('menus');
}

function acf_settings()
{
  acf_update_setting('google_api_key', $GLOBALS['google_api_key']);
}

function my_deregister_scripts()
{
  wp_deregister_script('wp-embed');
}

function custom_mime_types($mimes)
{
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}

function after_setup_settings()
{
  add_theme_support('title-tag');
}

function admin_settings()
{
  remove_menu_page('link-manager.php');
  remove_post_type_support('page', 'editor');
  remove_post_type_support('post', 'editor');
  remove_post_type_support('word', 'editor');
  remove_post_type_support('team', 'editor');
}
