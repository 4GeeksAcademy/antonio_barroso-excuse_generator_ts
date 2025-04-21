import './style.css'

const _getWhoList = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const _getActionList = ['ate', 'peed', 'crushed', 'broke'];
const _getWhatList = ['my homework', 'my phone', 'the car'];
const _getWhenList = [
  'before the class!',
  'when I was sleeping!',
  'while I was exercising!',
  'during my lunch!',
  'while I was praying!'
];

const _getRandomIndex =  (arr: string[]): string => arr[Math.floor(Math.random() * arr.length)];


const generateExcuse = (): string => {
  const who = _getRandomIndex(_getWhoList);
  const action = _getRandomIndex(_getActionList);
  const what = _getRandomIndex(_getWhatList);
  const when = _getRandomIndex(_getWhenList);

  return `${who} ${action} ${what} ${when}`;
}

// 🎯 Renderizado
window.addEventListener('DOMContentLoaded', () => {
  const excuseElement = document.querySelector<HTMLParagraphElement>('#excuse');
  const btn = document.querySelector<HTMLButtonElement>('#generateBtn');

  if (excuseElement && btn) {
    btn.addEventListener('click', () => {
      excuseElement.textContent = generateExcuse();
    });
  }
});