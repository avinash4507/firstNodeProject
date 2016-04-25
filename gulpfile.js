var gulp = require('gulp');
// var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var jsFiles = ['*.js', 'src/**/*.js'];

// in order for gulp to do something we need to create a task
// below task checks our style
// below contained fxn will executed by gulp when you run gulp style
gulp.task('style', function() {
    // gulp streams through series of events to get everything done
    // so firstly we tell it from where we gonna get everything from
    // we pull in all js files except the ones in node_modules folder
    return gulp.src(jsFiles)
        // .pipe(jshint())
        // .pipe(jshint.reporter('jshint-stylish',{
        //     verbose: true
        // }))
        .pipe(jscs());
});

gulp.task('inject', function() {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    
    var injectSrc = gulp.src(['./public/css/*.css',
                              './public/js/*.js'], {read: false});
    
    var injectOptions  = {
        ignorePath: '/public'
    };
    
    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    }
    
    return gulp.src('./src/views/*.html') // pulls in all html files and get us started
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'))
        
})