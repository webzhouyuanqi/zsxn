var i=0; //现在正显示第几张图片,从0开始
var LIWIDTH=1920;  //每个li的固定宽度
var DURATION=500;   //每次抡博动画持续的时间
var LICOUNT=4;  //li的个数
var ulImgs=document.getElementById("ul-imgs"); //要移动的ul
var ulIdxs=document.getElementById("ul-idxs") //包含小圆点的ul
var lis=ulIdxs.children;    //小圆点的元素列表
console.log(ulIdxs);
//从当前位置移动到任意一个范围内的位置
function moveTo(to){
  //如果用户没有传入要跳到第几张图,就默认跳到当前图的下一张
    if(to==undefined){
        to=i+1;
      }
      if(i==0){ //如果滚动从头开始,在重新加上transition
        if(to>i){
        ulImgs.className="transition";
        }else{
          ulImgs.className="transition";
          ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          setTimeout(() => {
            moveTo(LICOUNT-1);
          }, 100);
        }
      }
      i=to;  //现将标识第几章图片的变量i变为目标位置
      //再用计算ulimgs的margin-left距离
      ulImgs.style.marginLeft=-i*LIWIDTH+"px";
      //先删除所有小圆点的class
      for(var li of lis){
        li.className=""
      }
      console.log(i);
      if(i==LICOUNT){
        i=0;
        //当transition动画播放完之后,才
        setTimeout(function () { 
            ulImgs.className="";  //清掉transition
            ulImgs.style.marginLeft=0;  //将ulimgs拉回0位置
        },DURATION)
    }
  //再给当前小圆点添加class  active
  lis[i].className="active";
}