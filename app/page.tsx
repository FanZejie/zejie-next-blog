import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import InfoCard from '@/components/InfoCard'
import TechCard from '@/components/TechCard'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <>
      <InfoCard />
      <TechCard />
      <Main posts={posts} />
    </>
  )
}
