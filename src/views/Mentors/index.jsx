import { mentors } from '../../data/mentors';
import CarouselCard from '../../components/CarouselCard/CarouselCard';

const Mentors = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-[7rem] pt-[140px] pb-[115px] bg-gradient-to-r from-[#f8dbfe] to-[#f0b1fe] dark:bg-gradient-to-r dark:from-[#080808] dark:to-[#161616]">
      <h1 className="text-5xl font-semibold dark:text-white">
        <a className="underline decoration-[#fdac20] underline-offset-[1rem]">
          Our
        </a>{' '}
        Mentors
      </h1>
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100vw',
          overflowX: 'scroll',
          gap: '2rem',
          padding: '2rem',
        }}
      >
        {mentors.map((mentor) => (
          <CarouselCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

export default Mentors;
