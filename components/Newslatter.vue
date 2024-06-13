<template>
  <footer id="footer1">
    <!--.sect20-->
    <div class="sect30">
      <div class="standard_center1">
        <div class="grid">
          <div class="s s1">
            <div class="bos"></div>
          </div>
          <div class="s s2">
            <form id="form_mail_abonelik" action="" method="POST">
              <input type="hidden" name="router" value="mail_abonelik" />
              <div class="grid2">
                <div class="grid2s s1">
                  <input type="email" name="email" placeholder="email" />
                </div>
                <div class="grid2s s2">
                  <button>Contact Us</button>
                  <img class="loading" src="" alt="" />
                </div>
              </div>
            </form>
            <div class="text1">
              We will never share your email address & you can opt out at any
              time, we promise.
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--.sect30-->
    <div class="sect40">
      <div class="center">
        <div class="grid">
          <div class="s s1">
            <a href="#">
              <img src="~/assets/img/natura_onecoat.jpg" alt="" />
            </a>
          </div>
          <div class="s s2">
            <div class="grid2">
              <div class="grid2s">
                <div class="navtitle"></div>
                <div class="list">
                  <div><a href="#">We are?</a></div>
                  <div><a href="#">We are?</a></div>
                  <div><a href="#">We are?</a></div>
                </div>
              </div>
              <div class="grid2s">
                <div class="navtitle"></div>
                <div class="list">
                  <div><a href="#">We are?</a></div>
                  <div><a href="#">We are?</a></div>
                  <div><a href="#">We are?</a></div>
                </div>
              </div>
              <div class="grid2s">
                <div class="navtitle"></div>
                <div class="list">
                  <div><a href="#">We are?</a></div>
                  <div><a href="#">We are?</a></div>
                  <div><a href="#">We are?</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--.sect40-->
    <div class="standard_center1">
      <div class="sect50">
        <div class="icons">
          <a
            href="https://www.instagram.com/kollektmagofficial/"
            target="_blank"
            ><img src="~/assets/img/in.png"
          /></a>
          <a
            href="https://www.youtube.com/channel/UCRrxYuHiH-6KvvoYuN_VKxA"
            target="_blank"
            ><img src="~/assets/img/instagram.png"
          /></a>
          <a href="mailto:info@kollektmag.com" target="_blank"
            ><img src="~/assets/img/in.png"
          /></a>
          <a
            href="https://www.linkedin.com/company/kollekt-mag-official/"
            target="_blank"
            ><img src="~/assets/img/in.png"
          /></a>
          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2FKollektMag"
            target="_blank"
            ><img src="~/assets/img/in.png"
          /></a>
          <a href="https://www.facebook.com/kollektmedya" target="_blank"
            ><img src="~/assets/img/in.png"
          /></a>
          <!--https://twitter.com/i/flow/login?redirect_after_login=%2FKollektMag-->
        </div>
        <div class="text1">
          We will never share your email address & you can opt out at any time,
          we promise.
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.center {
  width: 1200px;
  max-width: 96%;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: black;
}

#footer1 {
  margin: 70px 0 0 0;
}
#footer1 .sect30 {
  margin: 40px 0 0 0;
}
#footer1 .sect30 .grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}
#footer1 .sect30 .grid .s {
}
#footer1 .sect30 .grid .s.s1 {
}
#footer1 .sect30 .grid .s.s1 .bos {
  height: 50px;
  background: #272727;
}
#footer1 .sect30 .grid .s.s2 {
}
#footer1 .sect30 .grid .s.s2 form {
}
#footer1 .sect30 .grid .s.s2 form .grid2 {
  display: grid;
  grid-template-columns: 3fr 1fr;
}
#footer1 .sect30 .grid .s.s2 form .grid2s {
}
#footer1 .sect30 .grid .s.s2 form .grid2s.s1 {
}
#footer1 .sect30 .grid .s.s2 form .grid2s.s1 input {
  display: block;
  width: 100%;
  height: 50px;
  padding: 0 15px;
  background: #fff;
  box-sizing: border-box;
  border: 1px solid #272727;
}
#footer1 .sect30 .grid .s.s2 form .grid2s.s2 {
  text-align: center;
}
#footer1 .sect30 .grid .s.s2 form .grid2s.s2 button {
  display: block;
  width: 100%;
  height: 50px;
  background: #272727;
  border: none;
  text-align: center;
  color: #fff;
  font-family: 'poppins_light';
  font-size: 1rem;
}
#footer1 .sect30 .grid .s.s2 form .grid2s.s2 img.loading {
  display: none;
  width: auto;
  height: 30px;
  margin: 10px;
}
#footer1 .sect30 .grid .s.s2 .text1 {
  margin: 5px 0 0 0;
  font-size: 0.9rem;
}

