import React from 'react';
import styled from 'styled-components';

import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing_06 = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>Tracing</span>App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            voluptatibus illo? Quasi voluptatem culpa, ipsa tempora, tempore
            fuga commodi, eligendi dolores delectus dolor ad fugit.
          </p>
          <a href='#' className='btn btn-hero'>
            Login/Register
          </a>
        </div>
        <div>
          <img src={main} alt='' className='img main-img' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-heght));
    display: grid;
    align-items: center;
  }

  h1 {
    font-weight: 700;
    span {
      color: var(--primary-600);
    }
  }
  .main-img {
    display: none; //手機端用的
  }

  @media (min-width: 560px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing_06;
