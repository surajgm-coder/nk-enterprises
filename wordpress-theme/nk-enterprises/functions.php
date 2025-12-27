<?php
function nk_assets() {
  wp_enqueue_style('nk-style', get_stylesheet_uri());
  wp_enqueue_style('nk-home', get_template_directory_uri() . '/css/home.css');

  wp_enqueue_script('nk-slider', get_template_directory_uri() . '/js/slider.js', [], false, true);
}
add_action('wp_enqueue_scripts', 'nk_assets');

function nk_menu() {
  register_nav_menu('primary', 'Primary Menu');
}
add_action('after_setup_theme', 'nk_menu');