#footer1 .sect40 {
  margin: 50px 0 0 0;
}
#footer1 .sect40 .grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}
#footer1 .sect40 .grid .s {
}
#footer1 .sect40 .grid .s.s1 {
  align-self: end;
}
#footer1 .sect40 .grid .s.s1 a {
}
#footer1 .sect40 .grid .s.s1 a img {
  width: 200px;
  height: auto;
}
#footer1 .sect40 .grid .s.s2 {
  padding: 0 0 40px 0;
}
#footer1 .sect40 .grid2 {
  max-width: 100%;
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 30px;
}
#footer1 .sect40 .grid2s {
}
#footer1 .sect40 .grid2s .navtitle {
  margin: 0 0 10px 0;
  font-family: 'avenir_medium';
  font-size: 1.2rem;
}
#footer1 .sect40 .grid2s .list {
}
#footer1 .sect40 .grid2s .list div {
}
#footer1 .sect40 .grid2s .list div a {
}

#footer1 .sect50 {
  margin: 50px 0 0 0;
  padding: 40px 0 40px 0;
  color: #000;
  text-align: center;
}
#footer1 .sect50 a {
  color: #fff;
}
#footer1 .sect50 .text1 {
  font-size: 0.9rem;
}
#footer1 .sect50 .icons {
  margin: 10px 0 0 0;
  font-size: 1.5rem;
}
#footer1 .sect50 .icons a {
  margin: 0 5px;
}
@media only screen and (max-width: 1200px) {
  #footer1 .sect20 .grid .s.s1 {
    grid-area: s1;
    padding: 0;
  }
  #footer1 .sect20 .grid .s.s2 {
    grid-area: s2;
  }
  #footer1 .sect20 .grid .s.s3 {
    grid-area: s3;
    padding: 0;
  }
  #footer1 .sect20 .grid .s.s4 {
    grid-area: s4;
  }
  #footer1 .sect20 .grid .s.s5 {
    grid-area: s5;
    padding: 0;
  }
  #footer1 .sect20 .grid .s.s6 {
    grid-area: s6;
  }

  #footer1 .sect30 .grid {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  #footer1 .sect30 .grid .s.s1 .bos {
    height: 10px;
  }

  #footer1 .sect40 {
    margin: 50px 0 0 0;
  }
  #footer1 .sect40 .grid {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
  #footer1 .sect40 .grid .s.s2 {
    padding: 0;
  }
  #footer1 .sect40 .grid2 {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
}
@media only screen and (max-width: 900px) {
  #footer1 .sect20 {
    font-size: 1.1rem;
  }
  #footer1 .sect20 .grid {
    grid-column-gap: 20px;
    grid-row-gap: 8px;
  }
  #footer1 .sect20 .grid .s .iconlu1 {
    font-size: 1.2rem;
  }
  #footer1 .sect20 .grid .s .iconlu1 table tr td:nth-of-type(2) {
    padding: 0 0 0 5px;
  }

  #footer1 .sect40 .grid2 {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
    text-align: center;
  }
  #footer1 .sect40 .grid .s.s1 {
    text-align: center;
  }
  #footer1 .sect40 .grid .s.s1 a img {
    width: 150px;
  }
  #footer1 .sect40 .grid2s .navtitle {
    margin: 0 0 5px 0;
  }
}
@media only screen and (max-width: 700px) {
  #footer1 .sect20 .grid {
    grid-template-columns: 1fr;
    grid-row-gap: 5px;
    grid-template-areas: 's1' 's3' 's5' 's2' 's4' 's6';
  }
  #footer1 .sect20 .grid .s.s2 {
    padding: 30px 0 0 0;
  }
}
@media only screen and (max-width: 600px) {
  #footer1 .sect30 .grid .s.s2 form .grid2 {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
