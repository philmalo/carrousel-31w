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

    function carrousel_enqueue(){

        $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
        $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

        wp_enqueue_style('em_plugin_carrousel_css',
                        plugin_dir_url(__FILE__) . "style.css",
                        array(),
                        $version_css
                        );

        wp_enqueue_script('em_plugin_carrousel_js',
                        plugin_dir_url(__FILE__) ."js/carrousel.js",
                        array(),
                        $version_js,
                        true
                        );
    }

    add_action('wp_enqueue_scripts', 'carrousel_enqueue');

    function creation_carrousel(){
        return '
            <button class="bouton__ouvrir">Ouvrir</button>
            <div class="carrousel">
                <button class="bouton__x">X</button>
                <figure class="carrousel__figure"></figure>
                <form class="carrousel__form"></form>
            </div>
                ';
            }

            add_shortcode('carrousel', 'creation_carrousel');