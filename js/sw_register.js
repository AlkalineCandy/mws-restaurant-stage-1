if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./service_worker.js')
	.then(function() {
		console.log('Successful registration');
	})
	.catch(function() {
		console.log('Registration failed');
	});
}