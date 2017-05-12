import { Comment } from "./comment";

class Image {
    public comments: Comment[] = new Array();
    public id: number;
    public filename: string;
    public orientation: number;
    
    public constructor(id: number, filename: string) {
        this.id = id;
        this.filename = filename;
        this.orientation = 0;
        this.comments = [];
    }
}
export { Image };