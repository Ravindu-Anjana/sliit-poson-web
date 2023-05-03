import CarouselCard from '../../components/CarouselCard/CarouselCard';
import { Link } from 'react-router-dom';
import { committee } from '../../data/committee';


const Committee = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-[4rem] pt-[140px] pb-[115px] bg-gradient-to-r from-[#f8dbfe] to-[#f0b1fe] dark:bg-gradient-to-r dark:from-[#080808] dark:to-[#161616]">
      <h1 className="text-5xl font-semibold dark:text-white text-center leading-[80px]">
        <a className="underline decoration-[#fdac20] underline-offset-[1.5rem]">
          Org
        </a>
        anising Committee
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
        {committee.map((member) => (
          <CarouselCard key={member.id} mentor={member} />
        ))}
      </div>
      <Link to="/team">
        <p
          style={{
            fontWeight: '50',
          }}
          className="px-20 py-6 text-sm text-[22px] text-white bg-[#8600a5] rounded-full hover:bg-[#8600a5] dark:bg-[#161616] dark:border-solid dark:border-[0.5px] dark:border-[#ffffff75]"
        >
          View Our Team
        </p>
      </Link>
    </div>
  );
};

export default Committee;
