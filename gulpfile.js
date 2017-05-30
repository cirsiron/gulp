var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var cssnano = require("gulp-cssnano");
var htmlmin = require("gulp-htmlmin");
var browserSync = require("browser-sync");

gulp.task("script", function(){
	gulp.src("./js/app.js")
		.pipe(uglify())
		.pipe(gulp.dest("./dest"));
});

gulp.task("js", function() {
	gulp.src(["./js/app.js", "./js/main.js"])
		.pipe(concat("index.js"))
		.pipe(uglify())
		.pipe(gulp.dest("./dest"))
});
gulp.task("css", function() {
	gulp.src(["./css/app.css","./css/main.css"])
		.pipe(concat("mains.css"))
		.pipe(cssnano())
		.pipe(gulp.dest("./dest/css"))
});
gulp.task("html", function() {
	gulp.src("./index.html")
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest("./dest"))
});
gulp.task("dest",function(){
	gulp.src("./index.html")
		.pipe(gulp.dest("./dest"))
});
gulp.task("watch", function() {
	// 初始化browser-sync
	  browserSync.init({
	    server:'./dest', // 指定一个网站的根目录
	    files:['./dest/index.html']
	  });
	gulp.watch(["./index.html"],["dest","script","css"]);
});


