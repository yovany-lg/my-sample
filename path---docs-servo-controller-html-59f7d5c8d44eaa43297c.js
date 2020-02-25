webpackJsonp([81709699495914],{363:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Un Servomotor consiste en un mecanismo que contiene un motor y un sistema de control para que éste se ubique en una posición específica dentro de un rango. Normalmente, los Servomotores tienen un rango de operación de <code>(-90)-90</code> grados, es decir que tienen un alcance de <code>180</code> grados en total.</p>\n<p>El Módulo de Servomotores contiene un sistema para controlar hasta tres Servomotores. Este módulo es un dispositivo basado en un controlador con salidas <strong>PWM</strong> (<em>Pulse Width Modulation</em>), el cual es configurado por la <strong>Raspberry PI</strong> para que éste proporcione la señal adecuada con base en la ubicación deseada en el Servomotor.</p>\n<p>La comunicación de este módulo con la <strong>Raspberry PI</strong> se realiza a través del puerto <strong>IIC</strong>, de esta manera se simplifica el uso de los Servomotores, ya que a través de esta librería se mandan instrucciones simples con la posición (en grados) que se desea obtener en el Servomotor.</p>\n<h2>Instalación de la librería</h2>\n<p>Para instalar la librería se tienen dos opciones, una es usar el gestor de paquetes <a href="https://www.npmjs.com/package/robotois-servos"><strong>npm</strong></a> y la otra es descargar la última versión disponible en <a href="https://github.com/Robotois/robotois-servos"><strong>GitHub</strong></a>. La instalación se realiza de la siguiente manera:</p>\n<ul>\n<li>\n<p>Con <strong>npm</strong>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code><span class="token function">npm</span> <span class="token function">install</span> robotois-servos\n</code></pre>\n      </div>\n</li>\n<li>\n<p>Usando <strong>GitHub</strong>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code><span class="token function">npm</span> <span class="token function">install</span> git+https://github.com/Robotois/robotois-servos.git\n</code></pre>\n      </div>\n</li>\n</ul>\n<h2>Conexión al Shield</h2>\n<p>Como se mencionó anteriormente, la comunicación con la <strong>Raspberry PI</strong> se realiza a través del puerto <strong>IIC</strong>, y se deben usar los puertos <code>M1-M2</code> del Shield, ya que éstos han sido destinados para módulos que controlan dispositivos electromecánicos.</p>\n<p>En la siguiente imagen se ilustra cómo se realiza la conexión de este módulo y el Shield:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/Servos-Shield2-17aa1b0cc4a5c2f866a9a25551434cd4-b9843.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 411px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 94.40389294403893%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAA9hAAAPYQGoP6dpAAAC8UlEQVQ4y5VUTW/TQBTM7+YAHLkghITEhQMIOCAkEOJMkZDS0hIaaJq6+XKc2HFix5+7/nb8hl07hLQUVTxptNbbeDJvdrytzWZTiaLrEP16BfBP0Hb9fHhCP/qX9XNrS4CbUBQFfN9HEATwPA+MMcRxjCiKanDOxZ6POw8e48XbD5C1T3hFoaw8z0lVVRoOh6QoCmmaRqZp0mKxqGEYBn3vdOj+wyf0+t3HvxTeqPTWEoM/evoMb95/hCDArYTCyxplWe6e93uyOhMNo5V948j4H5SbhvBAm+DMtm4nvK7oyt6eJZ6TgbOsPvx/EkoCksHYq+vkSZpB0Ydon/dgrr2rCmXuRCQhUZYNWZIksCwLrttEpjkDav5IYG47eNU9xfPuN5zO5qjEe60mIrX0JqdbVbI3GCg4OPiEdvsLjo+/QkQFIjowxCrigs7PHnxho5WWWHkMWZahJZUVRQlzyYlHKaI4w8qKEIYpBkMDhmHjciDWhYm14+xOW4Z+7frww6TG2g0bwqIsSJt7OGyHNBqHmKgMh4cBej2OTofj4iLByTGDF27AhZIkzethpE22IJxqOaZqBWPlIctrwpymuovJqCR9kQolQpmSQ7mMMRwI05UIk3GF791LvHj5EupUqy2RSt0gRO/cwenpGkvbF70CrbwoaGYEMJYxuWEMjyU1Ap7B5ylkL4xLfGl3cPfeA1woo8bjbWRmuoNzZbZLQWu54nQkRlQuMvJ5AhYLlSuGqc4wN0MsLA6eJZjrJfrnwNG3MUaTJUbjlVBr48eZITwP/hDyKKOzHpMj1oShIFxYDJrBoC9ZTciSFKoWoduVHssIxfCDBoGYQI7/O78ty47o69FOIYmXKRa3TJIXAjnFWU5RlpE6TcTvGP3s69v7kHbr/i3VYjylXt/HWG38k57J1P/GwnZh+wF0M0avH2JueDWP/ABu+r5FDsuN5TrV2vcqywkq03Kr8Uz/A02vNGNZOYHYW9tVmqWVFLW96f+qX2qIp7nXT1SSAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Servomotores"\n        title=""\n        src="/static/Servos-Shield2-17aa1b0cc4a5c2f866a9a25551434cd4-b9843.png"\n        srcset="/static/Servos-Shield2-17aa1b0cc4a5c2f866a9a25551434cd4-2a471.png 210w,\n/static/Servos-Shield2-17aa1b0cc4a5c2f866a9a25551434cd4-b9843.png 411w"\n        sizes="(max-width: 411px) 100vw, 411px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Establecer ángulo con <code>setAngle()</code></h2>\n<p>En esta librería, para establecer el ángulo de un Servomotor se utiliza solo una función, <code>setAngle()</code>. Es bastante simple utilizar dicha función, ya que ésta recibe como parámetros el número del servomotor al cual se va a establecer el ángulo y el ángulo como tal. Los puertos de Servomotores se encuentran numerados de la siguiente manera <code>SERVO1</code>, <code>SERVO2</code> y <code>SERVO3</code>, consecuentemente en la función <code>setAngle()</code> el puerto del Servomotor se especifica con su respectivo número <code>1-3</code>.</p>\n<p>A contuniación se muestra un ejemplo sencillo de cómo establecer el ángulo de un Servomotor, en donde se observa que es bastante simple hacerlo.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-javascript"><code><span class="token keyword">const</span> Servos <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'robotois-servos\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> servos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Servos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> angle <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n\n<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  servos<span class="token punctuation">.</span><span class="token function">setAngle</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> angle<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>angle <span class="token operator">===</span> <span class="token number">90</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    sum <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>angle <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    sum <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  angle <span class="token operator">+=</span> sum<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>En el ejemplo anterior se puede observar que para el Servomotor, que está conectado en el puerto <code>1</code>, su posición se rota en un rango de <code>(-90)-90</code> grados. De esta manera, la libreía proporciona lo necesario para controlar Servomotores, ya básicamente solo es necesario especificar el ángulo deseado.</p>\n<p>Para este módulo solo se tiene la función <code>setAngle()</code> para configurar el ángulo de un Servomotor, no obstante de manera interna esta librería se cuenta con las funciones necesarias para transformar el ángulo en <em>grados</em> a un parámetro que el controlador <em>PWM</em> puede interpretar y así proporcionar la señal que el Servomotor puede utilizar.</p>',frontmatter:{title:"Controlador de Servos",path:"/docs/servo-controller.html"}}},pathContext:{}}}});
//# sourceMappingURL=path---docs-servo-controller-html-59f7d5c8d44eaa43297c.js.map