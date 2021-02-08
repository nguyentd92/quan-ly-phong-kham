var gulp = require('gulp');
var rimraf  = require('rimraf');
var fs     = require('fs');
var cheerio     = require('cheerio');

gulp.task('dist', function(done) {

    //remove old dist files from laravel public folder
    rimraf.sync('./../server/public/client');

    //copy dist folder into laravel public folder
    gulp.src(['./dist/client/**/*', '!./dist/client/index.html', '!./dist/stats.json']).pipe(gulp.dest('./../server/public/client'));

    var $ = cheerio.load(fs.readFileSync('./dist/client/index.html', 'utf8'));

    //get script tags that need to be injected into main laravel view
    var scripts = $('script').map(function(i, el) {
        var oldSrc =  $(el).attr('src');
        $(el).attr('src', 'client/' + oldSrc)
        return $('<div>').append($(el)).html();
    }).toArray();

    //get css tags that need to be injected into main laravel view
    var styles = $('link').filter(function(i, el) {
        return true;
        // return $(el).attr('href').indexOf('bundle.css') > -1;
    }).map(function(i, el) {
        var oldSrc =  $(el).attr('href');
        $(el).attr('src', 'client/' + oldSrc)
        return $('<div>').append($(el)).html();
    }).toArray();

    //js scripts replace regex
    var jsSearch = /{{--angular scripts begin--}}[\s\S]*{{--angular scripts end--}}/;
    var jsReplaceStr = '{{--angular scripts begin--}}' + "\n\t\t" + scripts.join("\n\t\t") + "\n\t\t{{--angular scripts end--}}";

    //css styles replace regex
    var cssSearch = /{{--angular styles begin--}}[\s\S]*{{--angular styles end--}}/;
    var cssReplaceStr = '{{--angular styles begin--}}' + "\n\t\t" + styles.join("\n\t\t") + "\n\t\t{{--angular styles end--}}";

    //replace app stylesheet links and js script tags with new ones
    var content = fs.readFileSync('./../server/resources/views/client.blade.php', 'utf8');
    content = content.replace(jsSearch, jsReplaceStr).replace(cssSearch, cssReplaceStr);

    fs.writeFileSync('./../server/resources/views/client.blade.php', content, 'utf8');
    done();
});