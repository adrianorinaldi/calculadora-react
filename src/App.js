import { Container, Content, Row } from './styles';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0'); 
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  }
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }
  const handleSumNumbers = () => {
    if(firstNumber === '0') {
      console.log(firstNumber + ' - ' + currentNumber);
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber.replace(',', '.')) + Number(currentNumber.replace(',', '.')); 
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }
  const handleMinusNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sum = Number(firstNumber.replace(',', '.')) - Number(currentNumber.replace(',', '.')); 
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }
  const handleMultiplicationNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const sum = Number(firstNumber.replace(',', '.')) * Number(currentNumber.replace(',', '.')); 
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }
  const handleDivisionNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const sum = Number(firstNumber.replace(',', '.')) / Number(currentNumber.replace(',', '.')); 
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }
  const handleRestoDivisionNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('%');
    } else {
      const sum = Number(firstNumber.replace(',', '.')) % Number(currentNumber.replace(',', '.')); 
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }
  const handleAdicionaVirgula = () => {
    const numeroComVirgula = currentNumber + ',';
    setCurrentNumber(String(numeroComVirgula));
  }
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+':
          handleSumNumbers(); 
          break;
        case '-':
          handleMinusNumbers(); 
          break;
        case '*':
          handleMultiplicationNumbers(); 
          break;
        case '/':
          handleDivisionNumbers(); 
          break;
        case '%':
          handleRestoDivisionNumbers(); 
          break;
        default:
          break;
      }
    }
  }

  const chamaTodos = (tipo) => {
    switch(tipo){
      case 'somar':
        handleSumNumbers();
        break;
      case 'subtrair':
        handleMinusNumbers();
        break;
      case 'multiplicar':
        handleMultiplicationNumbers();
        break;
      case 'dividir':
        handleDivisionNumbers();
        break;
      case 'restoDivisao':
        handleRestoDivisionNumbers();
        break;
      case 'resultado':
        handleEquals();
        break;
      case 'limparTudo':
        handleOnClear();
        break;
      case 'adicionaVirgula':
        handleAdicionaVirgula();
        break;
      default:
        break;
    }
  }
  const handlePositivoNegativo = () => {
    let retorno = '';
    console.log('1='+currentNumber.includes('-'));
    if(!currentNumber.includes('-')) {
      retorno = '-' + currentNumber;
    } else {
      retorno = currentNumber.replace('-', '');  
    }
    setCurrentNumber(String(retorno)); 
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="%" onClick={() => chamaTodos('restoDivisao')}/>
          <Button label="X" disabled/>
          <Button label="C" onClick={() => chamaTodos('limparTudo')}/>
          <Button label="/" onClick={() => chamaTodos('dividir')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="*" onClick={() => chamaTodos('multiplicar')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={() => chamaTodos('subtrair')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={() => chamaTodos('somar')}/>
        </Row>
        <Row>
          <Button label="+/-" onClick={handlePositivoNegativo}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="," onClick={handleAdicionaVirgula}/>
          <Button label="=" onClick={() => chamaTodos('resultado')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
