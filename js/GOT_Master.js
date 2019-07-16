(() => {
	console.log("My Js is working")

	//variable stack -> get the shields / sigils first
	const sigils = document.querySelectorAll('.sigilContainer'),
		lightBox = document.querySelector('.lightbox'),
		closeButton = document.querySelector('.close-lightbox');
		houseVideo = document.querySelector('.house-stark')
		bannerImages = document.querySelector('#houseImages')
	function popLightBox(){
		//debug this so far and make sure the event handling works
		//debugger;
		//make the lightbox
		lightBox.classList.add('show-lightbox')
		houseVideo.play();
	}
		function closeLightBox(event){
			event.preventDefault(); //e and event mean the same thing they are event handlers
			//make the lightbox show up
			lightBox.classList.remove('show-lightbox');
			houseVideo.currentTime = 0;
			houseVideo.pause();
		}
		function animateBanners(){
			//we need an offset that we can multiply by to animate
			//our banner to the left and make the active one show up
			let offset = 600;
			multiplier = this.dataset.offset;
			// this is the data offset custom  data attribute
			// on each of the sigils
			 console.log((offset * multiplier) + "px");
			// move the banners to the left using the product of the math
			bannerImages.style.right =`${offset * multiplier  + "px"}`;
		}
		//sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
		sigils.forEach(sigil => sigil.addEventListener("click", animateBanners));
		closeButton.addEventListener("click", closeLightBox)

		houseVideo.addEventListener('ended', closeLightBox)
	})();
