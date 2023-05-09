import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";


const StyledLink = styled(NavLink)`
color:black
&.active{
    color:red
}
`;

export const SharedLayout = () => { 
    return (
        <>
            <nav>
                <ul>
                    <li>
                      <StyledLink to='/' end>Home</StyledLink>  
                    </li>
                    <li>
                     <StyledLink to='movies'> Movies </StyledLink>
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