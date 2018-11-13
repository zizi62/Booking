
class Slider {
  
    constructor(itemImg,  itemBtn){
        this.itemImg = document.querySelectorAll(itemImg);
        this.itemBtn = document.querySelectorAll(itemBtn);
        this.index = 0;
        this.activeImg = null;
        this.img = null;
    }
 
    inits(obj, style, index){
        obj[index].className = style;
    }
 
    classActiveImg(activeImg){
        this.activeImg = activeImg;
    }


    classImg(img){
        this.img = img;
    }
    
 
    nextBtn(e, index, size){
        if(e.dataset.target === "prev"){
            --index;
            if(index < 0)
                index = size-1;
        }else if(e.dataset.target === "next"){
            ++index;
            if(index > size-1)
                index = 0;
        }else {
            index = parseInt(e.dataset.target);
        }
        return index;
    }

    start(){
       
        var inits = this.inits;
        var itemImg = this.itemImg;
        var itemBtn = this.itemBtn;
        var index = this.index;
        var nextBtn = this.nextBtn;
        var activeImg = this.activeImg;
        var img = this.img;
        
        for(var i = 0; i < this.itemBtn.length; i++)
            this.itemBtn[i].addEventListener("click", function(e){
                e.preventDefault();
                e.stopPropagation();
                inits(itemImg, img, index);
                index = nextBtn(this, index, itemImg.length);
                inits(itemImg, img + " "  + activeImg, index);
            });

    }
}


var slider = new Slider(".sliderItem", ".btn");


slider.classImg("sliderItem");
slider.classActiveImg("sliderItem_active");

slider.start();

