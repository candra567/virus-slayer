<div class="andromeda-heading">
    <img src="<?=get_template_directory_uri().'/img/images.png'?>" width="80px" height="80px">
    <div>
        <p>Kementrian pariwisata dan ekonomi kreatif</p>
        <p>Radar Kemenkraf</p>
    </div>
</div>
<nav class="navbar-andromeda">
    <div class="navbar-text"></div>
    <div class="navbar-menu">
        <ul>
            <li><a href="<?=home_url()?>">Home</a></li>
            <li><a href="">Abouts</a></li>
                <?php wp_nav_menu(['theme_location'=>'header-menu','container_class'=>'header-menu' ]);?>
        </ul>
    </div>
</nav>