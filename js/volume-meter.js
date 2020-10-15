window.onload = function () {
	"use strict";
	var AudioContext;
	var audioContent;
	var start = false;
	var permission = false;
	var path;
	var seconds = 0;
	var loud_volume_threshold = 25;

	var soundAllowed = function (stream) {
		permission = true;
		var audioStream = audioContent.createMediaStreamSource(stream);
		var analyser = audioContent.createAnalyser();
		var fftSize = 1024;

		analyser.fftSize = fftSize;
		audioStream.connect(analyser);

		var bufferLength = analyser.frequencyBinCount;
		var frequencyArray = new Uint8Array(bufferLength);

		var showVolume = function () {
			setTimeout(showVolume, 100);
			if (start) {
				analyser.getByteFrequencyData(frequencyArray);
				var total = 0
				for (var i = 0; i < 255; i++) {
					var x = frequencyArray[i];
					total += x * x;
				}
				var rms = Math.sqrt(total / bufferLength);
				var db = 20 * (Math.log(rms) / Math.log(10));
				db = Math.max(db, 0); // sanity check
				console.log(Math.floor(db))

				if (Math.floor(db) > 35) {
					document.getElementById("decibelz").style.color = 'red';
					document.getElementById("CetteSouffrance").src = "assets/intensite/voisine3.png"
				} else if (Math.floor(db) > 20) {
					document.getElementById("decibelz").style.color = 'orange';
					document.getElementById("CetteSouffrance").src = "assets/intensite/voisine2.png"
				} else {
					document.getElementById("decibelz").style.color = 'black';
					document.getElementById("CetteSouffrance").src = "assets/intensite/voisine1.png"
				}
				document.getElementById("decibelz").innerHTML = String(Math.floor(db)) + " db"

			}
		}

		showVolume();
	}

	var soundNotAllowed = function (error) {
		document.getElementById("decibelz").innerHTML = "Active ton micro!";
		console.log(error);
	}


	document.getElementById('btnDebut').onclick = function () {
		if (!permission) {
			navigator.mediaDevices.getUserMedia({
					audio: true
				})
				.then(soundAllowed)
				.catch(soundNotAllowed);
			AudioContext = window.AudioContext || window.webkitAudioContext;
			audioContent = new AudioContext();
		}
		start = true;
		this.style.display = 'none';
		document.getElementById("decibelz").innerHTML = "0 db";
	};
};