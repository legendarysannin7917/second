let toggleNavStatus = false;

let toggleNav = function(){
	let getSidebar = document.querySelector(".nav-sidebar");
	let getSidebarUl = document.querySelector(".nav-sidebar ul");
	let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
    
	
	if (toggleNavStatus === false){
		getSidebarUl.style.visibility = "visible";
		getSidebar.style.width = "85%";
		
		let arrayLength = getSidebarLinks.length;
		for (let i = 0; i < arrayLength; i++){
			getSidebarLinks[i].style.opacity = "1";
		}	
		toggleNavStatus = true;
	}
	else if (toggleNavStatus === true){
		getSidebar.style.width = "5%";
		
		let arrayLength = getSidebarLinks.length;
		for (let i = 0; i < arrayLength; i++){
			getSidebarLinks[i].style.opacity = "0";
		}	
		getSidebarUl.style.visibility = "hidden";
		toggleNavStatus = false;
	}
}

var videoPlayer = document.getElementById("videoPlayer");
var playingVideo = document.getElementById("playingVideo");

function stopVideo(){
	videoPlayer.style.display = "none";
	playingVideo.pause();
}
			
function playVideo(file){
	playingVideo.src = file;
	videoPlayer.style.display = "block";
}