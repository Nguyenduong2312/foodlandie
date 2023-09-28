import React from 'react'
import img1 from '../../asset/images/recipes/re1.png'
import img2 from '../../asset/images/recipes/re2.png'
import img3 from '../../asset/images/recipes/re3.png'
import img4 from '../../asset/images/recipes/re4.png'
import RecipeTag from './recipeTag'

const RecommendRecipes = () => {
    const data = [
        {img: img1, title: 'Mixed Tropical Fruit Salad with Superfood Boosts ', time:'30 Minutes', type:'Healthy'},
        {img: img2, title: 'Big and Juicy Wagyu Beef Cheeseburger', time:'30 Minutes', type:'Western'}, 
        {img: img3, title: 'Healthy Japanese Fried Rice with Asparagus', time:'30 Minutes', type:'Healthy'},
        {img: img4, title: 'Cauliflower Walnut Vegetarian Taco Meat', time:'30 Minutes', type:'Eastern'},
    ]

    return (
        <div className='mt-[80px]'>
            <p className='text-[36px] font-[600] tracking-[-1.44px] text-black text-center'>You may like these recipe too</p>
            <div className='flex max-w-[1440px] mx-auto justify-between mt-[50px]'>
                {data.map((item, index) => (
                    <RecipeTag img = {item.img} name = {item.name} type = {item.type} title = {item.title} /> 
                ))}
            </div>
        </div>
    )
}

export default RecommendRecipes
