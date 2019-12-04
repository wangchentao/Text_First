<template>
<div id="particles-js-container">
  <div id="particles-js"></div>
</div>
</template>

<script>
export default {
  name: '',

  data() {
    return {
      pJS: null
    }
  },
  mounted() {
    this.renderBg()
  },
  methods: {
    launchParticlesJS(tag_id, params) {
      var _this = this

      var canvas_el = document.querySelector('#' + tag_id + ' > canvas');

      /* particles.js variables with default values */
      _this.pJS = {
        canvas: {
          el: canvas_el,
          w: canvas_el.offsetWidth,
          h: canvas_el.offsetHeight
        },
        particles: {
          color: '#fff',
          shape: 'circle',
          opacity: 1,
          size: 2.5,
          size_random: true,
          nb: 200,
          line_linked: {
            enable_auto: true,
            distance: 100,
            color: '#fff',
            opacity: 1,
            width: 1,
            condensed_mode: {
              enable: true,
              rotateX: 65000,
              rotateY: 65000
            }
          },
          anim: {
            enable: true,
            speed: 1
          },
          array: []
        },
        interactivity: {
          enable: true,
          mouse: {
            distance: 100
          },
          detect_on: 'canvas',
          mode: 'grab',
          line_linked: {
            opacity: 1
          },
          events: {
            onclick: {
              enable: true,
              mode: 'push',
              nb: 4
            }
          }
        },
        retina_detect: false,
        fn: {
          vendors: {
            interactivity: {}
          }
        }
      };

      /* params settings */
      if (params) {
        if (params.particles) {
          var paramsForParticles = params.particles;
          if (paramsForParticles.color) _this.pJS.particles.color = paramsForParticles.color;
          if (paramsForParticles.shape) _this.pJS.particles.shape = paramsForParticles.shape;
          if (paramsForParticles.opacity) _this.pJS.particles.opacity = paramsForParticles.opacity;
          if (paramsForParticles.size) _this.pJS.particles.size = paramsForParticles.size;
          if (paramsForParticles.size_random == false) _this.pJS.particles.size_random = paramsForParticles.size_random;
          if (paramsForParticles.nb) _this.pJS.particles.nb = paramsForParticles.nb;
          if (paramsForParticles.line_linked) {
            var paramsForLineLinked = paramsForParticles.line_linked;
            if (paramsForLineLinked.enable_auto == false) _this.pJS.particles.line_linked.enable_auto = paramsForLineLinked.enable_auto;
            if (paramsForLineLinked.distance) _this.pJS.particles.line_linked.distance = paramsForLineLinked.distance;
            if (paramsForLineLinked.color) _this.pJS.particles.line_linked.color = paramsForLineLinked.color;
            if (paramsForLineLinked.opacity) _this.pJS.particles.line_linked.opacity = paramsForLineLinked.opacity;
            if (paramsForLineLinked.width) _this.pJS.particles.line_linked.width = paramsForLineLinked.width;
            if (paramsForLineLinked.condensed_mode) {
              var paramsForCondensedMode = paramsForLineLinked.condensed_mode;
              if (paramsForCondensedMode.enable == false) _this.pJS.particles.line_linked.condensed_mode.enable = paramsForCondensedMode.enable;
              if (paramsForCondensedMode.rotateX) _this.pJS.particles.line_linked.condensed_mode.rotateX = paramsForCondensedMode.rotateX;
              if (paramsForCondensedMode.rotateY) _this.pJS.particles.line_linked.condensed_mode.rotateY = paramsForCondensedMode.rotateY;
            }
          }
          if (paramsForParticles.anim) {
            var paramsForAnim = paramsForParticles.anim;
            if (paramsForAnim.enable == false) _this.pJS.particles.anim.enable = paramsForAnim.enable;
            if (paramsForAnim.speed) _this.pJS.particles.anim.speed = paramsForAnim.speed;
          }
        }
        if (params.interactivity) {
          var paramsForInteractivity = params.interactivity;
          if (paramsForInteractivity.enable == false) _this.pJS.interactivity.enable = paramsForInteractivity.enable;
          if (paramsForInteractivity.mouse) {
            if (paramsForInteractivity.mouse.distance) _this.pJS.interactivity.mouse.distance = paramsForInteractivity.mouse.distance;
          }
          if (paramsForInteractivity.detect_on) _this.pJS.interactivity.detect_on = paramsForInteractivity.detect_on;
          if (paramsForInteractivity.mode) _this.pJS.interactivity.mode = paramsForInteractivity.mode;
          if (paramsForInteractivity.line_linked) {
            if (paramsForInteractivity.line_linked.opacity) _this.pJS.interactivity.line_linked.opacity = paramsForInteractivity.line_linked.opacity;
          }
          if (paramsForInteractivity.events) {
            var paramsForEvents = paramsForInteractivity.events;
            if (paramsForEvents.onclick) {
              var paramsForOnclick = paramsForEvents.onclick;
              if (paramsForOnclick.enable == false) _this.pJS.interactivity.events.onclick.enable = false;
              if (paramsForOnclick.mode != 'push') _this.pJS.interactivity.events.onclick.mode = paramsForOnclick.mode;
              if (paramsForOnclick.nb) _this.pJS.interactivity.events.onclick.nb = paramsForOnclick.nb;
            }
          }
        }
        _this.pJS.retina_detect = params.retina_detect;
      }
      /* convert hex colors to rgb */
      _this.pJS.particles.color_rgb = _this.hexToRgb(_this.pJS.particles.color);
      _this.pJS.particles.line_linked.color_rgb_line = _this.hexToRgb(_this.pJS.particles.line_linked.color);

      /* detect retina */
      if (_this.pJS.retina_detect && window.devicePixelRatio > 1) {
        _this.pJS.retina = true;

        _this.pJS.canvas.pxratio = window.devicePixelRatio
        _this.pJS.canvas.w = _this.pJS.canvas.el.offsetWidth * _this.pJS.canvas.pxratio;
        _this.pJS.canvas.h = _this.pJS.canvas.el.offsetHeight * _this.pJS.canvas.pxratio;
        _this.pJS.particles.anim.speed = _this.pJS.particles.anim.speed * _this.pJS.canvas.pxratio;
        _this.pJS.particles.line_linked.distance = _this.pJS.particles.line_linked.distance * _this.pJS.canvas.pxratio;
        _this.pJS.particles.line_linked.width = _this.pJS.particles.line_linked.width * _this.pJS.canvas.pxratio;
        _this.pJS.interactivity.mouse.distance = _this.pJS.interactivity.mouse.distance * _this.pJS.canvas.pxratio;
      }

      /* ---------- CANVAS functions ------------ */

      _this.pJS.fn.canvasInit = function () {
        _this.pJS.canvas.ctx = _this.pJS.canvas.el.getContext('2d');
      };

      _this.pJS.fn.canvasSize = function () {
        _this.pJS.canvas.el.width = _this.pJS.canvas.w;
        _this.pJS.canvas.el.height = _this.pJS.canvas.h;

        window.onresize = function () {
          if (_this.pJS) {
            _this.pJS.canvas.w = _this.pJS.canvas.el.offsetWidth;
            _this.pJS.canvas.h = _this.pJS.canvas.el.offsetHeight;

            /* resize canvas */
            if (_this.pJS.retina) {
              _this.pJS.canvas.w *= _this.pJS.canvas.pxratio;
              _this.pJS.canvas.h *= _this.pJS.canvas.pxratio;
            }

            _this.pJS.canvas.el.width = _this.pJS.canvas.w;
            _this.pJS.canvas.el.height = _this.pJS.canvas.h;

            /* repaint canvas */
            _this.pJS.fn.canvasPaint();
            if (!_this.pJS.particles.anim.enable) {
              _this.pJS.fn.particlesRemove();
              _this.pJS.fn.canvasRemove();
              launchParticles();
            }
          }
        }
      };

      _this.pJS.fn.canvasPaint = function () {
        _this.pJS.canvas.ctx.fillRect(0, 0, _this.pJS.canvas.w, _this.pJS.canvas.h);
      };

      _this.pJS.fn.canvasRemove = function () {
        _this.pJS.canvas.ctx.clearRect(0, 0, _this.pJS.canvas.w, _this.pJS.canvas.h);
      }

      /* --------- PARTICLES functions ----------- */

      _this.pJS.fn.particle = function (color, opacity, position) {

        /* position */
        this.x = position ? position.x : Math.random() * _this.pJS.canvas.w;
        this.y = position ? position.y : Math.random() * _this.pJS.canvas.h;

        /* size */
        this.radius = (_this.pJS.particles.size_random ? Math.random() : 1) * _this.pJS.particles.size;
        if (_this.pJS.retina) this.radius *= _this.pJS.canvas.pxratio;

        /* color */
        this.color = color;

        /* opacity */
        this.opacity = opacity;

        /* animation - velocity for speed */
        this.vx = -.5 + Math.random();
        this.vy = -.5 + Math.random();

        /* draw function */
        this.draw = function () {
          _this.pJS.canvas.ctx.fillStyle = 'rgba(' + this.color.r + ',' + this.color.g + ',' + this.color.b + ',' + this.opacity + ')';
          _this.pJS.canvas.ctx.beginPath();

          switch (_this.pJS.particles.shape) {
            case 'circle':
              _this.pJS.canvas.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
              break;

            case 'edge':
              _this.pJS.canvas.ctx.rect(this.x, this.y, this.radius * 2, this.radius * 2);
              break;

            case 'triangle':
              _this.pJS.canvas.ctx.moveTo(this.x, this.y - this.radius);
              _this.pJS.canvas.ctx.lineTo(this.x + this.radius, this.y + this.radius);
              _this.pJS.canvas.ctx.lineTo(this.x - this.radius, this.y + this.radius);
              _this.pJS.canvas.ctx.closePath();
              break;
          }

          _this.pJS.canvas.ctx.fill();
        }

      };

      _this.pJS.fn.particlesCreate = function () {
        for (var i = 0; i < _this.pJS.particles.nb; i++) {
          _this.pJS.particles.array.push(new _this.pJS.fn.particle(_this.pJS.particles.color_rgb, _this.pJS.particles.opacity));
        }
      };

      _this.pJS.fn.particlesAnimate = function () {
        for (var i = 0; i < _this.pJS.particles.array.length; i++) {
          /* the particle */
          var p = _this.pJS.particles.array[i];

          /* move the particle */
          p.x += p.vx * (_this.pJS.particles.anim.speed / 2);
          p.y += p.vy * (_this.pJS.particles.anim.speed / 2);

          /* change particle position if it is out of canvas */
          if (p.x - p.radius > _this.pJS.canvas.w) p.x = p.radius;
          else if (p.x + p.radius < 0) p.x = _this.pJS.canvas.w + p.radius;
          if (p.y - p.radius > _this.pJS.canvas.h) p.y = p.radius;
          else if (p.y + p.radius < 0) p.y = _this.pJS.canvas.h + p.radius;

          /* Check distance between each particle and mouse position */
          for (var j = i + 1; j < _this.pJS.particles.array.length; j++) {
            var p2 = _this.pJS.particles.array[j];

            /* link particles if enable */
            if (_this.pJS.particles.line_linked.enable_auto) {
              _this.pJS.fn.vendors.distanceParticles(p, p2);
            }

            /* set interactivity if enable */
            if (_this.pJS.interactivity.enable) {

              /* interactivity mode */
              switch (_this.pJS.interactivity.mode) {
                case 'grab':
                  _this.pJS.fn.vendors.interactivity.grabParticles(p, p2);
                  break;
              }

            }

          }
        }
      };

      _this.pJS.fn.particlesDraw = function () {
        /* clear canvas */
        _this.pJS.canvas.ctx.clearRect(0, 0, _this.pJS.canvas.w, _this.pJS.canvas.h);

        /* move particles */
        _this.pJS.fn.particlesAnimate();

        /* draw each particle */
        for (var i = 0; i < _this.pJS.particles.array.length; i++) {
          var p = _this.pJS.particles.array[i];
          p.draw('rgba(' + p.color.r + ',' + p.color.g + ',' + p.color.b + ',' + p.opacity + ')');
        }

      };

      _this.pJS.fn.particlesRemove = function () {
        _this.pJS.particles.array = [];
      };

      /* ---------- VENDORS functions ------------ */

      _this.pJS.fn.vendors.distanceParticles = function (p1, p2) {

        var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx * dx + dy * dy);

        /* Check distance between particle and mouse mos */
        if (dist <= _this.pJS.particles.line_linked.distance) {

          /* draw the line */
          var color_line = _this.pJS.particles.line_linked.color_rgb_line;
          _this.pJS.canvas.ctx.beginPath();
          _this.pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + (_this.pJS.particles.line_linked.opacity - dist / _this.pJS.particles.line_linked.distance) + ')';
          _this.pJS.canvas.ctx.moveTo(p1.x, p1.y);
          _this.pJS.canvas.ctx.lineTo(p2.x, p2.y);
          _this.pJS.canvas.ctx.lineWidth = _this.pJS.particles.line_linked.width;
          _this.pJS.canvas.ctx.stroke();
          _this.pJS.canvas.ctx.closePath();

          /* condensed particles */
          if (_this.pJS.particles.line_linked.condensed_mode.enable) {
            var dx = p1.x - p2.x,
              dy = p1.y - p2.y,
              ax = dx / (_this.pJS.particles.line_linked.condensed_mode.rotateX * 1000),
              ay = dy / (_this.pJS.particles.line_linked.condensed_mode.rotateY * 1000);
            p2.vx += ax;
            p2.vy += ay;
          }

        }
      };

      _this.pJS.fn.vendors.interactivity.listeners = function () {

        /* init el */
        if (_this.pJS.interactivity.detect_on == 'window') {
          var detect_el = window;
        } else {
          var detect_el = _this.pJS.canvas.el;
        }

        /* el on mousemove */
        detect_el.onmousemove = function (e) {

          if (detect_el == window) {
            var pos_x = e.clientX,
              pos_y = e.clientY;
          } else {
            var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
          }

          if (_this.pJS) {

            _this.pJS.interactivity.mouse.pos_x = pos_x;
            _this.pJS.interactivity.mouse.pos_y = pos_y;

            if (_this.pJS.retina) {
              _this.pJS.interactivity.mouse.pos_x *= _this.pJS.canvas.pxratio;
              _this.pJS.interactivity.mouse.pos_y *= _this.pJS.canvas.pxratio;
            }

            _this.pJS.interactivity.status = 'mousemove';
          }

        };

        /* el on onmouseleave */
        detect_el.onmouseleave = function (e) {

          if (_this.pJS) {
            _this.pJS.interactivity.mouse.pos_x = 0;
            _this.pJS.interactivity.mouse.pos_y = 0;
            _this.pJS.interactivity.status = 'mouseleave';
          }

        };

        /* el on onclick */
        if (_this.pJS.interactivity.events.onclick.enable) {
          switch (_this.pJS.interactivity.events.onclick.mode) {
            case 'push':
              detect_el.onclick = function (e) {
                if (_this.pJS) {
                  for (var i = 0; i < _this.pJS.interactivity.events.onclick.nb; i++) {
                    _this.pJS.particles.array.push(
                      new _this.pJS.fn.particle(
                        _this.pJS.particles.color_rgb,
                        _this.pJS.particles.opacity, {
                          'x': _this.pJS.interactivity.mouse.pos_x,
                          'y': _this.pJS.interactivity.mouse.pos_y
                        }
                      )
                    )
                  }
                }
              }
              break;

            case 'remove':
              detect_el.onclick = function (e) {
                _this.pJS.particles.array.splice(0, _this.pJS.interactivity.events.onclick.nb);
              }
              break;
          }
        }
      };

      _this.pJS.fn.vendors.interactivity.grabParticles = function (p1, p2) {
        var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx * dx + dy * dy);

        var dx_mouse = p1.x - _this.pJS.interactivity.mouse.pos_x,
          dy_mouse = p1.y - _this.pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);

        /* Check distance between 2 particles + Check distance between 1 particle and mouse position */
        if (dist <= _this.pJS.particles.line_linked.distance && dist_mouse <= _this.pJS.interactivity.mouse.distance && _this.pJS.interactivity.status == 'mousemove') {
          /* Draw the line */
          var color_line = _this.pJS.particles.line_linked.color_rgb_line;
          _this.pJS.canvas.ctx.beginPath();
          _this.pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + (_this.pJS.interactivity.line_linked.opacity - dist_mouse / _this.pJS.interactivity.mouse.distance) + ')';
          _this.pJS.canvas.ctx.moveTo(p1.x, p1.y);
          _this.pJS.canvas.ctx.lineTo(_this.pJS.interactivity.mouse.pos_x, _this.pJS.interactivity.mouse.pos_y);
          _this.pJS.canvas.ctx.lineWidth = _this.pJS.particles.line_linked.width;
          _this.pJS.canvas.ctx.stroke();
          _this.pJS.canvas.ctx.closePath();
        }
      };

      _this.pJS.fn.vendors.destroy = function () {
        cancelAnimationFrame(_this.pJS.fn.requestAnimFrame);
        canvas_el.remove();
        _this.pJS = null;
      };

      /* --------- LAUNCH ----------- */

      function launchParticles() {
        _this.pJS.fn.canvasInit();
        _this.pJS.fn.canvasSize();
        _this.pJS.fn.canvasPaint();
        _this.pJS.fn.particlesCreate();
        _this.pJS.fn.particlesDraw();
      };

      function launchAnimation() {
        _this.pJS.fn.particlesDraw();
        _this.pJS.fn.requestAnimFrame = requestAnimFrame(launchAnimation);
      };

      launchParticles();

      if (_this.pJS.particles.anim.enable) {
        launchAnimation();
      }

      if (_this.pJS.interactivity.enable) {
        _this.pJS.fn.vendors.interactivity.listeners();
      }

    },
    hexToRgb(hex) {
      // By Tim Down - http://stackoverflow.com/a/5624139/3493650
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    },
    particlesJS(tag_id, params) {

      /* no string id? so it's object params, and set the id with default id */
      if (typeof (tag_id) != 'string') {
        params = tag_id;
        tag_id = 'particles-js';
      }

      /* no id? set the id to default id */
      if (!tag_id) {
        tag_id = 'particles-js';
      }

      /* create canvas element */
      var canvas_el = document.createElement('canvas');

      /* set size canvas */
      canvas_el.style.width = "100%";
      canvas_el.style.height = "100%";

      /* append canvas */
      var canvas = document.getElementById(tag_id).appendChild(canvas_el);

      /* launch particle.js */
      if (canvas != null) {
        this.launchParticlesJS(tag_id, params);
      }
    },
    renderBg() {
      window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          };
      })();

      window.cancelRequestAnimFrame = (function () {
        return window.cancelAnimationFrame ||
          window.webkitCancelRequestAnimationFrame ||
          window.mozCancelRequestAnimationFrame ||
          window.oCancelRequestAnimationFrame ||
          window.msCancelRequestAnimationFrame ||
          clearTimeout
      })();

      this.particlesJS('particles-js', {
        particles: {
          color: '#fff',
          shape: 'circle', // "circle", "edge" or "triangle"
          opacity: 1,
          size: 4,
          size_random: true,
          nb: 150,
          line_linked: {
            enable_auto: true,
            distance: 100,
            color: '#fff',
            opacity: 1,
            width: 1,
            condensed_mode: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          },
          anim: {
            enable: true,
            speed: 1
          }
        },
        interactivity: {
          enable: true,
          mouse: {
            distance: 300
          },
          detect_on: 'canvas', // "canvas" or "window"
          mode: 'grab',
          line_linked: {
            opacity: .5
          },
          events: {
            onclick: {
              enable: true,
              mode: 'push', // "push" or "remove"
              nb: 4
            }
          }
        },
        /* Retina Display Support */
        retina_detect: true
      });
    }
  }
}
</script>

<style lang="less">
#particles-js-container {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(4, 8, 29, 1) 0%, rgba(13, 21, 64, 1) 75%, rgba(4, 8, 29, 1) 100%);
}

/* remove canvas default margin */
canvas {
  display: block;
  vertical-align: bottom;
}

#particles-js {
  width: 100%;
  height: 100%;
}
</style>
<style lang='less' scoped>

</style>
