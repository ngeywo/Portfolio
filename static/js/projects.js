let anim_up = true,
    anim_down = true;


$(document).ready(function () {

    $('.project_details').mouseenter(function () {
        if (!this.bools){
            this.bools = true
            this.anim_up = true
            this.anim_down = true
        }
        if (this.anim_up) {
            this.anim_up = false
            $(this).animate({height: $(this).get(0).scrollHeight}, 400, function () {
                this.anim_up = true
            });
        }
    }).mouseleave(function () {
        if (this.anim_down) {
            this.anim_down = false
            $(this).animate({height: "40px"}, 400, function () {
                this.anim_down = true
            });
        }
    });
});