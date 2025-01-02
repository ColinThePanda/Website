var ruffle = window.RufflePlayer.newest();
        var player = ruffle.createPlayer();
        document.getElementById('flash-content').appendChild(player);
        player.load("Age_of_War_2.swf");

        // Function to trigger fullscreen automatically
        function requestFullscreen() {
            if (player.requestFullscreen) {
                player.requestFullscreen();
            } else if (player.mozRequestFullScreen) { // Firefox
                player.mozRequestFullScreen();
            } else if (player.webkitRequestFullscreen) { // Chrome and Safari
                player.webkitRequestFullscreen();
            } else if (player.msRequestFullscreen) { // IE
                player.msRequestFullscreen();
            }
        }

        // Wait until the player has loaded and then request fullscreen
        player.onload = function() {
            var flashContainer = document.getElementById('flash-content');
            flashContainer.style.width = '100vw';
            flashContainer.style.height = '100vh';
            player.width = window.innerWidth;
            player.height = window.innerHeight;
            requestFullscreen(); // Automatically request fullscreen
        };

        // Make the game adjust to the window size
        window.onresize = function() {
            player.width = window.innerWidth;
            player.height = window.innerHeight;
        };