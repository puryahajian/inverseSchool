import React from 'react'
import Header from '../template/Header'
import SliderMain from '../organisms/Slider'
import Title from '../atoms/title'
import TabCategoryHome from '../template/tab-category-home'
import Footer from '../template/footer'

function Home() {
  return (
    <div>
      <Header/>
      <SliderMain/>
      <FeatureHome/>
      <div className="!mt-20 max-w-[1160px] m-auto px-3">
        <Title className={`max-[940px]:hidden`}>دسته بندی دوره ها</Title>
        <TabCategoryHome/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
