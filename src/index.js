var bitcoin = require('bitcoinjs-lib')
var Buffer = require('buffer').Buffer

$(function() {
	var privateKey
	var publicKey

	function render() {
		$('#public-key').text(publicKey)
		$('#public-key').html($('#public-key').html() + ' <small>Address/Public Key</small>')
		$('#private-key').text(privateKey)
		$('#private-key').html($('#private-key').html() + ' <small>Password/Private Key</small>')
	}

	var rng = function(seed) {
		var buffer = Buffer.from(Sha256.hash(seed), 'hex')
		return buffer
	}

	$('#generate').click(function() {
		var keyPair = bitcoin.ECPair.makeRandom()

		publicKey = keyPair.getAddress()
		privateKey = keyPair.toWIF()
		render()
	})

	$('#generate').click()

	$('#generate-with-seed').click(function() {
		var keyPair = bitcoin.ECPair.makeRandom({
			rng: function() {
				return rng($('#seed').val())
			}
		})

		publicKey = keyPair.getAddress()
		privateKey = keyPair.toWIF()
		render()
	})
	// var a=bitcoin.ECPair.makeRandom({rng: () => Buffer.from('0'.repeat(64), 'hex')})
	// console.log(a.getAddress())
	// console.log(a.toWIF())
})
