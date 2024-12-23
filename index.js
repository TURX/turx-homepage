window.onload = () => {
	const enable_lang_notice = () => {
		$("#lang-notice").css("visibility", "visible");
		$("#lang-notice").css("opacity", 1);
	}
	const lang = navigator.language;
	if (lang == "ja" && window.location.host != "turx.tokyo")
		enable_lang_notice();
	else if (lang != "ja" && window.location.host != "turx.asia")
		enable_lang_notice();
	document.body.className += " loaded";
}

const mail = () => window.location = "mailto:homepage@turx.asia";
$("#btn-email").click(mail);
$("#btn-email-portrait").click(mail);

const mail_ja = () => window.location = "mailto:hp@turx.tokyo";
$("#btn-email-ja").click(mail_ja);
$("#btn-email-ja-portrait").click(mail_ja);

const twitter = () => window.location = "https://twitter.com/_AruEkusu_";
$("#btn-twitter").click(twitter);

const acad = () => window.location = "acad/";
$("#btn-acad").click(acad);
$("#btn-acad-portrait").click(acad);

const github = () => window.location = "https://github.com/TURX";
$("#btn-github").click(github);

const blog = () => window.location = "https://blog.turx.asia";
$("#btn-blog").click(blog);
$("#btn-blog-portrait").click(blog);

const resume = () => window.location = "https://direct.turx.asia/resume.pdf";
$("#btn-resume").click(resume);
$("#btn-resume-portrait").click(resume);

const resume_ja = () => window.location = "https://direct.turx.asia/resume-ja.pdf";
$("#btn-resume-ja").click(resume_ja);
$("#btn-resume-ja-portrait").click(resume_ja);

$("#bg").hover(function() {
	$("#content").css("opacity", "0.7");
}, function() {
	$("#content").css("opacity", "1");
});
