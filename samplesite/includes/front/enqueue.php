<?php

function mu_enqueue() {
    wp_register_style('mu_style', get_template_directory_uri() . '/assets/css/style.css');
    wp_enqueue_style('mu_style');

    wp_register_script('mu_tabs', get_template_directory_uri() . '/assets/js/tabs.js', array(), false, true);
    wp_register_script('mu_script', get_template_directory_uri() . '/assets/js/script.js', array(), false, true);
    wp_register_script('mu_jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js', array(), false, true);
    wp_register_script('mu_fontawesome', 'https://use.fontawesome.com/3c1e8b8f43.js', array(), false, true);

    wp_enqueue_script('mu_jquery');
    wp_enqueue_script('mu_fontawesome');
    wp_enqueue_script('mu_tabs');
    wp_enqueue_script('mu_script');
}