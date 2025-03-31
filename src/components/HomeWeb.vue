<template>
  <div class="Main" id="Main" :style="{ opacity: opacityMain }">

    <div   class="head" id="head"
      :style="{ backgroundImage: `url(${currentImage})`, filter: brightnessValue, animationName: backgroundAnimation }">


      <!------------------------------------------------------------------------------------------------------------------------------------->
      <!-- توضیحات رشته ورزشی و عکس وسط آن  -->

      <img :src="imageSrc" class="my-image" id="myImage" :style="{ animationName: animationNames.imageName }" />

      <div class="sportName" id="sport" :style="{ animationName: animationNames.textName }">
        <h1 class="Name1" id="name"> {{ name }}</h1>

        <h1 class="Name1" id="name2">{{ name2 }}</h1>

        <p class="explanation" id="explanation"> {{ explanation }} </p>
      </div>

      <!------------------------------------------------------------------------------------------------------------------------------------->
      <!-- دایره انیمیشنی پایین  -->

      <div class="circleAnimationContainer">
        <div class="circleAnimation"></div>
      </div>

      <!----------------------------------------------------------------------------------------------------------------------------------->
      <!--دکمه هایی برای نمایان کردن تصاویر بعد و قبل-->

      <button class="arrow-left" @click="clearTimer(-1)"><i style="transform: rotate(-45deg);"
          class='fas fa-angle-left arrowIcon'></i>
      </button>

      <button class="arrow-right" @click="clearTimer(1)"><i style="transform: rotate(-45deg);"
          class='fas fa-angle-right arrowIcon'></i>
      </button>

      <!------------------------------------------------------------------------------------------------------------------------------------->
      <!-- الحاقیه کنار عکس -->

      <div class="Addendum">
        <div class="divBox">
          <p class="persiamP posEnd">تا</p>
          <h1 class="number" id="number"> {{ numberPerecent }} </h1>
          <p class="persiamP"> تخفیف ویژه</p>
        </div>
      </div>
      <!------------------------------------------------------------------------------------------------------------------------------------->

    </div>

    <div class="mustSaleContainer">
      <div class="mustSale"> پرفروش ترین محصولات </div>
    </div>

    <div class="container mt-5 d-flex justify-content-center">

      <div class="card-container">
        <div class="card " style="background-color: white;">

          <div class="d-flex">
            <p class="mylock">18%</p>
            <p class="mylock2">ویژه</p>
          </div>

          <br><br>
          <img src="../assets/home/9.webp" class=" Height">
          <div class="card-body">
            <p class="card-text" style="text-align: center;"> میز بیلیارد مدل افشین 8 فوت </p>
            <div class="d-flex justify-content-center">
              <p class="mt-1 me-1 d-inline" style="text-align: center;"> تومان </p>
              <h3 class="d-inline" style="text-align: center;">37,800,000</h3>
            </div>
            <p style="text-align: center;text-decoration: line-through;" class="color-gray">46,340,000</p>
          </div>
        </div>

        <div class="card " style="background-color: white;">

          <div class="d-flex">
            <p class="mylock">18%</p>
            <p class="mylock2">ویژه</p>
          </div>

          <br><br>
          <img src="../assets/home/10.webp" class="Height" alt="...">
          <div class="card-body">
            <p class="card-text" style="text-align: center;"> میز بیلیارد مدل افشین 8 فوت </p>
            <div class="d-flex justify-content-center">
              <p class="mt-1 me-1 d-inline" style="text-align: center;"> تومان </p>
              <h3 class="d-inline" style="text-align: center;">37,800,000</h3>
            </div>
            <p style="text-align: center;text-decoration: line-through;" class="color-gray">46,340,000</p>
          </div>
        </div>

        <div class="card " style="background-color: white;">

          <div class="d-flex">
            <p class="mylock">18%</p>
            <p class="mylock2">ویژه</p>
          </div>

          <br><br>
          <img src="../assets/home/11.webp" class="Height" alt="...">
          <div class="card-body">
            <p class="card-text" style="text-align: center;"> میز بیلیارد مدل افشین 8 فوت </p>
            <div class="d-flex justify-content-center">
              <p class="mt-1 me-1 d-inline" style="text-align: center;"> تومان </p>
              <h3 class="d-inline" style="text-align: center;">45,000,000</h3>
            </div>
            <p style="text-align: center;text-decoration: line-through;" class="color-gray">55,880,000</p>
          </div>
        </div>

        <div class="card " style="background-color: white;">

          <div class="d-flex">
            <p class="mylock">18%</p>
            <p class="mylock2">ویژه</p>
          </div>

          <br><br>
          <img src="../assets/home/12.webp" class="Height" alt="...">
          <div class="card-body">
            <p class="card-text" style="text-align: center;"> میز بیلیارد مدل افشین 8 فوت </p>
            <div class="d-flex justify-content-center">
              <p class="mt-1 me-1 d-inline" style="text-align: center;"> تومان </p>
              <h3 class="d-inline" style="text-align: center;">45,000,000</h3>
            </div>
            <p style="text-align: center;text-decoration: line-through;" class="color-gray">55,880,000</p>
          </div>
        </div>

        <div class="card " style="background-color: white;">

          <div class="d-flex">
            <p class="mylock">۱8%</p>
            <p class="mylock2">ویژه</p>
          </div>

          <br><br>
          <img src="../assets/home/13.webp" class="Height" alt="...">
          <div class="card-body">
            <p class="card-text" style="text-align: center;"> میز بیلیارد VGL مدل آرش 8 فوت </p>
            <div class="d-flex justify-content-center">
              <p class="mt-1 me-1 d-inline" style="text-align: center;"> تومان </p>
              <h3 class="d-inline" style="text-align: center;">37,000,000</h3>
            </div>
            <p style="text-align: center;text-decoration: line-through;" class="color-gray">45,250,000</p>
          </div>
        </div>

      </div>
    </div>

    <div class="sportsContainer">

      <div class="pDiamondContainer">
        <div class="DiamondP"> ورزش‌های لوزی </div>
      </div>


      <div class="diamondContainer">

        <div class="flexDiamond">
          <div class="cardDiamond">
            <img src="../assets/home/pingpongLozi.webp" class="imageDiamond">
            <p> پینگ پنگ </p>
          </div>
        </div>

        <div class="flexDiamond">
          <div class="cardDiamond">
            <img src="../assets/home/poolLozi.webp" class="imageDiamond">
            <p> بیلیارد </p>
          </div>
        </div>

        <div class="flexDiamond">
          <div class="cardDiamond">
            <img src="../assets/home/bodyBuldingLozi.webp" class="imageDiamond">
            <p> بدنسازی و فیتنس </p>

          </div>
        </div>

        <div class="flexDiamond">
          <div class="cardDiamond">
            <img src="../assets/home/scateLozi.webp" class="imageDiamond">
            <p> اسکیت </p>
          </div>
        </div>

        <div class="flexDiamond">
          <div class="cardDiamond">
            <img src="../assets/home/footballLozi.webp" class="imageDiamond">
            <p> فوتبال </p>
          </div>
        </div>

      </div>

      <div class="diamondContainer">

        <div class="flexDiamond">
          <div class="cardDiamond">
            <img src="../assets/home/clubLozi.webp" class="imageDiamond">
            <p> ورزشهای‌کلابی </p>
          </div>
        </div>

        <div class="flexDiamond">
          <div class="cardDiamond">
            <img src="../assets/home/badmintonLozi.webp" class="imageDiamond">
            <p> بدمینتون </p>
          </div>
        </div>

        <div class="flexDiamond">
          <div class="cardDiamond">
            <img src="../assets/home/tennisLozi.webp" class="imageDiamond">
            <p> تنیس </p>
          </div>
        </div>

        <div class="flexDiamond">
          <div class="cardDiamond">
            <img src="../assets/home/ballsLozi.webp" class="imageDiamond">
            <p> توپ ورزشی </p>
          </div>
        </div>

      </div>


    </div>

    <div class="whyDiamond">

      <div class="whyDiamondContainer">

        <div class="whyDiamondFlexColumn">

          <div class="Description"> چرا لوزی </div>

          <div class="blockContainer">

            <div class="block1">
              <div class="textBlock">
                فروشگاه <p class="textP"> تخصصی‌ورزشی </p>
              </div>

              <img src="../assets/home/whyDiamond1.png" class="imageBlock">
            </div>


            <div class="block2">
              <div class="textBlock2">
                <p class="textP"> تنوع </p> محصولات
              </div>
              <img src="../assets/home/whyDiamond2.png" class="imageBlock2">
            </div>


            <div class="block3">
              <div class="textBlock3">
                <p class="textP"> کیفیت </p> تضمین‌شده
              </div>
              <img src="../assets/home/whyDiamond3.png" class="imageBlock3">
            </div>


            <div class="block4">
              <div class="textBlock4">
                تحویل <p class="textP"> سریع </p>
              </div>
              <img src="../assets/home/whyDiamond4.png" class="imageBlock4">
            </div>

          </div>

        </div>
      </div>

      <div class="diamondVideoContainer">
        <img src="../assets/home/Lozi-Site-main-pic.webp" class="videoImageWhyDiamond">
        <img src="../assets/home/transparent.png" class="videoBorderWhyDiamond">
        <button class="buttonPlay" @click="videoDiaplay()"><i class="fa fa-play"></i></button>
      </div>

    </div>

    <div class="collectionImageContainer">
      <div class="collectionImage1">
        <img src="../assets/home/tennisPack.webp" class="itemcollectionImage1 ">
      </div>

      <div class="collectionImage2">
        <div class="collectionImageFlex">
          <img src="../assets/home/pingpongPack.webp" class="itemcollectionImage2">
          <img src="../assets/home/tablePingpong.webp" class="itemcollectionImage3">
          <img src="../assets/home/badmintonPack.webp" class="itemcollectionImage4 ">
          <img src="../assets/home/skatePack.webp" class="itemcollectionImage5">
        </div>
      </div>
    </div>

    <div class="ssContainer">


      <div class="scoreContainer">

        <h4 class="scoreTitle"> برترین خریداران لوزی </h4>

        <div class="scoreItem">
          <img src="../assets/home/goldtrophies.jpg" class="trophiesImage1" width="14px" height="21px">
          <p class="nameScore"> اقای هاشمی </p>
          <p class="numberScore"> 1326 امتیاز </p>
        </div>

        <div class="scoreItem">
          <img src="../assets/home/silvertrophies.jpg" class="trophiesImage2" width="13px" height="17px">
          <p class="nameScore"> اقای هاشمی </p>
          <p class="numberScore"> 1326 امتیاز </p>

        </div>

        <div class="scoreItem">
          <img src="../assets/home/bronztrophies.jpg" class="trophiesImage3" width="16px" height="14px">
          <p class="nameScore"> اقای هاشمی </p>
          <p class="numberScore"> 1326 امتیاز </p>

        </div>

        <div class="ellipticScore"> لیدربورد <i class='fas fa-angle-left arrowScore'></i> </div>

      </div>

      <div class="sponsorContainer">

        <div class="sponsorTitle"> بهترین ها ما را انتخاب کردند </div>
        <img src="../assets/home/s1.webp" class="imageSponser">
        <img src="../assets/home/s2.webp" class="imageSponser">
        <img src="../assets/home/s3.webp" class="imageSponser">
        <img src="../assets/home/s4.webp" class="imageSponser">
        <img src="../assets/home/s5.webp" class="imageSponser">
        <img src="../assets/home/s6.webp" class="imageSponser">
        <img src="../assets/home/s7.webp" class="imageSponser">
        <img src="../assets/home/s8.webp" class="imageSponser">


      </div>

    </div>

    <div class="mediaConnectionContainer" style=" margin-bottom: 90px;">

      <button class="mediaItem phone">
        <img src="../assets/home/iconsPhone.png" class="mediaImage">
        <div class="phoneInfo">
          <div style="width: 100%;"> 09195123620 </div>
          <div class="typePhone"> مشاوره </div>
        </div>
      </button>

      <button class="mediaItem phone">
        <img src="../assets/home/iconsPhone.png" class="mediaImage">
        <div class="phoneInfo">
          <div style="width: 100%;"> 02155395255 </div>
          <div class="typePhone"> پشتیبانی </div>
        </div>
      </button>

      <button class="mediaItem mediaApp">
        <img src="../assets/home/iconsTelegram.png" class="mediaImage">
        <div class="MediaExplaintion"> تلگرام لوزی </div>
      </button>

      <button class="mediaItem mediaApp">
        <img src="../assets/home/iconsInstagram.png" class="mediaImage">
        <div class="MediaExplaintion"> اینستاگرام‌لوزی </div>
      </button>

      <button class="mediaItem mediaApp">
        <img src="../assets/home/iconsTwietter.png" class="mediaImage">
        <div class="MediaExplaintion"> توئیتر لوزی </div>
      </button>

      <button class="mediaItem mediaApp">
        <img src="../assets/home/iconsAparat.png" class="mediaImage">
        <div class="MediaExplaintion"> آپارات لوزی </div>
      </button>

      <button class="mediaItem mediaApp">
        <img src="../assets/home/iconsYoutube.png" class="mediaImage">
        <div class="MediaExplaintion"> یوتیوب لوزی </div>
      </button>



    </div>
  </div>

  <div class="videoModalContainer" id="videoLozi" :style="{ display: displayVideoModal }" ref="videoContainer">
    <div class="videoModalFlex">
      <div class="ModalBody">
        <video ref="videoPlayer" id="myVideo" controls class="videoModal">
          <source src="../assets/home/lozi-enamad.mp4" type="video/mp4">
          اگر نمیتوانید فیلم را مشاهده کنید لطفا صفحه را رفرش
        </video>
      </div>
    </div>
  </div>


