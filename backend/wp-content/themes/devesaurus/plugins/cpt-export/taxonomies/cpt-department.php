<?php

function cptui_register_my_taxes_staff_department()
{

  /**
   * Taxonomy: Departments.
   */

  $labels = array(
    "name" => __("Departments", "custom-post-type-ui"),
    "singular_name" => __("Department", "custom-post-type-ui"),
  );

  $args = array(
    "label" => __("Departments", "custom-post-type-ui"),
    "labels" => $labels,
    "public" => true,
    "publicly_queryable" => true,
    "hierarchical" => false,
    "show_ui" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "query_var" => true,
    "rewrite" => array('slug' => 'staff-department', 'with_front' => true,),
    "show_admin_column" => false,
    "show_in_rest" => true,
    "rest_base" => "staff_department",
    "rest_controller_class" => "WP_REST_Terms_Controller",
    "show_in_quick_edit" => false,
  );
  register_taxonomy("staff_department", array("team"), $args);
}

add_action('init', 'cptui_register_my_taxes_staff_department');
