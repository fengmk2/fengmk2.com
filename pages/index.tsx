const ribbonCss = `
.void-ribbon { position: fixed; top: 0; right: 0; z-index: 1000; overflow: hidden; width: 150px; height: 150px; text-decoration: none; }
.void-ribbon span { display: block; position: absolute; right: -35px; top: 30px; width: 210px; padding: 8px 0; background: #000; color: #fff; font-size: 13px; font-weight: 600; text-align: center; text-decoration: none; letter-spacing: 0.5px; transform: rotate(45deg); box-shadow: 0 2px 6px rgba(0,0,0,0.3); }
.void-ribbon:hover span { background: #333; }
`;

// Deploy info is invisible by default (transparent text) and only shows up
// when the text is selected, e.g. via cmd+a or a mouse drag over the page.
const deployInfoCss = `
#footer .deploy-info { color: transparent; text-align: center; font-size: 12px; margin: 24px 0; }
#footer .deploy-info a, #footer .deploy-info a:hover { color: transparent; }
#footer .deploy-info::selection, #footer .deploy-info a::selection { color: #555; background: #b3d4fc; }
`;

export default function HomePage() {
  return (
    <>
      <link rel="stylesheet" href="https://registry.npmmirror.com/typo.css/1/files/typo.css" />
      <link
        rel="stylesheet"
        href="https://registry.npmmirror.com/bootstrap/3/files/dist/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://registry.npmmirror.com/bootstrap/3/files/dist/css/bootstrap-theme.min.css"
      />
      <link rel="stylesheet" href="/css/mk2.css" />

      <div id="wrapper" className="container typo">
        <div id="header"></div>

        <div id="content">
          <h1>A simple blog of fengmk2</h1>

          <h2>Who is MK2</h2>
          <ul>
            <li>
              Github: <a href="https://github.com/fengmk2">@fengmk2</a>
            </li>
            <li>
              Weibo: <a href="https://weibo.com/imk2">@Python发烧友</a>
            </li>
            <li>
              Twitter: <a href="https://x.com/fengmk2">@fengmk2</a>
            </li>
            <li>
              npmmirror: <a href="https://npmmirror.com">npmmirror 镜像站</a>
            </li>
            <li>
              语雀：<a href="https://yuque.com/fengmk2">苏千</a>
            </li>
            <li>
              CNode: <a href="https://cnodejs.org/user/fengmk2">@fengmk2</a>
            </li>
            <li>
              cnblogs: <a href="https://fengmk2.cnblogs.com/">让生活Web个够</a>
            </li>
          </ul>

          <audio controls autoPlay>
            <source
              src="https://download.alicdn.com/seller_2012/gracious-dream.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>

          <h2>Tools</h2>
          <ul>
            <li>
              <a href="https://viteplus.dev/">Vite+</a>: The Unified Toolchain for the Web. Manage
              your runtime, package manager, and frontend stack with one tool.
            </li>
          </ul>

          <h2>Slides</h2>
          <ul>
            <li>
              <a href="https://github.com/alibaba/node-hbase-client">Node HBase Client</a>:
              Asynchronous HBase client for Node.
            </li>
            <li>
              <a href="/ppt/nodejs-web-dev.html">Nodejs 快速开发 Web 产品</a>,{" "}
              <a href="/ppt/nodejs-web-dev-v2.html">v2</a>
            </li>
            <li>
              <a href="/ppt/hujs.html">Code traps in Nodejs | 在Nodejs上踩过的坑</a> at{" "}
              <a href="http://www.hujs.org/">沪JS 2012</a>
            </li>
            <li>
              <a href="/ppt/nodejs_programming_style.html">我的 nodejs 编程规范</a>
            </li>
            <li>
              <a href="/ppt/unittest-and-bdd-in-nodejs-with-mocha.html">Unit Test in Nodejs</a>
            </li>
            <li>
              <a href="/ppt/qcon2011/index.html">Nodejs, 脱离了浏览器的Javascript</a>
            </li>
            <li>
              <a href="/ppt/those-things-using-nodejs/index.html">Nodejs 实践二三事</a>
            </li>
            <li>
              <a href="/ppt/hangjs.html">杭JS 二三事</a>
            </li>
          </ul>

          <h2>Node.js</h2>
          <ul>
            <li>
              <a href="https://github.com/cnpm/packument">@cnpmjs/packument</a>: A package metadata
              helper for Node.js. It provides a way to parse package metadata from buffer and diff
              versions between local and remote.
            </li>
            <li>
              <a href="https://github.com/fengmk2/iconv">@fengmk2/iconv</a>: Fast and robust
              character encoding conversion library for Node.js using native Rust bindings via
              napi-rs.
            </li>
            <li>
              <a href="/egg/benchmark/index.html">egg benchmark results</a>
            </li>
            <li>
              <a href="/blog/2011/defense-hash-algorithm-collision-dos">
                Defense hash algorithm collision 防御hash算法冲突导致拒绝服务器
              </a>
            </li>
            <li>
              <a href="/blog/2011/hac-in-nodejs-results.html">Hash algorithm collision in Nodejs</a>
            </li>
            <li>
              <a href="/blog/helloworld-benchmark">Nodejs "Hello world" benchmark</a>
            </li>
            <li>
              <a href="/blog/2011/fibonacci/nodejs-python-php-ruby-lua">fibonacci(40) benchmark</a>
            </li>
          </ul>

          <h2>Applications</h2>
          <ul>
            <li>
              <a href="https://github.com/cnpm/cnpmcore">cnpmcore</a>: Private NPM Registry for
              self-host. Example: npm registry Mirror on China{" "}
              <a href="https://registry.npmmirror.com">https://registry.npmmirror.com</a> and the
              web console <a href="https://npmmirror.com">https://npmmirror.com</a>
            </li>
            <li>
              <a href="https://github.com/X-Profiler/all-in-one">X-Profiler/all-in-one</a>:{" "}
              <a href="https://www.yuque.com/hyj1991/easy-monitor">Easy-Monitor</a> all in one
              monitoring solution for Node.js applications.
            </li>
            <li>
              <a href="/emoji/index.html">Emoji</a>
            </li>
            <li>
              <a href="/browser.html">Markdown Preview</a>
            </li>
            <li>
              <a href="https://cnodejs.org/topic/4f387648301a48d50e003d4c">NAE-CLI</a>
            </li>
            <li>
              <a href="/lottery/index.html">CNodejs抽奖程序</a>
            </li>
            <li>
              <a href="/blog/2011/canvas-text.html">Draw Text with Canvas</a>
            </li>
          </ul>

          <h2>Articles</h2>
          <ul>
            <li>
              2026
              <ul>
                <li>
                  <a href="/posts/why-registry-bridge">Why We Need a Registry Bridge</a>
                </li>
                <li>
                  <a href="/blog/2026/blog-qwin-windows-testing-on-macos">
                    Windows CLI Testing from macOS: Cross-Compilation + QEMU VM
                  </a>
                </li>
              </ul>
            </li>
            <li>
              2025
              <ul>
                <li>
                  <a href="/blog/2025/cnpmcore-json-parse">cnpmcore 超大 JSON 反序列化性能优化</a>
                </li>
                <li>
                  <a href="/blog/2025/job-queue-on-postgres/README">
                    基于 Postgres 实现一个 Job Queue
                  </a>
                </li>
                <li>
                  <a href="https://github.com/fengmk2/debuglog-perf?tab=readme-ov-file#debuglog-perf-issues">
                    make Node.js debug log 700x faster
                  </a>
                </li>
                <li>
                  <a href="https://app.affine.pro/workspace/459565f1-f317-4156-8ffc-77fe75e9f810/zRMyBL7pwWpSEK-pcpvrX?mode=page">
                    在绿联 NAS 上部署 AFFiNE Self-host
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/blog/2017/index.html">Blog/2017</a>
              <ul>
                <li>
                  <a href="/blog/2017/graceful-process-exit">子进程的优雅退出</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/blog/2016/index.html">Blog/2016</a>
              <ul>
                <li>
                  <a href="/openwrt/README.html">linksys 刷 openwrt</a>
                </li>
                <li>
                  <a href="/blog/2016/google-fonts-mirror">Google Fonts 加速代理</a>
                </li>
                <li>
                  <a href="/blog/2016/how-i-publish-a-npm-package">我是如何发布一个 npm 包的</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/blog/2015/index.html">Blog/2015</a>
              <ul>
                <li>
                  <a href="/blog/2015/cluster-coverage/README">
                    <code>cluster</code> code coverage with istanbul
                  </a>
                </li>
                <li>
                  <a href="/blog/2015/test-cli-with-coffee">使用 coffee 来测试 cli 工具</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/blog/2014/index.html">Blog/2014</a>
              <ul>
                <li>
                  <a href="/blog/2014/10/sql-to-sequelize-mapping-chart">
                    SQL to Sequelize Mapping Chart
                  </a>
                </li>
                <li>
                  <a href="/blog/2014/07/co-usage">co 常见使用场景</a>
                </li>
                <li>
                  <a href="/blog/2014/07/node-gyp-cpp-build-env">
                    配置 Windows 下的 nodejs C++ 模块编译环境
                  </a>
                </li>
                <li>
                  <a href="/blog/2014/06/use-koa-csrf-high-performance-way">
                    Use koa-csrf in high performance way
                  </a>
                </li>
                <li>
                  <a href="/blog/2014/03/node-env-and-faster-npm">
                    快速搭建 Node.js 开发环境以及加速 npm
                  </a>
                </li>
                <li>
                  <a href="/blog/2014/03/koa-vs-connect">Hello koa, good bye connect</a>
                </li>
                <li>
                  <a href="/blog/2014/03/istanbul">
                    Use istanbul run test coverage with mocha on koa
                  </a>
                </li>
                <li>
                  <a href="/blog/2014/iconv-lite/iconv-lite">Node.js 处理 GBK 编码模板</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/blog/2013/index.html">Blog/2013</a>
              <ul>
                <li>
                  <a href="/benchmark/ejs/with_false_better_than_true.html">
                    让 ejs 更加快 | Let ejs faster with options._with = false
                  </a>
                </li>
                <li>
                  <a href="/blog/2013/05/blanketjs-jscoverage">Use Blanket.js instead of jscover</a>
                </li>
                <li>
                  <a href="/blog/2013/02/cobertura-xml-with-mocha">
                    Generate cobertura-xml report with mocha
                  </a>
                </li>
                <li>
                  <a href="/blog/2013/03/domain-helloworld-benchmark">
                    nodejs domain module hello world and benchmark
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/blog/2012/index.html">Blog/2012</a>
              <ul>
                <li>
                  <a href="/blog/2012/12/domain_module">
                    使用 connect-domain 捕获异步调用中出现的异常
                  </a>
                </li>
                <li>
                  <a href="/benchmark/nagle-algorithm-delayed-ack-mock.html">
                    模拟 Nagle 算法的Delayed Ack
                  </a>
                </li>
                <li>
                  <a href="/blog/2012/06/use-pre-for-connect-static-middleware">
                    给 connect 的 static 模块加上url路径前缀
                  </a>
                </li>
                <li>
                  <a href="/blog/2012/06/jscoverage-must-set-encoding">
                    jscoverage 必须指定encoding参数
                  </a>
                </li>
                <li>
                  <a href="/blog/2012/05/phonegap-dev-env-cross-domain-with-nodejs">
                    使用nodejs解决phonegap开发期间的跨域问题
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/blog/2011/index.html">Blog/2011</a>
            </li>
            <li>
              <a href="/blog/2010/index.html">Blog/2010</a>
            </li>
            <li>
              <a href="/blog/2009/index.html">Blog/2009</a>
              <ul>
                <li>
                  <a href="/blog/2009/0322/tenjin-intro">tenjin - 号称全球最快的模板引擎</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/blog/index.html">Blog</a>
            </li>
            <li>
              <a href="/Learned-Optimism-Test.htm">习得的乐观测试</a>
            </li>
            <li>
              <a href="/github-proxy.html">
                github <code>ssh</code> 协议代理配置
              </a>
            </li>
          </ul>

          <h2>
            <a href="/collections">Collections</a>
          </h2>
          <ul>
            <li>
              <a href="/collections/nodejs.html">Nodejs</a>
            </li>
            <li>
              <a href="/collections/git.html">Git</a>
            </li>
            <li>
              <a href="/collections/javascript.html">Javascript</a>
            </li>
            <li>
              <a href="/collections/jquery.html">jQuery</a>
            </li>
            <li>
              <a href="/collections/css.html">CSS</a>
            </li>
            <li>
              <a href="/collections/linux.html">Linux</a>
            </li>
            <li>
              <a href="/collections/web.html">Web</a>
            </li>
          </ul>

          <h2>Events</h2>
          <ul>
            <li>
              <p>
                <img width="100" src="/images/hangjs-logo.svg" />
                <a href="http://2014.jsconf.cn/">杭JS 2014</a> is a two day conference focused on
                JavaScript and Node.js technologies. This developer driven event will bring together
                notable figures from both the Chinese and international JavaScript communities to
                share their knowledge and passion for JavaScript. The conference will be held in
                Hangzhou from June 21-22.
              </p>
              <p>
                <a href="/images/hangjs-family-photo2.jpg" target="_blank">
                  <img width="100%" src="/images/hangjs-family-photo2.jpg" alt="HangJS" />
                </a>
              </p>
            </li>
            <li>
              <p>
                <img width="100" src="/images/jingjs-alt.svg" alt="Jingjs" />
                <a href="https://2013.jsconfchina.com/">京JS</a>: 2013 9 - 10, NOVEMBER, A two day
                conference in Beijing for the Chinese JavaScript and Node.js community.
                (一个在北京举办的为期二天，为中国JavaScript和Node.js研发者社区举办的国际性技术大会)
              </p>
            </li>
            <li>
              <p>
                <img width="100" src="/images/hujs-logo.jpeg" alt="Hujs" />
                <a href="http://www.hujs.org/">沪JS</a>: 2012 九月14－16日，上海,
                一个为中国Javascript和Node.js开发者社区举办的会议
              </p>
              <p>
                从左到右：troy, goddy, gleen, jackson, fengmk2
                <a href="/images/hujs-mans.jpeg" target="_blank">
                  <img width="100%" src="/images/hujs-mans.jpeg" alt="HangJS" />
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://www.cnblogs.com/liping13599168/archive/2012/06/07/2540878.html">
                  Alibaba Developer Conference
                </a>
              </p>
            </li>
          </ul>

          <p>
            <a href="http://adc.alibabatech.org/" target="_blank">
              <img
                src="/images/adc-2013.png"
                width="728"
                height="90"
                alt="ADC·阿里技术嘉年华（7月13-14日·杭州）"
              />
            </a>
          </p>
        </div>

        <div id="footer">
          <p className="deploy-info">
            Deployed {__BUILD_TIME__} ·{" "}
            <a href={`https://github.com/fengmk2/fengmk2.github.com/commit/${__BUILD_COMMIT__}`}>
              {__BUILD_COMMIT__}
            </a>
          </p>
        </div>
      </div>

      <div id="fork" className="void-ribbon">
        <span>
          <a href="https://void.cloud">Deploy on Void</a>
        </span>
      </div>

      <style>{ribbonCss + deployInfoCss}</style>
    </>
  );
}
