import postspot from '../assets/images/postspot.png';
import new_tab from '../assets/images/new_tab.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper';
import { useWindowWidth } from '../hooks/useWindowWidth';

const ItemContainer = ({
  children,
  link,
}: {
  children: any;
  link: string;
}) => {
  return (
    <div
      onClick={() => {
        window.location.href = link;
        return null;
      }}
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
        className="mySwiper py-12 lg:mt-16 xl:mt-24"
      >
        <SwiperSlide>
          {' '}
          <ItemContainer link="#">
            Store images with AWS Rekognition
          </ItemContainer>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <ItemContainer link="#">
            Small app to roll entires within groups.
          </ItemContainer>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <ItemContainer
            link="#"
            //  onClick={() => handleModal('postspot')}
          >
            Space to create posts for you and others
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
            New tab alternative<strong> [coming up]</strong>
          </ItemContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ItemContainer link="">[coming up]</ItemContainer>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
