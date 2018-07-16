( function() {
	function colorToggle() {
		let body = document.body;
		let triggerEl = document.querySelector( '.main-navigation .theme-toggle' );

		if ( localStorage.getItem( 'light' ) ) {
			body.classList.add( 'original' );
			triggerEl.innerHTML = '🌙';
		}

		triggerEl.addEventListener( 'click', function( e ) {
			e.preventDefault();

			if ( body.classList.contains( 'original' ) ) {
				localStorage.removeItem( 'light' );
				body.classList.remove( 'original' );
				triggerEl.innerHTML = '☀️';
			} else {
				localStorage.setItem( 'light', true );
				body.classList.add( 'original' );
				triggerEl.innerHTML = '🌙';
			}
		}, false );
	}
	colorToggle();
} )();