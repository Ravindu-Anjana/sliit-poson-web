import image from './../../assets/ourWork/ourWork.png';

const OurWork = () => {
  //change the details of the works to be displayed here
  const works = [
    {
      title: 'Tom & Jerry',
      thumb: 'https://poson-web.s3.ap-southeast-2.amazonaws.com/videoThumb.png',
      vsrc: 'https://poson-web.s3.ap-southeast-2.amazonaws.com/Tom+%26+Jerry+_+Is+Jerry+Taking+Care+of+Tom_+_+Classic+Cartoon+_+WB+Kids.mp4',
    },
    {
      title: 'Tom & Jerry',
      thumb: 'https://poson-web.s3.ap-southeast-2.amazonaws.com/videoThumb.png',
      vsrc: 'https://poson-web.s3.ap-southeast-2.amazonaws.com/Tom+%26+Jerry+_+Is+Jerry+Taking+Care+of+Tom_+_+Classic+Cartoon+_+WB+Kids.mp4',
    },
  ];
  return (
    <div className='z-0 flex flex-col items-center  bg-gradient-to-l from-fuchsia-200 to-fuchsia-100 dark:bg-gradient-to-l dark:from-slate-950 dark:to-slate-900'>
      <img src={image} alt='OurWorksBanner' className='mt-0  w-full' />

      <div className='flex flex-col items-center -mt-24 md:-mt-40 xl:-mt-80 mb-16 lg:mb-28 w-9/12  rounded-3xl bg-gradient-to-t from-fuchsia-200 to-white dark:bg-gradient-to-t dark:from-black dark:to-slate-950 '>
        <h1 className='flex mt-10 lg:mt-24 mb-10  text-sm lg:text-3xl font-bold  dark:text-white'>
          <div className='underline underline-offset-8 decoration-amber-300'>
            Our&nbsp;
          </div>
          Previous Works
        </h1>
        {works.map((work) => (
          <div className='flex flex-col items-center  mb-10 lg:mb-28 '>
            <p className='w-8/12 text-xs lg:text-xl dark:text-white'>
              &nbsp;{work.title}
            </p>
            <video
              class='w-8/12 rounded-xl mt-1 lg:mt-4'
              poster={work.thumb}
              controls
            >
              <source src={work.vsrc} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
