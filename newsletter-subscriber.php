<?php
/*
Plugin Name: Newsletter Subscriber
Plugin URI: http://www.github.com/
Description: A simple newsletter subscriber plugin
Version: 1.0
Author: Muhammad Qurban
Author URI: http://www.linkedin/in/mr-qurban/
*/


// Exit if accessed directly

if (!defined('ABSPATH')) {
    exit;
}


// Load Scripts
require_once(plugin_dir_path(__FILE__) . '/includes/newsletter-subscriber-scripts.php');


// Load Class
require_once(plugin_dir_path(__FILE__) . '/includes/newsletter-subscriber-class.php');


// Register Widget
function register_newsletter_subscriber()
{
    register_widget('Newsletter_Subscriber');
}

add_action('widgets_init', 'register_newsletter_subscriber');
