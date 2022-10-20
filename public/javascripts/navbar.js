    let zoomCheckDelay = 100; // how often to call function
    let hasZoomed = false; // has user zoomed in or not
    var sidenav = document.getElementById('navbar'); // reference navbar

    //function to check whether the user has zoomed in or out past the navbar change
    function checkZoom() {
        let width = screen.width; // get screen width

        if(width <= 880 && (!hasZoomed)) { // if gone below navbar change & not already zoomed in
            hasZoomed = true; // set zoom to true
        }
        else if(width >= 881 && (hasZoomed)) { // if gone above navbar change & has zoomed in before
            hasZoomed = false; // reset zoom back to false
            hideMenu(); // hide possible menu left open
        }

        setTimeout(checkZoom, zoomCheckDelay); // call function again

    }

    //function to make the responsive navbar visible
    function showMenu() {
        if(sidenav.style.display == "") { // if the display is none
            sidenav.style.display = "flex"; // set display to flex
        } 
    }

    //function to make the responsive navbar invisible
    function hideMenu() {
        if(sidenav.style.display == "flex") { // if the display is flex
            sidenav.style.display = ""; // set display to none
        }
    }

    checkZoom();