webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav id=\"mainNav\" class=\"navbar navbar-default navbar-fixed-top navbar-custom\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header page-scroll\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span> Menu\n                <i class=\"fa fa-bars\"></i>\n            </button>\n            <a class=\"navbar-brand\" href=\"#page-top\">Start Bootstrap</a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"hidden\">\n                    <a href=\"#page-top\"></a>\n                </li>\n                <li class=\"page-scroll\">\n                    <a href=\"#portfolio\">Portfolio</a>\n                </li>\n                <li class=\"page-scroll\">\n                    <a href=\"#about\">About</a>\n                </li>\n                <li class=\"page-scroll\">\n                    <a href=\"#contact\">Contact</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n</nav>\n\n<!-- Header -->\n<header>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <img #henImg class=\"img-responsive spin\" (click)=\"changeSpinSpeed()\" [ngClass] =\"{speedSpin:speedSpin}\" id=\"hen-img\" src=\"assets/img/hen.jpg\" alt=\"\">\n                <div class=\"intro-text\">\n                    <span class=\"name\">Hen Bar Levi</span>\n                    <hr class=\"star-light\">\n                    <span class=\"skills\">Web Developer - Front-end and Back-end </span>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n\n<!-- Portfolio Grid Section -->\n<section id=\"portfolio\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <h2>Portfolio</h2>\n                <hr class=\"star-primary\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-4 portfolio-item\">\n                <a href=\"#portfolioModal1\" class=\"portfolio-link\" data-toggle=\"modal\">\n                    <div class=\"caption\">\n                        <div class=\"caption-content\">\n                            <i class=\"fa fa-search-plus fa-3x\"></i>\n                        </div>\n                    </div>\n                    <img src=\"assets/img/portfolio/cabin.png\" class=\"img-responsive\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-sm-4 portfolio-item\">\n                <a href=\"#portfolioModal2\" class=\"portfolio-link\" data-toggle=\"modal\">\n                    <div class=\"caption\">\n                        <div class=\"caption-content\">\n                            <i class=\"fa fa-search-plus fa-3x\"></i>\n                        </div>\n                    </div>\n                    <img src=\"assets/img/portfolio/cake.png\" class=\"img-responsive\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-sm-4 portfolio-item\">\n                <a href=\"#portfolioModal3\" class=\"portfolio-link\" data-toggle=\"modal\">\n                    <div class=\"caption\">\n                        <div class=\"caption-content\">\n                            <i class=\"fa fa-search-plus fa-3x\"></i>\n                        </div>\n                    </div>\n                    <img src=\"assets/img/portfolio/circus.png\" class=\"img-responsive\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-sm-4 portfolio-item\">\n                <a href=\"#portfolioModal4\" class=\"portfolio-link\" data-toggle=\"modal\">\n                    <div class=\"caption\">\n                        <div class=\"caption-content\">\n                            <i class=\"fa fa-search-plus fa-3x\"></i>\n                        </div>\n                    </div>\n                    <img src=\"assets/img/portfolio/game.png\" class=\"img-responsive\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-sm-4 portfolio-item\">\n                <a href=\"#portfolioModal5\" class=\"portfolio-link\" data-toggle=\"modal\">\n                    <div class=\"caption\">\n                        <div class=\"caption-content\">\n                            <i class=\"fa fa-search-plus fa-3x\"></i>\n                        </div>\n                    </div>\n                    <img src=\"assets/img/portfolio/safe.png\" class=\"img-responsive\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-sm-4 portfolio-item\">\n                <a href=\"#portfolioModal6\" class=\"portfolio-link\" data-toggle=\"modal\">\n                    <div class=\"caption\">\n                        <div class=\"caption-content\">\n                            <i class=\"fa fa-search-plus fa-3x\"></i>\n                        </div>\n                    </div>\n                    <img src=\"assets/img/portfolio/submarine.png\" class=\"img-responsive\" alt=\"\">\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- About Section -->\n<section class=\"success\" id=\"about\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <h2>About</h2>\n                <hr class=\"star-light\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-lg-offset-2\">\n                <p>Hello my name is Hen Bar Levi and i am a Fullstack Developer.\n                    <br> love programming and have a large scale of knowledge in a variety of thecnologies Such as Node, Angular\n                    2, Mongo , WPF,</p>\n            </div>\n            <div class=\"col-lg-4\">\n                <p> WCF HTML, CSS, JavaScript, TypeScript and more (full description in my CV).\n                    <br>I Created This Website with Nodejs Express and Angular 2 only to show a small scale of my capabilities</p>\n            </div>\n            <div class=\"col-lg-8 col-lg-offset-2 text-center\">\n                <a href=\"#\" class=\"btn btn-lg btn-outline\" (click)=\"downloadMyCv()\">\n                    <i class=\"fa fa-download\"></i> Download My CV\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Contact Section -->\n<section id=\"contact\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <h2>Contact Me</h2>\n                <hr class=\"star-primary\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-8 col-lg-offset-2\">\n                <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->\n                <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->\n                <form name=\"sentMessage\" id=\"contactForm\" (ngSubmit)=\"onSubmit(form)\" novalidate #form=\"ngForm\">\n                    <div class=\"row control-group\">\n                        <div class=\"form-group col-xs-12 floating-label-form-group controls\">\n                            <label>Name</label>\n                            <input [(ngModel)]=\"message.name\" type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name\" id=\"name\" required #nameField=\"ngModel\">\n                            <p class=\"help-block text-danger\"></p>\n                            <p *ngIf=\"nameField.touched && nameField.invalid\" class=\"help-block text-danger alert-danger\">Please enter a name</p>\n                        </div>\n                    </div>\n                    <div class=\"row control-group\">\n                        <div class=\"form-group col-xs-12 floating-label-form-group controls\">\n                            <label>Email Address</label>\n                            <input [(ngModel)]=\"message.emailAddress\" type=\"email\" class=\"form-control\" name=\"emailAddress\" placeholder=\"Email Address\"\n                                id=\"email\" required pattern=\".+@.+\" #emailField=\"ngModel\">\n                            <p class=\"help-block text-danger\"></p>\n                            <p *ngIf=\"emailField.touched && emailField.invalid\" class=\"help-block text-danger\">Please enter a valid email</p>\n                        </div>\n                    </div>\n                    <div class=\"row control-group\">\n                        <div class=\"form-group col-xs-12 floating-label-form-group controls\">\n                            <label>Phone Number</label>\n                            <input [(ngModel)]=\"message.phoneNumber\" type=\"tel\" class=\"form-control\" name=\"phone\" placeholder=\"Phone Number\" id=\"phone\">\n                            <p class=\"help-block text-danger\"></p>\n                        </div>\n                    </div>\n                    <div class=\"row control-group\">\n                        <div class=\"form-group col-xs-12 floating-label-form-group controls\">\n                            <label>Message</label>\n                            <textarea [(ngModel)]=\"message.message\" rows=\"5\" class=\"form-control\" name=\"message\" placeholder=\"Message\" id=\"message\" required\n                                #messageField=\"ngModel\"></textarea>\n                            <p class=\"help-block text-danger\"></p>\n                            <p *ngIf=\"messageField.touched && messageField.invalid\" class=\"help-block text-dangerr\">Please enter a message</p>\n                        </div>\n                    </div>\n                    <br>\n                    <div id=\"success\"></div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-xs-12\">\n                            <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-success btn-lg\">Send</button>\n                            <p *ngIf=\"sendingEmail\">Sending...</p>\n                            <p class=\"help-block text-danger\" *ngIf=\"sendingEmailFailed===true\">\n                                ❌ Oops, i have some issue with my server. please send me an email to : hen101020@gmail.com\n                            </p>\n                            <p *ngIf=\"sendingEmailFailed===false\">\n                                ✔️\n                            </p>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Footer -->\n<footer class=\"text-center\">\n    <div class=\"footer-above\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"footer-col col-md-4\">\n                    <h3>Location</h3>\n                    <p>\n                        Bat-Yam</p>\n                </div>\n                <div class=\"footer-col col-md-4\">\n                    <h3>Around the Web</h3>\n                    <ul class=\"list-inline\">\n                        <li>\n                            <a href=\"#\" class=\"btn-social btn-outline\">\n                                <i class=\"fa fa-fw fa-facebook\"></i>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\" class=\"btn-social btn-outline\">\n                                <i class=\"fa fa-fw fa-google-plus\"></i>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"https://github.com/henbarlevi\" target=\"_blank\" class=\"btn-social btn-outline\">\n                                <i class=\"fa fa-fw fa-github\"></i>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"https://www.linkedin.com/in/hen-bar-levi-a63b1912b/\" target=\"_blank\" class=\"btn-social btn-outline\">\n                                <i class=\"fa fa-fw fa-linkedin\"></i>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\" class=\"btn-social btn-outline\">\n                                <i class=\"fa fa-fw fa-dribbble\"></i>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"footer-col col-md-4\">\n                    <h3>Direct Contact</h3>\n                    <p>Phone Number :\n                        <a href=\"#\">052-7046802</a>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"footer-below\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    Copyright &copy; Your Website 2016\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>\n\n<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->\n<div class=\"scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md\">\n    <a class=\"btn btn-primary\" href=\"#page-top\">\n        <i class=\"fa fa-chevron-up\"></i>\n    </a>\n</div>\n\n<!-- Portfolio Modals -->\n<div class=\"portfolio-modal modal fade\" id=\"portfolioModal1\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-content\">\n        <div class=\"close-modal\" data-dismiss=\"modal\">\n            <div class=\"lr\">\n                <div class=\"rl\">\n                </div>\n            </div>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-8 col-lg-offset-2\">\n                    <div class=\"modal-body\">\n                        <h2>Project Title</h2>\n                        <hr class=\"star-primary\">\n                        <img src=\"assets/img/portfolio/cabin.png\" class=\"img-responsive img-centered\" alt=\"\">\n                        <p>Serve for a 4.5 in the Israeli Air Force as an Electronics Engineer in Classified Unit Giving high\n                            level of service under pressure.\n                            <br>also have a recommendation from a Major</p>\n                        <ul class=\"list-inline item-details\">\n\n                            <li>Date:\n                                <strong>\n                                    <a href=\"#\">May 2011 - August 2015</a>\n                                </strong>\n                            </li>\n                            <li>Service:\n                                <strong>\n                                    <a href=\"#\">Electronics Engineer</a>\n                                </strong>\n                            </li>\n                        </ul>\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n                            <i class=\"fa fa-times\"></i> Close</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"portfolio-modal modal fade\" id=\"portfolioModal2\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-content\">\n        <div class=\"close-modal\" data-dismiss=\"modal\">\n            <div class=\"lr\">\n                <div class=\"rl\">\n                </div>\n            </div>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-8 col-lg-offset-2\">\n                    <div class=\"modal-body\">\n                        <h2>Project Title</h2>\n                        <hr class=\"star-primary\">\n                        <img src=\"assets/img/portfolio/cake.png\" class=\"img-responsive img-centered\" alt=\"\">\n                        <p>Finished Associate’s Degree Field Of Study Electrical and Electronics Engineering Grade 90+ in Kinerret\n                            College\n                            <br>\n                            <a href=\"#about\">the Degree Included C,assembly and VHDL</a>\n                        </p>\n                        <ul class=\"list-inline item-details\">\n\n                            <li>Date:\n                                <strong>\n                                    <a href=\"#\">2009-2011</a>\n                                </strong>\n                            </li>\n\n                        </ul>\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n                            <i class=\"fa fa-times\"></i> Close</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"portfolio-modal modal fade\" id=\"portfolioModal3\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-content\">\n        <div class=\"close-modal\" data-dismiss=\"modal\">\n            <div class=\"lr\">\n                <div class=\"rl\">\n                </div>\n            </div>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-8 col-lg-offset-2\">\n                    <div class=\"modal-body\">\n                        <h2>Project Title</h2>\n                        <hr class=\"star-primary\">\n                        <img src=\"assets/img/portfolio/circus.png\" class=\"img-responsive img-centered\" alt=\"\">\n                        <p>Finished Associate’s Degree In Software Development (.NET) Grade 90+ - In Sella College.\n                            <br>\n                            <a href=\"#\">it included a large scale of thecnologies and languages (1200 hours)</a>\n                        </p>\n                        <ul class=\"list-inline item-details\">\n\n                            <li>Date:\n                                <strong>\n                                    <a href=\"http://startbootstrap.com\">Dec 2015 - Dec 2016</a>\n                                </strong>\n                            </li>\n\n                        </ul>\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n                            <i class=\"fa fa-times\"></i> Close</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"portfolio-modal modal fade\" id=\"portfolioModal4\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-content\">\n        <div class=\"close-modal\" data-dismiss=\"modal\">\n            <div class=\"lr\">\n                <div class=\"rl\">\n                </div>\n            </div>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-8 col-lg-offset-2\">\n                    <div class=\"modal-body\">\n                        <h2>Project Title</h2>\n                        <hr class=\"star-primary\">\n                        <img src=\"assets/img/portfolio/game.png\" class=\"img-responsive img-centered\" alt=\"\">\n                        <p>Building a CRM website for Incubation Program that\n                            <a href=\"#\">helps to manage startups projects info.</a>\n                        </p>\n                        <ul class=\"list-inline item-details\">\n                            <li>Client:\n                                <strong>\n                                    <a href=\"http://startbootstrap.com\">GVI</a>\n                                </strong>\n                            </li>\n                            <li>Technologies:\n                                <strong>\n                                    <a href=\"#\">Angular 2 , Node jS, Express, MongoDB and more</a>\n                                </strong>\n                            </li>\n                            <li>Date:\n                                <strong>\n                                    <a href=\"#\">Jun 2017 - in process</a>\n                                </strong>\n                            </li>\n                            <li>Service:\n                                <strong>\n                                    <a href=\"#\">Web Development</a>\n                                </strong>\n                            </li>\n                        </ul>\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n                            <i class=\"fa fa-times\"></i> Close</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"portfolio-modal modal fade\" id=\"portfolioModal5\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-content\">\n        <div class=\"close-modal\" data-dismiss=\"modal\">\n            <div class=\"lr\">\n                <div class=\"rl\">\n                </div>\n            </div>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-8 col-lg-offset-2\">\n                    <div class=\"modal-body\">\n                        <h2>Coming soon</h2>\n                        <hr class=\"star-primary\">\n                        <img src=\"assets/img/portfolio/safe.png\" class=\"img-responsive img-centered\" alt=\"\">\n                        <p>\n                        </p>\n                        <ul class=\"list-inline item-details\">\n                            <li>Client:\n                                <strong>\n                                    <a href=\"http://startbootstrap.com\">GVI</a>\n                                </strong>\n                            </li>\n                            <li>Technologies:\n                                <strong>\n                                    <a href=\"#\">Angular 2 , Node jS, Express, MongoDB and more</a>\n                                </strong>\n                            </li>\n                            <li>Date:\n                                <strong>\n                                    <a href=\"#\">Jun 2017 - in process</a>\n                                </strong>\n                            </li>\n                            <li>Service:\n                                <strong>\n                                    <a href=\"#\">Web Development</a>\n                                </strong>\n                            </li>\n                        </ul>\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n                            <i class=\"fa fa-times\"></i> Close</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"portfolio-modal modal fade\" id=\"portfolioModal6\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-content\">\n        <div class=\"close-modal\" data-dismiss=\"modal\">\n            <div class=\"lr\">\n                <div class=\"rl\">\n                </div>\n            </div>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-8 col-lg-offset-2\">\n                    <div class=\"modal-body\">\n                        <h2>Coming soon</h2>\n                        <hr class=\"star-primary\">\n                        <img src=\"assets/img/portfolio/submarine.png\" class=\"img-responsive img-centered\" alt=\"\">\n                        <p></p>\n                        <ul class=\"list-inline item-details\">\n                            <li>Client:\n                                <strong>\n                                    <!-- <a href=\"http://startbootstrap.com\">Start Bootstrap</a> -->\n                                </strong>\n                            </li>\n                            <li>Date:\n                                <strong>\n                                    <!-- <a href=\"http://startbootstrap.com\">April 2014</a> -->\n                                </strong>\n                            </li>\n                            <li>Service:\n                                <strong>\n                                    <!-- <a href=\"http://startbootstrap.com\">Web Development</a> -->\n                                </strong>\n                            </li>\n                        </ul>\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n                            <i class=\"fa fa-times\"></i> Close</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#hen-img {\n  height: 160px;\n  width: 256px;\n  border-radius: 50%; }\n\ninput.ng-dirty.ng-invalid {\n  border: solid red 2px; }\n\ninput.ng-dirty.ng-valid {\n  border: solid green 2px; }\n\n@keyframes spin {\n  from {\n    transform: rotateY(0deg); }\n  to {\n    transform: rotateY(360deg); } }\n\n.spin:hover {\n  animation-name: spin;\n  animation-iteration-count: infinite;\n  animation-duration: 4s;\n  animation-timing-function: linear; }\n\n.speedSpin:hover {\n  animation-duration: .7s;\n  animation-iteration-count: 10; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__("../../../../../src/app/portfolio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(portfolioService, renderer) {
        this.portfolioService = portfolioService;
        this.renderer = renderer;
        this.speedSpin = false;
        this.sendingEmail = false;
        this.sendingEmailFailed = null;
        this.message = {};
    }
    /**Download Cv */
    AppComponent.prototype.downloadMyCv = function () {
        console.log('downloading cv');
        this.portfolioService.downloadCv();
    };
    /**END EMAIL */
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        this.sendingEmailFailed = null;
        this.sendingEmail = true;
        this.portfolioService.sendEmail(this.message)
            .then(function (res) {
            _this.sendingEmailFailed = false;
            console.log('success');
        })
            .catch(function (e) {
            _this.sendingEmailFailed = true;
            console.log('failed ' + JSON.stringify(e));
        })
            .then(function () { return _this.sendingEmail = false; });
    };
    AppComponent.prototype.changeSpinSpeed = function () {
        var _this = this;
        this.speedSpin = true;
        setTimeout(function () {
            _this.speedSpin = false;
        }, 2000);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Renderer2 */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portfolio_service__ = __webpack_require__("../../../../../src/app/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            //components
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            //modules
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            //services
            providers: [__WEBPACK_IMPORTED_MODULE_4__portfolio_service__["a" /* PortfolioService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver_FileSaver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver_FileSaver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver_FileSaver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioService = (function () {
    function PortfolioService(httpClient) {
        this.httpClient = httpClient;
    }
    PortfolioService.prototype.sendEmail = function (message) {
        return this.httpClient.post('api/email', message, {
            observe: 'response',
        }).toPromise();
    };
    //@link http://amilspage.com/angular4-file-download/
    PortfolioService.prototype.downloadCv = function () {
        var _this = this;
        this.httpClient.get('api/cv', {
            observe: 'response',
            responseType: 'blob'
        }).subscribe(function (res) {
            var fileName = _this.getFileNameFromResponseContentDisposition(res.headers);
            _this.saveFile(res.body, fileName);
        });
    };
    /**
     * Saves a file by opening file-save-as dialog in the browser
     * using file-save library.
     * @param blobContent file content as a Blob
     * @param fileName name file should be saved as
     */
    PortfolioService.prototype.saveFile = function (blobContent, fileName) {
        var blob = new Blob([blobContent], { type: 'application/octet-stream' });
        Object(__WEBPACK_IMPORTED_MODULE_2_file_saver_FileSaver__["saveAs"])(blob, fileName);
    };
    ;
    PortfolioService.prototype.getFileNameFromResponseContentDisposition = function (headers) {
        var contentDisposition = headers.get('content-disposition') || '';
        var matches = /filename=([^;]+)/ig.exec(contentDisposition);
        var fileName = (matches[1] || 'untitled').trim();
        return fileName;
    };
    PortfolioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PortfolioService);
    return PortfolioService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map