</template>

<script>

import { ref, inject, reactive, onMounted } from 'vue';

export default {



  setup() {

    const counter = ref(0)

    const animationNames = reactive({ imageName: '', textName: '' })

    const backgroundAnimation = ref("")

    const images = [
      require('../assets/home/0.svg'),
      require('../assets/home/1.svg'),
      require('../assets/home/2.svg'),
      require('../assets/home/3.svg'),
      require('../assets/home/4.svg'),
      require('../assets/home/5.svg'),
      require('../assets/home/6.svg'),
      require('../assets/home/7.svg')
    ]

    const explanations = [
      "جدیدترین محصولات حرفه ای",
      "وسایل و تجهیزات تخصصی",
      "جدیدترین محصولات روز دنیا",
      "برای همه سنین",
      "قهرمان خودت باش",
      "",
      "",
      ""
    ]

    const names = [
      "پینگ پنگ",
      "اسکیت",
      "بدمینتون",
      "تنیس",
      "فوتبال",
      "بیلیارد و",
      "فوتبال ",
      "بدنسازی و"
    ]

    const names2 = [
      "",
      "",
      "",
      "",
      "",
      "اسنوکر",
      "دستی",
      "فیتنس"
    ]

    const percent = [
      '12%',
      '16%',
      '14%',
      '14%',
      '15%',
      '8%',
      '14%',
      '15%'
    ]

    const displayList = reactive([
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none'
    ])

    const isMouseOver = reactive([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ])

    const brightnessValue = inject('brightnessValue');

    const imageSrc = ref(require(`../assets/home/${counter.value}.webp`))

    const currentImage = ref(images[counter.value])

    const numberPerecent = ref(percent[0])

    const name = ref(names[0])

    const name2 = ref(names2[0])

    const explanation = ref(explanations[0])

    const selectButton = ref(0)

    const hDiv = ref(false)

    const hbutton = ref(false)

    const bgcolorBar = ref("")

    const displayHiddenDiv = ref("none")

    const videoPlayer = ref(null);

    const displayVideoModal = ref("")

    const opacityMain = ref("")

    const videoContainer = ref(null)

    var myTimer = setInterval(move, 7000, 1)

    function move(int) {

      counter.value += int;

      counter.value %= 8

      if (counter.value == -1) {
        counter.value = 7
      }


      animationNames.imageName = 'example2'

      animationNames.textName = 'text2'

      backgroundAnimation.value = "backgroundDisappear"

      setTimeout(() => {
        imageSrc.value = require(`../assets/home/${counter.value}.webp`);

        name.value = names[counter.value];

        name2.value = names2[counter.value];

        explanation.value = explanations[counter.value];

        animationNames.imageName = 'example'

        animationNames.textName = 'text'

        backgroundAnimation.value = "backgroundappear"

        numberPerecent.value = percent[counter.value];

        currentImage.value = images[counter.value];



      }, 600);

    }

    function clearTimer(int) {

      clearInterval(myTimer);

      move(int);

      myTimer = setInterval(move, 7000, 1)

    }

    function hoverDiv() {

      hDiv.value = true

      if (selectButton.value != 0) {

        for (let i = 0; i < 9; i++) {

          isMouseOver[i] = false

        }

        isMouseOver[selectButton.value - 1] = true

      }
      bgcolorBar.value = " rgba(16, 16, 16, 0.25)";

      displayHiddenDiv.value = 'block'

    }

    function outDiv() {
      hDiv.value = false
      calculator()
    }

    function hoverButton(int) {

      hbutton.value = true

      for (let i = 0; i < 9; i++) {
        displayList[i] = 'none'
        isMouseOver[i] = false
      }

      selectButton.value = int
      displayList[9 - selectButton.value] = 'flex'
      bgcolorBar.value = " rgba(16, 16, 16, 0.25)";
      displayHiddenDiv.value = 'block'
      isMouseOver[selectButton.value - 1] = true
    }

    function outButton() {

      hbutton.value = false
      calculator()
    }

    function calculator() {
      setTimeout(() => {
        if (!hDiv.value && !hbutton.value) {

          displayHiddenDiv.value = 'none'
          bgcolorBar.value = "";

          for (let i = 0; i < 9; i++) {

            displayList[i] = 'none'
            isMouseOver[i] = false
          }
        }
      }, 20)
    }

    function videoDiaplay() {

      opacityMain.value = '.4';

      displayVideoModal.value = 'inline'

      videoPlayer.value.play();


    }

    const closeVideo = (event) => {

      if (event.target == videoContainer.value) {

        displayVideoModal.value = 'none'

        opacityMain.value = '1';

        videoPlayer.value.pause();

        videoPlayer.value.currentTime = 0;

      }
    }

    onMounted(() => {
      window.onclick = closeVideo;

    });

    

    return {
      videoDiaplay,
      hoverButton,
      outButton,
      outDiv,
      hoverDiv,
      clearTimer,
      brightnessValue,
      imageSrc,
      currentImage,
      name,
      name2,
      explanation,
      animationNames,
      numberPerecent,
      displayList,
      hDiv,
      hbutton,
      isMouseOver,
      bgcolorBar,
      displayHiddenDiv,
      videoPlayer,
      displayVideoModal,
      opacityMain,
      backgroundAnimation,
      videoContainer,
    }
  }
}
</script>
<style src="../assets/home/loziStyle.css"></style>
<style src="../assets/home/loziRes.css"></style>

<!-- npm run serve -->
