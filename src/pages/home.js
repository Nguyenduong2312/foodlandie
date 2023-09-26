import React from 'react'
import BannerItem from '../components/home/Banner/bannerItem'
import Categories from '../components/home/categories'
import Simplerecipes from '../components/home/simpleRecipes'
import LearnMore from '../components/home/learnMore'
import Checkout from '../components/home/checkout'
import RecipesList from '../components/home/recipesList'
import Inbox from '../components/home/inbox'
import Footer from '../components/common/footer'

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
            <Footer/>
        </div>
    )
}

export default Home
