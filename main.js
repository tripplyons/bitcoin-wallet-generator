$(function() {
	var privateKey
	var publicKey

	function render() {
		$('#public-key').text(publicKey)
		$('#public-key').html($('#public-key').html() + ' <small>Address/Public Key</small>')
		$('#private-key').text(privateKey)
		$('#private-key').html($('#private-key').html() + ' <small>Password/Private Key</small>')
	}

	$('#generate').click(function() {
		var keyPair = bitcoin.ECPair.makeRandom()

		publicKey = keyPair.getAddress()
		privateKey = keyPair.toWIF()
		render()
	})

	$('#generate').click()
})
