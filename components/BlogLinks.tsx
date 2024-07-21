import Link from 'next/link'
import Note from '/public/static/svgs/note.svg'
import About from '/public/static/svgs/about.svg'
import Career from '/public/static/svgs/career.svg'
import Build from '/public/static/svgs/build.svg'
const BlogLinks = () => {
  return (
    <div className="mt-4 flex justify-between ">
      <div className="flex flex-col space-y-1.5">
        <Link href="/blog" className="flex flex-row hover:underline">
          <Note className={' h-10 w-10 p-1'} />
          <span
            data-umami-event="home-link-blog"
            className="ml-1 h-10 items-center  justify-center leading-10"
          >
            My writings
          </span>
        </Link>
        <Link href="/projects" className="flex flex-row hover:underline">
          <Build className={' h-10 w-10 p-1'} />
          <span
            data-umami-event="home-link-projects"
            className="ml-1 h-10 items-center  justify-center leading-10"
          >
            What have I built?
          </span>
        </Link>
      </div>

      <div className="mr-8 flex flex-col space-y-1.5">
        <Link href="/about" className="flex flex-row hover:underline">
          <About className={' h-10 w-10 p-1'} />
          <span
            data-umami-event="home-link-about"
            className="ml-1 h-10 items-center  justify-center leading-10"
          >
            More about me and myself
          </span>
        </Link>
        <Link href="/resume" className="flex flex-row hover:underline">
          <Career className={' h-10 w-10 p-1'} />
          <span
            data-umami-event="home-link-resume"
            className="ml-1 h-10 items-center  justify-center leading-10"
          >
            My career
          </span>
        </Link>
      </div>
    </div>
  )
}

export default BlogLinks
