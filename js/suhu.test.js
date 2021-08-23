const Suhu = require('./suhu')
const suhu = new Suhu()

test('Celcius to Celcius', () => {
    expect(() => suhu.operate('CelciustoCelcius', 80)).not.toThrow();
    expect(suhu.operate('CelciustoCelcius', 80)).toBe(80);
  });
test('Celcius to Fahrenheit', () => {
    expect(() => suhu.operate('CelciustoFahrenheit', 80)).not.toThrow();
    expect(suhu.operate('CelciustoFahrenheit', 80)).toBe(176);
  });
test('Celcius to Reamur', () => {
    expect(() => suhu.operate('CelciustoReamur', 80)).not.toThrow();
    expect(suhu.operate('CelciustoReamur', 80)).toBe(64);
  });
  test('Fahrenheit to Celcius', () => {
    expect(() => suhu.operate('FahrenheittoCelcius', 176)).not.toThrow();
    expect(suhu.operate('FahrenheittoCelcius', 176)).toBe(80);
  });
test('Fahrenheit to Fahrenheit', () => {
    expect(() => suhu.operate('FahrenheittoFahrenheit', 176)).not.toThrow();
    expect(suhu.operate('FahrenheittoFahrenheit', 176)).toBe(176);
  });
test('Fahrenheit to Celcius', () => {
    expect(() => suhu.operate('FahrenheittoReamur', 176)).not.toThrow();
    expect(suhu.operate('FahrenheittoReamur', 176)).toBe(64);
  });
  test('Reamur to Celcius', () => {
    expect(() => suhu.operate('ReamurtoCelcius', 64)).not.toThrow();
    expect(suhu.operate('ReamurtoCelcius', 64)).toBe(80);
  });
test('Reamur to Fahrenheit', () => {
    expect(() => suhu.operate('ReamurtoFahrenheit', 64)).not.toThrow();
    expect(suhu.operate('ReamurtoFahrenheit', 64)).toBe(176);
  });
test('Reamur to Celcius', () => {
    expect(() => suhu.operate('ReamurtoReamur', 64)).not.toThrow();
    expect(suhu.operate('ReamurtoReamur', 64)).toBe(64);
  });