<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

get_header();
?>

  <style>
    h1 {
      font-family: Helvetica, sans-serif;
      font-size: 20px;
      text-align: center;
      text-transform: uppercase;
      font-weight: normal;
    }
  </style>

  <main class="primary-main" role="main">
    <h1>
      There is no theme here
    </h1>
  </main>

<?php
get_footer();
