import { Comment } from "./comment";

// class of Image. holds essential properties, such as source data and filename
class Image {
    public comments: Comment[] = new Array();
    public id: number;
    public filename: string;
    public orientation: string;
    public source: any;
    
    public constructor(id: number, filename: string, source: any) {
        this.id = id;
        this.filename = filename;
        this.orientation = '0deg';
        this.comments = [];
        this.source = source;
    }
}
export { Image };