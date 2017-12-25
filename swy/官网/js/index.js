$(function() {
    // 
    // $.stellar({
    //     horizontalScrolling: false,
    //     responsive: true
    // });
    
    var ua = navigator.userAgent,
    isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

    if (isMobileWebkit) {
    	
    	//var s = skrollr.init();
    	// alert(s.isMobile());

    } else {

    	 $.stellar({
            horizontalScrolling: false,
            verticalOffset: 0
        });
    }
});