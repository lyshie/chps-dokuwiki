<HTML>
<div id="bulletin" class="table">
<table class="inline">
    <tr class="row0">
        <th class="col0 centeralign"></th><th class="col1 centeralign">標題</th><th class="col2 centeralign">來源</th>
    </tr>
</table>
</div>
<script type="text/javascript">
var strip = new RegExp('/(^\s+|\s+$)/g');
jQuery.getJSON('https://query.yahooapis.com/v1/public/yql', {q: 'SELECT * FROM json WHERE url="http://odata.tn.edu.tw/ebookApi/api/getNews"', format: 'json'}, function(json) {
    if (json.query.results) {
        jQuery.each(json.query.results.json.json, function(i, j) {
            if (i > 9) return;
            var subject = ('' + j['BulletinSubject']).replace(strip, '');
            var url = ('' + j['URL']).replace(strip, '');
            var from = ('' + j['SchName']).replace(strip, '') + ('' + j['Office']).replace(strip, '');
            
            jQuery('#bulletin table').append('<tr class=row"' + (i+1) + '"><td class="col0 centeralign">' + (i+1) + '.</td><td class="col1"><a href="' + url + '" target="_blank">' + subject + '</a></td><td class="col2">' + from + '</td></tr>');
        });
    }
});
</script>
</HTML>
