import { Injectable } from '@angular/core';
import { Image } from './image-class';

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
