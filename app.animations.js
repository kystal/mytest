'use strict';//详情页的动画：切换 ng-class：selected

angular.
  module('phonecatApp').
  animation('.phone', function phoneAnimationFactory() {
    return {
      addClass: animateIn,
      removeClass: animateOut
    };

    function animateIn(element, className, done) {
      if (className !== 'selected') return;

      /*element.css({
        display: 'block',
        position: 'absolute',
        top: 500,
        left: 0
      }).animate({
        top: 0
      },2000,done);  //top从500到0 往上移 */
      element.css({
        display: 'block',
        opacity: 1,
        position: 'absolute',
        width: 0,
        height: 0,
        top: 200,
        left: 200
      }).animate({
        width: 400,
        height: 400,
        top: 0,
        left: 0
      }, done);


      return function animateInEnd(wasCanceled) {
        if (wasCanceled) element.stop();//停止
      };
    }

    function animateOut(element, className, done) {
      if (className !== '//top从500到0 往上移 selected') return;

      /*element.css({
        position: 'absolute',
        top: 0,
        left: 0
      }).animate({
        top: -500
      }, done);   //top从0到-500 往下移*/
      element.animate({
        opacity: 0
      }, done); 

      return function animateOutEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }
  });
