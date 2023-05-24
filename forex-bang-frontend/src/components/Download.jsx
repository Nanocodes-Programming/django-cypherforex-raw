import apple from '../assets/img/appstore.png'
import android from '../assets/img/google play.png'
import Cypher from '../assets/img/Cypherphone.png'
import Cypher2 from '../assets/img/Cypherphone2.png'

const Download = () => {
  return (
    <div className='flex items-center min-h-[80vh]  text-white text-center flex-col md:flex-row p-[1rem]'>
        <aside className='h-[100%]'> <img src={Cypher} alt="" className='h-[100%]'/> </aside>
        <aside> 
            <h2 className='text-4xl mb-6'>Download Our New Mobile App Today</h2>
            <p>Never miss a trade again as you recieve HIGHLY accurate trading signals directly to your phone with the ForexAMG app. Traders are also able to enjoy more features and keep up to date to the latest using the app. Available for iPhone® and Android™</p>
            <div className='flex items-center gap-[2%] my-[2rem] flex-col md:flex-row'><img src={android} alt="" className='h-[60px] cursor-pointer mt-[0.5rem] ' /> <img src={apple} alt="" className='h-[60px] cursor-pointer mt-[0.5rem] block'/></div>
        </aside>
        <aside className='md:block hidden'><img src={Cypher2} alt="" /></aside>
    </div>
  )
}

export default Download