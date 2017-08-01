<?php
ini_set ( 'display_errors' , 1 );
ini_set ( 'error_reporting' , E_ALL );
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_generator');

//set up
add_theme_support('menus');

//Action & Filters
//https://codex.wordpress.org/Plugin_API/Hooks
//https://codex.wordpress.org/Function_Reference/wp_register_style
//https://codex.wordpress.org/Function_Reference/wp_register_script
//https://codex.wordpress.org/Function_Reference/add_theme_support
//https://codex.wordpress.org/Function_Reference/register_nav_menu
//https://codex.wordpress.org/Function_Reference/wp_nav_menu
include(get_template_directory().'/includes/front/enqueue.php');
include(get_template_directory().'/includes/front/setup.php');
add_action('wp_enqueue_scripts', 'mu_enqueue');
add_action('after_setup_theme', 'mu_setup_theme');

