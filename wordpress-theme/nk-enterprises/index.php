<?php get_header(); ?>

<!-- ================= HERO SECTION (4 SLIDE SLIDER) ================= -->
<section class="hero">

  <!-- SLIDE 1 -->
  <div class="slide active" style="background-image:url('<?php echo get_template_directory_uri(); ?>/images/home/hero1.jpg');">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1>
        Innovative <br>
        <span>Fabrication Solutions</span>
      </h1>
      <p>
        Custom Furniture, Fixture, Fabrication & Signage <br>
        Manufactured as per Client Drawings & Specifications
      </p>
      <div class="hero-buttons">
        <a href="/services" class="btn">OUR SERVICES</a>
        <a href="tel:+916372352301" class="btn-outline">📞 +91 63723 52301</a>
      </div>
    </div>
  </div>

  <!-- SLIDE 2 -->
  <div class="slide" style="background-image:url('<?php echo get_template_directory_uri(); ?>/images/home/hero2.jpg');">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1>
        Precision <br>
        <span>Fabrication Excellence</span>
      </h1>
      <p>
        High-quality metal fabrication solutions <br>
        for commercial and industrial requirements
      </p>
      <div class="hero-buttons">
        <a href="/projects" class="btn">VIEW PROJECTS</a>
        <a href="/contact-us" class="btn-outline">GET A QUOTE</a>
      </div>
    </div>
  </div>

  <!-- SLIDE 3 -->
  <div class="slide" style="background-image:url('<?php echo get_template_directory_uri(); ?>/images/home/hero3.jpg');">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1>
        Custom <br>
        <span>Signage & Branding</span>
      </h1>
      <p>
        Manufacturing signage, display units and branding solutions <br>
        tailored to your brand identity
      </p>
      <div class="hero-buttons">
        <a href="/services" class="btn">OUR SERVICES</a>
        <a href="/contact-us" class="btn-outline">CONTACT US</a>
      </div>
    </div>
  </div>

  <!-- SLIDE 4 -->
  <div class="slide" style="background-image:url('<?php echo get_template_directory_uri(); ?>/images/home/hero4.jpg');">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1>
        Complete <br>
        <span>Interior & Plant Setup</span>
      </h1>
      <p>
        From drawing coordination to manufacturing <br>
        and execution support for turnkey projects
      </p>
      <div class="hero-buttons">
        <a href="/contact-us" class="btn">GET A QUOTE</a>
        <a href="tel:+916372352301" class="btn-outline">CALL NOW</a>
      </div>
    </div>
  </div>

</section>

<!-- ================= WELCOME SECTION ================= -->
<section class="welcome-section">
  <div class="container">
    <h2>Welcome to NK Enterprises</h2>
    <p>
      Established in 2023, NK Enterprises is a manufacturing-focused company
      specialising in furniture, fixtures, fabrication and signage solutions.
      We work strictly as per client drawings, approved designs and detailed
      specifications to support commercial interiors and industrial plant setups.
    </p>
    <a href="/about-us" class="btn">READ MORE</a>
  </div>
</section>

<!-- ================= ABOUT SPLIT SECTION ================= -->
<section class="about-split">
  <div class="container about-grid">

    <div class="about-text">
      <h2>Welcome to NK Enterprises</h2>
      <p>
        NK Enterprises operates with dedicated wooden and metal fabrication setups,
        enabling us to design, modify and manufacture customised products as per
        client requirements.
      </p>
      <p>
        Our strength lies in execution accuracy, material understanding and
        delivering solutions that match drawing intent and project timelines.
      </p>
      <a href="/about-us" class="btn">READ MORE</a>
    </div>

    <div class="about-image">
      <img src="<?php echo get_template_directory_uri(); ?>/images/home/about-home.png" alt="NK Enterprises Work">
      <div class="about-overlay">
        <h3>
          Dedicated to Fabricating <br>
          <span>Tomorrow’s Innovation</span>
        </h3>
        <a href="/contact-us" class="btn">GET A QUOTE</a>
      </div>
    </div>

  </div>
</section>

<!-- ================= ICON FEATURES ================= -->
<section class="features">
  <div class="container features-grid">

    <div class="feature-box">
      <h3>Expertise & Innovation</h3>
      <p>
        Custom manufacturing backed by practical innovation,
        modern tools and execution-focused thinking.
      </p>
    </div>

    <div class="feature-box">
      <h3>High-Quality Craftsmanship</h3>
      <p>
        Strong wooden and fabrication setup ensuring durable,
        precise and premium-finish results.
      </p>
    </div>

    <div class="feature-box">
      <h3>Customer-Centric Focus</h3>
      <p>
        Tailor-made solutions developed strictly as per client
        drawings and project-specific needs.
      </p>
    </div>

  </div>
</section>

<!-- ================= STATS STRIP ================= -->
<section class="stats">
  <div class="container stats-grid">

    <div class="stat">
      <h2>2023</h2>
      <p>Year Established</p>
    </div>

    <div class="stat">
      <h2>100+</h2>
      <p>Projects Executed</p>
    </div>

    <div class="stat">
      <h2>Custom</h2>
      <p>Manufacturing Focus</p>
    </div>

    <div class="stat">
      <h2>100%</h2>
      <p>Client-Oriented Execution</p>
    </div>

  </div>
</section>

<!-- ================= CTA SECTION ================= -->
<?php include get_template_directory() . '/cta.php'; ?>

<?php get_footer(); ?>
