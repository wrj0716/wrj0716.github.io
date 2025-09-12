var work_photo_li=document.querySelectorAll(".photo>li");//取得所有.photo>li的元素集合

work_photo_li.forEach(function(item) {
    console.log(item);
    item.addEventListener("mouseover",function(e){
        var tag=e.target;
        var tag=even.target;
        tag.classList.toggle("photo")
    })
    
})