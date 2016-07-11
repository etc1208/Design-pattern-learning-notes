/*策略模式*/

function StrategyA() {
	this.execute = function() {
		console.log("strategyA!");
	};
}

function StrategyB() {
	this.execute = function() {
		console.log("strategyB!");
	};
}

function StrategyC() {
	this.execute = function() {
		console.log("strategyC!");
	};
}

function StrategyChooser(strategy) {
	this.strategy= strategy;
	
	this.execStrategy = function() {
		this.strategy.execute();
	};
}

//调用
var chooserA = new StrategyChooser(new StrategyA());
var chooserB = new StrategyChooser(new StrategyB());
var chooserC = new StrategyChooser(new StrategyC());

chooserA.execStrategy();
chooserB.execStrategy();
chooserC.execStrategy();