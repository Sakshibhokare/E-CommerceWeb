import React from "react"
import { Link, NavLink } from "react-router-dom";

const navigation=[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Products',
        path:'/products'
    },
    {
        name:'About',
        path:'/abut'
    },
    {
        name:'Contact',
        path:'/contact'
    }
]

const Header = () => {
    return (
        <header className="text-gray-600 body-font shadow-lg p-0 m-0">
            <div className="container mx-auto flex flex-wrap p-1.8 flex-col md:flex-row items-center items-baseline">
                <NavLink to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 w-40">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl   ">E-Shop</span>
                </NavLink>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                   {
                    navigation.map((navigation)=>{
                        return(
                            <Link to={navigation.path} className="mr-5 hover:text-gray-900 text-decoration-none">{navigation.name}</Link>
                        )
                    }
                    )
                   }
                    
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none text-white bg-indigo-500 hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Go To Cart
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )

}

export default Header;