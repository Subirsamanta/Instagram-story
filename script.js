var arr = [
    {dp:"https://plus.unsplash.com/premium_photo-1695339147177-d211732cfb2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",story:"https://plus.unsplash.com/premium_photo-1695186450461-777ea482f34b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"},
    {dp:"https://plus.unsplash.com/premium_photo-1708271598114-5e6e8892a2ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1712475795499-169672690493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTl8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1712092289661-7889704d8b0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1712509846599-a77fb4958ac2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzV8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1712546852197-b279a870c926?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTB8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1711211095357-076c9784660d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzh8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1712416360760-0d740967d4f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjh8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1712313127701-dd6fde97f5d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDN8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1712460842246-0a79c9bd48e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDd8fHxlbnwwfHx8fHw%3D",story:"https://plus.unsplash.com/premium_photo-1710631508215-61d51dcacfb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDh8fHxlbnwwfHx8fHw%3D"},
]
// var clutter =""
// arr.forEach(function(elem,index){
//     // console.log(elem,index);
//     clutter += `<div class="story">
//     <img id="${index }" src="${elem.dp}" alt="">              
// </div>`
// })

// document.querySelector("#storyan").innerHTML = clutter
// document.querySelector("#storyan").addEventListener("click",function(){
//     console.log("hi");
// })

var storyan = document.querySelector("#storyan")
var clutter =""
arr.forEach(function(elem,index){
    // console.log(elem,index);
    clutter += `<div class="story">
    <img id="${index }" src="${elem.dp}" alt="">              
</div>`
})

storyan.innerHTML = clutter
storyan.addEventListener("click",function(dets){
    // console.log(arr[dets.target.id].story);
    document.querySelector("#full-scrin").style.display = "block"
    document.querySelector("#full-scrin").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-scrin").style.display = "none"
    },3000)
})