<?php get_template_part('templates/template-navbar');?>
<?php if(have_posts()):?>
  <div class="container-post">
      <?php while(have_posts()):the_post();?>
      <div class="card-post">
          <div class="card-img" style="background-image:url('<?= the_post_thumbnail_url()?>');">
            <h4><?php the_title();?></h4>
          </div>
          <div class="card-content">
              <a href="<?=the_permalink()?>">Read More</a>
          </div>
      </div>
      <?php endwhile;?>
  </div>
  <?php else:?>
    <?php get_template_part('templates/template-post-empty');?>
<?php endif;?>