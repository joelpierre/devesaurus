<?php

function cptui_register_my_cpts_team()
{

  /**
   * Post Type: Team.
   */

  $labels = array(
    "name" => __("Team", "custom-post-type-ui"),
    "singular_name" => __("People", "custom-post-type-ui"),
    "add_new_item" => __("Add New Person", "custom-post-type-ui"),
    "edit_item" => __("Edit Person", "custom-post-type-ui"),
    "new_item" => __("New Person", "custom-post-type-ui"),
    "view_item" => __("View Person", "custom-post-type-ui"),
    "view_items" => __("View Team", "custom-post-type-ui"),
    "search_items" => __("Search Team", "custom-post-type-ui"),
    "featured_image" => __("Featured image for this Person", "custom-post-type-ui"),
    "set_featured_image" => __("Set featured image for this Person", "custom-post-type-ui"),
    "archives" => __("Team", "custom-post-type-ui"),
    "name_admin_bar" => __("People", "custom-post-type-ui"),
  );

  $args = array(
    "label" => __("Team", "custom-post-type-ui"),
    "labels" => $labels,
    "description" => "",
    "public" => true,
    "publicly_queryable" => true,
    "show_ui" => true,
    "delete_with_user" => false,
    "show_in_rest" => true,
    "rest_base" => "",
    "rest_controller_class" => "WP_REST_Posts_Controller",
    "has_archive" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "exclude_from_search" => false,
    "capability_type" => "post",
    "map_meta_cap" => true,
    "hierarchical" => false,
    "rewrite" => array("slug" => "team", "with_front" => true),
    "query_var" => true,
    "menu_icon" => "dashicons-admin-users",
    "supports" => array("title", "thumbnail"),
  );

  register_post_type("team", $args);
}

add_action('init', 'cptui_register_my_cpts_team');
