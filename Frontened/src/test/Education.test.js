import React from "react";
import {render, screen,} from '@testing-library/react';
import '@testing-library/jest-dom';
import Education from "../Landing_page/home/Education";


describe("education component", ()=>{
    test("render education image", ()=> {
    render(<Education/>);
    const EduImg =  screen.getByAltText('varsity');
    expect(EduImg).toBeInTheDocument();
    expect(EduImg).toHaveAttribute('src', '/ZerodhaImages/zerodhaImg/24.jpg');
    });

    test("render h2 heading", ()=> {
    render(<Education/>);
    const heading =  screen.getByRole('heading', { name: /free and open/i });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveClass('mt-5');



    });


    test("render anchor", ()=> {
    render(<Education/>);
    const anchor =  screen.getByRole('link', {name: /Varsity/i})
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', 'lll');
})

    test("render anchor1", ()=> {
    render(<Education/>);
    const anchor1 =  screen.getByRole('link', {name: /TradingQ&A/i})
    expect(anchor1).toBeInTheDocument();
    expect(anchor1).toHaveAttribute('href', 'mmm');
})

})