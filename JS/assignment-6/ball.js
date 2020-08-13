function Ball(i) {
	var id = i;
	var ball = null;
	var interval = null;
	this.isDeleteable = false;
	this.isDeleted = false;
	var that = this;

	this.create = function() {
		this.ball = document.createElement('div');
		this.ball.id = i;
		this.ball.style.borderRadius = '50%';
		var colors = [
            'red',
            'Thistle',
            'yellow',
            'whitesmoke',
            'purple',
            'Violet',
			'orange',
			'black',
            'olive',
            'turquoi',
            'aquamarine',
            'SteelBlue'
        ];        
        this.ball.style.backgroundColor = colors[parseInt(Math.random() * colors.length)];
		this.ball.style.position = 'absolute';
		document.body.appendChild(this.ball);

		this.ball.addEventListener('click', function() {
			if (that.isDeleteable) {
				that.remove();
			}
		});
	};

	this.setDimension = function(width, height) {
		this.ball.style.width = width + 'px';
		this.ball.style.height = height + 'px';
	};

	this.getDimension = function() {
		return {
			h: parseInt(this.ball.style.height),
			w: parseInt(this.ball.style.width)
		};
	};

	this.setPosition = function(x, y) {
		this.ball.style.top = x + 'px';
		this.ball.style.left = y + 'px';
	};


	this.move = function() {
		this.isDeleteable = true;
		
		this.interval = setInterval(() => {
			var currentTop = parseInt(that.ball.style.top);
			var nextTop = currentTop + Math.random() * 5;
			that.ball.style.top = nextTop + 'px';
		}, 1000 / 60);
	};

	this.remove = function() {
		document.body.removeChild(this.ball);
		clearInterval(interval);
		this.isDeleted = true;
	};
}
