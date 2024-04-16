document.addEventListener('DOMContentLoaded', function() {
  const result = document.getElementById('result');
  const buttons = document.querySelectorAll('.child');

  
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const value = this.textContent;

         
          if (result.value === '0' && value !== 'AC' && value !== '+/-' && value !== '%' && value !== '=') {
              result.value = '';
          }

          
          switch (value) {
              case 'AC':
                 
                  result.value = '0';
                  break;
              case '+/-':
                  
                  if (result.value.startsWith('-')) {
                      result.value = result.value.substring(1);
                  } else {
                      result.value = '-' + result.value;
                  }
                  break;
              case '%':
                  
                  result.value = eval(result.value) / 100;
                  break;
              case '=':
                 
                  try {
                      result.value = eval(result.value);
                  } catch (error) {
                     
                      result.value = 'Error';
                  }
                  break;
              default:
                  
                  result.value += value;
                  break;
          }
      });
  });
});
