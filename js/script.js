$(document).ready(function(){
	$('.dark').owlCarousel({
	    loop:true,
	    nav:false,
	    animateOut: 'fadeOut',
	    autoplay:true,
	    mouseDrag:false,
	    items: 1
	});

	var sync1 = $("#sync1");
	var sync2 = $("#sync2");

	sync1.owlCarousel({
		singleItem : true,
		slideSpeed : 250,
		autoPlay: 2500,
		navigation: true,
		stopOnHover: true,
		pagination:false,
		items: 1,
		afterAction : syncPosition,
		responsiveRefreshRate : 200,
		navigationText : ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>','<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
	});

	sync2.owlCarousel({
		items : 4,
		itemsDesktop      : [1199,4],
		itemsDesktopSmall : [991,4],
		itemsTablet       : [767,4],
		itemsMobile       : [479,4],
		pagination:false,
		responsiveRefreshRate : 1,
		afterInit : function(el){
			el.find(".owl-item").eq(0).addClass("synced");
		}
	});

		function syncPosition(el){
		var current = this.currentItem;
		$("#sync2")
			.find(".owl-item")
			.removeClass("synced")
			.eq(current)
			.addClass("synced")
		if($("#sync2").data("owlCarousel") !== undefined){
			center(current)
		}
	}

	$("#sync2").on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo",number);
	});

	function center(number){
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in sync2visible){
			if(num === sync2visible[i]){
				var found = true;
			}
		}

		if(found===false){
			if(num>sync2visible[sync2visible.length-1]){
				sync2.trigger("owl.goTo", num - sync2visible.length+2)
			}else{
				if(num - 1 === -1){
					num = 0;
				}
				sync2.trigger("owl.goTo", num);
			}
		} else if(num === sync2visible[sync2visible.length-1]){
			sync2.trigger("owl.goTo", sync2visible[1])
		} else if(num === sync2visible[0]){
			sync2.trigger("owl.goTo", num-1)
		}

	}

	$('.tabs-control .tab').click(function() {
		$('.tabs-control .tab').removeClass('active');
		$(this).addClass('active');
	});
	// $('.btn-boats').click(function() {
	// 	$('.theProduct.river').fadeOut(250);
	// });
});