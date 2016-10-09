var strip = new RegExp('/(^\s+|\s+$)/g');
jQuery.getJSON('//school.chps.tn.edu.tw/honor/json.php', {
    limit: 10,
    offset: 0
}, function(json) {
    if (json) {
        jQuery.each(json, function(i, j) {
            var id = ('' + j['id']).replace(strip, '');
            var kind = ('' + j['kind']).replace(strip, '');
            var title = ('' + j['title']).replace(strip, '');
            var part = ('' + j['part']).replace(strip, '');
            var hitnum = ('' + j['hitnum']).replace(strip, '');
            var date = ('' + j['date']).replace(strip, '');

            jQuery('#honors table').append(
                '<tr class=row"' + (i + 1) + '">' +
                '<td class="col0 rightalign">' + (i + 1) + '.</td>' +
                '<td class="col1 centeralign">' + kind + '</td>' +
                '<td class="col2"><a href="//school.chps.tn.edu.tw/honor/index_show.php?id=' + id + '" target="_blank">' + title + '</a></td>' +
                '<td class="col3">' + part + '</td>' +
                '<td class="rightalign">' + hitnum + '</td>' +
                '<td class="col5">' + date + '</td>' +
                '</tr>');
        });
    }
});
