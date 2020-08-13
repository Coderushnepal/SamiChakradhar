function main() {
	var balls = [];

	this.start = function(n) {
		for (i = 1; i <= n; i++) {
			var ball = new Ball(i);
			ball.create();
			var dimension = parseInt(Math.random() * 100);
			ball.setDimension(dimension, dimension);
			
            ball.setPosition(0,(Math.random() *1500));
            balls.push(ball);

			var timeout = Math.random() * 7 * 1000;
			setTimeout(
				(function() {
					var currentBall = ball;
					return function() {
						currentBall.move();
					};
				})(),
				timeout
			);
		}
	};

	this.removeBall = function() {
		setInterval(function() {
			balls.forEach(function(ball, index) {
				if (!ball.isDeleted && ball.getPosition().x > window.innerHeight - ball.getDimension().h) {
					ball.remove();
				}
			});
		}, 1000 / 60);
	};
}
var animate = new main();
animate.start(300);
animate.removeBall();
