(function(){
	"use strict";

	var swipe = function(el){
		if(!(this instanceof swipeOut)){
			return new swipe(el);	
		}
		var self = this;
		self.touchEvents = {
			start: self.support.touch ? "touchstart" : "mousedown",
			move: self.support.touch ? "touchmove" : "mousemove",
			end: self.support.touch ? "touchend" : "mouseup" 
		};

		self.initSwipeout = function(el ){
			var isTouched = false,
				isMoved = false,
				touchStart = {},
				touchMove = null,
				touchStartTime = null,
				touchDiff = null,
				isScrolling;
			};

			function handlTouchStart(e) {
	            isTouched = true;
	            touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	            touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	            touchStartTime = (new Date()).getTime();
			}

			function handleTouchMove(e) {
				if (!isTouched){
					return;
				} 

				var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	            var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

	            if (typeof isScrolling === 'undefined') {
                    isScrolling = !!(isScrolling || Math.abs(pageY - touchesStart.y) > Math.abs(pageX - touchesStart.x));
                }
                if (isScrolling) {
                    isTouched = false;
                    return;
                }
                
	            isMoved = true;
	            e.preventDefault();
	                
	            touchesDiff = pageX - touchesStart.x;
	            var translate = touchesDiff;

	            if (translate > 0 && actionsLeft.length === 0 || translate < 0 && actionsRight.length === 0) {
	                    if (!opened) {
	                        isTouched = isMoved = false;
	                        swipeOutContent.transform('');
	                        if (buttonsRight && buttonsRight.length > 0) {
	                            buttonsRight.transform('');
	                        }
	                        if (buttonsLeft && buttonsLeft.length > 0) {
	                            buttonsLeft.transform('');
	                        }
	                        return;
	                    }
	                    translate = 0;
	                }
			}

			function handlTouchEnd(e) {

			}
		};

		self.swipeOpen = function(ele) {

		};




		


	self.support = (function() {
		var support = {
            touch: !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)
        };
        // Export object
        return support;
	})();
});