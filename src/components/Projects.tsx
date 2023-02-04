import img_1 from '../assets/images/1.png';
import img_2 from '../assets/images/2.png';
import img_3 from '../assets/images/3.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation, FreeMode, Thumbs } from 'swiper';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { useState } from 'react';

const ItemContainer = ({
  children,
  link,
  onClickFunction,
}: {
  children: any;
  link: string;
  onClickFunction?: () => void;
}) => {
  return (
    <div
      onClick={
        onClickFunction
          ? onClickFunction
          : () => {
              window.location.href = link;
              return null;
            }
      }
      className="py-16 bg-white/30 shadow-lg rounded-lg my-4 mx-4 lg:mx-8 lg:my-8 w-full p-4 relative transition-up select-none"
    >
      {children}
    </div>
  );
};
const Projects = (props: any) => {
  const { modal, setModal } = props;

  const handleModal = (name: string) => {
    if (name === 'postspot') {
      setModal('postspot');
      window.scrollTo(0, 0);
    } else if (name === 'newtab') {
      setModal('newtab');
      window.scrollTo(0, 0);
    }
  };
  const width = useWindowWidth();
  const [projectOpen1, setProjectOpen1] = useState<boolean>(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div className="text-center h-screen overflow-hidden shadow-strong mx-auto justify-center items-center md:max-w-screen-2xl relative top-0 w-full bg-navyDark mt-6 font-mono text-md p-8">
      <Swiper
        slidesPerView={width > 1000 ? 3 : 1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper py-12 lg:mt-16 xl:mt-20"
      >
        <SwiperSlide>
          <ItemContainer
            onClickFunction={() => setProjectOpen1(true)}
            link="https://github.com/pgilewski/ST0R4GE"
          >
            <strong>ST0R4G3</strong>
            <br />
            Store images with AWS Rekognition
          </ItemContainer>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <ItemContainer link="https://github.com/pgilewski/baza">
            <strong>ROLLIT</strong>
            <br />
            Small app to roll entires within groups.
          </ItemContainer>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <ItemContainer
            link="#"
            //  onClick={() => handleModal('postspot')}
          >
            <strong>POST SPOT</strong>
            <br />
            Space to create music related posts for you and others
            <strong> [coming up]</strong>
          </ItemContainer>
          {/* {modal ? (
          <div className="absolute top-0 left-0 z-10 w-screen h-screen">
            {modal === 'postspot' ? (
              <img className="w-full my-auto" src={postspot} />
            ) : null}
            {modal === 'newtab' ? (
              <img className="mx-auto" src={new_tab} />
            ) : null}
        ) : null} */}
        </SwiperSlide>
        <SwiperSlide>
          <ItemContainer
            link="#"
            //    onClick={() => handleModal('newtab')}
          >
            <strong>BAZA</strong>
            <br />
            New tab alternative<strong> [coming up]</strong>
          </ItemContainer>
        </SwiperSlide>
      </Swiper>
      {projectOpen1 ? (
        <>
          {' '}
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Pagination]}
            className="mySwiper md:max-w-4xl"
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <img src={img_1} className="w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img_2} className="w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img_3} className="w-full" />
            </SwiperSlide>
          </Swiper>
          <div className="w-full flex justify-center">
            <input
              type="button"
              className="px-2 py-1 bg-white/50 text-md text-black rounded-md border border-white mt-2 cursor-pointer hover:bg-white/75 transition-all"
              value="Go to repo"
              onClick={() => {
                window.location.href =
                  'https://github.com/pgilewski/ST0R4GE';
                return;
              }}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Projects;
