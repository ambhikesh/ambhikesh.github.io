import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ambhikesh | Home</title>
      </Head>
      <div className='flex justify-between items-center'>
        <div>
          <div className='ml-10 p-2 text-5xl text-black font-mono font-semibold'>Ambhikesh</div>
          <div className='ml-10 p-2 text-black text-lg font-mono'>A Computer Science Undergraduate</div>
        </div> 
        <div className='ambhi-image'>
          <Image src={"/ambhi.png"} width={300} height={300} className='opacity-95'/>
        </div> 
      </div>
      <div className='p-1 m-10 text-black w-100 text-center text-2xl font-light '> 
        Hello, I'm Ambhikesh. I have a diverse set of interests within the field of computer science, including computer architecture, the mathematical aspects of machine learning, hardware design, and computer networking. While I'm not heavily invested in hardware design, I still enjoy reading about it occasionally. My approach to work is characterized by a straightforward attitude and a "never give up" mindset. I consider problem-solving, programming, and algorithmic thinking among my key strengths. In terms of technical skills, I'm proficient in C, C++, Python, and JavaScript. I have experience with frameworks such as Flask, Django, Next.js, and I use Tailwind for styling.
      </div>
    </>

  )
}
