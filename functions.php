<?php
/**
 * Independent Publisher 2 Plus - functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 * @package Independent_Publisher_2_Plus
 */

/**
 * Enqueue scripts and styles.
 */
function independent_publisher_2_plus_scripts() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_script( 'independent-publisher-2-plus-scripts', get_stylesheet_directory_uri() . '/js/main.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'independent_publisher_2_plus_scripts' );
