module.exports = class UserProfileAPI {
	constructor(event){
		this.userId = event.source.userId;
	}
	toString() {
		return "userId : " + userId + "\r\n";
	}
	
};

