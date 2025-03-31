<template>

  <button class="shopIcon"><i class='fas fa-shopping-cart'></i></button>
  <p class="loginP1"> سبد خرید </p>

  <button class="searchIcon"><i class="fas fa-search icon"></i></button>
  <p class="loginP2"> جستجو </p>

  <button class="userIcon"><i class="fas fa-user icon"></i></button>
  <p class="loginP3">ورود/عضویت</p>

  <div class="bar" id="bar" :style="{ backgroundColor: bgcolorBar }">
    <div class="buttonsContainer">
      <button class="barObj barMarginStart" @mouseover="hoverButton(1)" @mouseout="outButton()" @click="scrolleDown()"
        :class="{ mouseOnElem: isMouseOver[0] }">
        <router-link style="color: white;" to='/'>
          توپ ورزشی
        </router-link>
      </button>

      <button class="barObj barMarginMid" @mouseover="hoverButton(2)" @mouseout="outButton()" @click="scrolleDown()"
        :class="{ mouseOnElem: isMouseOver[1] }">
        <router-link style="color: white;" to='/'>
          تنیس
        </router-link>
      </button>

      <button class="barObj barMarginMid" @mouseover="hoverButton(3)" @mouseout="outButton()" @click="scrolleDown()"
        :class="{ mouseOnElem: isMouseOver[2] }">
        <router-link style="color: white;" to='/'>
          بدمینتون
        </router-link>
      </button>

      <button class="barObj barMarginMid" @mouseover="hoverButton(4)" @mouseout="outButton()" @click="scrolleDown(330)"
        :class="{ mouseOnElem: isMouseOver[3] }">
        <router-link style="color: white;" to='/clubsports'>
          ورزشهای کلابی
        </router-link>
      </button>

      <button class="barObj barMarginMid" @mouseover="hoverButton(5)" @mouseout="outButton()" @click="scrolleDown()"
        :class="{ mouseOnElem: isMouseOver[4] }">
        <router-link style="color: white;" to='/'>
          فوتبال
        </router-link>
      </button>

      <button class="barObj barMarginMid" @mouseover="hoverButton(6)" @mouseout="outButton()" @click="scrolleDown()"
        :class="{ mouseOnElem: isMouseOver[5] }">
        <router-link style="color: white;" to='/'>
          اسکیت
        </router-link>
      </button>

      <button class="barObj barMarginMid" @mouseover="hoverButton(7)" @mouseout="outButton()" @click="scrolleDown()"
        :class="{ mouseOnElem: isMouseOver[6] }">
        <router-link style="color: white;" to='/'>
          بدنسازی و فیتنس
        </router-link>
      </button>

      <button class="barObj barMarginMid" @mouseover="hoverButton(8)" @mouseout="outButton()" @click="scrolleDown()"
        :class="{ mouseOnElem: isMouseOver[7] }">
        <router-link style="color: white;" to='/'>
          بیلیارد
        </router-link>
      </button>

      <button class="barObj barMarginEnd" @mouseover="hoverButton(9)" @mouseout="outButton()" @click="scrolleDown(433)"
        :class="{ mouseOnElem: isMouseOver[8] }">
        <router-link style="color: white;" to='/pingpong'>
          پینگ پنگ
        </router-link>
      </button>
    </div>

    <div class="hidden" id="hiddenDiv" @mouseover="hoverDiv()" @mouseleave="outDiv()"
      :style="{ display: displayHiddenDiv }">

      <div class="sportContainer" :style="{ display: displayList[0] }">
        <div class="pingpongObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/pingpong'>
                چوب راکت
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                چوب راکت باترفلای
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                چوب راکت کورنلیو
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                چوب راکت جوو
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                چوب راکت تیبهار
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                چوب راکت دونیک
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                چوب راکت نیتاکو
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                چوب راکت یینهه
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                چوب راکت ویکتاس
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                چوب راکت استیگا
              </router-link>
            </li>
          </ul>
          <br><br>
        </div>

        <div class="pingpongObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                رویه راکت
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                رویه راکت باترفلای
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                رویه راکت کورنلیو
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                رویه راکت جوو
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                رویه راکت تیبهار
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                رویه راکت دونیک
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                رویه راکت نیتاکو
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                رویه راکت یینهه
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                رویه راکت ویکتاس
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                رویه راکت استیگا
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                رویه سایر برندها
              </router-link>
            </li>
          </ul>
        </div>

        <div class="pingpongObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                میز پینگ پنگ
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                میز پینگ پنگ خانگی
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                میز پینگ پنگ حرفه‌ای
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                میز پینگ پنگ شیشه‌ای
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                تور و گیره پینگ پنگ
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کاور میز پینگ پنگ
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                پارتیشن پینگ پنگ
              </router-link>
            </li>
          </ul>
          <ul style="margin-top: 30%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ پینگ پنگ
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ مسابقه
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ تمرینی
              </router-link>
            </li>
          </ul>
        </div>

        <div class="pingpongObj">
          <ul>
            <li class="headList">
              <router-link class="hoverOrange" to='/' @click="cliclLi">
                پوشاک
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کفش‌پینگ‌پنگ
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                تیشرت‌و‌شلوارک
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                تونیک‌زنانه
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                سایر پوشاک
              </router-link>
            </li>
          </ul>
          <ul style="margin-top: 30%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌پینگ‌پنگ
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                ترکیب‌های‌پیشنهادی
              </router-link>
            </li>
          </ul>
        </div>

        <div class="pingpongObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم جانبی پینگ پنگ
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                چسب راکت
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                اسپری و ابر تمیز کننده
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                ریترن بورد
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                دستگاه توپ انداز
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                دستگاه سایه زن
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کیف راکت و کوله
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                حوله
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                آماده‌سازی‌راکت(چسباندن‌رویه)
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                گریپ
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                نوار دور راکت
              </router-link>
            </li>
            <li class="liPingpong" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                سایر لوازم جانبی
              </router-link>
            </li>
          </ul>

        </div>

        <div class="imageContainerBar">
          <img src="../assets/home/pingpong.webp" alt="" class="imageBar">
        </div>

      </div>

      <div class="sportContainer" :style="{ display: displayList[1] }">
        <div class="poolObj">
          <ul>
            <li class="headList">
              <router-link class="hoverOrange" to='/' @click="cliclLi">
                میز بیلیارد
              </router-link>
            </li>
            <li class="liPool">
              <router-link class="hoverOrange" to='/' @click="cliclLi">
                میز بیلیارد ایرانی
              </router-link>
            </li>
            <li class="liPool">
              <router-link class="hoverOrange" to='/' @click="cliclLi">
                میز بیلیارد خارجی
              </router-link>
            </li>
          </ul>
          <br><br>
        </div>

        <div class="poolObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                میز اسنوکر
              </router-link>
            </li>
          </ul>
        </div>

        <div class="poolObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                چوب بیلیارد و اسنوکر
              </router-link>
            </li>
            <li class="liPool" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                چوب بیلیارد
              </router-link>
            </li>
            <li class="liPool" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                چوب اسنوکر
              </router-link>
            </li>
            <li class="liPool" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                اکستنشن ، رست و لوازم
              </router-link>
            </li>
            <li class="liPool" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                سرچوب و لوازم
              </router-link>
            </li>
            <li class="liPool" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                جاچوبی وکس
              </router-link>
            </li>

          </ul>
        </div>

        <div class="poolObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ بیلیارد و اسنوکر
              </router-link>
            </li>
            <li class="liPool" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ بیلیارد(شار)
              </router-link>
            </li>
            <li class="liPool" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ اسنوکر(شار)
              </router-link>
            </li>
            <li class="liPool" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ تکی
              </router-link>
            </li>

            <li class="liPool" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم توپ
              </router-link>
            </li>
          </ul>

        </div>

        <div class="poolObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم جانبی بیلیارد
              </router-link>
            </li>
            <li class="liPool" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                گچ و لوازم
              </router-link>
            </li>
            <li class="liPool" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                دستکش
              </router-link>
            </li>
            <li class="liPool" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                پارچه ، پاکت ، باند و لوازم
              </router-link>
            </li>
            <li class="liPool" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                سایر لوازم جانبی
              </router-link>
            </li>
          </ul>
          <br><br>
        </div>

        <div class="imageContainerBar">
          <img src="../assets/home/pool.webp" alt="" style="margin-top: 15px;" class="imageBar">
        </div>

      </div>

      <div class="sportContainer" :style="{ display: displayList[2] }">

        <div class="bodybuildingObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                تردمیل
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                تردمیل آبی
              </router-link>
            </li>
          </ul>

          <ul style="margin-top: 30%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                دوچرخه ثابت
              </router-link>
            </li>
          </ul>

          <ul style="margin-top: 30%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                اسکی فضایی
              </router-link>
            </li>
          </ul>
        </div>

        <div class="bodybuildingObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                دستگاه های بدنسازی
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                دستگاه پرس سینه
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                دستگاه بازو و سرشانه
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                دستگاه زیر بغل
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                دستگاه شکم و پهلو
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                دستگاه پایین تنه
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                دستگاه چندکاره
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                نیمکت
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                دستگاه بدنسازی آبی
              </router-link>
            </li>
          </ul>
        </div>

        <div class="bodybuildingObj" style="text-align: right;">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم‌جانبی‌بدنسازی
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                ساک ورزشی
              </router-link>
            </li>
          </ul>

          <ul style="margin-top: 30%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم فیتنس
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم TRX
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم CX
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi"> <router-link class="hoverOrange" to='/'>
                دمبل،وزنه،هالتر
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi"> <router-link class="hoverOrange" to='/'>
                لوازم ورزشی و سلامت
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                سایر لوازم فیتنس
              </router-link>
            </li>
          </ul>

        </div>

        <div class="bodybuildingObj">

          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم کراس‌فیت
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                سازه های کراس‌فیت
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم جانبی سازه کراس‌فیت
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                سایز لوازم جانبی کراس‌فیت
              </router-link>
            </li>
          </ul>

          <ul style="margin-top: 30%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                ورزشهای معلق
              </router-link>
            </li>
          </ul>

          <ul style="margin-top: 30%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                یوگا،پیلاتس‌و‌ایروبیک
              </router-link>
            </li>
          </ul>
        </div>

        <div class="bodybuildingObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم ماساژ
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                صندلی ماساژور
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                ماساژور پا
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                ماساژور صورت
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                تخت ماساژ
              </router-link>
            </li>
            <li class="liBodyBulding" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                سایز لوازم ماساژ
              </router-link>
            </li>
          </ul>
        </div>

        <div class="imageContainerBar">
          <img src="../assets/home/Bodybuilding.webp" alt="" class="imageBar">
        </div>
      </div>

      <div class="sportContainer" :style="{ display: displayList[3] }">
        <div class="skateObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                اسکیت کفشی
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کفش‌اسکیت‌رولربلید
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کفش‌اسکیت‌رکسا
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کفش‌اسکیت‌روسز
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کفش‌اسکیت‌فلایینگ‌ایگل
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کفش‌اسکیت‌سبا
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کفش‌اسکیت‌لبدا
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کفش‌اسکیت‌فری‌استایل
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                ‌کفش‌اسکیت‌رولکن
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کفش‌اسکیت‌فیلا
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کفش‌اسکیت‌سایر‌ برندها
              </router-link>
            </li>
          </ul>
          <br><br>
        </div>

        <div class="skateObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                پوشاک‌و‌ لوازم‌جانبی
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم‌ایمنی‌اسکیت
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کلاه‌ایمنی‌اسکیت
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کیف‌و کاور‌اسکیت
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                استرچ‌و لباس‌اسکیت
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                سایر لوازم‌جانبی
              </router-link>
            </li>
          </ul>
          <ul style="margin-top: 10%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                اسکیت‌برد
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                اسکیت‌برد بزرگسال
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                اسکیت‌برد برقی
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لانگ‌برد
              </router-link>
            </li>
          </ul>
          <ul style="margin-top: 10%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم‌جانبی‌اسکیت‌برد
              </router-link>
            </li>
          </ul>
        </div>

        <div class="skateObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                اجزای‌اسکیت
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                بوت‌‌اسکیت
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                فریم‌اسکیت
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                بلبرینگ‌اسکیت
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                چرخ‌اسکیت
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                سایر اجزای‌اسکیت
              </router-link>
            </li>
          </ul>
          <ul style="margin-top: 10%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                اسکوتر
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                اسکوتر‌ معمولی
              </router-link>
            </li>
            <li class="liSkate" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                اسکوتر برقی
              </router-link>
            </li>
          </ul>
        </div>

        <div class="imageContainerBar">
          <img src="../assets/home/skate.webp" alt="" class="imageBar">
        </div>
      </div>

      <div class="sportContainer" :style="{ display: displayList[4] }">
        <div class="footballObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                پوشاک‌فوتبال
              </router-link>
            </li>
            <li class="liFootball" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لباس‌فوتبال‌بزرگسالان
              </router-link>
            </li>
            <li class="liFootball" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لباس‌‌فوتبال‌بچگانه
              </router-link>
            </li>
            <li class="liFootball" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                گرمکن‌و‌شلوار‌ فوتبال
              </router-link>
            </li>
            <li class="liFootball" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لباس‌دروازه‌بانی‌فوتبال
              </router-link>
            </li>
            <li class="liFootball" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                جوراب‌فوتبال
              </router-link>
            </li>
          </ul>
          <br><br>
        </div>

        <div class="footballObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کفش
              </router-link>
            </li>
            <li class="liFootball" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کفش‌فوتبال
              </router-link>
            </li>
            <li class="liFootball" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کفش‌فوتسال
              </router-link>
            </li>
          </ul>
          <ul style="margin-top: 8%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ‌فوتبال
              </router-link>
            </li>
          </ul>
          <ul style="margin-top: 8%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم‌دروازه‌بانی‌فوتبال
              </router-link>
            </li>
            <li class="liFootball" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                دروازه‌فوتبال
              </router-link>
            </li>
          </ul>
        </div>

        <div class="footballObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم‌تمرینی‌فوتبال
              </router-link>
            </li>
          </ul>
          <ul style="margin-top: 17%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم‌جانبی‌فوتبال
              </router-link>
            </li>
          </ul>
          <ul style="margin-top: 17%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ‌فوتسال
              </router-link>
            </li>
          </ul>
        </div>

        <div class="imageContainerBar">
          <img src="../assets/home/football.webp" alt="" class="imageBar">
        </div>
      </div>

      <div class="sportContainer" :style="{ display: displayList[5] }">
        <div class="clubSportsObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                فوتبال‌دستی
              </router-link>
            </li>
            <li class="liClubSports" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم‌جانبی‌فوتبال‌دستی
              </router-link>
            </li>
          </ul>
          <ul style="margin-top: 12%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                ایرهاکی
              </router-link>
            </li>
            <li class="liClubSports" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم‌جانبی‌ایرهاکی
              </router-link>
            </li>
          </ul>
          <ul style="margin-top: 12%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                تخته‌و‌حلقه‌بسکتبال
              </router-link>
            </li>
          </ul>
          <br><br>
        </div>

        <div class="clubSportsObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                دارت
              </router-link>
            </li>
            <li class="liClubSports" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                دارت‌‌سوزنی
              </router-link>
            </li>
            <li class="liClubSports" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                دارت‌آهنربایی
              </router-link>
            </li>
            <li class="liClubSports" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                تیر‌ دارت
              </router-link>
            </li>
            <li class="liClubSports" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم‌جانبی‌دارت
              </router-link>
            </li>
            <li class="liClubSports" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                پوشاک‌دارت
              </router-link>
            </li>
          </ul>
          <ul style="margin-top: 10%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                هنداسپید و ماز
              </router-link>
            </li>
          </ul>
        </div>

        <div class="clubSportsObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کفپوش‌ورزشی
              </router-link>
            </li>
          </ul>
          <ul style="margin-top: 20%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                سایر‌ ورزشهای‌کلابی
              </router-link>
            </li>
          </ul>
          <ul style="margin-top: 20%;">
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                بولینگ‌و‌تجهیزات
              </router-link>
            </li>
          </ul>
        </div>

        <div class="imageContainerBar">
          <img src="../assets/home/clubSports.webp" alt="" class="imageBar">
        </div>
      </div>

      <div class="sportContainer" :style="{ display: displayList[6] }">
        <div class="badmintonObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌بدمینتون
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌یونکس
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌فلای‌پاور
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌کاوازاکی
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌مکس‌پاور
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌ونسون
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌پرگان
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌ویش
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌ویکتور
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت سایر‌برندها
              </router-link>
            </li>
          </ul>
        </div>

        <div class="badmintonObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ‌بدمینتون
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ‌پلاستیکی
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ‌پری
              </router-link>
            </li>
          </ul>
        </div>

        <div class="badmintonObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                پوشاک‌بدمینتون
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                تی‌شرت‌و‌شلوارک‌بدمینتون
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کفش‌بدمینتون
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                سایر‌پوشاک‌بدمینتون
              </router-link>
            </li>
          </ul>
        </div>

        <div class="badmintonObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                زه‌راکت‌بدمینتون
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                زه‌رولی
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                زه‌بسته‌ای
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                خدمات‌زه‌کشی
              </router-link>
            </li>
          </ul>
        </div>

        <div class="badmintonObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم‌جانبی‌بدمینتون
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                گریپ
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کیف‌و‌ساک
              </router-link>
            </li>
            <li class="liBadminton" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                سایر‌ لوازم‌جانبی
              </router-link>
            </li>
          </ul>
        </div>

        <div class="imageContainerBar">
          <img src="../assets/home/badminton.webp" alt="" class="imageBar">
        </div>

      </div>

      <div class="sportContainer" :style="{ display: displayList[7] }">
        <div class="tennisObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌تنیس
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌تنیس‌ویلسون
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌تنیس‌یونکس
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌تنیس‌هد
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌تنیس‌تکنی‌فایبر
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌تنیس‌بابولات
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌تنیس‌دایادم
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                راکت‌تنیس‌پدل
              </router-link>
            </li>
          </ul>
        </div>

        <div class="tennisObj">
          <ul>
            <li class="headList " @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                پوشاک‌تنیس
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                تیشرت‌تنیس
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                شورت‌و‌شلوارک‌تنیس
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کفش‌تنیس
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                جوراب‌تنیس
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                سایر‌پوشاک‌تنیس
              </router-link>
            </li>
          </ul>
        </div>

        <div class="tennisObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ‌تنیس
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ‌تنیس‌بچگانه
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ‌تنیس‌تمرینی
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ‌تنیس‌مسابقه‌ای
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ‌پدل
              </router-link>
            </li>
          </ul>
        </div>

        <div class="tennisObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                زه‌تنیس
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                زه‌رولی‌تنیس
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                زه‌بسته‌ای‌تنیس
              </router-link>
            </li>
          </ul>
        </div>

        <div class="tennisObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم‌جانبی‌تنیس
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                گریپ‌راکت‌تنیس
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                سبد‌توپ‌تنیس
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                ضربه‌گیر‌ راکت‌تنیس
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کیف‌و‌ساک‌تنیس
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                کیف‌و‌ساک‌پدل
              </router-link>
            </li>
            <li class="liTennis" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                سایر‌لوازم‌تنیس
              </router-link>
            </li>
          </ul>
        </div>

        <div class="imageContainerBar">
          <img src="../assets/home/tennis.webp" alt="" class="imageBar">
        </div>

      </div>

      <div class="sportContainer" :style="{ display: displayList[8] }">
        <div class="sportBallObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ‌بسکتبال
              </router-link>
            </li>
          </ul>
          <br><br><br><br><br><br><br><br>
        </div>

        <div class="sportBallObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ‌والیبال
              </router-link>
            </li>
          </ul>
        </div>

        <div class="sportBallObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                توپ‌هندبال
              </router-link>
            </li>
          </ul>
        </div>

        <div class="sportBallObj">
          <ul>
            <li class="headList" @click="cliclLi">
              <router-link class="hoverOrange" to='/'>
                لوازم‌جانبی‌توپ‌ورزشی
              </router-link>
            </li>
          </ul>
        </div>

        <div class="imageContainerBar">
          <img src="../assets/home/sportBalls.webp" alt="" class="imageBar">
        </div>

      </div>

    </div>

  </div>

  <img src="../assets/home/lozi-logo.png" class="lozi-image">

