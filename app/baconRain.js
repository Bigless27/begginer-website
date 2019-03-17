$(document).ready(() => {
    $.fn.makeBaconRain = () => {
        $(this).on('click', () => {
    
            let baconLimit = 50;
            for(let i = 0; i < baconLimit; i++) {
                let windowWidth = $(window).width();
    
                let randomPostion = Math.floor(windowWidth * Math.random());
    
                let randomTime = Math.random() * 20;
                let randomSpeed = (Math.random() * 20) + 10;
    
                //1280
                randomPostion = (randomPostion > 984) ? randomPostion - 306 : randomPostion;
    
                let bacon = $("<span class='baconBacon'>")
                    .css({
                        left: randomPostion,
                        top: '-256px',
                        "-webkit-animation-delay": randomTime + "s",
                        "-webkit-animation-duration": randomSpeed + "s"
                    })
    
                $(bacon).append('<img src="./images/bacon.png" alt="a piece of bacon">');
                
                $('.bacon-btn').append(bacon);
            }
        })
    }

    $('.bacon-btn').makeBaconRain();
})

