import React, { useEffect } from "react";
import Hello from "./Hello";
import "./styles.css";
import confetti from "./confetti";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (bottom) {
        confetti.start();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Boundless Kindness</h1>
        <Hello />
      </header>
      <main>
        <p>
          本网站致力于介绍全球流行的慈善项目、义工和志愿者活动，并将不定期更新内容。
        </p>

        <section className="charity-section">
          <h2>Red Cross（红十字会）</h2>
          <img
            src="/charity1.jpg"
            alt="慈善项目图片"
            className="charity-image"
          />
          <p>
            国际红十字会与红新月会运动致力于提供人道主义援助、促进社区健康和支持国际援助项目。他们在面对自然灾害、冲突和公共卫生紧急情况时提供紧急救援。红十字会和红新月会组织遍布全球，通过其国家和地区分支机构、志愿者网络和合作伙伴关系，帮助数百万人在危机中重建生活。
          </p>
          <p>
            了解更多信息，请访问{" "}
            <a
              href="https://www.redcross.org/?scode=RSG00000E017&gad_source=1&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXBNNNNHG_v0ozyIo-XZBQT6f_aQMHhbRt9k7FzBiW-lXk1WpcML7ahoCAxkQAvD_BwE&gclsrc=aw.ds"
              target="_blank"
              rel="noopener noreferrer"
            >
              官方网站
            </a>
            。
          </p>
        </section>

        <section className="charity-section">
          <h2>UNICEF（联合国儿童基金会）</h2>
          <img
            src="/charity2.jpg"
            alt="慈善项目图片"
            className="charity-image"
          />
          <p>
            UNICEF致力于保护和推广全球儿童的权利，包括提供健康护理、营养、教育、干净水源和卫生设施，并在紧急情况下提供援助。UNICEF在超过190个国家和地区开展工作，与政府、非政府组织和社区合作，改善儿童的生存、保护、发展和参与权利。
          </p>
          <p>
            了解更多信息，请访问{" "}
            <a
              href="https://www.unicef.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              官方网站
            </a>
            。
          </p>
        </section>

        <section className="charity-section">
          <h2>Habitat for Humanity（人类住房计划）</h2>
          <img
            src="/charity3.jpg"
            alt="慈善项目图片"
            className="charity-image"
          />
          <p>
            Habitat for
            Humanity通过志愿者的参与和社区合作，为需要的家庭提供负担得起的住房，并推广可持续建设和改善居住条件。自1976年以来，Habitat
            for
            Humanity已在全球建造了数百万个住房，帮助家庭摆脱贫困和住房不安全问题。
          </p>
          <p>
            了解更多信息，请访问{" "}
            <a
              href="https://www.h4h.org/?gad_source=1&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXH8H2QYhjJClJWHF7gano-sR36T4gCIUSk9XxaPO2FRrAT8yPJb8hxoCJT4QAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              官方网站
            </a>
            。
          </p>
        </section>

        <section className="charity-section">
          <h2>World Wildlife Fund (WWF)（世界自然基金会）</h2>
          <img
            src="/charity4.jpg"
            alt="慈善项目图片"
            className="charity-image"
          />
          <p>
            WWF致力于保护全球自然资源、野生动植物及其栖息地，通过科学研究、政策倡导和可持续发展项目来推动环境保护。WWF在100多个国家开展工作，与政府、企业和社区合作，推动生物多样性保护、气候变化应对和可持续资源管理。
          </p>
          <p>
            了解更多信息，请访问{" "}
            <a
              href="https://www.worldwildlife.org/?utm_source=googlegrant&utm_medium=cpc&utm_campaign=wwf-brand-general&gad_source=1&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXAALsPVtaF5XPR-jKldiiFNGHtLJMa1-4rhYXXOkVllv0U_0xQbR8RoCJzsQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              官方网站
            </a>
            。
          </p>
        </section>

        <section className="charity-section">
          <h2>Doctors Without Borders（无国界医生）</h2>
          <img
            src="/charity5.jpg"
            alt="慈善项目图片"
            className="charity-image"
          />
          <p>
            Doctors Without
            Borders为冲突地区和人道主义危机中的人们提供紧急医疗援助和医疗保健服务，无论其背景如何。该组织在全球70多个国家和地区运作，通过医疗团队和志愿者，应对灾难、冲突和公共卫生紧急情况，救助和改善健康状况。
          </p>
          <p>
            了解更多信息，请访问{" "}
            <a
              href="https://donate.doctorswithoutborders.org/secure/give-monthly-double-your-impact-search-onetime-reverse?ms=ADD2301U3U49&utm_source=google&utm_medium=cpc&utm_campaign=BRAND.DWB_CKMSF-BRAND.DWB-GS-GS-ALL-DWBBrand.E-BO-ALL-RSA-RSARefresh.1-MONTHLY&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXOU-1z0yDNCL-Nw00mNzHAUzikG0DHBmgLjolVrX5N04x-zmdFUGIBoC6kIQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              官方网站
            </a>
            。
          </p>
        </section>

        <section className="conclusion-section">
          <p>恭喜你已浏览完全部介绍。</p>
          <p>Tell me if you like it!</p>
          <img src="/qrcode.png" alt="二维码" className="qrcode-image" />
        </section>
        <div id="trigger"></div>
      </main>
    </div>
  );
}

export default App;