</template>

<script>

import { ref, reactive, inject } from 'vue';

export default {
  setup() {

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

    const setBrightness = inject('setBrightness');

    const selectButton = ref(0)

    const hDiv = ref(false)

    const hbutton = ref(false)

    const bgcolorBar = ref("")

    const displayHiddenDiv = ref("none")

    function changeBrightness(value) {
      setBrightness(value);
    }

    function hoverDiv() {

      const mediaQuery = window.matchMedia('(max-width: 992px)');

      if (mediaQuery.matches) {
        return
      }
      hDiv.value = true

      if (selectButton.value != 0) {

        for (let i = 0; i < 9; i++) {

          isMouseOver[i] = false

        }

        isMouseOver[selectButton.value - 1] = true

      }
      bgcolorBar.value = " rgba(16, 16, 16, 0.25)";

      displayHiddenDiv.value = 'block'

      changeBrightness('brightness(0.5)');

    }

    function outDiv() {
      hDiv.value = false
      calculator()
    }

    function hoverButton(int) {

      const mediaQuery = window.matchMedia('(max-width: 992px)');

      if (mediaQuery.matches) {
        return
      }


      hbutton.value = true

      for (let i = 0; i < 9; i++) {
        displayList[i] = 'none'
        isMouseOver[i] = false
      }

      selectButton.value = int
      displayList[9 - selectButton.value] = 'flex'
      bgcolorBar.value = " rgba(16, 16, 16, 0.25)";

      setBrightness('brightness(0.5)');

      displayHiddenDiv.value = 'block'
      isMouseOver[selectButton.value - 1] = true
    }

    function outButton() {

      hbutton.value = false
      calculator()
    }

    function calculator() {

      const mediaQuery = window.matchMedia('(max-width: 992px)');

      if (mediaQuery.matches) {
        return
      }

      setTimeout(() => {
        if (!hDiv.value && !hbutton.value) {

          displayHiddenDiv.value = 'none'

          bgcolorBar.value = "";

          setBrightness('brightness(1)');

          for (let i = 0; i < 9; i++) {

            displayList[i] = 'none'

            isMouseOver[i] = false
          }
        }
      }, 20)
    }

    function scrolleDown(scrollAmount) {
      window.scrollBy({ top: scrollAmount, behavior: 'smooth' });

    }

    function cliclLi() {

      for (let i = 0; i < 9; i++) {

        displayList[i] = 'none'

        isMouseOver[i] = false
      }
    }

    return {
      displayList,
      displayHiddenDiv,
      hDiv,
      hbutton,
      isMouseOver,
      bgcolorBar,
      hoverButton,
      outButton,
      outDiv,
      hoverDiv,
      changeBrightness,
      scrolleDown,
      cliclLi
    }
  }
}
</script>

<style src="../assets/home/loziRes.css"></style>
<style src="../assets/home/loziStyle.css"></style>
