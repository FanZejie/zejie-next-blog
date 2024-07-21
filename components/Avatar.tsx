import Image from 'next/image'
const Avatar = () => {
  return (
    <div className="z-10 scale-100 transition-all duration-200 ease-out hover:z-50 hover:scale-[1.02]">
      <div className="mt-4 overflow-hidden rounded-md transition-all duration-200 ease-out">
        <Image src={'/static/images/avatar.jpg'} alt="avatar" width={430} height={500} />
      </div>
    </div>
  )
}

export default Avatar
