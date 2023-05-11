<?php

/**
 * Enqueue scripts and styles.
 */
function theme_scripts() {
	wp_enqueue_style( 'theme-style', get_template_directory_uri() . '/build/css/main.css', array(), filemtime( get_theme_file_path('build/css/main.css') ) );

	wp_enqueue_script('jquery');
	wp_enqueue_script( 'theme-js', get_template_directory_uri() . '/build/main.js', array('jquery'), filemtime( get_theme_file_path('build/main.js') ), true );
}

add_action( 'wp_enqueue_scripts', 'theme_scripts' );
