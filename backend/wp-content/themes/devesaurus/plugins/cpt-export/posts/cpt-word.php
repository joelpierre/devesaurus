<?php

function cptui_register_my_cpts_word() {

  /**
   * Post Type: Words.
   */

  $labels = array(
    "name" => __( "Words", "custom-post-type-ui" ),
    "singular_name" => __( "Word", "custom-post-type-ui" ),
  );

  $args = array(
    "label" => __( "Words", "custom-post-type-ui" ),
    "labels" => $labels,
    "description" => "",
    "public" => true,
    "publicly_queryable" => true,
    "show_ui" => true,
    "delete_with_user" => false,
    "show_in_rest" => true,
    "rest_base" => "",
    "rest_controller_class" => "WP_REST_Posts_Controller",
    "has_archive" => false,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "exclude_from_search" => false,
    "capability_type" => "post",
    "map_meta_cap" => true,
    "hierarchical" => false,
    "rewrite" => array( "slug" => "word", "with_front" => true ),
    "query_var" => true,
    "menu_icon" => "dashicons-editor-spellcheck",
    "supports" => array( "title" ),
  );

  register_post_type( "word", $args );
}

add_action( 'init', 'cptui_register_my_cpts_word' );
