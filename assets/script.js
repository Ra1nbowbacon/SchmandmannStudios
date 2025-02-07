const simpleSlides = function (options) {
    const Slideshow = {
        init: function (options) {
            this.count = 0;
            this.slides = document.querySelectorAll(".slides");
            this.numslides = this.slides.length;
            options = options || {};
            this.opts = {
                speed: options.speed || 3600,
                animate: options.animate || "animate-top"
            }
            this.slides[0].classList.add(this.opts.animate);
            this.slides[0].style.display = "block";
            this.autoCycle(this.opts.speed)
        },
        showSlide: function (i) {
            this.slides[this.count].classList.remove(this.opts.animate);
            this.slides[this.count].style.display = "none";
            this.count = (i > 0) ? (this.count + 1) % this.numslides : (this.count - 1 + this.numslides) % this.numslides;
            this.slides[this.count].style.display = "block";
            this.slides[this.count].classList.add(this.opts.animate);
        },
        autoCycle: function (speed) {
            const that = this;
            setInterval(function () {
                that.showSlide(1);
            }, speed);
        }
    };
    const slideshow = Object.create(Slideshow);
    slideshow.init(options);
}

const opts = {
    speed: 3000,
    animate: "animatetop"
}

simpleSlides(opts);
