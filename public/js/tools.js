
import Swiper from 'swiper'

function seckill(time){
  // time 转入24制的时间 比如： 现在时间15.00 秒杀时间16.00 只需传入 “16.00” 即可
  let res = time.split(".")
  let date = new Date();
  let curH = date.getHours();
  let curM = date.getMinutes();
  let curS = date.getSeconds();
  let mm = (parseFloat(res[1]) * (60 * 1000)) - (curM * (60 * 1000)) ;  // (60 * 1000) 一分钟
  let hh = (parseFloat(res[0]) - curH) * (3600 * 1000); // (3600 * 1000) 一小时
  return date.getTime() + hh + mm - (curS * 1000)
}
function countDown(result,el) {
  let date = new Date();
  let curTime = date.getTime();
  if(curTime >= result) {
    return;
  }
  curTime = result - curTime ;
  let hh = parseInt(curTime / (3600 * 1000));
  let h = curTime - (hh * (3600 * 1000))
  let mm = parseInt(h / (60 * 1000));
  let m = h - (mm * (60 * 1000));
  let ss = parseInt(m /  1000);
  el[0].innerHTML = hh.toString().padStart(2,'0');
  el[1].innerHTML = mm.toString().padStart(2,'0');
  el[2].innerHTML = ss.toString().padStart(2,'0');
}


function swiperInstance(el,config){
  return new Swiper(el,config)
}

export {
  seckill,countDown,swiperInstance
}
