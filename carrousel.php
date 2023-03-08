<?php
/**
 * Extension carrousel permet d'Afficher dans une boîte modale les images d'une galerie
 * Package Name: Carrousel
 * Version: 1.0.0
 */

/**
 * Plugin Name: Carrousel
 * Author: Philippe Malo
 * Plugin URI: https://github.com/cyclonicks/carrousel
 * Description: permet d'Afficher dans une boîte modale les images d'une galerie avec un système de navigation
 */

wp_enqueue_style(   'em_plugin_carrousel_css',
                plugin_dir_url(__FILE__) . "style.css",
                array(),
                $version_css);

wp_enqueue_script(  'em_plugin_carrousel_js',
                plugin_dir_url(__FILE__) ."js/carrousel.js",
                array(),
                $version_js,
                true);