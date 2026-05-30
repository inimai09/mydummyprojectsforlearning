
import 'boxicons/css/boxicons.min.css'
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main className="flex lg:mt-9 flex-col lg:flex-row items-center justify-between min-h-screen">
        <div className='max-w-xl ml-[5%] z-10 mt-[10%] md:mt-[20%] lg:mt-0'>
            <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
                    <i className="bx bx-gem"></i>
                    INTRODUCING 
                </div>
            </div>

            
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider my-6'>
                EMAIL FOR
                <br/>
                DEVELOPERS
            </h1>

            <p className='text-sm sm:text-base tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] mt-3'>
                Built with developers in mind, our email platform combines speed, reliability, and flexibility. 
                Whether you're integrating APIs, managing workflows, or scaling projects, it gives you the tools 
                to communicate seamlessly without sacrificing performance. Designed for modern teams, it's the 
                smarter way to handle email in code-driven environments.
            </p>

            <div className="flex gap-4 mt-8">
                <a className="border border-white py-3 px-4 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] text-white"
                    href="#"
                >
                    Documentation 
                </a>
                
                <a className="border border-white py-3 px-4 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-gray-400 bg-gray-300 text-black"
                    href="#"
                >
                    Get Started 
                </a>
            </div>
        </div>
        <Spline className = 'absolute lg;top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full' scene="https://prod.spline.design/seUiUho-YGJW3ebx/scene.splinecode" />
    </main>
  )
}

export default Hero