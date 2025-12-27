<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<!-- TOP BRONZE STRIP -->
<div style="height:6px;background:#7a4a21;"></div>

<header class="container">
  <div style="display:flex;align-items:center;justify-content:space-between;padding:15px 0;">
    <div>
      <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" height="50">
      <div style="font-size:13px;">Fabricating Tomorrow’s Innovation</div>
    </div>

    <div style="text-align:right;">
      <div>✉ support@nkenters.com</div>
      <div>📞 +91 63723 52301 | +91 96995 40314</div>
      <a href="#" class="btn-quote">GET A QUOTE</a>
    </div>
  </div>

  <!-- NAV -->
  <nav style="text-align:center;border-bottom:1px solid #7a4a21;">
    <?php wp_nav_menu(['theme_location'=>'primary']); ?>
  </nav>
</header>

