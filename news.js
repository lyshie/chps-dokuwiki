var strip = new RegExp('/(^\s+|\s+$)/g');
jQuery.ajax({
    url: '//www.chps.tn.edu.tw/newss/title1.asp',
    beforeSend: function(jqXHR) {
        jqXHR.overrideMimeType("text/html;charset=big5");
    }
}).done(function(data) {
    if (data) {
        var table = jQuery('<div/>').html(data).contents();
        if (jQuery.browser.msie) {
            var b = jQuery('#bulletin');
            jQuery(b).parent().append('<iframe src="//www.chps.tn.edu.tw/post1.htm" frameborder="0" width="100%" height="600" style="margin:0px;width:100%;"></iframe>');
            jQuery(b).remove();
            return;
        }
        jQuery(table).find('tr').each(function(i, tr) {
            if (i > 0) {
                var date = ('' + jQuery(tr).children().eq(0).text()).replace(strip, '');
                var subject = ('' + jQuery(tr).children().eq(2).text()).replace(strip, '');
                var url = ('/newss/' + jQuery(tr).children().eq(2).find('a').attr('href')).replace(strip, '');
                var from = ('' + jQuery(tr).children().eq(1).text());
                var hits = ('' + jQuery(tr).children().eq(3).text());

                var notice = '';
                var img = jQuery(tr).children().eq(2).find('img');
                if (img.length > 0) {
                    notice = ' <img src="lib/images/smileys/new.png">';
                }

                jQuery('#bulletin table').append(
                    '<tr class=row"' + i + '">' +
                    '<td class="col0 rightalign">' + i + '.</td>' +
                    '<td class="col1 centeralign">' + date + '</td>' +
                    '<td class="col2"><a href="' + url + '" target="_blank">' + subject + notice + '</a></td>' +
                    '<td class="col3">' + from + '</td>' +
                    '<td class="col4 rightalign">' + hits + '</td>' +
                    '</tr>'
                );
            }
        });
    }
});
