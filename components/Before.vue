<template>
  <div class="slider-wrapper">
    <div class="wrapper">
      <span id="before" class="btn"
        >Natura <br />
        <span>Clear</span>
      </span>

      <div class="gallery">
        <div class="gallery__resize">
          <img src="~/assets/img/BW.jpg" alt="" class="img img-before" />
        </div>
        <img src="~/assets/img/b1.png" alt="" class="img img-after" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const gallery = document.querySelector('.gallery')
  const galleryResize = document.querySelector('.gallery__resize')
  const before = document.querySelector('#before')
  const after = document.querySelector('#after')

  gallery.addEventListener('mousemove', (event) => {
    let x = event.offsetX
    galleryResize.style.width = x + 'px'
    galleryResize.classList.remove('tr')
  })
  gallery.addEventListener('mouseleave', () => {
    galleryResize.classList.add('tr')
    galleryResize.style.width = '50%'
  })
})
</script>

<style scoped>
.btn {
  font-family: 'Avenir Book';
  font-size: 14px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.btn span {
  font-size: 24px;
  font-family: 'Avenir Book';
  font: normal normal medium 24px/33px Avenir;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.img-after {
  width: 95% !important;
}
.slider-wrapper {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.wrapper,
.gallery,
.img {
  height: 100%;
  margin: 0;
  padding: 0;
}
.wrapper {
  position: relative;
}
.gallery {
  position: relative;
  display: flex;
  z-index: 1;
  flex-direction: column;
}
.img {
  min-width: 100%;
  display: block;
  cursor: pointer;
}
.gallery__resize,
.gallery__resize:after {
  position: absolute;
  top: 0;
  cursor: pointer;
  height: 100%;
}
.gallery__resize {
  left: 0;
  width: 50%;
  overflow: hidden;
}
.tr {
  transition: 0.6s;
}
.gallery__resize:after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  right: 0;
  z-index: 20;
}
#before {
  position: absolute;
  z-index: 100;
  padding: 10px 20px;
  bottom: -30px;
  text-align: left;
  transform: translateY(-50%);
  cursor: pointer;
  color: #fff;
  border-radius: 2px;
  right: 10px;
}

@media (max-width: 768px) {
  #before {
    font-size: 1rem;
    padding: 8px 16px;
  }

  .gallery {
    width: 350px;
  }
  .gallery__resize {
    width: 50%;
  }
  img {
    width: 350px;
  }
}
</style>
