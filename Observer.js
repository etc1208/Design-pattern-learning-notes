/*观察者模式 = 发布者 + 订阅者*/

/*发布者
	1.注册订阅者
	2.删除订阅者
	3.向所有订阅者广播消息
*/
function Publisher() {
	this.subList = [];

	this.addSubscriber = function(sub) {
		this.subList.push(sub);
	};

	this.removeSubscriber = function(sub) {
		if(this.subList.indexOf(sub) > -1) {
			this.subList.splice(this.subList.indexOf(sub), 1);
		} 
	};

	this.publishMsg = function() {
		for(var i=0;i<this.subList.length;i++) {
			this.subList[i].receiveMsg();
		}
	};

}

/*订阅者：当收到发布者广播的消息后执行某操作*/
function Subscriber(name) {
	this.name = name;

	this.receiveMsg = function() {
		console.log(this.name + " has received new message");
	};
}

//调用
var publisher = new Publisher();

var subscriber1 = new Subscriber("yh");
var subscriber2 = new Subscriber("ws");
var subscriber3 = new Subscriber("qq");

publisher.addSubscriber(subscriber1);
publisher.addSubscriber(subscriber2);
publisher.addSubscriber(subscriber3);

publisher.publishMsg();
console.log('--------------');
publisher.removeSubscriber(subscriber1);

publisher.publishMsg();
