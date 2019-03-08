<?php

function cptui_register_my_taxes_service_type()
{

  /**
   * Taxonomy: Service Types.
   */

  $labels = array(
    "name" => __("Service Types", "custom-post-type-ui"),
    "singular_name" => __("Service Type", "custom-post-type-ui"),
  );

  $args = array(
    "label" => __("Service Types", "custom-post-type-ui"),
    "labels" => $labels,
    "public" => true,
    "publicly_queryable" => true,
    "hierarchical" => false,
    "show_ui" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "query_var" => true,
    "rewrite" => array('slug' => 'service-type', 'with_front' => true,),
    "show_admin_column" => false,
    "show_in_rest" => true,
    "rest_base" => "service_type",
    "rest_controller_class" => "WP_REST_Terms_Controller",
    "show_in_quick_edit" => false,
  );
  register_taxonomy("service_type", array("services"), $args);
}

add_action('init', 'cptui_register_my_taxes_service_type');
