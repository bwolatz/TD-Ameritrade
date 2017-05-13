import { Injectable } from '@angular/core';
import { Image } from './image-class';

// holds the application-level variables. My HOPE was to use this as a way to persist thumbnail 
// information throughout components, however, data was being lost upon routing
@Injectable()
export class ShareService {
    public imageArray:Image[] = new Array();
    public idCount: number = 1;

    setIdCount(newCount:number): void {
        this.idCount = newCount;
    }
    
    pushToImageArray(newImage:Image): void {
        this.imageArray.push(newImage);
    }
}
