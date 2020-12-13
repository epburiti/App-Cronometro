/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavBar, Container, ContainerChronometer, CustomButton, TextCustom, TextCustomChronometer, ContainerButtons } from "./style-main";

import React, { useState } from 'react';

const App  = () => {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);
  const [refTime, setRefTime] = useState();


  function handleChronometer(){
    setClick(!click)

      const ref = setInterval(() => {
      setCount(count=> count + 1)
    }, 1000);

    setRefTime(ref);
  }
  function stop (){
    clearInterval(refTime);
  }
  function refresh() {
    clearInterval(refTime);
    setCount(0);
    setClick(false);
  }
  return (
    <Container>
      <NavBar>
       <TextCustom>Cronometro Simples</TextCustom>
      </NavBar>
      <ContainerChronometer>
    {!click &&    
      <CustomButton  onPress={handleChronometer}>
        <TextCustom>Iniciar Cronometro</TextCustom>
      </CustomButton>
    }
    {
      click && <TextCustomChronometer>{count}</TextCustomChronometer>
    }
        {click  &&    
          <ContainerButtons>
            <CustomButton  onPress={stop}>
              <TextCustom>Pausar</TextCustom>
            </CustomButton>
            <CustomButton  onPress={refresh}>
              <TextCustom>Refresh</TextCustom>
            </CustomButton>
          </ContainerButtons>
    }
      </ContainerChronometer>
    </Container>
  );
};

export default App;
