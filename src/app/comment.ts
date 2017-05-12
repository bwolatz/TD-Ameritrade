class Comment {
    public timestamp: string;
    public text: string;
    public username: string;
    
    public constructor(timestamp: string, text: string, username: string) {
        this.timestamp = timestamp;
        this.text = text;
        this.username = username;
    }
}

export { Comment };