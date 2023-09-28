import React from 'react'
import RecommendRecipes from '../components/common/recommendRecipes'
import Direction from '../components/recipeDetail/Direction'
import Ingredient from '../components/recipeDetail/Ingredient'
import MainContent from '../components/recipeDetail/MainContent'
import OtherRecipes from '../components/recipeDetail/OtherRecipes'

const RecipesDetail = () => {
    return (
        <div className=''>
            <MainContent/>
            <div className='max-w-[1440px] mx-auto flex gap-[46px] justify-between mt-[80px]'>
                <Ingredient/>
                <OtherRecipes/>
            </div>
            <Direction/>
            <RecommendRecipes/>
        </div>
    )
}

export default RecipesDetail