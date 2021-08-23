class Suhu {
    CelciustoCelcius(a){
        return a*1;
    }
    CelciustoFahrenheit(a){
        return (a * 1.8) + 32;
    }
    CelciustoReamur(a){
        return (4/5)*a;
    }
    FahrenheittoCelcius(a){
        return (a - 32) / 1.8;
    }
    FahrenheittoFahrenheit(a){
        return a*1;
    }
    FahrenheittoReamur(a){
        return (4/9) * (a-32);
    }
    ReamurtoCelcius(a){
        return (5 / 4) * a;
    }
    ReamurtoFahrenheit(a){
        return (9 / 4) * a + 32;
    }
    ReamurtoReamur(a){
        return a*1;
    }

    operate(operator, a){
        switch(operator){
            case 'CelciustoCelcius':
                return this.CelciustoCelcius(a);
            case 'CelciustoFahrenheit':
                return this.CelciustoFahrenheit(a);
            case 'CelciustoReamur':
                return this.CelciustoReamur(a);
            case 'FahrenheittoCelcius':
                return this.FahrenheittoCelcius(a);
            case 'FahrenheittoFahrenheit':
                return this.FahrenheittoFahrenheit(a);
            case 'FahrenheittoReamur':
                return this.FahrenheittoReamur(a);
            case 'ReamurtoCelcius':
                return this.ReamurtoCelcius(a);
            case 'ReamurtoFahrenheit':
                return this.ReamurtoFahrenheit(a);
            case 'ReamurtoReamur':
                return this.ReamurtoReamur(a);
            default:
                throw new Error('Invalid operator');
        }
    }

    getResult(operator, a) {
        const obj = this;
        return new Promise(function(resolve, reject) {
          let result;
          try {
            result = obj.operate(operator, a);
          } catch(err) {
            result = err;
          } finally {
            setTimeout(function() {
              if (result instanceof Error) {
                reject(result);
                return;
              }
    
              if (isNaN(result)) {
                reject(new Error('Invalid operation'));
                return;
              }
    
              resolve(result);
            }, (Math.random() * 2500));
          }
        });
      }
}

module.exports = Suhu;
