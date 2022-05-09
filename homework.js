function  changeTheH1Text()
 {
    let h1Node = document.getElementsByTagName('h1')[0] 
    h1Node.innerText = "Mobile world "
}
function bgColor() {
    let bodyNode = document.getElementsByTagName("body")[0] 
    bodyNode.style.backgroundColor="red"
}
function changeTheFooterText() {
    let footerNode = document.getElementById("Address")
    footerNode.innerText = "105,mainzerland frankfurt "
}
const toggleImagesClass = function () {
  let images = document.querySelectorAll("img")
  for (let i = 0; i < images.length; i++) {
    const singleImg = images[i];
    singleImg.classList.toggle("hidden")
  }
}
      function selectAllImages() 
      {
        let imageNodes = document.getElementsByTagName('img') 

        for (let i = 0; i < imageNodes.length; i++)
         {
          let imageNodes = imageNodes[i];
          imageNodes.classList.toggle('.cssvisibility')
      }
    }
    const getRandomColor = function () {
      const red = Math.round(Math.random() * 255);
      const green = Math.round(Math.random() * 255);
      const blue = Math.round(Math.random() * 255);

      return "rgb(" + red + ", " + green + ", " + blue + ")";
    }

    const setRandomColor = function () {
      const randomColor = getRandomColor();
      let prices = document.querySelectorAll(".price")
      for(let i = 0; i<prices.length; i++) {
        let singlePrince = prices[i]
        singlePrince.style.color = randomColor
      }
      
    }
  
  