module.exports = class UserProfile {
	constructor(userId, type, msg_type, displayName, pictureUrl, message){
		this.userId = userId;
		this.type = type;
		this.msg_type = msg_type;
		this.displayName = displayName;
		this.pictureUrl = pictureUrl;
		this.message = message;
	}
	toString() {
		return "message : "    + this.message       + "\r\n"
		+ "userId : "          + this.userId        + "\r\n"
		+ "spaces type ： "    + this.type          + "\r\n"
		+ "message type ： "   + this.msg_type      + "\r\n"
		+ "displayName : "     + this.displayName   + "\r\n"
		+ "pictureUrl : "      + this.pictureUrl    + "\r\n";
	}
};

