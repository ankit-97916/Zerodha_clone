import UniverseImg from "./UniverseImg";
const Universe = () => {
  return (
    <div className='container mt-5'>
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
      </div>

  <div class="container text-center mt-5">
  <div class="row row-cols-3">
<UniverseImg imgUrl={'/ZerodhaImages/zerodhaImg/4.jpg'}
imgDescription={'Our asset management venturethat is creating simple and transparent indexfunds to help you save for your goals.'}/>
<UniverseImg imgUrl={'/ZerodhaImages/zerodhaImg/18.jpg'}
imgDescription={'Options trading platform that lets youcreate strategies, analyze positions, and examinedata points like open interest, FII/DII, and more.'}/>
<UniverseImg imgUrl={'/ZerodhaImages/zerodhaImg/12.jpg'}
imgDescription={'Investment research platformthat offers detailed insights on stocks,sectors, supply chains, and more.'}/>
<UniverseImg imgUrl={'/ZerodhaImages/zerodhaImg/7.jpg'}
imgDescription={'Systematic trading platformthat allows you to create and backteststrategies without coding.'}/>
<UniverseImg imgUrl={'/ZerodhaImages/zerodhaImg/8.jpg'}
imgDescription={'Thematic investing platformthat helps you invest in diversifiedbaskets of stocks on ETFs.'}/>
<UniverseImg imgUrl={'/ZerodhaImages/zerodhaImg/6.jpg'}
imgDescription={'Personalized advice on lifeand health insurance. No spamand no mis-selling.Sign up for free'}/>

  </div>
</div>
    </div>
  )
}

export default Universe;