angular.module('starter').controller('SoundController', ['$ionicPlatform', '$timeout', '$cordovaNativeAudio', SoundController]);


function SoundController($ionicPlatform, $timeout, $cordovaNativeAudio){

	var vm = this;

	$ionicPlatform.ready(function(){
		//all calls to $cordovaNativeAudio return promises

		$cordovaNativeAudio.preloadSimple('clickSound', 'sound/click.mp3');
	});

	vm.play = function(sound){

		console.log("vm.play is called!!!!!!!!!!  " + sound )
		$cordovaNativeAudio.play(sound);

		$cordovaNativeAudio.play('clickSound');
	};

	return vm;
}