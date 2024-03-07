import React from 'react'
import CalculateCard from './CalculateCard'
import CalculateCard2 from './CalculateCard2'
function About() {
  return (
    <div className='p-4 px-6 bg-white rounded-md shadow-md flex flex-col gap-2 pb-10'>
        <div className=' text-xl font-bold'>About Bitcoin</div>
        <div className='flex flex-col gap-2 text-sm'>
            <div className='font-bold text-[16px]'>What is Bitcoin?</div>
            <div className=' font-medium'><p>Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is -7.70% from its 7-day all-time 
                high of $18,366.66, and 3.40% from its 7-day low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p></div>
            <div className='w-[100%] h-[2px] bg-slate-200'></div>
        </div>
        

        <div className='flex flex-col gap-4 text-sm'>
            <div className='font-bold text-[16px]'>Lorem ipsum dolor sit amet</div>
            <div className=' font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde numquam, similique, nostrum illo eveniet perspiciatis, ipsam doloribus enim aut quam quidem necessitatibus commodi nemo accusantium dolores repellendus rerum mollitia labore. Voluptatem harum fuga corrupti nulla dolore, excepturi labore fugiat magnam? Maxime eligendi officiis
             blanditiis similique recusandae iure, nesciunt, odio alias, molestiae adipisci quisquam in qui ducimus incidunt ad quis perferendis?</div>

            <div className=' font-medium mt-[2px]'>Lorem ipsum dolor sit amet doloribus obcaecati possimus nulla quidem impedit est dolores rem a? Nobis, dolor cumque consectetur adipisicing elit. Non,  molestiae adipisci quisquam in qui ducimus incidunt  cum tempora porro molestias sed ab quos ex corrupti veniam, reprehenderit iure 
            pariatur numquam fugiat fugit quaerat autem deleniti amet repellendus minima necessitatibus blanditiis consectetur placeat? Accusamus adipisicing elit. Non, cum tempora porro molestias sed ab quos ex corrupti veniam, reprehenderit
             aspernatur saepe velit. Doloremque.</div>

             <div className=' font-medium mt-[2px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nde numquam, similique, nostrum illo eveniet repudiandae porro nihil mollitia quos quasi dolorum incidunt animi ab, suscipit tempora sunt facere unde, 
                reprehenderit optio recusandae, doloribus obcaecati possimus nulla quidem impedit est dolores rem a? Nobis, dolor cumque.</div>
             <div className='w-[100%] h-[2px] bg-slate-200'></div>
        </div>
        <div className='flex flex-col gap-1 mt-2'>
            <div className=' text-xl font-bold'>Already Holding Bitcoin?</div>
            <div className=' flex flex-col md:flex md:flex-row justify-between pr-10'>
                <div className='md:w-[48%]'>
                    <CalculateCard />
                </div>
                <div className='md:w-[48%]'>
                    <CalculateCard2 />
                </div>
            </div>
            <div className='w-[100%] h-[2px] bg-slate-200'></div>
        </div>
        <div className='font-medium text-sm mt-2'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nde numquam, similique, nostrum illo eveniet repudiandae porro nihil mollitia quos quasi dolorum incidunt animi ab, suscipit tempora sunt facere unde, 
                reprehenderit optio recusandae, doloribus obcaecati possimus nulla quidem impedit est dolores rem a? Nobis, dolor cumque.</p>
        </div>

        

    </div>
  )
}

export default About