import banImg from '../assets/image/bannerHome.png'

const Banner = () => {

  return (
    <>
      <section className='w-full'>
        <div className="">
          <img className='w-full object-cover lg:h-175' src={banImg} alt="banner" />
        </div>
      </section>
    </>
  )
}

export default Banner