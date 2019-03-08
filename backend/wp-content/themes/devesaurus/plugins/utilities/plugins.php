<?php
add_action('tgmpa_register', 'thb_register_required_plugins');
function thb_register_required_plugins()
{
  $plugins = array(
    array(
      'name' => 'Admin Menu Editor',
      'slug' => 'admin-menu-editor',
    ),
    array(
      'name' => 'WP API Menu',
      'slug' => 'wp-api-menus',
      'required' => true,
      'force_activation' => true,
      'force_deactivation' => false
    ),
    array(
      'name' => 'WP Rest API Controller',
      'slug' => 'wp-rest-api-controller',
      'required' => true,
      'force_activation' => true,
      'force_deactivation' => false
    ),
    array(
      'name' => 'ACF to REST API',
      'slug' => 'acf-to-rest-api',
      'required' => true,
      'force_activation' => true,
      'force_deactivation' => false
    ),
    array(
      'name' => 'JWT Auth for WP',
      'slug' => 'jwt-authentication-for-wp-rest-api',
      'required' => true,
      'force_activation' => true,
      'force_deactivation' => false
    ),
    array(
      'name' => 'All in 1 WP Migration',
      'slug' => 'all-in-one-wp-migration',
      'required' => true,
    ),
    array(
      'name' => 'Custom Post Type UI',
      'slug' => 'custom-post-type-ui',
    ),
    array(
      'name' => 'Duplicate Post',
      'slug' => 'duplicate-post',
    ),
    array(
      'name' => 'Editorial Calendar',
      'slug' => 'editorial-calendar',
    ),
    array(
      'name' => 'EWWW Image Optimizer',
      'slug' => 'ewww-image-optimizer',
      'required' => true,
      'force_activation' => true,
      'force_deactivation' => false
    ),
    array(
      'name' => 'Post Expirator',
      'slug' => 'post-expirator',
    ),
    array(
      'name' => 'User Role Editor',
      'slug' => 'user-role-editor',
    ),
    array(
      'name' => 'WP Missed Schedule (Fix CRON jobs)',
      'slug' => 'wp-missed-schedule',
      'required' => true,
      'force_activation' => true,
      'force_deactivation' => false
    ),
    array(
      'name' => 'Wordpress SEO',
      'slug' => 'wordpress-seo',
      'required' => true,
      'force_activation' => true,
      'force_deactivation' => false
    ),
    array(
      'name' => 'Disable Comments',
      'slug' => 'disable-comments',
      'required' => true,
      'force_activation' => true,
      'force_deactivation' => false
    ),
    array(
      'name' => 'Contact Form 7',
      'slug' => 'contact-form-7',
      'required' => true,
      'force_activation' => true,
      'force_deactivation' => false
    )

  );
  $config = array(
    'domain' => 'PT_CUSTOM_THEME',            // Text domain - likely want to be the same as your theme.
    'default_path' => '',                            // Default absolute path to pre-packaged settings
    'parent_url_slug' => 'admin.php',                // Default parent URL slug
    'menu' => 'install-required-settings',    // Menu slug
    'has_notices' => false,                        // Show admin notices or not
    'is_automatic' => false,                        // Automatically activate settings after installation or not
    'message' => '',                            // Message to output right before the settings table
    'strings' => array(
      'page_title' => __('Install Required Plugins', 'PT_CUSTOM_THEME'),
      'menu_title' => __('Install Plugins', 'PT_CUSTOM_THEME'),
      'installing' => __('Installing Plugin: %s', 'PT_CUSTOM_THEME'), // %1$s = plugin name
      'oops' => __('Something went wrong with the plugin API.', 'PT_CUSTOM_THEME'),
      'notice_can_install_required' => _n_noop('This theme requires the following plugin: %1$s.', 'This theme requires the following settings: %1$s.'), // %1$s = plugin name(s)
      'notice_can_install_recommended' => _n_noop('This theme recommends the following plugin: %1$s.', 'This theme recommends the following settings: %1$s.'), // %1$s = plugin name(s)
      'notice_cannot_install' => _n_noop('Sorry, but you do not have the correct permissions to install the %s plugin. Contact the administrator of this site for help on getting the plugin installed.', 'Sorry, but you do not have the correct permissions to install the %s settings. Contact the administrator of this site for help on getting the settings installed.'), // %1$s = plugin name(s)
      'notice_can_activate_required' => _n_noop('The following required plugin is currently inactive: %1$s.', 'The following required settings are currently inactive: %1$s.'), // %1$s = plugin name(s)
      'notice_can_activate_recommended' => _n_noop('The following recommended plugin is currently inactive: %1$s.', 'The following recommended settings are currently inactive: %1$s.'), // %1$s = plugin name(s)
      'notice_cannot_activate' => _n_noop('Sorry, but you do not have the correct permissions to activate the %s plugin. Contact the administrator of this site for help on getting the plugin activated.', 'Sorry, but you do not have the correct permissions to activate the %s settings. Contact the administrator of this site for help on getting the settings activated.'), // %1$s = plugin name(s)
      'notice_ask_to_update' => _n_noop('The following plugin needs to be updated to its latest version to ensure maximum compatibility with this theme: %1$s.', 'The following settings need to be updated to their latest version to ensure maximum compatibility with this theme: %1$s.'), // %1$s = plugin name(s)
      'notice_cannot_update' => _n_noop('Sorry, but you do not have the correct permissions to update the %s plugin. Contact the administrator of this site for help on getting the plugin updated.', 'Sorry, but you do not have the correct permissions to update the %s settings. Contact the administrator of this site for help on getting the settings updated.'), // %1$s = plugin name(s)
      'install_link' => _n_noop('Begin installing plugin', 'Begin installing settings'),
      'activate_link' => _n_noop('Activate installed plugin', 'Activate installed settings'),
      'return' => __('Return to Required Plugins Installer', 'PT_CUSTOM_THEME'),
      'plugin_activated' => __('Plugin activated successfully.', 'PT_CUSTOM_THEME'),
      'complete' => __('All settings installed and activated successfully. %s', 'PT_CUSTOM_THEME'), // %1$s = dashboard link
      'nag_type' => 'updated' // Determines admin notice type - can only be 'updated' or 'error'
    )
  );
  tgmpa($plugins, $config);
}

?>
