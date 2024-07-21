import Link from 'next/link'
import NextJS from '/public/static/svgs/nextjs.svg'
import TypeScript from '/public/static/svgs/typescript.svg'
import JavaScript from '/public/static/svgs/javascript.svg'
import React from '/public/static/svgs/react.svg'
import Vue from '/public/static/svgs/vue.svg'
import Tailwindcss from '/public/static/svgs/tailwindcss.svg'
import NestJS from '/public/static/svgs/nestjs.svg'
import Java from '/public/static/svgs/java.svg'
import MongoDB from '/public/static/svgs/mongodb.svg'
import Mysql from '/public/static/svgs/mysql.svg'
import Devops from '/public/static/svgs/DevOps.svg'
import AWS from '/public/static/svgs/aws.svg'
const TechCard = () => {
  return (
    <div className="w-full divide-y divide-gray-200 dark:divide-gray-700 ">
      <div className="space-y-2 py-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Dev Skills
        </h1>
        <p className="!mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400">
          These are the technologies I've been working with so far, and I'm continuously adding more
          to my toolkit.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 py-6 xl:grid-cols-6 xl:gap-4">
        <Link href={'/tags'} className="flex w-[150px]  space-x-4 rounded-lg bg-stone-200 p-3">
          <JavaScript className="h-6 w-6" />
          <div className="my-auto text-black">Javascript</div>
        </Link>
        <Link href={'/tags'} className="flex w-[150px]  space-x-4 rounded-lg bg-stone-200 p-3">
          <TypeScript className="h-6 w-6" />
          <div className="my-auto text-black">TypeScript</div>
        </Link>
        <Link href={'/tags'} className="flex w-[150px]  space-x-4 rounded-lg bg-stone-200 p-3">
          <React className="h-6 w-6" />
          <div className="my-auto text-black">React</div>
        </Link>
        <Link href={'/tags'} className="flex w-[150px]  space-x-4 rounded-lg bg-stone-200 p-3">
          <Vue className="h-6 w-6" />
          <div className="my-auto text-black">Vue</div>
        </Link>
        <Link href={'/tags'} className="flex w-[150px]  space-x-4 rounded-lg bg-stone-200 p-3">
          <NextJS className="h-6 w-6" />
          <div className="my-auto text-black">NextJS</div>
        </Link>
        <Link href={'/tags'} className="flex w-[150px]  space-x-4 rounded-lg bg-stone-200 p-3">
          <Tailwindcss className="h-6 w-6" />
          <div className="my-auto text-black">Tailwindcss</div>
        </Link>

        {/* ------------ */}

        <Link href={'/tags'} className="flex w-[150px]  space-x-4 rounded-lg bg-stone-200 p-3">
          <NestJS className="h-6 w-6" />
          <div className="my-auto text-black">NestJS</div>
        </Link>
        <Link href={'/tags'} className="flex w-[150px]  space-x-4 rounded-lg bg-stone-200 p-3">
          <Java className="h-6 w-6" />
          <div className="my-auto text-black">Java</div>
        </Link>
        <Link href={'/tags'} className="flex w-[150px]  space-x-4 rounded-lg bg-stone-200 p-3">
          <MongoDB className="h-6 w-6" />
          <div className="my-auto text-black">MongoDB</div>
        </Link>
        <Link href={'/tags'} className="flex w-[150px]  space-x-4 rounded-lg bg-stone-200 p-3">
          <Mysql className="h-6 w-6" />
          <div className="my-auto text-black">MySQL</div>
        </Link>
        <Link href={'/tags'} className="flex w-[150px]  space-x-4 rounded-lg bg-stone-200 p-3">
          <Devops className="h-6 w-6" />
          <div className="my-auto text-black">Devops</div>
        </Link>
        <Link href={'/tags'} className="flex w-[150px]  space-x-4 rounded-lg bg-stone-200 p-3">
          <AWS className="h-6 w-6" />
          <div className="my-auto text-black">AWS</div>
        </Link>
      </div>
    </div>
  )
}

export default TechCard
