
journoPortfolio.setMacyConfig({
    container: ".masonry", 
    trueOrder: true, 
    margin: 20, 
    breakAt: {
        1100: {
            columns: 3
        },
        900: {
            columns: 2
        },
        600: {
            columns: 1
        }
    }
});

journoPortfolio.init();

$(document).ready(function(){
    journoPortfolio.load();
    journoPortfolio.reloadMacy();



    $('.mobile-menu').click(function(){
        $('body').toggleClass('mobile-menu-open');
    });
});
