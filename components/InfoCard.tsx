import Avatar from './Avatar'
import BasicInfo from './BasicInfo'
import BlogLinks from './BlogLinks'

const InfoCard = () => {
  return (
    <div className="flex w-full flex-col justify-between md:my-4 md:pb-8 xl:flex-row">
      <div className="min-w-1/2">
        <Avatar />
      </div>

      <div className="min-w-1/2 ml-10  flex flex-col text-lg  text-gray-600 dark:text-gray-400">
        <BasicInfo />
        <BlogLinks />
      </div>
    </div>
  )
}

export default InfoCard
