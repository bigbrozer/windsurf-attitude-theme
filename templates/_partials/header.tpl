{**
 * Copyright © 2017 Vincent Besançon <besancon.vincent@gmail.com>
 *                  Windsurf Attitude <https://windsurf-attitude.com>
 * See LICENSE.
 **}
{extends file='parent:_partials/header.tpl'}

{block name='header_top'}
  <div class="header-top">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <a href="{$urls.base_url}">
            <img class="logo img-responsive" src="{$shop.logo}" alt="{$shop.name}">
          </a>
        </div>
        <div class="col-md-9">
          <div class="container-video">
            <video preload="preload" autoplay="autoplay" loop="loop">
              <source src="{$smarty.const._THEME_DIR_}assets/video/windsurf_banner.webm" type="video/webm"></source>
            </video>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 position-static">
          <div class="row">
            {hook h='displayTop'}
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
      <div id="mobile_top_menu_wrapper" class="row hidden-md-up" style="display:none;">
        <div class="js-top-menu mobile" id="_mobile_top_menu"></div>
        <div class="js-top-menu-bottom">
          <div id="_mobile_currency_selector"></div>
          <div id="_mobile_language_selector"></div>
          <div id="_mobile_contact_link"></div>
        </div>
      </div>
    </div>
  </div>
  {hook h='displayNavFullWidth'}
{/block}
