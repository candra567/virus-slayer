<?php if(have_posts()):?>
    <?php while(have_posts()):the_post();?>
      <article class="single-post-andromeda">
          <h3><?php the_title()?></h3>
          <p>PENULIS <?php the_author();?></p>
          <p>PUBLISH AT <?php the_date();?></p>
          <?php if(has_post_thumbnail()):?>
            <div class="andromeda-thumbnail">
                <img src="<?= the_post_thumbnail_url()?>" width="100%" height="100%">
            </div>
          <?php endif;?>
          <blockquote>
             <?php the_content();?>
          </blockquote>
      </article>
    <?php endwhile;?>
<?php else:?>
    <?php get_template_part('templates/template-post-empty');?>
<?php endif;?>