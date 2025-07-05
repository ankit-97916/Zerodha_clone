import React from "react";
import {render, screen,} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero  from '../Landing_page/home/Hero';

// test Suite 
describe('Hero Compnet' , ()=> {
    test("renders hero image", ()=> {
        render(<Hero/>);
        const heroImage =  screen.getByAltText('HeroIMg');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src','/ZerodhaImages/zerodhaImg/14.jpg');

    });

        test("renders sign up link", ()=> {
        render(<Hero/>);
        const anchortag =  screen.getByText(/signup for free/i);

        expect(anchortag).toBeInTheDocument();
        expect(anchortag).toHaveClass('btn', 'btn-primary');
        expect(anchortag).toHaveAttribute('href', 'signup');

    })

})
