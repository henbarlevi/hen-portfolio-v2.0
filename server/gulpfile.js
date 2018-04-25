const gulp = require('gulp');

const paths = {
    scripts: {
        src: ['src/public/js/*.js'],
        dest: 'app/public/js'
    },
    //config folder
    config: {
        src: 'config/**/*',
        dest: 'app/config'
    },
    //client app
    app: {
        src: "../client/dist/**/*",
        dest: "./app/public/dist"
    }
};


// Not all tasks need to use streams 
// A gulpfile is just another node program and you can use any package available on npm 
gulp.task('clean', function () {
    // You can use multiple globbing patterns as you would with `gulp.src` 
    return del(['app/public']);
});
gulp.task('clean-scripts', function () {
    return del([paths.scripts.dest]);
});

//copy config folder from root to /app
gulp.task('copy-config', () => {
    return gulp.src(paths.config.src)
        .pipe(gulp.dest(paths.config.dest));
});

//copy app
gulp.task('copy-app', () => {
    return gulp.src(paths.app.src)
        .pipe(gulp.dest(paths.app.dest));
});
// Rerun the task when a file changes 
gulp.task('watch', function () {
    gulp.watch(paths.config.src, ['copy-config']);
    gulp.watch(paths.app.src, ['copy-app']);


});

// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['watch', 'copy-config','copy-app']);