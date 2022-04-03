import React from 'react';
import CollapseBarComponent from '../CollpaseBar/CollapseBar';
import Navbar from '../Navbar';

/**
 * main Layout - Adds the navbar o collapseBar to the route
 * @param {React.ReactNode} children - The children component
 * @param {boolean} needCollapse - To know if need navbar or collapse bar
 * @return {React.ReactElement}
 */
export default function MainLayout({children, needCollapse}) {
    return (<div>
        {needCollapse ? <CollapseBarComponent /> : <Navbar /> }
        {children}
        </div>);
}