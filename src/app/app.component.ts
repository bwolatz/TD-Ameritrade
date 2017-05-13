import { Component, ElementRef, ViewChild } from '@angular/core';
import { Image } from './image-class';
import { Comment } from './comment';
import { ShareService } from './share.service';

@Component({
  selector: 'app-root',
  providers: [ShareService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
    // shared service for cross-component sharing of variable data
    constructor(private shareService: ShareService) {}
    
    // component level variables
    orientationToShow: any = {};
    error: string = "";
    username: string;
    usercomment: string;
    imageIdToShow: number = 0;
    imageToShow: Image;
    
    // file upload process. use a html file input, retrieve the files when more are added
    // open a file reader object, read the data. the `onload` accepts a promise once all the data is loaded.
    @ViewChild('inp') element: ElementRef;
    upload() {
        var files = this.element.nativeElement.files;
        for (var i = 0; i < files.length; i++) {
             var file = files[i];
             var reader = new FileReader();
             reader.onload = (f) => {
                let newImage = new Image(this.shareService.idCount, file.name, reader.result); 
                this.shareService.setIdCount(this.shareService.idCount + 1);
                this.shareService.pushToImageArray(newImage);
             }
             reader.readAsDataURL(file);
        }
    }
    
    // simple linear search to find which image was selected (in the thumbnail section),
    // assign the component-level variables appropriately
    bringToTop(selectedId) {
        for (var j = 0; j < this.shareService.imageArray.length; j++) {
            if (this.shareService.imageArray[j].id == selectedId) {
                this.imageToShow = this.shareService.imageArray[j];
                this.imageIdToShow = selectedId;
                this.calcOrientationStyle();
                break;
            }
        }
        this.error = "";
    }
    
    // sets component-level variables to hide the top section
    hideTop() {
        this.imageIdToShow = 0;
        this.error = "";
    }
    
    // saves a comment based on the values in the input boxes.
    // does basic form validation and date formatting.
    addComment() {
        if (this.username.length <= 0) {
            this.error = "Enter a username to leave a comment.";
        } else if (this.usercomment.length <= 0) {
            this.error = "No comment to add.";
        } else {
            let date = new Date();
            let readableTimestamp = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
            let newComment = new Comment(readableTimestamp, this.usercomment, this.username)
            this.imageToShow.comments.push(newComment);
            this.usercomment = "";
            this.username = "";
            this.error = "";
        }
    }
    
    // add 90 degrees to the property of the Image object
    rotateNinetyDegrees() {
        let num = parseInt(this.imageToShow.orientation);
        this.imageToShow.orientation = ((num + 90) % 360) + 'deg';
        this.calcOrientationStyle();
    }
    
    // cross-browser support for image orientation/rotation functionality
    calcOrientationStyle() {
        this.orientationToShow = {
            "-ms-transform": "rotate(" + this.imageToShow.orientation + ")", /* IE 9 */
            "-webkit-transform": "rotate(" + this.imageToShow.orientation + ")", /* Chrome, Safari, Opera */
            "transform": "rotate(" + this.imageToShow.orientation + ")" 
        }
    }
    
    title = 'TD Ameritrade Test Application - Image Gallery';
}