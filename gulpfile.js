var gulp=require("gulp")
var ts=require("gulp-typescript");
var run=require("gulp-run")
var nodemon=require("gulp-nodemon")

gulp.task("compile",function(){
    gulp.src('MiddleTier/**/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('./server/'));

})

gulp.watch("MiddleTier/**/*.ts",["compile"])

gulp.task('start', function () {
    nodemon({
      script: 'server/Server.js'
    , env: { 'NODE_ENV': 'development' }
    })
})

gulp.task('ui',function(){
    run('npm start').exec()
})


gulp.task('StartServer',['compile','start','ui'],function(cb){

})