import { Suspense } from "react";
import {   Link, Outlet } from "react-router-dom";
// import styled from 'styled-components';

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

export const SharedLayout = () => { 
    return (
        <>
            <nav>
                <ul>
                    <li>
                      <Link to='/'>Home</Link>  
                    </li>
                    <li>
                     <Link to='movies'> Movies </Link>
                    </li>
                 </ul>
            </nav>
        <Suspense fallback={<div>Loadind....</div> }>
       <main>
            <Outlet/>
        </main> 
        </Suspense >
    </>
    )
}