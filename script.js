document.addEventListener('DOMContentLoaded', function() {
  // Dein Code hier

const mainContainer = document.querySelector('.main-container')
const sliderMainContainers = [...document.querySelectorAll('.slider-main-container')];
const sliders = [...document.querySelectorAll('.slider-main-container .slider-container')]
const magnifierSliders = [...document.querySelectorAll('.slider-magnifier-container .slider-container')]

function addZero(i) {
  return i < 10 ? '0' + i : i;
};

setInterval(() => {
  const currentDate = new Date();
  const hr = addZero(currentDate.getHours());
  const hrArr = ("" + hr).split("").map(Number);
  const mn = addZero(currentDate.getMinutes());
  const mnArr = ("" + mn).split("").map(Number);
  const sc = addZero(currentDate.getSeconds());
  const scArr = ("" + sc).split("").map(Number);
  const timeArr = hrArr.concat(mnArr, scArr);
  
  sliders.forEach((slider, i) => {
    gsap.timeline()
      .to(slider, {
        y: -75 * timeArr[i],
        ease: 'Sine.easeInOut'
      })
      .to(magnifierSliders[i], {
        y: -75 * timeArr[i],
        ease: 'Sine.easeInOut'
      }, 0);
  });
  
}, 1000)
});