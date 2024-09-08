import 'animate.css';
import dashUrl from './assets/dash.png'
import logo from './assets/logo.svg'
import donwarrow from './assets/donwarrow.svg'
import {JoinButton} from './componentes/joinButtom'
import {Card} from './componentes/card'
import { Facebook, X, Linkedin } from './componentes/icons'
import img4 from'./assets/card/img4.png'
import img5 from'./assets/card/img5.png'
import img6 from'./assets/card/img6.png'
import './app.css'
function App() {

  return (
    <body className="bg-black overflow-x-hidden">
      <header >
        <div className='headerBg'></div>
        <nav className="w-full h-10 flex justify-between items-center sm:px-10 px-6  xl:px-56 pt-8">
          <div className='font-bold flex items-center gap-x-1'>
            <img src={logo} alt="" />
              Cobalt
          </div>
          
          <div className="flex gap-6">
            <p className=' text-gray-300 flex items-center'>Blog</p>
            <JoinButton/>
          </div>
        </nav>

        <section className="flex flex-col justify-center items-center gap-y-12 mb-24 mt-28 lg:mt-52 px-6 sm:px-10  xl:px-56">
          <h1 className="flex justify-center font-bold text-5xl lg:text-7xl text-center ">Unleash The Power Of <br /> intuitive finance</h1>
          <p className=" text-center justify-center text-slate-300 text-xl lg:text-2xl max-w-5xl font-normal">Say goodbye to the outdated financial tools. Every small business owner,
          regardless of the background, can now manage their business like a pro. Simple. 
          Intuitive. <br /> And never boring.
           </p>
           <JoinButton/>
           <a href='#rolagem' id='learnButton' className='flex flex-col items-center gap-y-2 mt-6 animate__animated animate__bounce animate__infinite	animate__slow'>
             <p className="w-fit text-gray-600 ">Learn More</p>
             <img src={donwarrow} className='' alt="" />
           </a>
        </section>
      </header>
      <main className=' px-6 sm:px-10  xl:px-36 py-4'>
        
        <section >
          <img  src={dashUrl}  />
        </section>
        <section className='flex  gap-y-8 gap-x-8 mt-20 flex-wrap max-w-full justify-between'>
          <h1 id='rolagem'  className='flex justify-center font-bold text-5xl text-left max-w-[35rem] lg:text-5xl'>Who said finance has to be boring? </h1>
          <p className='text-left max-w-[40rem] font-normal text-xl  text-gray-400'>
          With Cobalt, managing your business finances is effortless, 
          empowering, and anything but boring. Our intuitive platform brings 
          clarity to your cash flow, simplifies your financial decision-making, and 
          puts the power of advanced financial management right at your 
          fingertips. <spam className="text-white">Say no to spreadsheets and tools designed in the 80s.</spam>
          </p>
        </section>
        <section className='mt-36 gap-y-14 flex flex-col'>
          <div className='flex flex-col gap-y-8'>
            <h1 className='flex justify-center font-bold text-5xl text-left max-w-[35rem] lg:text-5xl'>Everything you need.
            Nothing you don’t
            </h1>
            <p className='text-left max-w-[38rem] font-normal text-xl  text-gray-400'>
              finacial managemement and visibility in one place. Experience <span>a flexible toolkit </span> 
              that makes every task feel lieke a breeze
             </p>
          </div>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-wrap gap-8 justify-center'>
              <Card src={"img1"} title={"Insights at your fingertips"}>
                  All your data and finances in one place to
                  provide quick answers and make decisions
                  instantly.
              </Card>
              <Card src={"img2"} title={"Manage in real time"}>
              Have full control of your business finances on
              the go using our iOS/Android mobile apps.
              Because, you know, it is 2023.
              </Card>
              <Card src={"img3"} title={"Important business alerts"}>
              Choose the alerts you need and receive them
              via email, mobile or Slack. Review and take
              action in one click.
              </Card>
            </div>
            <div className='flex flex-wrap gap-8'>
             


              <div className='bg-zinc-950 rounded-xl border border-zinc-800 w-2/3 card1'>
                {/* <div className='img-bg'> </div> */}
                <img src={img4} className=''/>
                < div className='p-8 gap-4 flex flex-col '>
                   <h1 className='font-bold text-xl '>Connect all your apps</h1>
                   <p className='text-zinc-400 w-6/12 text-lg'>
                   Bring your data with our built-in integrations for 
                   accounting, revenue tools and banking.
                  </p>
                </div>
              </div>

              <div className='bg-zinc-950 rounded-xl border border-zinc-800 flex flex-col items-end w-5/12 card2'>
                <img src={img5} className='h-3/5'/>
                < div className='p-8 gap-4 flex flex-col'>
                   <h1 className='font-bold text-xl lg:text-2xl'>You’re in control</h1>
                   <p className='text-zinc-400 lg:text-lg'>
                   Lightning fast. Shortcuts for everything. Command+K on 
                   Mac, Ctrl+K on Windows. Dark mode.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        <section className=' mt-36 flex flex-col gap-14'>
          <div className=' flex flex-col gap-y-8'>
            <h1 className='flex  font-bold text-5xl text-center'>Meet Genius</h1>
            <p className='max-w-[31em] text-zinc-400 lg:text-lg'>Our AI-driven assistant is designed to decode complex financial 
            figures and <span>illuminate key trends</span> in your business.
            </p>
          </div>
          <article className='flex justify-center gap-8 flex-wrap'>
             <div className='smartCard bg-zinc-950 rounded-xl border border-zinc-800 flex flex-col items-start min-w-2xl'>
                <div className=''><img src={img6} className=''/></div>
                < div className='p-8 gap-4 flex flex-col'>
                   <h1 className='font-bold text-xl lg:text-2xl'>Smart forecasting</h1>
                   <p className='text-zinc-400 text-md max-w-[27rem]'>
                   Harness the power of Cobalt's predictive analytics to map 
                   out the financial future of your business.
                  </p>
                </div>
              </div>

              <div className='askCard bg-zinc-950 rounded-xl border border-zinc-800 flex flex-col items-end flex-1 gap-6 p-4'>

                <div className='flex flex-col justify-center items-center h-2/5 w-full'>
                  <div className='bg-cyan-500/[.30] p-2 rounded-2xl'>
                    <button className='bg-cyan-500 rounded-xl px-4 py-2 button font-semibold' >Hey! How can I help you?</button>
                  </div>
                </div>

                 <div className='w-full sm:px-8 '>
                   <label className='w-full flex items-center justify-between bg-zinc-900 px-4 py-2 rounded-xl border border-slate-700/40 '>
                      {/* <input type="text" className='w-[30vw] bg-zinc-900 text-md md:text-lg md:w-[24rem] pr-2' placeholder="✨ Who's our most profitable customer?" /> */}
                      <div className='flex items-center max-w-[50vw]  bg-zinc-900 text-md md:text-lg  pr-2 text-zinc-500 '>✨ Who's our most profitable customer?</div>
                      <div className='flex container'>
                        <button className='bg-black p-3 rounded-lg w-28 bordaRgb'>Ask Genius</button>
                        <div className='colorido'></div>
                      </div>
                   </label>
                 </div>

                < div className='p-8 gap-4 flex flex-col w-full '>
                   <h1 className='pt-4 font-bold text-xl lg:text-2xl'>Chat with Genius</h1>
                   <p className='text-zinc-400 text-md max-w-[23rem]'>
                   Just ask. With Genius by your side, navigating the 
                   financial maze becomes intuitive and effortless.
                  </p>
                </div>

              </div>
             
          </article>

        </section>
        

      </main>
      <footer>
        <section className='mt-32 flex flex-col  px-10  xl:px-56'>
              <article className=' flex flex-col items-center gap-14 pb-32 border-b border-slate-800/70'>
                  <h1 className='font-bold text-3xl lg:text-4xl text-center max-w-[40rem] secFinal pt-32'>See where financial automation can take your business.</h1>
                  <p className=' text-center justify-center text-slate-300 text-xl  max-w-5xl font-normal'>The first financial tool you'll love. And the last one you'll ever need.</p>
                  <JoinButton/>
              </article>
              <article className='flex flex-col gap-6 mt-14'>
                <div className='flex justify-between gap-4 flex-wrap'>
                      <div className='flex gap-4 max-w-7xl'>
                        <a href='#' className='w-44 md:w-[18.4rem] hover:underline hover:cursor-pointer'> © 2023 Cobalt Financial Technologies Inc.</a>
                        <a href='#'  className='hover:underline hover:cursor-pointer'>Privacy Policy</a>
                        <a href='#'  className='hover:underline hover:cursor-pointer'>Terms of Use</a>
                      </div>
                      <div className='flex gap-4'>
                        <X/>
                        <Linkedin/>
                        <Facebook/>
                      </div>
                </div>
                <div className='flex flex-col gap-4 max-w-3xl font-regular mb-24' >
                  <p className=' text-zinc-400'>
                    Cobalt is a trademark or registered trademark of Cobalt Financial Technologies Inc. Any other trademarks are the
                  property of their respective owners. Unless otherwise noted, use of third party logos does not imply endorsement of,
                  sponsorship of, or affiliation with Cobalt.
                  </p>
                  <p className=' text-zinc-400'>
                    Cobalt is a financial technology company, not a bank. Banking services are provided by Celtic Bank and Evolve Bank &
                  Trust®, Members FDIC.
                  </p>
                </div>
              </article>
          </section>
              <div className='bgFooter'></div>
      </footer>
    </body>
  )
}

export default App
