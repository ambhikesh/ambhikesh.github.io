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
          <div className='p-2 text-3xl'>Ambhikesh</div>
          <div className='p-2 text-slate-600'>A Computer Science Undergraduate</div>
        </div> 
        <div>
          <Image src={"/ambhi.png"} width={300} height={300}/>
        </div> 
      </div>
      <div className='p-2 mt-10'> 
        Hello, I'm Ambhikesh. I have a diverse set of interests within the field of computer science, including computer architecture, the mathematical aspects of machine learning, hardware design, and computer networking. While I'm not heavily invested in hardware design, I still enjoy reading about it occasionally. My approach to work is characterized by a straightforward attitude and a "never give up" mindset. I consider problem-solving, programming, and algorithmic thinking among my key strengths. In terms of technical skills, I'm proficient in C, C++, Python, and JavaScript. I have experience with frameworks such as Flask, Django, Next.js, and I use Tailwind for styling.
      </div>
      <div className='flex items-center justify-center'>
      <div className='p-2'>
      You can look at my <Link  className="text-blue-700 underline" href="https://old-ambhikesh.vercel.app">Old Website</Link> which was made using vanilla html, css and JavaScript.
      </div>
    </div>
    </>

  )
}
