( function() {
	function colorToggle() {
		let body = document.body;
		let triggerEl = document.querySelector( '.main-navigation .theme-toggle' );

		if ( localStorage.getItem( 'dark' ) ) {
			body.classList.add( 'night' );
			triggerEl.innerHTML = '🌙';
		}

		triggerEl.addEventListener( 'click', function( e ) {
			e.preventDefault();

			if ( body.classList.contains( 'night' ) ) {
				localStorage.removeItem( 'dark' );
				body.classList.remove( 'night' );
				triggerEl.innerHTML = '☀️';
			} else {
				localStorage.setItem( 'dark', true );
				body.classList.add( 'night' );
				triggerEl.innerHTML = '🌙';
			}
		}, false );
	}
	colorToggle();
} )();