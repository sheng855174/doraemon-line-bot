module.exports = class UserProfileAPI {
	constructor(eventAA){
		this.userId = eventAA.source.userId;
	}
	toString() {
		return "userId : " + userId + "\r\n";
	}
	
};

