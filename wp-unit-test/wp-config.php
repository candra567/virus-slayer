<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp-unit-test' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '?F2aqg9-6Hc_,r%I:qGz2uT]2#*/wZAB|j~N#/r8J5^,wdPMgu104F]&`&Zz$52K' );
define( 'SECURE_AUTH_KEY',  'zD`~Bos?d9<WkF`kP?gfs7qP&VSetHKgywjK}@sp$4cM!m_MS)(b@>)lJVLe6^&X' );
define( 'LOGGED_IN_KEY',    '0R=sy]0Sk%c.S@Z~zaZE<SZ<_vA6t=uG]JLvI?zLfMIGE.q<$g~#VhLZdk2O{./K' );
define( 'NONCE_KEY',        '-J4}TDd|O I>|T%$$F^7{z!QP<G4N44u*/OFUx7 ZrCD`>XQslSJIFEO;t~[gr8g' );
define( 'AUTH_SALT',        'ExA:t[6?)`mwL1($3ggQYTVoya(YPuclvhIZ~FMXQ!s;2GQ@w2,?fNg*Pt)},iwq' );
define( 'SECURE_AUTH_SALT', 'QU!Ih=H0E9M0nmBEDr,$Zh]_(6$%>em3_%=lkO]{$SOG 88OP@L(BW0QS;C6z4%~' );
define( 'LOGGED_IN_SALT',   'ZZp}Hvgo}hc{;!FP*lz{&s%oX9ZM6kN1:9VZ/vi+esK(:G._}8%=5|i{xk`LGiKG' );
define( 'NONCE_SALT',       '$1pZo,[wbgPRbHMVb:9TNcV~=)=[ixheC_ehfP()t/G _^#G`D+QU{mNbExz_>d-' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
