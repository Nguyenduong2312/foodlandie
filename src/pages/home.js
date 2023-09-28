import React from 'react'
import BannerItem from '../components/home/Banner/bannerItem'
import Categories from '../components/home/categories'
import Checkout from '../components/home/checkout'
import LearnMore from '../components/home/learnMore'
import RecipesList from '../components/home/recipesList'
import Simplerecipes from '../components/home/simpleRecipes'
// import Inbox from '../components/home/inbox'
import Inbox from '../components/common/inbox'

const Home = () => {
    return (
        <div>
            <BannerItem/>
            <Categories/>
            <Simplerecipes/>
            <LearnMore/>
            <Checkout/>
            <RecipesList/>
            <Inbox/>
        </div>
    )
}

export default Home
