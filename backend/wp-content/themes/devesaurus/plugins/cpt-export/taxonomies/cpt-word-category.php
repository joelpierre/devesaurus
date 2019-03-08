<?php

function cptui_register_my_taxes_word_category()
{

  /**
   * Taxonomy: Word Categories.
   */

  $labels = array(
    "name" => __("Word Categories", "custom-post-type-ui"),
    "singular_name" => __("Word Category", "custom-post-type-ui"),
  );

  $args = array(
    "label" => __("Word Categories", "custom-post-type-ui"),
    "labels" => $labels,
    "public" => true,
    "publicly_queryable" => true,
    "hierarchical" => false,
    "show_ui" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "query_var" => true,
    "rewrite" => array('slug' => 'word-category', 'with_front' => true,),
    "show_admin_column" => false,
    "show_in_rest" => true,
    "rest_base" => "word_category",
    "rest_controller_class" => "WP_REST_Terms_Controller",
    "show_in_quick_edit" => false,
  );
  register_taxonomy("word_category", array("word"), $args);
}

add_action('init', 'cptui_register_my_taxes_word_category');
