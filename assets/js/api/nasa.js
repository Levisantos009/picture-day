/* @Levisantos009 © */

export class Nasa {

    constructor() {
        this.image = $(".main__image")
        this.iframe = $(".iframe")
        this.title = $(".main__text")
        this.paragraph = $(".main__paragraph")
        this.datePicker = $("#datepicker")
        this.baseUrl = "https://api.nasa.gov/planetary/apod?api_key=58nBgPUJ0uL1sfuwi2FCLnKjSpJhZOFyLzxqL6bS"
        this.get("restart", '')
        this.listener()
    }

    get(mode, date) {
        mode == "listener" ? this.baseUrl = `https://api.nasa.gov/planetary/apod?api_key=58nBgPUJ0uL1sfuwi2FCLnKjSpJhZOFyLzxqL6bS&date=${date}` : ""

        let modal = $(".main__modalAjax");
        $(document).on({
            ajaxStart: function() { modal.show();    },
            ajaxStop: function() { modal.hide(); }    
        });

        Promise.resolve(
            $.ajax({url : this.baseUrl})
        ).then(json => {
            json["media_type"] == "video" ? this.fillVideo(json) : this.fillValues(json)
        });

    }

    fillValues(json) {
        this.image.show()
        this.iframe.hide()
        this.image.attr("src", json["url"])
        this.title.html(json["title"])
        this.paragraph.html(json["explanation"])
    }

    fillVideo(json) {
        this.iframe.show()
        this.image.hide()
        this.iframe.attr("src", json["url"])
    }

    listener() {
        this.datePicker.on("change", () => {
            let dd = this.datePicker.val().slice(0, 2);
            let mm = this.datePicker.val().slice(3, 5);
            let yy = this.datePicker.val().slice(6, 10);
        
            this.get("listener", `${yy}-${mm}-${dd}`)
        });
            
    }

}
