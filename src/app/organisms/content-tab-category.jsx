import React from 'react'
import Title from '../atoms/title'
import Text from '../atoms/text'
import StarFeedback from '../atoms/star-feedback'
import ButtonGeneral from '../atoms/Button-General'

function ContentTabCategory() {
  return (
    <div className='w-max rounded-lg max-[990px]:w-full'>
        <div className='w-full h-max'>
            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuS8AimFv-GUOXPAeo6uz-2YIl9btD5P2xzA&s`} className='w-[360px] h-52 rounded-t-lg max-[770px]:h-72 max-[990px]:w-full' alt="" />
        </div>
        <div className='p-3 grid gap-3 bg-bgslowblack rounded-b-lg'>
            <Title className={`text-base font-bold text-white`}>اشنایی با قرارداد های فریلنسری</Title>
            <div className='flex justify-between items-center'>
                <Text>لورم ایپسوم</Text>
                <StarFeedback/>
            </div>
            <div className='flex justify-between items-center'>
                <Text>5 فصل</Text>
                <Text>13 درس</Text>
            </div>
            <div className='grid grid-cols-2 items-center'>
                <Title className={`text-base font-bold text-white`}>2,000,000 تومان</Title>
                <ButtonGeneral>افزودن</ButtonGeneral>
            </div>
        </div>
    </div>
  )
}

export default ContentTabCategory
