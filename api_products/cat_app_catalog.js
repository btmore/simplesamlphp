(function ($, Drupal) {
  Drupal.behaviors.cat_app_catalog = {
    attach: function (context, settings) {
      jQuery("#edit-items-per-page").change(function () {
        /* Logic here for click on Done button */
        var separator = (window.location.href.indexOf("?") === -1) ? "?" : "&";
        if (window.location.href.indexOf('items_per_page') === -1) {
          window.location.href = window.location.href + separator + "items_per_page=" + jQuery(this).val();
        }
        else {
          /**--Logic here for bug fix in pagination---*/
          var item_per_page_url = window.location.href;
          if (window.location.href.match(new RegExp("([\?|&])(page)\=([^&]+)")) != undefined) {
            item_per_page_url = window.location.href.replace(new RegExp("([\?|&])(page)\=([^&]+)"), "");
          }
          /**--Logic here for bug fix in pagination---*/
          var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
              sURLVariables = sPageURL.split('&'),
              sParameterName,
              i;

            for (i = 0; i < sURLVariables.length; i++) {
              sParameterName = sURLVariables[i].split('=');

              if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
              }
            }
          };
          var itemscount = getUrlParameter('items_per_page');
          window.location.href = item_per_page_url.replace("items_per_page=" + itemscount, "items_per_page=" + jQuery(this).val());
        }
      });
    }
  };
})(jQuery, Drupal);
