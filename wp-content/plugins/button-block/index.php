<?php
/**
 * Plugin Name: Button Block
 * Description: Implement multi-functional button
 * Version: 1.0.4
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: button-block
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'BTN_PLUGIN_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.4' );
define( 'BTN_ASSETS_DIR', plugin_dir_url( __FILE__ ) . 'assets/' );

// Button Block
class BTNButtonBlock{
	function __construct(){
		add_action( 'init', [$this, 'onInit'] );
		add_action( 'enqueue_block_assets', [$this, 'enqueueBlockAssets'] );
	}

	function enqueueBlockAssets(){
		wp_enqueue_style( 'fontAwesome', BTN_ASSETS_DIR . 'css/fontAwesome.min.css', [], '5.15.4' );
		wp_enqueue_style( 'aos', BTN_ASSETS_DIR . 'css/aos.css', [], '3.0.0' );

		wp_enqueue_script( 'aos', BTN_ASSETS_DIR . 'js/aos.js', [], '3.0.0', true );
	}

	function onInit() {
		wp_register_style( 'btn-button-editor-style', plugins_url( 'dist/editor.css', __FILE__ ), [ 'wp-edit-blocks' ], BTN_PLUGIN_VERSION ); // Backend Style
		wp_register_style( 'btn-button-style', plugins_url( 'dist/style.css', __FILE__ ), [], BTN_PLUGIN_VERSION ); // Frontend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'btn-button-editor-style',
			'style'				=> 'btn-button-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'btn-button-editor-script', 'button-block', plugin_dir_path( __FILE__ ) . 'languages' ); // Translate
	}

	function render( $attributes ){
		extract( $attributes );

		$className = $className ?? '';
		$blockClassName = 'wp-block-btn-button ' . $className . ' align' . $align;

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='btnButton-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	} // Render
}
new BTNButtonBlock;