<?php

/*****************************************************************
 * :: Change default Wordpress Login Titles && URLS
 ******************************************************************/

// Title Change

function change_wp_login_title()
{
    return get_option('blogname');
}

add_filter('login_headertitle', 'change_wp_login_title');

// URL Change

function change_wp_login_url()
{
    return get_home_url();
}

add_filter('login_headerurl', 'change_wp_login_url');

/*****************************************************************
 * :: Replace Wordpress Login Styling with our own
 ******************************************************************/

function my_login_styles()
{ ?>
    <style type="text/css">
        body {
            background-color: #EEE !important;
        }

        #login {
            padding-top: 10px !important;
        }

        .login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/assets/img/symbol.svg) !important;
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/assets/img/symbol.png) !important;
            background-size: 60% !important;
            height: 180px !important;
            width: 70% !important;
            text-indent: -9999px;
            margin-top: 40px !important;
            margin-bottom: 0 !important;
        }
    </style>

<?php }

add_action('login_enqueue_scripts', 'my_login_styles');

?>
