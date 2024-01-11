let container=document.querySelector('.main-box')


    let block=document.createElement("img")
      block.setAttribute("src","https://th.bing.com/th/id/OIP.TpJJlLJVLD5tjSZUzT7W7QHaEo?rs=1&pid=ImgDetMain")
    block.classList.add('block')

    let block1=document.createElement("img")
    block1.setAttribute("src","https://th.bing.com/th/id/OIP.TpJJlLJVLD5tjSZUzT7W7QHaEo?rs=1&pid=ImgDetMain")
  block1.classList.add('block')
  let block2=document.createElement("img")
  block2.setAttribute("src","https://wallpaperaccess.com/full/1126800.jpg")
block2.classList.add('block')
let block3=document.createElement("img")
block3.setAttribute("src","https://cdn.wallpapersafari.com/76/96/90tf3m.jpg")
block3.classList.add('block')
let block4=document.createElement("img")
block4.setAttribute("src","https://getwallpapers.com/wallpaper/full/6/5/4/1364104-cool-beach-house-desktop-wallpaper-2560x1600-for-hd.jpg")
block4.classList.add('block')
let block5=document.createElement("img")
block5.setAttribute("src","https://www.pixelstalk.net/wp-content/uploads/2016/10/Beach-House-HD-Wallpaper.jpg")
block5.classList.add('block')
let block6=document.createElement("img")
block6.setAttribute("src","https://wallpaperaccess.com/full/1424217.jpg")
block6.classList.add('block')
let block7=document.createElement("img")
block7.setAttribute("src","https://www.pixelstalk.net/wp-content/uploads/images1/Little-beach-wallpaper.jpg")
block7.classList.add('block')
let block8=document.createElement("img")
block8.setAttribute("src","https://cdn.wallpapersafari.com/96/99/4YM6wZ.jpg")
block8.classList.add('block')
let block9=document.createElement("img")
block9.setAttribute("src","https://images.alphacoders.com/740/740194.jpg")
block9.classList.add('block')
let block10=document.createElement("img")
block10.setAttribute("src","https://th.bing.com/th/id/OIP.8-fsPbg5VotMf-Irlcf3bAHaEo?pid=ImgDet&w=474&h=296&rs=1")
block10.classList.add('block')
let block11=document.createElement("img")
block11.setAttribute("src","https://www.pixelstalk.net/wp-content/uploads/images1/Dream-house-wallpaper-1920x1280.jpg")
block11.classList.add('block')
let block12=document.createElement("img")
block12.setAttribute("src","https://www.pixelstalk.net/wp-content/uploads/2016/10/Beach-House-Desktop-Wallpaper.jpg")
block12.classList.add('block')
let block13=document.createElement("img")
block13.setAttribute("src","https://getwallpapers.com/wallpaper/full/b/d/9/1364075-cool-beach-house-desktop-wallpaper-1920x1200-laptop.jpg")
block13.classList.add('block')
let block14=document.createElement("img")
block14.setAttribute("src","https://th.bing.com/th/id/R.3411f6bfae77f5235d0e1b13b5654a08?rik=sssbBvPFJYuaYw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fp10jbtu.jpg&ehk=FxNSJUcciGKSXdRYSnU4Vfm0xvj9MWpWglVcswx8kBg%3d&risl=&pid=ImgRaw&r=0")
block14.classList.add('block')
let block15=document.createElement("img")
block15.setAttribute("src","https://www.pixelstalk.net/wp-content/uploads/2016/10/Beach-House-Background-Widescreen.jpg")
block15.classList.add('block')
// let block16=document.createElement("img")
// block16.setAttribute("src","https://cdn.wallpapersafari.com/26/56/IqC6Hl.jpg")
// block16.classList.add('block')
// let block17=document.createElement("img")
// block17.setAttribute("src","https://cdn.wallpapersafari.com/29/85/uDNWBx.jpg")
// block17.classList.add('block')
// let block18=document.createElement("img")
// block18.setAttribute("src","https://th.bing.com/th/id/R.881318f876a0fb400c4fd579cd2ad667?rik=kJzgAlTYQGwCBg&riu=http%3a%2f%2fwww.wallpaperbetter.com%2fwallpaper%2f545%2f100%2f994%2fbeach-house-retreat-1080P-wallpaper.jpg&ehk=3TxD5cM6JdvYks5dSIjYpfO8h2YT2wkFOu0IkRKIQEU%3d&risl=&pid=ImgRaw&r=0")
// block18.classList.add('block')
// let block19=document.createElement("img")
// block19.setAttribute("src","https://cdn.wallpapersafari.com/19/49/oc1O7j.jpg")
// block19.classList.add('block')
// let block20=document.createElement("img")
// block20.setAttribute("src","https://wallpapercave.com/wp/5IPf2LM.jpg")
// block20.classList.add('block')
container.append(block,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15)

    var x=window.matchMedia("(max-width:550px)")

function gen(){
    if(x.matches){
    anime({
        targets:".block",
        translateX: 
           function(){
            return anime.random(-150,150)
        }  
       ,
        translateY:function(){
            return anime.random(-80,80)
        },
        scale:function(){
            return anime.random(1,3)
        }

    })

}
    else{
        anime({
            targets:".block",
            translateX: 
               function(){
                return anime.random(-380,380)
            }  
            
           
           ,
            translateY:function(){
                return anime.random(-180,180)
            },
            scale:function(){
                return anime.random(1,4)
            }
    
        })

    }
}
setInterval(()=>{
gen(x)
},2000)
    

